---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Obol Validator API

The Obol Validator endpoints help you manage Obol (DVT) operators and assign validators to them. All endpoints here are **private** `/v1` APIs—you must include a valid JWT access token in the `Authorization: Bearer {{access_token}}` header.

## Operator Lifecycle

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/user/obol/operator/register` – Register an Obol operator
</summary>

**Code Example:**

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" \
  -H "Content-Type": "application/json" \
  -X POST /v1/user/obol/operator/register \
  -d '{
    "operatorId": 2001,
    "name": "MyObolOperator",
    "publicKey": "0xaabbccddeeff...",
    "endpoint": "https://operator.example.com",
    "signature": "0xabcdef123456..."
  }'
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/obol/operator/register"

payload = {
    "operatorId": 2001,
    "name": "MyObolOperator",
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
| operatorId | Yes | integer | Unique identifier for the Obol operator |
| name | Yes | string | Operator name |
| publicKey | Yes | string | Operator BLS public key |
| endpoint | Yes | string | Operator API endpoint |
| signature | Yes | string | Signature proving control of the operator |

**Response Example**

```json
{
    "success": true,
    "data": {
        "operatorId": 2001,
        "status": "registered"
    }
}
```

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/user/obol/operator/deregister` – Deregister an Obol operator
</summary>

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" \
  -H "Content-Type": "application/json" \
  -X POST /v1/user/obol/operator/deregister \
  -d '{
    "operatorId": 2001
  }'
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/obol/operator/deregister"

payload = {
    "operatorId": 2001
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
| operatorId | Yes | integer | Operator identifier to remove |

**Response Example**

```json
{
    "success": true,
    "data": {
        "operatorId": 2001,
        "status": "deregistered"
    }
}
```

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/user/obol/operator/verify` – Verify operator ownership
</summary>

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" \
  -H "Content-Type": "application/json" \
  -X POST /v1/user/obol/operator/verify \
  -d '{
    "operatorId": 2001,
    "signature": "0xabcdef123456..."
  }'
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/obol/operator/verify"

payload = {
    "operatorId": 2001,
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
        "operatorId": 2001,
        "status": "verified"
    }
}
```

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/user/obol/operator/refresh` – Refresh operator metadata
</summary>

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" \
  -H "Content-Type": "application/json" \
  -X POST /v1/user/obol/operator/refresh \
  -d '{
    "operatorId": 2001,
    "endpoint": "https://updated.example.com"
  }'
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/obol/operator/refresh"

payload = {
    "operatorId": 2001,
    "endpoint": "https://updated.example.com"
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
| endpoint | No | string | Updated API endpoint |

**Response Example**

```json
{
    "success": true,
    "data": {
        "operatorId": 2001,
        "status": "refreshed"
    }
}
```

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/user/obol/operators` – List Obol operators
</summary>

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X GET /v1/user/obol/operators
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/obol/operators"

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
                "operatorId": 2001,
                "name": "MyObolOperator",
                "publicKey": "0xaabbccddeeff...",
                "endpoint": "https://operator.example.com",
                "status": "active"
            }
        ]
    }
}
```

</details>

## Validator Management

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/user/obol/operator/validator/register` – Register a validator with Obol operators
</summary>

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" \
  -H "Content-Type": "application/json" \
  -X POST /v1/user/obol/operator/validator/register \
  -d '{
    "validatorPublicKey": "0xvalpubkey...",
    "operatorIds": [2001, 2002, 2003, 2004],
    "shares": ["0xshare1", "0xshare2", "0xshare3", "0xshare4"],
    "signature": "0xabcdef123456..."
  }'
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/obol/operator/validator/register"

payload = {
    "validatorPublicKey": "0xvalpubkey...",
    "operatorIds": [2001, 2002, 2003, 2004],
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
| operatorIds | Yes | array | Four Obol operator IDs |
| shares | Yes | array | Encrypted validator shares |
| signature | Yes | string | Validator signature |

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
  <span className="api-method-post">**POST**</span> `/v1/user/obol/operator/validator/deregister` – Deregister a validator from Obol operators
</summary>

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" \
  -H "Content-Type": "application/json" \
  -X POST /v1/user/obol/operator/validator/deregister \
  -d '{
    "validatorPublicKey": "0xvalpubkey...",
    "operatorIds": [2001, 2002, 2003, 2004]
  }'
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/obol/operator/validator/deregister"

payload = {
    "validatorPublicKey": "0xvalpubkey...",
    "operatorIds": [2001, 2002, 2003, 2004]
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
| operatorIds | Yes | array | Operators to remove |

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
  <span className="api-method-get">**GET**</span> `/v1/user/obol/operator/validators` – List validators assigned to Obol operators
</summary>

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X GET /v1/user/obol/operator/validators
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/obol/operator/validators"

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
                "operatorIds": [2001, 2002, 2003, 2004],
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
  <span className="api-method-post">**POST**</span> `/v1/user/obol/operator/validator/update/ofac` – Update OFAC restriction for an Obol validator
</summary>

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" \
  -H "Content-Type": "application/json" \
  -X POST /v1/user/obol/operator/validator/update/ofac \
  -d '{
    "validatorPublicKey": "0xvalpubkey...",
    "isOfacRestricted": false,
    "reason": "Compliance review completed"
  }'
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/obol/operator/validator/update/ofac"

payload = {
    "validatorPublicKey": "0xvalpubkey...",
    "isOfacRestricted": false,
    "reason": "Compliance review completed"
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
| isOfacRestricted | Yes | boolean | `true` to mark as restricted; `false` to clear |
| reason | No | string | Optional explanation |

**Response Example**

```json
{
    "success": true,
    "data": {
        "validatorPublicKey": "0xvalpubkey...",
        "isOfacRestricted": false,
        "updatedAt": 1730193765339
    }
}
```

</details>

Refer to the [Error Codes](/docs/reference/error-codes) and [Lookup Tables](/docs/reference/lookup-tables) for additional status codes returned by these endpoints.
