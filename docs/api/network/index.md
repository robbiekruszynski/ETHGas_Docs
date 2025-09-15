---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Network

## API Endpoints

### Get network information

<div className="api-endpoints-grid">

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/api/v1/p/network` - Get network information
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X GET /api/v1/p/network?chainId=1
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/p/network"

params = {
    'chainId': 1
}

headers = {}

response = requests.get(url, headers=headers, params=params)

print(response.text)
```

</TabItem>
</Tabs>

**Request Parameters:**

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| chainId | YES | integer | Chain ID |

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |
| network | object | Block chain details |
| └ networkId | integer | Unique ID for the blockchain network assigned by ETHGas, assigned by ETHGas:Currently only Ethereum (Chain ID 1) is supported. |
| └ chainId | integer | Unique ID for the chain:Currently only Ethereum (Chain ID 1) is supported. |
| └ name | string | Name of the blockchain network (e.g. Ethereum) |
| └ enable | boolean | Whether this chain is enabled within ETHGas:This should always return true. |
| └ visible | boolean | Whether this chain is visible on ETHGas:This should always return true. |

</details>

</div>
