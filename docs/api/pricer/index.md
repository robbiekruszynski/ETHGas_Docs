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
  <span className="api-method-post">**POST**</span> `/api/v1/user/delegate/pricer` - Delegate pricer
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X POST /api/v1/user/delegate/pricer?enable=true
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
    'Authorization': 'Bearer <your-auth-token>',
    'Content-Type': 'application/json'
}

response = requests.post(url, headers=headers, params=payload)

print(response.text)
```

</TabItem>
</Tabs>

</details>

### Get pricer information

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/api/v1/user/pricer` - Get pricer information
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X GET /api/v1/user/pricer
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/pricer"

headers = {
    'Authorization': 'Bearer <your-auth-token>'
}

response = requests.get(url, headers=headers)

print(response.text)
```

</TabItem>
</Tabs>

</details>

### Get inclusion preconf orders

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/api/v1/pricer/inclusion-preconf/orders` - Get inclusion preconf orders
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X GET /api/v1/pricer/inclusion-preconf/orders
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

</details>

### Get account tokens

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/api/v1/pricer/account-tokens` - Get account tokens
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X GET /api/v1/pricer/account-tokens
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/pricer/account-tokens"

headers = {
    'Authorization': 'Bearer <your-auth-token>'
}

response = requests.get(url, headers=headers)

print(response.text)
```

</TabItem>
</Tabs>

</details>

### Get active markets

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/api/v1/pricer/markets/active` - Get active markets
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X GET /api/v1/pricer/markets/active
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/pricer/markets/active"

headers = {
    'Authorization': 'Bearer <your-auth-token>'
}

response = requests.get(url, headers=headers)

print(response.text)
```

</TabItem>
</Tabs>

</details>

### Get inclusion preconf positions

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/api/v1/pricer/inclusion-preconf/positions` - Get inclusion preconf positions
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X GET /api/v1/pricer/inclusion-preconf/positions
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

</details>

### Get wholeblock orders

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/api/v1/pricer/wholeblock/orders` - Get wholeblock orders
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X GET /api/v1/pricer/wholeblock/orders
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

</details>

### Get wholeblock positions

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/api/v1/pricer/wholeblock/positions` - Get wholeblock positions
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X GET /api/v1/pricer/wholeblock/positions
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

</details>

</div>