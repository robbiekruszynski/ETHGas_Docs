---
sidebar_position: 1
---

# Standard Validator Setup

Set up a standard Ethereum validator with ETHGas integration.

## Repositories

- Commit Boost Module: https://github.com/ethgas-developer/ethgas-preconf-commit-boost-module
- Builder Scripts: https://github.com/ethgas-developer/ethgas-builder-scripts
- Preconf Builder: https://github.com/ethgas-developer/preconf-builder

## Quick Start

```bash
git clone https://github.com/ethgas-developer/ethgas-preconf-commit-boost-module
cd ethgas-preconf-commit-boost-module
cp .env.example .env
# Edit .env with your keys and settings
docker-compose up -d
```

## Lighthouse Tip

```toml
# commitboost.toml
[timeouts]
# Lighthouse specific guidance
timeout_get_header_ms = 1950
```

## Client Docs

- Lighthouse: https://lighthouse-book.sigmaprime.io/
- Prysm: https://docs.prylabs.network/
- Teku: https://docs.teku.consensys.net/

## Notes

<!-- - For API endpoints and copy/paste examples: See API endpoints below -->
- For contract addresses and relays: https://docs.ethgas.com/technical-integration 