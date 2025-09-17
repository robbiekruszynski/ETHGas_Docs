---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Authentication

ETHGas API uses Bearer token authentication.

## Overview

Authentication involves:

<div className="row" style={{marginTop: '1rem', alignItems: 'center'}}>
  <div className="col col--2">
    <div className="feature-card text--center" style={{padding: '1rem', borderRadius: '8px', height: '100%', border: '2px solid var(--ifm-color-primary)'}}>
      <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--ifm-color-primary)', marginBottom: '0.5rem'}}>1</div>
      <h4 style={{marginTop: 0, color: 'var(--ifm-color-primary)', fontSize: '1rem'}}>Login</h4>
      <p style={{marginBottom: 0, fontSize: '0.8rem'}}>Obtain tokens</p>
    </div>
  </div>
  <div className="col col--1" style={{textAlign: 'center', padding: '0'}}>
    <div style={{fontSize: '1.5rem', color: 'var(--ifm-color-primary)', marginTop: '1.5rem'}}>→</div>
  </div>
  <div className="col col--2">
    <div className="feature-card text--center" style={{padding: '1rem', borderRadius: '8px', height: '100%', border: '2px solid var(--ifm-color-primary)'}}>
      <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--ifm-color-primary)', marginBottom: '0.5rem'}}>2</div>
      <h4 style={{marginTop: 0, color: 'var(--ifm-color-primary)', fontSize: '1rem'}}>Verify</h4>
      <p style={{marginBottom: 0, fontSize: '0.8rem'}}>Check validity</p>
    </div>
  </div>
  <div className="col col--1" style={{textAlign: 'center', padding: '0'}}>
    <div style={{fontSize: '1.5rem', color: 'var(--ifm-color-primary)', marginTop: '1.5rem'}}>→</div>
  </div>
  <div className="col col--2">
    <div className="feature-card text--center" style={{padding: '1rem', borderRadius: '8px', height: '100%', border: '2px solid var(--ifm-color-primary)'}}>
      <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--ifm-color-primary)', marginBottom: '0.5rem'}}>3</div>
      <h4 style={{marginTop: 0, color: 'var(--ifm-color-primary)', fontSize: '1rem'}}>Refresh</h4>
      <p style={{marginBottom: 0, fontSize: '0.8rem'}}>Rotate tokens</p>
    </div>
  </div>
  <div className="col col--1" style={{textAlign: 'center', padding: '0'}}>
    <div style={{fontSize: '1.5rem', color: 'var(--ifm-color-primary)', marginTop: '1.5rem'}}>→</div>
  </div>
  <div className="col col--2">
    <div className="feature-card text--center" style={{padding: '1rem', borderRadius: '8px', height: '100%', border: '2px solid var(--ifm-color-primary)'}}>
      <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--ifm-color-primary)', marginBottom: '0.5rem'}}>4</div>
      <h4 style={{marginTop: 0, color: 'var(--ifm-color-primary)', fontSize: '1rem'}}>Logout</h4>
      <p style={{marginBottom: 0, fontSize: '0.8rem'}}>Invalidate session</p>
    </div>
  </div>
</div>

## Flow

```mermaid
sequenceDiagram
    participant Client
    participant API
    Client->>API: POST /v1/user/login
    API->>Client: access/refresh tokens
    Client->>API: POST /v1/user/login/verify
    API->>Client: validity
    Note over Client,API: token expiry
    Client->>API: POST /v1/user/login/refresh
    API->>Client: new tokens
    Client->>API: POST /v1/user/logout
    API->>Client: confirmation
```

## API Endpoints

### Login with user address

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/user/login` - Login with user address and optional display name
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X POST /v1/user/login?addr=0x8F02425B5f3c522b7EF8EA124162645F0397c478&name=username
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/login"

payload = {
    'addr': '0x8F02425B5f3c522b7EF8EA124162645F0397c478',
    'name': 'username'
}

headers = {
  'Content-Type': 'application/json'
}

response = requests.post(url, headers=headers, params=payload)
print(response.text)
```

</TabItem>
</Tabs>

**Request Parameters:**

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `addr` | YES | string | User's EOA account (account) address |
| `name` | NO | string | Display name |

**Response Example:**

```json
{
    "success": true,
    "data": {
        "status": "verify",
        "eip712Message": "{\"types\":{\"EIP712Domain\":[{\"name\":\"name\",\"type\":\"string\"},{\"name\":\"version\",\"type\":\"string\"},{\"name\":\"chainId\",\"type\":\"uint256\"},{\"name\":\"verifyingContract\",\"type\":\"address\"}],\"data\":[{\"name\":\"hash\",\"type\":\"string\"},{\"name\":\"message\",\"type\":\"string\"},{\"name\":\"domain\",\"type\":\"string\"}]},\"primaryType\":\"data\",\"message\":{\"hash\":\"52a90c73\",\"message\":\"Please sign this message to verify account ownership\",\"domain\":\"ethgas.com\"},\"domain\":{\"name\":\"ETHGas Login\",\"version\":\"1\",\"chainId\":32382,\"verifyingContract\":\"0x0000000000000000000000000000000000000000\"}}",
        "nonceHash": "52a90c73"
    }
}
```

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `status` | string | Login status |
| `eip712Message` | object | EIP712 message for signing |
| `nonceHash` | string | Unique nonce to identify this login request |

