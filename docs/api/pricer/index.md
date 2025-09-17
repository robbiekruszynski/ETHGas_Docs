---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Pricer

## API Endpoints

### Delegate pricer

<div className="api-endpoints-grid">

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/user/delegate/pricer` - Delegate pricer
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X POST /v1/user/delegate/pricer?enable=true
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/delegate/pricer"

payload = {
    'enable': True
}

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer {{access_token}}'
}

response = requests.post(url, headers=headers, params=payload)

print(response.text)
```

</TabItem>
</Tabs>

Request

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| enable | YES | boolean | Enable or disable pricer delegation |

Response Body

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | Whether the delegation was successful |
| message | string | Response message |

</details>

### Get pricer information

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/user/pricer` - Get pricer information
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X GET /v1/user/pricer
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/pricer"

headers = {
    'Authorization': 'Bearer {{access_token}}'
}

response = requests.get(url, headers=headers)

print(response.text)
```

</TabItem>
</Tabs>

Response Body

| Name | Type | Description |
| --- | --- | --- |
| pricerId | string | Pricer ID |
| enabled | boolean | Whether pricer is enabled |
| accountId | long | Account ID associated with pricer |
| status | integer | Pricer status |

</details>

### Get inclusion preconf orders

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/pricer/inclusion-preconf/orders` - Get inclusion preconf orders
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X GET /v1/pricer/inclusion-preconf/orders
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/pricer/inclusion-preconf/orders"

headers = {}

response = requests.get(url, headers=headers)

print(response.text)
```

</TabItem>
</Tabs>

Response Body

| Name | Type | Description |
| --- | --- | --- |
| orders | array | Array of inclusion preconf orders |
| └ orderId | long | Order ID |
| └ marketId | long | Market ID |
| └ side | boolean | Order side (true = buy, false = sell) |
| └ quantity | string | Order quantity |
| └ price | string | Order price |
| └ status | integer | Order status |

</details>

### Get account tokens

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/pricer/account-tokens` - Get account tokens
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X GET /v1/pricer/account-tokens
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/pricer/account-tokens"

headers = {
    'Authorization': 'Bearer {{access_token}}'
}

response = requests.get(url, headers=headers)

print(response.text)
```

</TabItem>
</Tabs>

Response Body

| Name | Type | Description |
| --- | --- | --- |
| tokens | array | Array of account tokens |
| └ tokenId | integer | Token ID |
| └ code | string | Token code (e.g., "ETH") |
| └ quantity | string | Token quantity |
| └ availableQuantity | string | Available quantity for trading |

</details>

### Get active markets

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/pricer/markets/active` - Get active markets
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X GET /v1/pricer/markets/active
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/pricer/markets/active"

headers = {
    'Authorization': 'Bearer {{access_token}}'
}

response = requests.get(url, headers=headers)

print(response.text)
```

</TabItem>
</Tabs>

Response Body

| Name | Type | Description |
| --- | --- | --- |
| markets | array | Array of active markets |
| └ marketId | long | Market ID |
| └ slot | integer | Slot number |
| └ instrumentId | string | Market instrument ID |
| └ status | integer | Market status |
| └ price | string | Current market price |

</details>

### Get inclusion preconf positions

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/pricer/inclusion-preconf/positions` - Get inclusion preconf positions
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X GET /v1/pricer/inclusion-preconf/positions
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/pricer/inclusion-preconf/positions"

headers = {}

response = requests.get(url, headers=headers)

print(response.text)
```

</TabItem>
</Tabs>

Response Body

| Name | Type | Description |
| --- | --- | --- |
| positions | array | Array of inclusion preconf positions |
| └ marketId | long | Market ID |
| └ side | boolean | Position side (true = long, false = short) |
| └ quantity | string | Position quantity |
| └ averagePrice | string | Average fill price |
| └ unrealizedPnl | string | Unrealized profit/loss |

</details>

### Get wholeblock orders

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/pricer/wholeblock/orders` - Get wholeblock orders
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X GET /v1/pricer/wholeblock/orders
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/pricer/wholeblock/orders"

headers = {}

response = requests.get(url, headers=headers)

print(response.text)
```

</TabItem>
</Tabs>

Response Body

| Name | Type | Description |
| --- | --- | --- |
| orders | array | Array of wholeblock orders |
| └ orderId | long | Order ID |
| └ marketId | long | Market ID |
| └ side | boolean | Order side (true = buy, false = sell) |
| └ quantity | string | Order quantity |
| └ price | string | Order price |
| └ status | integer | Order status |

</details>

### Get wholeblock positions

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/pricer/wholeblock/positions` - Get wholeblock positions
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X GET /v1/pricer/wholeblock/positions
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/pricer/wholeblock/positions"

headers = {}

response = requests.get(url, headers=headers)

print(response.text)
```

</TabItem>
</Tabs>

Response Body

| Name | Type | Description |
| --- | --- | --- |
| positions | array | Array of wholeblock positions |
| └ marketId | long | Market ID |
| └ side | boolean | Position side (true = long, false = short) |
| └ quantity | string | Position quantity |
| └ averagePrice | string | Average fill price |
| └ unrealizedPnl | string | Unrealized profit/loss |

</details>

</div>
