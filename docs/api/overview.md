---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# REST API

The ETHGas REST API provides access to authentication, user management, funding, markets, trading, builder, pricer, validator, bundles, and more.

## Quick Navigation

<div className="quick-nav">

<div className="row" style={{ marginBottom: '1rem' }}>
  <div className="col col--3">
    <div className="feature-card text--center" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <h3>Base URLs</h3>
        <p>Choose environment and connection endpoints.</p>
      </div>
      <div style={{ marginTop: '1.5rem' }}>
        <a href="#base-urls" className="button button--outline button--sm">
          View Base URLs →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--3">
    <div className="feature-card text--center" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <h3>Authentication</h3>
        <p>Login, verify, refresh, logout.</p>
      </div>
      <div style={{ marginTop: '1.5rem' }}>
        <a href="#authentication" className="button button--outline button--sm">
          View Authentication →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--3">
    <div className="feature-card text--center" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <h3>Response Format</h3>
        <p>Standard response schema.</p>
      </div>
      <div style={{ marginTop: '1.5rem' }}>
        <a href="#response-format" className="button button--outline button--sm">
          View Response Format →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--3">
    <div className="feature-card text--center" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <h3>Error Handling</h3>
        <p>HTTP codes, messages, and remediation.</p>
      </div>
      <div style={{ marginTop: '1.5rem' }}>
        <a href="#error-handling" className="button button--outline button--sm">
          View Error Handling →
        </a>
      </div>
    </div>
  </div>
</div>

<div className="row" style={{ marginBottom: '1rem' }}>
  <div className="col col--3">
    <div className="feature-card text--center" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <h3>Rate Limiting</h3>
        <p>Limits and guidance for high-volume usage.</p>
      </div>
      <div style={{ marginTop: '1.5rem' }}>
        <a href="#rate-limiting" className="button button--outline button--sm">
          View Rate Limits →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--3">
    <div className="feature-card text--center" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <h3>Quick Start</h3>
        <p>See official examples.</p>
      </div>
      <div style={{ marginTop: '1.5rem' }}>
        <a href="#quick-start-examples" className="button button--outline button--sm">
          View Quick Start →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--3">
    <div className="feature-card text--center" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <h3>API Endpoints</h3>
        <p>Browse endpoints by category.</p>
      </div>
      <div style={{ marginTop: '1.5rem' }}>
        <a href="#api-endpoints" className="button button--outline button--sm">
          View API Endpoints →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--3">
    <div className="feature-card text--center" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <h3>Resources</h3>
        <p>Official docs and GitHub links.</p>
      </div>
      <div style={{ marginTop: '1.5rem' }}>
        <a href="#essential-resources" className="button button--outline button--sm">
          View Resources →
        </a>
      </div>
    </div>
  </div>

</div>

</div>

## Technical Specifications


### Integration Resources

