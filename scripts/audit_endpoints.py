#!/usr/bin/env python3
import os
import re
import sys
from typing import List, Dict, Tuple


EP_HEADING_RE = re.compile(r"^#{2,}\s+(GET|POST|PUT|PATCH|DELETE)\s+(/\S+)")
SUMMARY_LINE_RE = re.compile(r"<summary[^>]*>.*?`(/v\d+/\S+|/api/\S+)`", re.IGNORECASE)


def read_file(path: str) -> str:
    try:
        with open(path, 'r', encoding='utf-8') as f:
            return f.read()
    except Exception:
        return ''


def split_blocks(text: str) -> List[Tuple[str, str]]:
    lines = text.splitlines()
    blocks = []
    i = 0
    n = len(lines)
    while i < n:
        line = lines[i]
        m = EP_HEADING_RE.match(line)
        m2 = SUMMARY_LINE_RE.search(line)
        if m:
            method, path = m.group(1), m.group(2)
            # Capture until next heading of same or higher level (## or #)
            j = i + 1
            while j < n and not re.match(r"^#{1,2}\s+", lines[j]):
                j += 1
            content = "\n".join(lines[i:j])
            blocks.append((f"{method} {path}", content))
            i = j
            continue
        elif m2:
            path = m2.group(1)
            # Capture until </details> or next summary
            j = i + 1
            while j < n and '</details>' not in lines[j] and '<summary' not in lines[j]:
                j += 1
            content = "\n".join(lines[i:j])
            blocks.append((path, content))
            i = j
            continue
        i += 1
    return blocks


def analyze_block(key: str, content: str) -> Dict[str, bool]:
    has_python = ('```python' in content) or ('TabItem value="python"' in content)
    has_http = ('```bash' in content) or ('```http' in content) or ('TabItem value="http"' in content)
    has_request = ('Request Parameters' in content) or re.search(r"^\s*\|\s*Parameter\s*\|", content, re.MULTILINE)
    has_response = ('Response Example' in content) or ('Example Response' in content) or re.search(r"```json", content)
    return {
        'has_python': has_python,
        'has_http': has_http,
        'has_request': has_request,
        'has_response': has_response,
    }


def main():
    root = sys.argv[1] if len(sys.argv) > 1 else 'docs'
    report = []
    total = 0
    for dirpath, _dirnames, filenames in os.walk(root):
        for fn in filenames:
            if not (fn.endswith('.md') or fn.endswith('.mdx')):
                continue
            fp = os.path.join(dirpath, fn)
            text = read_file(fp)
            blocks = split_blocks(text)
            for key, content in blocks:
                total += 1
                info = analyze_block(key, content)
                if not (info['has_python'] and info['has_http'] and info['has_request'] and info['has_response']):
                    report.append((fp, key, info))

    missing_python = [r for r in report if not r[2]['has_python']]
    missing_http = [r for r in report if not r[2]['has_http']]
    missing_request = [r for r in report if not r[2]['has_request']]
    missing_response = [r for r in report if not r[2]['has_response']]

    print(f"TOTAL_ENDPOINT_BLOCKS {total}")
    print(f"MISSING_PYTHON {len(missing_python)}")
    print(f"MISSING_HTTP {len(missing_http)}")
    print(f"MISSING_REQUEST {len(missing_request)}")
    print(f"MISSING_RESPONSE {len(missing_response)}")

    def show(sample, label, limit=20):
        if not sample:
            print(f"\n{label}: NONE")
            return
        print(f"\n{label} (showing up to {limit})")
        for fp, key, info in sample[:limit]:
            print(f"- {fp}: {key}")

    show(missing_python, 'ENDPOINTS MISSING PYTHON')
    show(missing_http, 'ENDPOINTS MISSING HTTP')
    show(missing_request, 'ENDPOINTS MISSING REQUEST PARAMS')
    show(missing_response, 'ENDPOINTS MISSING RESPONSE EXAMPLE')


if __name__ == '__main__':
    main()

