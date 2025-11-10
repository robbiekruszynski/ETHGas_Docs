---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SSV Validator API

The SSV Validator endpoints let you manage distributed-validator operators and link their validator duties to ETHGas. All endpoints in this section are **private** and live under the `/v1` namespace, so they require a valid JWT access token in the `Authorization` header.

## Operator Management

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/user/ssv/operator/register` – Register an SSV operator
</summary>

**Code Example:**

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" \
  -H "Content-Type: application/json" \
  -X POST /v1/user/ssv/operator/register \
  -d '{
    "operatorId": 1001,
    "name": "MySSVOperator",
    "publicKey": "0xaabbccddeeff...",
    "endpoint": "https://operator.example.com",
    "signature": "0xabcdef123456..."
  }'
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/ssv/operator/register"

payload = {
    "operatorId": 1001,
    "name": "MySSVOperator",
    "publicKey": "0xaabbccddeeff...",
    "endpoint": "https://operator.example.com",
    "signature": "0xabcdef123456..."
}

headers = {
    "Authorization": "Bearer <your-access-token>",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json=payload)
print(response.text)
```

</TabItem>
</Tabs>

**Request Body**

| Field | Required | Type | Description |
|-------|----------|------|-------------|
| operatorId | Yes | integer | Unique identifier you assign to the SSV operator |
| name | Yes | string | Human-readable operator name |
| publicKey | Yes | string | Operator BLS public key |
| endpoint | Yes | string | Operator service endpoint URL |
| signature | Yes | string | Signature proving control of the operator key |

**Response Example**

```json
{
    "success": true,
    "data": {
        "operatorId": 1001,
        "status": "registered"
    }
}
```

**Response Body**

| Field | Type | Description |
|-------|------|-------------|
| operatorId | integer | Registered operator identifier |
| status | string | Registration result (`registered`, `pending`, etc.) |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/user/ssv/operator/deregister` – Deregister an SSV operator
</summary>

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" \
  -H "Content-Type: application/json" \
  -X POST /v1/user/ssv/operator/deregister \
  -d '{
    "operatorId": 1001
  }'
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/ssv/operator/deregister"

payload = {
    "operatorId": 1001
}

headers = {
    "Authorization": "Bearer <your-access-token>",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json=payload)
print(response.text)
```

</TabItem>
</Tabs>

**Request Body**

| Field | Required | Type | Description |
|-------|----------|------|-------------|
| operatorId | Yes | integer | Operator identifier to deregister |

**Response Example**

```json
{
    "success": true,
    "data": {
        "operatorId": 1001,
        "status": "deregistered"
    }
}
```

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/user/ssv/operator/verify` – Verify operator ownership
</summary>

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" \
  -H "Content-Type": application/json \
  -X POST /v1/user/ssv/operator/verify \
  -d '{
    "operatorId": 1001,
    "signature": "0xabcdef123456..."
  }'
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/ssv/operator/verify"

payload = {
    "operatorId": 1001,
    "signature": "0xabcdef123456..."
}

headers = {
    "Authorization": "Bearer <your-access-token>",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json=payload)
print(response.text)
```

</TabItem>
</Tabs>

**Request Body**

| Field | Required | Type | Description |
|-------|----------|------|-------------|
| operatorId | Yes | integer | Operator identifier |
| signature | Yes | string | Proof-of-ownership signature |

**Response Example**

```json
{
    "success": true,
    "data": {
        "operatorId": 1001,
        "status": "verified"
    }
}
```

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/user/ssv/operators` – List registered SSV operators
</summary>

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X GET /v1/user/ssv/operators
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/ssv/operators"

headers = {
    "Authorization": "Bearer <your-access-token>"
}

response = requests.get(url, headers=headers)
print(response.text)
```

</TabItem>
</Tabs>

**Response Example**

```json
{
    "success": true,
    "data": {
        "operators": [
            {
                "operatorId": 1001,
                "name": "MySSVOperator",
                "endpoint": "https://operator.example.com",
                "publicKey": "0xaabbccddeeff...",
                "status": "active"
            }
        ]
    }
}
```

</details>