</details>

### Verify login with signed EIP712 message

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/user/login/verify` - Verify login with signed EIP712 message
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X POST /v1/user/login/verify?addr=0x8F02425B5f3c522b7EF8EA124162645F0397c478&nonceHash=0x1234567890abcdef...&signature=0xabcdef123456...
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/login/verify"

payload = {
    'addr': '0x8F02425B5f3c522b7EF8EA124162645F0397c478',
    'nonceHash': '0x1234567890abcdef...',
    'signature': '0xabcdef123456...'
}

headers = {
  'Content-Type': 'application/json'
}

response = requests.post(url, headers=headers, params=payload)
print(response.text)
```

</TabItem>
</Tabs>

**Request Parameters:**

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `addr` | YES | string | User's EOA account address |
| `nonceHash` | YES | string | Nonce hash from login response |
| `signature` | YES | string | Signed EIP712 message |

**Response Example:**

```json
{
    "success": true,
    "data": {
        "accessToken": "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9...",
        "refreshToken": "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9...",
        "expiresIn": 3600
    }
}
```

</details>

### Refresh access token

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/user/login/refresh` - Refresh access token using refresh token
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X POST /v1/user/login/refresh?refreshToken=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6MzEsImFkZHJlc3MiOiIweDVjODEyYzlhNjdlNjkwMGViMjBmM2YzMWQwZWNjZTUyM2Q2YTVjMDMiLCJyb2xlcyI6WyJST0xFX1VTRVIiXX0sImFjY2Vzc190eXBlIjoicmVmcmVzaF90b2tlbiIsImlhdCI6MTY5NzQyNDM0MCwiZXhwIjoxNjk4MDI5MTQwfQ.Y5dtx_VXGDZ4EDt4e6qtaVd811XumXjtDtVMiQeibNCai5zvV1PJJ3R8WCTSZb6NbbxAtFsTglYRD10aigDECA
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/login/refresh"

payload = {
    'refreshToken': 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6MzEsImFkZHJlc3MiOiIweDVjODEyYzlhNjdlNjkwMGViMjBmM2YzMWQwZWNjZTUyM2Q2YTVjMDMiLCJyb2xlcyI6WyJST0xFX1VTRVIiXX0sImFjY2Vzc190eXBlIjoicmVmcmVzaF90b2tlbiIsImlhdCI6MTY5NzQyNDM0MCwiZXhwIjoxNjk4MDI5MTQwfQ.Y5dtx_VXGDZ4EDt4e6qtaVd811XumXjtDtVMiQeibNCai5zvV1PJJ3R8WCTSZb6NbbxAtFsTglYRD10aigDECA'
}

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6MzEsImFkZHJlc3MiOiIweDVjODEyYzlhNjdlNjkwMGViMjBmM2YzMWQwZWNjZTUyM2Q2YTVjMDMiLCJyb2xlcyI6WyJST0xFX1VTRVIiXX0sImFjY2Vzc190eXBlIjoiYWNjZXNzX3Rva2VuIiwiaWF0IjoxNjk3NDQ1MjQyLCJleHAiOjE2OTc0NDg4NDJ9.iPUK1f8QWZLnKPt-fdo-dlrakxSPyo041J5xnIKVLtsOsBIR8gu2hEv8a7S18CtRfViRchT4xhSQfSJj-SxleQ'
}

response = requests.post(url, headers=headers, params=payload)
print(response.text)
```

</TabItem>
</Tabs>

**Request Parameters:**

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `refreshToken` | YES | string | Valid refresh token |

**Response Example:**

```json
{
    "success": true,
    "data": {
        "accessToken": "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9...",
        "refreshToken": "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9...",
        "expiresIn": 3600
    }
}
```

</details>

### Logout and invalidate session

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/user/logout` - Logout and invalidate session
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X POST /v1/user/logout
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/logout"

headers = {
    'Authorization': 'Bearer <your-access-token>',
    'Content-Type': 'application/json'
}

response = requests.post(url, headers=headers)
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
    "message": "Logged out successfully"
}
```

</details>

## Best Practices

- [x] **Store tokens securely** - Keep access tokens in secure storage and never expose them in client-side code
- [x] **Refresh proactively** - Refresh tokens before they expire to maintain continuous access
- [x] **Handle errors gracefully** - Implement proper error handling for authentication failures
- [x] **Logout when done** - Always logout to invalidate sessions and clear tokens 
