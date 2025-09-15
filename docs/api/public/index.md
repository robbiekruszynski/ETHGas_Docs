---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Public Information

## API Endpoints

### Get network information

<div className="api-endpoints-grid">

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/p/network` - Get network information
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X GET /v1/p/network?chainId=1
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

### Get available tokens

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/p/tokens` - Get available tokens
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X GET /v1/p/tokens
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/p/tokens"

headers = {}

response = requests.get(url, headers=headers)

print(response.text)
```

</TabItem>
</Tabs>

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |
| tokens | object[] | List of token objects |
| └ tokenId | integer | ETHGas Token ID - see [Token IDs](/docs/reference/lookup-tables#token-ids) |
| └ code | string | Token code - see [Token IDs](/docs/reference/lookup-tables#token-ids) |
| └ name | string | Token name - see [Token IDs](/docs/reference/lookup-tables#token-ids) |
| └ tokenAddress | string | Token chain address |
| └ decimals | integer | Number of decimal precision for this token |
| └ withdrawFee | string | Withdrawal fee (in number of tokens) |
| └ price | string | Latest token price |

</details>

### Get user fees

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/p/user/fees` - Get user fees
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X GET /v1/p/user/fees
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/p/user/fees"

headers = {}

response = requests.get(url, headers=headers)

print(response.text)
```

</TabItem>
</Tabs>

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |
| buyFeeRate | BigDecimal | Percentage fees charged for buy transaction |
| primarySellFeeRate | BigDecimal | Percentage fees charged for first time sell transaction |
| secondarySellFeeRate | BigDecimal | Percentage fees charged for subsequent sell transaction |

</details>

</div>