- **API Documentation**: See Below
- **[Commit Boost Module](https://github.com/ethgas-developer/ethgas-preconf-commit-boost-module)** - Validator integration module
- **[Modified rbuilder (preconf-builder)](https://github.com/ethgas-developer/preconf-builder)** - Enhanced block builder
- **[Builder Scripts](https://github.com/ethgas-developer/ethgas-builder-scripts)** - Builder registration and management

## Base URLs

<Tabs>
<TabItem value="testnet" label="TestNet" default>

| Type | URL |
|------|-----|
| **REST API Base URL** | `https://hoodi.app.ethgas.com/api	` |
| **WebSocket URL** | `wss://hoodi.app.ethgas.com/ws	` |

</TabItem>
<TabItem value="mainnet" label="MainNet">

| Type | URL |
|------|-----|
| **REST API Base URL** | `https://mainnet.app.ethgas.com/api` |
| **WebSocket URL** | `wss://mainnet.app.ethgas.com/ws	` |

</TabItem>
</Tabs>



## Response Format

```json
{
  "code": 200,
  "message": "OK",
  "data": {}
}
```

## Error Handling

API errors return appropriate HTTP status codes and error messages. For detailed error codes, descriptions, and troubleshooting guidance, see the [Error Codes Reference](/docs/reference/error-codes).

## Rate Limiting

API requests are subject to rate limiting. Check response headers for rate limit information.

## Core Components

### Market Types

ETHGas supports multiple market types for different trading and building scenarios.



## API Endpoints

<div className="api-endpoints-grid">

## Authentication

<details className="api-category" id="authentication">
<summary className="api-category-header">
  <strong>Authentication</strong>
  <span className="api-category-desc">User login, verification, refresh, logout</span>
</summary>

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
    'addr': '0x5eF1B2c02f5E39C0fF667611C5d7EfFb0E7df305',
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

**Usage:**

Get the response from `/v1/user/login` and sign the `eip712Message` and send the signed message through `/v1/user/login/verify`

</details>

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
| `addr` | YES | string | User's EOA account (account) address |
| `nonceHash` | YES | string | Nonce Hash from login response |
| `signature` | YES | string | EIP712 signature |

**Response Example:**

```json
{
    "success": true,
    "data": {
        "user": {
            "userId": 78,
            "address": "0xe61f536f031f77c854b21652ab0f4fbe7cf3196f",
            "status": 1,
            "userType": 1,
            "userClass": 1,
            "accounts": [
                {
                    "accountId": 242,
                    "userId": 78,
                    "type": 1,
                    "name": "Current",
                    "status": 1,
                    "updateDate": 1698127521000
                },
                {
                    "accountId": 243,
                    "userId": 78,
                    "type": 2,
                    "name": "Preconf",
                    "status": 1,
                    "updateDate": 1698127521000
                }
            ]
        },
        "accessToken": {
            "data": {
                "header": {
                    "alg": "ES256",
                    "typ": "JWT"
                },
                "payload": {
                    "user": {
                        "userId": 78,
                        "address": "0xe61f536f031f77c854b21652ab0f4fbe7cf3196f",
                        "roles": [
                            "ROLE_USER"
                        ]
                    },
                    "access_type": "access_token",
                    "iat": 1698633225,
                    "exp": 1698636825
                }
            },
            "token": "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6NzgsImFkZHJlc3MiOiIweGU2MWY1MzZmMDMxZjc3Yzg1NGIyMTY1MmFiMGY0ZmJlN2NmMzE5NmYiLCJyb2xlcyI6WyJST0xFX1VTRVIiXX0sImFjY2Vzc190eXBlIjoiYWNjZXNzX3Rva2VuIiwiaWF0IjoxNjk4NjMzMjI1LCJleHAiOjE2OTg2MzY4MjV9.E3aIKqqFsHVBYedAuqn6Jw6bymsWy6RQ6gf_lDXnYNorjngA05uFLaTM0A2ZrN4kJ8nTXEjlrdhLU8crisJcdA"
        }
    }
}
```

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `user` | User | User details |
| `accessToken` | string | JWT access token for authentication |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/user/login/refresh` - Refresh access token using refresh token
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X POST /api/v1/user/login/refresh?refreshToken=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6MzEsImFkZHJlc3MiOiIweDVjODEyYzlhNjdlNjkwMGViMjBmM2YzMWQwZWNjZTUyM2Q2YTVjMDMiLCJyb2xlcyI6WyJST0xFX1VTRVIiXX0sImFjY2Vzc190eXBlIjoicmVmcmVzaF90b2tlbiIsImlhdCI6MTY5NzQyNDM0MCwiZXhwIjoxNjk4MDI5MTQwfQ.Y5dtx_VXGDZ4EDt4e6qtaVd811XumXjtDtVMiQeibNCai5zvV1PJJ3R8WCTSZb6NbbxAtFsTglYRD10aigDECA
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/login/refresh"

payload = {
    'refreshToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
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
| `refreshToken` | YES | string | Refresh token from previous login |

**Response Example:**

```json
{
    "success": true,
    "data": {
        "user": {
            "userId": 31,
            "address": "0x5c812c9a67e6900eb20f3f31d0ecce523d6a5c03",
            "userType": 1,
            "status": 1,
            "accounts": [
                {
                    "accountId": 127,
                    "type": 1,
                    "cashTokenIds": [
                        1
                    ],
                },
                {
                    "accountId": 128,
                    "type": 2,
                    "cashTokenIds": [
                        1
                    ]
                }
            ]
        },
        "accessToken": {
            "data": {
                "header": {
                    "alg": "ES256",
                    "typ": "JWT"
                },
                "payload": {
                    "user": {
                        "userId": 31,
                        "address": "0x5c812c9a67e6900eb20f3f31d0ecce523d6a5c03",
                        "roles": [
                            "ROLE_USER"
                        ]
                    },
                    "access_type": "access_token",
                    "iat": 1697449134,
                    "exp": 1697452734
                }
            },
            "token": "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6MzEsImFkZHJlc3MiOiIweDVjODEyYzlhNjdlNjkwMGViMjBmM2YzMWQwZWNjZTUyM2Q2YTVjMDMiLCJyb2xlcyI6WyJST0xFX1VTRVIiXX0sImFjY2Vzc190eXBlIjoiYWNjZXNzX3Rva2VuIiwiaWF0IjoxNjk3NDQ5MTM0LCJleHAiOjE2OTc0NTI3MzR9.reUyFbhlJ6ZXSUypWiWeikaPQdbcRB_ZgB2k4NxcKbJS1K9J1GZnfXl9GrYOmS67L19gC-wfKqSPN4-7T3Xk0w"
        }
    }
}
```

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `user` | User | User details |
| `accessToken` | string | New JWT access token |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/user/logout` - Logout and invalidate current session
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
{}
```

**Response Body:**

Empty response object indicating successful logout.

</details>

</details>

## User

<details className="api-category" id="user">
<summary className="api-category-header">
  <strong>User</strong>
  <span className="api-category-desc">User info and profile updates</span>
</summary>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/user/update` - Update user display name
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X POST /v1/user/update?displayName=NewDisplayName
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/update"

payload = {
    'displayName': 'NewDisplayName'
}

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6MzEsImFkZHJlc3MiOiIweDVjODEyYzlhNjdlNjkwMGViMjBmM2YzMWQwZWNjZTUyM2Q2YTVjMDMiLCJyb2xlcyI6WyJST0xFX1VTRVIiXX0sImFjY2Vzc190eXBlIjoiYWNjZXNzX3Rva2VuIiwiaWF0IjoxNjk3NDQ5MTM0LCJleHAiOjE2OTc0NTI3MzR9.reUyFbhlJ6ZXSUypWiWeikaPQdbcRB_ZgB2k4NxcKbJS1K9J1GZnfXl9GrYOmS67L19gC-wfKqSPN4-7T3Xk0w'
}

response = requests.post(url, headers=headers, params=payload)

print(response.text)
```

</TabItem>
</Tabs>

**Code Example:**

**Request Parameters:**

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `displayName` | YES | string | User's display name |

**Response Example:**

```json
{
    "user": {
        "userId": 78,
        "address": "0xe61f536f031f77c854b21652ab0f4fbe7cf3196f",
        "status": 1,
        "userType": 1,
        "userClass": 1,
        "displayName": "NewDisplayName",
        "payoutAddress": "0x1234567890abcdef1234567890abcdef12345678",
        "collateralPerSlot": "1000000000000000000",
        "onchainPayout": true,
        "accounts": [
            {
                "accountId": 242,
                "userId": 78,
                "type": 1,
                "name": "Current",
                "status": 1,
                "updateDate": 1698127521000
            },
            {
                "accountId": 243,
                "userId": 78,
                "type": 2,
                "name": "Preconf",
                "status": 1,
                "updateDate": 1698127521000
            }
        ]
    }
}
```

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `user` | object | Updated user object |
| └ `userId` | long | Unique user ID |
| └ `address` | string | User's wallet address |
| └ `status` | integer | User status (1 = active) |
| └ `userType` | integer | User type |
| └ `userClass` | integer | User class |
| └ `displayName` | string | User's display name |
| └ `payoutAddress` | string | User's payout address |
| └ `collateralPerSlot` | string | Collateral per slot amount |
| └ `onchainPayout` | boolean | Whether on-chain payout is enabled |
| └ `accounts` | object[] | List of user accounts |
| └└ `accountId` | long | Unique account ID |
| └└ `userId` | long | User ID associated with the account |
| └└ `type` | integer | Account type |
| └└ `name` | string | Account name |
| └└ `status` | integer | Account status |
| └└ `updateDate` | long | Last update timestamp in milliseconds |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/user/payoutAddress` - Update user payout address
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X POST /v1/user/payoutAddress?payoutAddress=0x1234567890abcdef1234567890abcdef12345678
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/payoutAddress"

payload = {
    'payoutAddress': '0x1234567890abcdef1234567890abcdef12345678'
}

headers = {
    'Authorization': 'Bearer <your-access-token>',
    'Content-Type': 'application/json'
}

response = requests.post(url, headers=headers, params=payload)
print(response.text)
```

</TabItem>
</Tabs>

**Code Example:**

**Request Parameters:**

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `payoutAddress` | YES | string | User's payout address |

**Response Example:**

```json
{
    "success": true,
    "data": {
        "user": {
            "userId": 73,
            "address": "0xcc8f16b4e20feb0e7eb5a4725451db6316afa8f",
            "status": 1,
            "userType": 1,
            "userClass": 1,
            "displayName": "XXXXX",
            "payoutAddress": "0xde88f16b4e20feb0525289041db6316afa8f",
            "collateralPerSlot": "0",
            "onchainPayout": true,
            "accounts": [
                {
                    "accountId": 2170,
                    "userId": 73,
                    "type": 1,
                    "name": "Current",
                    "status": 1,
                    "updateDate": 1751854737000
                },
                {
                    "accountId": 2171,
                    "userId": 73,
                    "type": 2,
                    "name": "InPreconf",
                    "status": 1,
                    "updateDate": 1751854737000
                }
            ]
        }
    }
}
```

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `success` | boolean | Update operation status |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/user/collateralPerSlot` - Update user collateral per slot
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X POST /v1/user/collateralPerSlot?collateralPerSlot=1000000000000000000
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/collateralPerSlot"

payload = {
    'collateralPerSlot': 1000000000000000000
}

headers = {
    'Authorization': 'Bearer <your-access-token>',
    'Content-Type': 'application/json'
}

response = requests.post(url, headers=headers, params=payload)
print(response.text)
```

</TabItem>
</Tabs>

**Code Example:**

**Request Parameters:**

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `collateralPerSlot` | YES | number | Collateral amount per slot |

**Response Example:**

```json
{
    "success": true
}
```

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `success` | boolean | Update operation status |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/user/info` - Get user information
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X GET /v1/user/info
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/info"

headers = {
    'Authorization': 'Bearer <your-access-token>',
    'Content-Type': 'application/json'
}

response = requests.get(url, headers=headers)
print(response.text)
```

</TabItem>
</Tabs>

**Code Example:**

**Request Parameters:**

No parameters required.

**Response Example:**

```json
{
    "success": true,
    "data": {
        "user": {
            "userId": 78,
            "address": "0xe61f536f031f77c854b21652ab0f4fbe7cf3196f",
            "status": 1,
            "userType": 1,
            "userClass": 1,
            "accounts": [
                {
                    "accountId": 242,
                    "userId": 78,
                    "type": 1,
                    "name": "Current",
                    "status": 1,
                    "updateDate": 1698127521000
                },
                {
                    "accountId": 243,
                    "userId": 78,
                    "type": 2,
                    "name": "Preconf",
                    "status": 1,
                    "updateDate": 1698127521000
                }
            ]
        }
    }
}
```

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `user` | User | User details |
| `accounts` | array | List of user accounts |

No parameters required.

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `user` | User | User information and details |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/user/update`
</summary>

**Request Parameters:**

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `name` | NO | string | User display name |

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `success` | boolean | Update operation status |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/user/payoutAddress`
</summary>

**Request Parameters:**

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `payoutAddress` | YES | string | User's payout address |

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `success` | boolean | Update operation status |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/user/collateralPerSlot`
</summary>

**Request Parameters:**

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `collateralPerSlot` | YES | number | Collateral amount per slot |

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `success` | boolean | Update operation status |

</details>

</details>

## Account

<details className="api-category" id="account">
<summary className="api-category-header">
  <strong>Account</strong>
  <span className="api-category-desc">Accounts and transactions</span>
</summary>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/user/accounts` - Get user accounts
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X GET /v1/user/accounts
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/accounts"

headers = {
    'Authorization': 'Bearer <your-access-token>',
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
        "accounts": [
            {
                "accountId": 242,
                "userId": 78,
                "type": 1,
                "name": "Current",
                "status": 1,
                "updateDate": 1698127521000
            },
            {
                "accountId": 243,
                "userId": 78,
                "type": 2,
                "name": "Preconf",
                "status": 1,
                "updateDate": 1698127521000
            }
        ]
    }
}
```

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `accounts` | array | List of user accounts |
| └ `accountId` | number | Unique account identifier |
| └ `userId` | number | User identifier |
| └ `type` | number | Account type |
| └ `name` | string | Account name |
| └ `status` | number | Account status |
| └ `updateDate` | number | Last update timestamp |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/user/account/{accountId}` - Get account details
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X GET /v1/user/account/242
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/account/242"

headers = {
    'Authorization': 'Bearer <your-access-token>',
    'Content-Type': 'application/json'
}

response = requests.get(url, headers=headers)
print(response.text)
```

</TabItem>
</Tabs>

**Request Parameters:**

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `accountId` | YES | string | Account identifier |

**Response Example:**

```json
{
    "success": true,
    "data": {
        "account": {
            "accountId": 242,
            "userId": 78,
            "type": 1,
            "name": "Current",
            "status": 1,
            "updateDate": 1698127521000
        }
    }
}
```

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `account` | Account | Account details |
| └ `accountId` | number | Unique account identifier |
| └ `userId` | number | User identifier |
| └ `type` | number | Account type |
| └ `name` | string | Account name |
| └ `status` | number | Account status |
| └ `updateDate` | number | Last update timestamp |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/user/account/{accountId}/txs`
</summary>

**Request Parameters:**

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `accountId` | YES | string | Account identifier |

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `transactions` | array | List of account transactions |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/user/account/txs`
</summary>

**Request Parameters:**

No parameters required.

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `transactions` | array | List of all user transactions |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/user/account/transfer/token`
</summary>

**Request Parameters:**

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `fromAccountId` | YES | string | Source account ID |
| `toAccountId` | YES | string | Destination account ID |
| `tokenId` | YES | number | Token identifier |
| `amount` | YES | number | Transfer amount |

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `success` | boolean | Transfer operation status |

</details>

</details>

## Funding

<details className="api-category" id="funding">
<summary className="api-category-header">
  <strong>Funding</strong>
  <span className="api-category-desc">Deposits and withdrawals</span>
</summary>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/p/funding/contractAddress`
</summary>

**Request Parameters:**

No parameters required.

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `contractAddress` | string | Funding contract address |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/user/funding/deposits`
</summary>

**Request Parameters:**

No parameters required.

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `deposits` | array | List of user deposits |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/user/funding/withdraw`
</summary>

**Request Parameters:**

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `accountId` | YES | string | Account identifier |
| `tokenId` | YES | number | Token identifier |
| `amount` | YES | number | Withdrawal amount |

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `success` | boolean | Withdrawal operation status |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/p/funding/withdraw/dailyWithdrawLimits`
</summary>

**Request Parameters:**

No parameters required.

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `dailyLimits` | object | Daily withdrawal limits |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/user/funding/withdraw/status`
</summary>

**Request Parameters:**

No parameters required.

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `withdrawStatus` | object | Current withdrawal status |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/user/funding/withdraws`
</summary>

**Request Parameters:**

No parameters required.

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `withdrawals` | array | List of user withdrawals |

</details>

</details>

## Network & Tokens

<details className="api-category" id="network-tokens">
<summary className="api-category-header">
  <strong>Network & Tokens</strong>
  <span className="api-category-desc">Network info, tokens, fees</span>
</summary>

- <span className="api-method-get">**GET**</span> `/v1/p/network`
- <span className="api-method-get">**GET**</span> `/v1/p/tokens`
- <span className="api-method-get">**GET**</span> `/v1/p/user/fees`

</details>

## Whole Block Markets

<details className="api-category" id="whole-block-markets">
<summary className="api-category-header">
  <strong>Whole Block Markets</strong>
  <span className="api-category-desc">Public market data</span>
</summary>

- <span className="api-method-get">**GET**</span> `/v1/p/wholeblock/markets`
- <span className="api-method-get">**GET**</span> `/v1/p/wholeblock/positions`
- <span className="api-method-get">**GET**</span> `/v1/p/wholeblock/orders`
- <span className="api-method-get">**GET**</span> `/v1/p/wholeblock/trades`

</details>

## Inclusion Preconf Markets

<details className="api-category" id="inclusion-preconf-markets">
<summary className="api-category-header">
  <strong>Inclusion Preconf Markets</strong>
  <span className="api-category-desc">Public market data</span>
</summary>

- <span className="api-method-get">**GET**</span> `/v1/p/inclusion-preconf/markets`
- <span className="api-method-get">**GET**</span> `/v1/p/inclusion-preconf/market`
- <span className="api-method-get">**GET**</span> `/v1/p/inclusion-preconf/trades`
- <span className="api-method-get">**GET**</span> `/v1/p/inclusion-preconf/top-sales`

</details>

## Whole Block Trading

<details className="api-category" id="whole-block-trading">
<summary className="api-category-header">
  <strong>Whole Block Trading</strong>
  <span className="api-category-desc">Place/cancel orders and view positions</span>
</summary>

- <span className="api-method-post">**POST**</span> `/v1/wholeblock/order`
- <span className="api-method-post">**POST**</span> `/v1/wholeblock/cancel-all-orders`
- <span className="api-method-post">**POST**</span> `/v1/wholeblock/cancel-batch-orders`
- <span className="api-method-post">**POST**</span> `/v1/wholeblock/cancel-order`
- <span className="api-method-get">**GET**</span> `/v1/user/wholeblock/all-orders`
- <span className="api-method-get">**GET**</span> `/v1/user/wholeblock/orders`
- <span className="api-method-get">**GET**</span> `/v1/user/wholeblock/positions`
- <span className="api-method-get">**GET**</span> `/v1/user/wholeblock/txs`

</details>

## Inclusion Preconf Trading

<details className="api-category" id="inclusion-preconf-trading">
<summary className="api-category-header">
  <strong>Inclusion Preconf Trading</strong>
  <span className="api-category-desc">Place/cancel orders and view positions</span>
</summary>

- <span className="api-method-post">**POST**</span> `/v1/inclusion-preconf/order`
- <span className="api-method-post">**POST**</span> `/v1/inclusion-preconf/cancel-all-orders`
- <span className="api-method-post">**POST**</span> `/v1/inclusion-preconf/cancel-batch-orders`
- <span className="api-method-post">**POST**</span> `/v1/inclusion-preconf/cancel-order`
- <span className="api-method-get">**GET**</span> `/v1/user/inclusion-preconf/orders`
- <span className="api-method-get">**GET**</span> `/v1/user/inclusion-preconf/all-orders`
- <span className="api-method-get">**GET**</span> `/v1/user/inclusion-preconf/positions`
- <span className="api-method-get">**GET**</span> `/v1/user/inclusion-preconf/txs`
- <span className="api-method-post">**POST**</span> `/v1/user/inclusion-preconf/market/update`

</details>

## Bundle Submission

<details className="api-category" id="bundle-submission">
<summary className="api-category-header">
  <strong>Bundle Submission</strong>
  <span className="api-category-desc">Submit transaction bundles</span>
</summary>

- <span className="api-method-post">**POST**</span> `/api/v1/user/bundle/send`

</details>

## Slot Bundles

<details className="api-category" id="slot-bundles">
<summary className="api-category-header">
  <strong>Slot Bundles</strong>
  <span className="api-category-desc">Per-slot bundle data</span>
</summary>

- <span className="api-method-get">**GET**</span> `/v1/slot/bundles`
- <span className="api-method-get">**GET**</span> `/v1/account/slot/bundles`
- <span className="api-method-get">**GET**</span> `/v1/slot/forceEmptyBlockSpace`
- <span className="api-method-get">**GET**</span> `/v1/p/slot/txs/hash`

</details>

## Builder

<details className="api-category" id="builder">
<summary className="api-category-header">
  <strong>Builder</strong>
  <span className="api-category-desc">Builder registration and delegation</span>
</summary>

- <span className="api-method-post">**POST**</span> `/v1/builder/register`
- <span className="api-method-get">**GET**</span> `/v1/builder/signingMessage`
- <span className="api-method-post">**POST**</span> `/v1/builder/deregister`
- <span className="api-method-get">**GET**</span> `/v1/p/builders`
- <span className="api-method-get">**GET**</span> `/v1/user/builder`
- <span className="api-method-post">**POST**</span> `/v1/user/delegate/builder`
- <span className="api-method-get">**GET**</span> `/v1/user/delegate/builder`
- <span className="api-method-get">**GET**</span> `/v1/p/builder/{slot}`
- <span className="api-method-get">**GET**</span> `/v1/builder/delegation`

</details>

## Pricer

<details className="api-category" id="pricer">
<summary className="api-category-header">
  <strong>Pricer</strong>
  <span className="api-category-desc">Delegation and active markets</span>
</summary>

- <span className="api-method-post">**POST**</span> `/v1/user/delegate/pricer`
- <span className="api-method-get">**GET**</span> `/v1/user/pricer`
- <span className="api-method-get">**GET**</span> `/v1/pricer/account-tokens`
- <span className="api-method-get">**GET**</span> `/v1/pricer/inclusion-preconf/orders`
- <span className="api-method-get">**GET**</span> `/v1/pricer/inclusion-preconf/positions`
- <span className="api-method-get">**GET**</span> `/v1/pricer/wholeblock/orders`
- <span className="api-method-get">**GET**</span> `/v1/pricer/wholeblock/positions`
- <span className="api-method-get">**GET**</span> `/v1/pricer/markets/active`

</details>

## Validator

<details className="api-category" id="validator">
<summary className="api-category-header">
  <strong>Validator</strong>
  <span className="api-category-desc">Registration, settings, payouts</span>
</summary>

- <span className="api-method-get">**GET**</span> `/v1/user/validators`
- <span className="api-method-get">**GET**</span> `/v1/p/validators`
- <span className="api-method-post">**POST**</span> `/v1/validator/register`
- <span className="api-method-post">**POST**</span> `/v1/validator/verify`
- <span className="api-method-post">**POST**</span> `/v1/validator/settings`
- <span className="api-method-post">**POST**</span> `/v1/validator/deregister`
- <span className="api-method-get">**GET**</span> `/v1/validator/fees`
- <span className="api-method-get">**GET**</span> `/v1/validator/onchain/payout`

</details>

</div>

## Essential Resources

- **[GitHub Organization](https://github.com/ethgas-developer)** - All source code and tools
- **[WebSocket API](/docs/websocket/overview)** - Real-time data streaming documentation 