## Validator Assignments

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/user/ssv/operator/validator/register` – Register a validator with SSV operators
</summary>

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" \
  -H "Content-Type": "application/json" \
  -X POST /v1/user/ssv/operator/validator/register \
  -d '{
    "validatorPublicKey": "0xvalpubkey...",
    "operatorIds": [1001, 1002, 1003, 1004],
    "shares": ["0xshare1", "0xshare2", "0xshare3", "0xshare4"],
    "signature": "0xabcdef123456..."
  }'
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/ssv/operator/validator/register"

payload = {
    "validatorPublicKey": "0xvalpubkey...",
    "operatorIds": [1001, 1002, 1003, 1004],
    "shares": ["0xshare1", "0xshare2", "0xshare3", "0xshare4"],
    "signature": "0xabcdef123456..."
}

headers = {
    "Authorization": "Bearer <your-access-token>",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json=payload)
print(response.text)
```

</TabItem>
</Tabs>

**Request Body**

| Field | Required | Type | Description |
|-------|----------|------|-------------|
| validatorPublicKey | Yes | string | Validator BLS public key |
| operatorIds | Yes | array | Four SSV operator IDs assigned to this validator |
| shares | Yes | array | Encrypted validator shares for each operator |
| signature | Yes | string | Signature from the validator key |

**Response Example**

```json
{
    "success": true,
    "data": {
        "validatorPublicKey": "0xvalpubkey...",
        "status": "registered"
    }
}
```

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/user/ssv/operator/validator/deregister` – Deregister a validator from SSV operators
</summary>

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" \
  -H "Content-Type": "application/json" \
  -X POST /v1/user/ssv/operator/validator/deregister \
  -d '{
    "validatorPublicKey": "0xvalpubkey...",
    "operatorIds": [1001, 1002, 1003, 1004]
  }'
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/ssv/operator/validator/deregister"

payload = {
    "validatorPublicKey": "0xvalpubkey...",
    "operatorIds": [1001, 1002, 1003, 1004]
}

headers = {
    "Authorization": "Bearer <your-access-token>",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json=payload)
print(response.text)
```

</TabItem>
</Tabs>

**Request Body**

| Field | Required | Type | Description |
|-------|----------|------|-------------|
| validatorPublicKey | Yes | string | Validator BLS public key |
| operatorIds | Yes | array | Operator IDs to remove |

**Response Example**

```json
{
    "success": true,
    "data": {
        "validatorPublicKey": "0xvalpubkey...",
        "status": "deregistered"
    }
}
```

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/user/ssv/operator/validators` – List validators managed by SSV operators
</summary>

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X GET /v1/user/ssv/operator/validators
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/ssv/operator/validators"

headers = {
    "Authorization": "Bearer <your-access-token>"
}

response = requests.get(url, headers=headers)
print(response.text)
```

</TabItem>
</Tabs>

**Response Example**

```json
{
    "success": true,
    "data": {
        "validators": [
            {
                "validatorPublicKey": "0xvalpubkey...",
                "operatorIds": [1001, 1002, 1003, 1004],
                "status": "active",
                "lastUpdated": 1730193765339
            }
        ]
    }
}
```

</details>

## Compliance & OFAC Updates

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/user/ssv/operator/validator/update/ofac` – Update OFAC status for an SSV validator
</summary>

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" \
  -H "Content-Type": "application/json" \
  -X POST /v1/user/ssv/operator/validator/update/ofac \
  -d '{
    "validatorPublicKey": "0xvalpubkey...",
    "isOfacRestricted": true,
    "reason": "Validator opted into OFAC-filtered operations"
  }'
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/ssv/operator/validator/update/ofac"

payload = {
    "validatorPublicKey": "0xvalpubkey...",
    "isOfacRestricted": true,
    "reason": "Validator opted into OFAC-filtered operations"
}

headers = {
    "Authorization": "Bearer <your-access-token>",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json=payload)
print(response.text)
```

</TabItem>
</Tabs>

**Request Body**

| Field | Required | Type | Description |
|-------|----------|------|-------------|
| validatorPublicKey | Yes | string | Validator BLS public key |
| isOfacRestricted | Yes | boolean | `true` to mark as OFAC-restricted; `false` to clear |
| reason | No | string | Optional note explaining the update |

**Response Example**

```json
{
    "success": true,
    "data": {
        "validatorPublicKey": "0xvalpubkey...",
        "isOfacRestricted": true,
        "updatedAt": 1730193765339
    }
}
```

</details>

All responses use the standard ETHGas envelope (`success`, `data`). Consult the [Error Codes](/docs/reference/error-codes) and [Lookup Tables](/docs/reference/lookup-tables) references for additional result codes.
