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
  <span className="api-method-get">**GET**</span> `/v1/user/validators` - Get user validators
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X GET /v1/user/validators
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

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/p/validators` - Get public validators list
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X GET /v1/p/validators
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/p/validators"

headers = {
  'Content-Type': 'application/json'
}

response = requests.get(url, headers=headers)
print(response.text)
```

</TabItem>
</Tabs>

**Request Parameters:**

No parameters required.

**Response Example:**

```json
{
    "success": true,
    "data": {
        "validators": [
            {
                "validatorId": 12345,
                "name": "MyValidator",
                "address": "0x1234567890abcdef...",
                "status": "active"
            }
        ]
    }
}
```

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `validators` | array | List of public validators |
| └ `validatorId` | number | Unique validator identifier |
| └ `name` | string | Validator name |
| └ `address` | string | Validator address |
| └ `status` | string | Validator status |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/validator/register` - Register validator
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X POST /v1/validator/register \
  -d '{"validatorAddress": "0x1234567890abcdef...", "name": "MyValidator"}'
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/validator/register"

payload = {
    "validatorAddress": "0x1234567890abcdef...",
    "name": "MyValidator"
}

headers = {
    "Authorization": "Bearer {{access_token}}",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json=payload)
print(response.text)
```

</TabItem>
</Tabs>

**Request Parameters:**

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `validatorAddress` | YES | string | Validator's wallet address |
| `name` | YES | string | Validator display name |

**Response Example:**

```json
{
    "success": true,
    "data": {
        "validatorId": 12345,
        "status": "registered"
    }
}
```

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `validatorId` | number | Unique validator identifier |
| `status` | string | Registration status |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/validator/verify` - Verify validator
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X POST /v1/validator/verify \
  -d '{"validatorId": 12345, "signature": "0xabcdef123456..."}'
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/validator/verify"

payload = {
    "validatorId": 12345,
    "signature": "0xabcdef123456..."
}

headers = {
    "Authorization": "Bearer {{access_token}}",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json=payload)
print(response.text)
```

</TabItem>
</Tabs>

**Request Parameters:**

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `validatorId` | YES | number | Validator identifier |
| `signature` | YES | string | Signed verification payload |

**Response Example:**

```json
{
    "success": true,
    "data": {
        "validatorId": 12345,
        "status": "verified"
    }
}
```

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `validatorId` | number | Validator identifier |
| `status` | string | Verification status |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/validator/settings` - Update validator settings
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X POST /v1/validator/settings \
  -d '{"validatorId": 12345, "settings": {"fee": "0.01"}}'
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/validator/settings"

payload = {
    "validatorId": 12345,
    "settings": {
        "fee": "0.01"
    }
}

headers = {
    "Authorization": "Bearer {{access_token}}",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json=payload)
print(response.text)
```

</TabItem>
</Tabs>

**Request Parameters:**

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `validatorId` | YES | number | Validator identifier |
| `settings` | YES | object | Validator settings payload |

**Response Example:**

```json
{
    "success": true,
    "data": {
        "validatorId": 12345,
        "status": "updated"
    }
}
```

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `validatorId` | number | Validator identifier |
| `status` | string | Update status |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/validator/deregister` - Deregister validator
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X POST /v1/validator/deregister \
  -d '{"validatorId": 12345}'
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/validator/deregister"

payload = {
    "validatorId": 12345
}

headers = {
    "Authorization": "Bearer {{access_token}}",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json=payload)
print(response.text)
```

</TabItem>
</Tabs>

**Request Parameters:**

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `validatorId` | YES | number | Validator identifier |

**Response Example:**

```json
{
    "success": true,
    "data": {
        "validatorId": 12345,
        "status": "deregistered"
    }
}
```

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `validatorId` | number | Deregistered validator ID |
| `status` | string | Deregistration status |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/validator/fees` - Get validator fees
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X GET /v1/validator/fees
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/validator/fees"

headers = {
    "Authorization": "Bearer {{access_token}}",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.text)
```

</TabItem>
</Tabs>

**Request Parameters:**

No parameters required.

**Response Example:**

```json
{
    "success": true,
    "data": {
        "fees": [
            {
                "validatorId": 12345,
                "fee": "0.01",
                "timestamp": 1640995200000
            }
        ]
    }
}
```

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `fees` | array | List of validator fees |
| └ `validatorId` | number | Validator identifier |
| └ `fee` | string | Fee amount |
| └ `timestamp` | number | Fee timestamp in milliseconds |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/validator/onchain/payout` - Get validator onchain payout
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X GET /v1/validator/onchain/payout
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/validator/onchain/payout"

headers = {
    "Authorization": "Bearer {{access_token}}",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.text)
```

</TabItem>
</Tabs>

**Request Parameters:**

No parameters required.

**Response Example:**

```json
{
    "success": true,
    "data": {
        "payouts": [
            {
                "validatorId": 12345,
                "amount": "1000000000000000000",
                "timestamp": 1640995200000
            }
        ]
    }
}
```

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `payouts` | array | List of validator payouts |
| └ `validatorId` | number | Validator identifier |
| └ `amount` | string | Payout amount |
| └ `timestamp` | number | Payout timestamp in milliseconds |

</details>

</div>
