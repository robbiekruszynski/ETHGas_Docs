---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Validator

## API Endpoints

### Get user validators

<div className="api-endpoints-grid">

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/api/v1/user/validators` - Get user validators
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X GET /api/v1/user/validators
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/validators"

headers = {
  'Authorization': 'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6MzEsImFkZHJlc3MiOiIweDVjODEyYzlhNjdlNjkwMGViMjBmM2YzMWQwZWNjZTUyM2Q2YTVjMDMiLCJyb2xlcyI6WyJST0xFX1VTRVIiXX0sImFjY2Vzc190eXBlIjoiYWNjZXNzX3Rva2VuIiwiaWF0IjoxNjk3NDQ5MTM0LCJleHAiOjE2OTc0NTI3MzR9.reUyFbhlJ6ZXSUypWiWeikaPQdbcRB_ZgB2k4NxcKbJS1K9J1GZnfXl9GrYOmS67L19gC-wfKqSPN4-7T3Xk0w'
}

response = requests.get(url, headers=headers)

print(response.text)
```

</TabItem>
</Tabs>

</details>

</div>