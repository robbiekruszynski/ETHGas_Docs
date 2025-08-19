---
sidebar_position: 2
sidebar_label: Connect
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Connecting to ETHGas

ETHGas provides multiple environments for development, testing, and production use. This guide helps you establish connections to the ETHGas platform and understand the different environments available.

## Prerequisites

- **API Credentials**: You'll need to register an account on ETHGas Exchange
- **Environment Selection**: Choose between TestNet (Hoodi) or MainNet
- **Network Access**: Ability to connect to ETHGas endpoints


## Development Workflow


<div className="row">
  <div className="col col--12">
    <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
      <span style={{ color: 'var(--ifm-color-primary)', fontSize: '1.2rem', marginRight: '0.5rem' }}>✅</span>
      <h4 style={{ color: 'var(--ifm-color-primary)', margin: '0 0.5rem 0 0', fontSize: '1.1rem' }}>
        Start with TestNet
      </h4>
      <span style={{ color: 'var(--ifm-color-text)', fontSize: '0.95rem' }}>Develop and test your integration</span>
    </div>
    
    <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
      <span style={{ color: 'var(--ifm-color-primary)', fontSize: '1.2rem', marginRight: '0.5rem' }}>✅</span>
      <h4 style={{ color: 'var(--ifm-color-primary)', margin: '0 0.5rem 0 0', fontSize: '1.1rem' }}>
        Validate Functionality
      </h4>
      <span style={{ color: 'var(--ifm-color-text)', fontSize: '0.95rem' }}>Ensure all features work correctly</span>
    </div>
    
    <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
      <span style={{ color: 'var(--ifm-color-primary)', fontSize: '1.2rem', marginRight: '0.5rem' }}>✅</span>
      <h4 style={{ color: 'var(--ifm-color-primary)', margin: '0 0.5rem 0 0', fontSize: '1.1rem' }}>
        Test with Real Data
      </h4>
      <span style={{ color: 'var(--ifm-color-text)', fontSize: '0.95rem' }}>Use TestNet's simulated real data</span>
    </div>
    
    <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
      <span style={{ color: 'var(--ifm-color-primary)', fontSize: '1.2rem', marginRight: '0.5rem' }}>✅</span>
      <h4 style={{ color: 'var(--ifm-color-primary)', margin: '0 0.5rem 0 0', fontSize: '1.1rem' }}>
        Deploy to MainNet
      </h4>
      <span style={{ color: 'var(--ifm-color-text)', fontSize: '0.95rem' }}>Move to production when ready</span>
    </div>
  </div>
</div>

## Connecting to ETHGas


<div style={{
  display: 'flex',
  gap: '2rem',
  margin: '2rem 0',
  flexWrap: 'wrap'
}}>
  <div style={{
    flex: '1',
    minWidth: '300px',
    border: '2px solid var(--ifm-color-primary-light)',
    borderRadius: '12px',
    padding: '1.5rem',
    background: 'transparent'
  }}>
    <h3 style={{
      color: 'var(--ifm-color-primary)',
      margin: '0 0 1rem 0',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    }}>
      🔓 Public Endpoints: <code>/api/v1/p</code>
    </h3>
    <p style={{ margin: '0', lineHeight: '1.6' }}>
      These endpoints provide access to market data, order book snapshots, trade history, and more; information that is available to all users. These endpoints are <strong>open and do not require authentication</strong>, allowing developers to retrieve real-time market data for analysis or display purposes.
    </p>
  </div>

  <div style={{
    flex: '1',
    minWidth: '300px',
    border: '2px solid var(--ifm-color-primary-light)',
    borderRadius: '12px',
    padding: '1.5rem',
    background: 'transparent'
  }}>
    <h3 style={{
      color: 'var(--ifm-color-primary)',
      margin: '0 0 1rem 0',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    }}>
      🔒 Private Endpoints: <code>/api/v1</code>
    </h3>
    <p style={{ margin: '0', lineHeight: '1.6' }}>
      These endpoints <strong>require authentication</strong> and provide access to account-specific information and trading functionality.
    </p>
  </div>
</div>

<Tabs>
<TabItem value="general" label="General" default>

<!-- :::tip Important: Two Endpoint Categories
Endpoints are divided into **two distinct categories**: 

**`/api/v1/p`** (Public) and **`/api/v1`** (Private)
::: -->




#### Authentication Workflow

For interacting with `/api/v1` endpoints, a login is required. The login workflow is as follows:

<div className="step-item">
  <div className="step-circle">1</div>
  <div className="step-content">
    <strong>Get Login Message</strong>: Call the endpoint `/api/v1/user/login` with the appropriate `addr` to get the login sign message.
  </div>
</div>

<div className="step-item">
  <div className="step-circle">2</div>
  <div className="step-content">
    <strong>Sign and Verify</strong>: Sign the login message and call the endpoint `/api/v1/user/login/verify` with the `addr`, `nonceHash`, and `signature`. You will receive the JWT access token, as well as user-related data, and can now call any private endpoints.
  </div>
</div>

<div className="step-item">
  <div className="step-circle">3</div>
  <div className="step-content">
    <strong>Refresh Token</strong>: Before the access token expires, call `/api/v1/user/login/refresh` to get a new access token.
  </div>
</div>

:::info
The JWT access token is valid for 1 hour, after each hour an access token refresh is required. A private REST request needs to include the JWT access token in the request's HEADER, format: Authorization: 'Bearer accessToken'. A private session is valid for 7 days, after 7 days a re-login is required. A private websocket session needs to include the access token in the session header, format: 'Bearer accessToken'
:::

</TabItem>
<TabItem value="python" label="Using Python">

### Overview

The `python-ethgas` package is a Python3 connector that allows you to interact with the EthGas. The package utilizes threads to handle concurrent execution of REST API requests and WebSocket subscriptions. This allows for efficient handling of multiple requests and real-time data streams without blocking the main execution thread.

The connector provides a **REST client** that allows you to make requests to all the available REST API endpoints of the EthGas. It also includes a **WebSocket client** that enables you to subscribe to real-time data streams from EthGas. You can subscribe to channels like preconf market data, transaction data etc.

To access private endpoints and perform actions on behalf of a user, both API and Websocket client classes handle the login process and manage the authentication using the **JWT access token**.

:::warning
This is an unofficial Python project and should be used at your own risk. It is NOT affiliated with EthGas and does NOT provide financial or investment advice.
:::

### Installation

```bash
pip install python-ethgas
```

### Example Usage

```python
from eth_account import messages
import json
import requests
from web3.auto import w3


domain = 'ADD_THE_DOMAIN_HERE'
account_address = 'ADD_YOUR_ETHEREUM_account_ADDRESS_HERE'
private_key = 'ADD_YOUR_PRIVATE_KEY_HERE'
chain_id = 'ADD_THE_CHAIN_ID_HERE'


###########################################
#   STEP 1. Get the login sign message.   #
###########################################

# Login
body = {'addr': account_address}
response = requests.post(domain + '/api/v1/user/login', data=body)
print(response.status_code)
print(response.text)

# Retrieve nonce & response message
nonce = response.json()['data']['nonceHash']
eip712_message = json.loads(response.json()['data']['eip712Message'])

print(eip712_message)
# Make signature
encoded_message = messages.encode_typed_data(full_message=eip712_message)

# Sign message
signed_message = w3.eth.account.sign_message(encoded_message, private_key=private_key)

# Verify login
body = {'addr': account_address, 'nonceHash': nonce, 'signature': w3.to_hex(signed_message.signature)}
response = requests.post(domain + '/api/v1/user/login/verify', data=body)

# Was login successful?
print(f"Login successful? {response.json()['success']}")

#####################################
#   STEP 2. Get the access token.   #
#####################################

# Get access token etc
access_token = response.json()['data']['accessToken']['token']
headers = {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + access_token}
response_cookies = response.cookies

# Test calling a private endpoint
response = requests.get(url=domain + '/api/v1/user/accounts', headers=headers)
print("Here is your list of Ethgas accounts etc:\n")
print(json.dumps(response.json()['data']['accounts'], indent=2))


###########################################################
#   STEP 3. Refresh the access token before it expires.   #
###########################################################

# Refresh token
body = {'refreshToken': access_token}
response = requests.post(domain + '/api/v1/user/login/refresh', cookies=response_cookies, data=body)

# Get latest access token etc
access_token = response.json()['data']['accessToken']['token']
headers = {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + access_token}
response_cookies = response.cookies

# Test calling a private endpoint again
response = requests.get(url=domain + '/api/v1/user/accounts', headers=headers)
print("Here is your list of Ethgas accounts etc:\n")
print(json.dumps(response.json()['data']['accounts'], indent=2))
```

### Repository

For complete documentation and examples, visit the [python-ethgas repository](https://github.com/gaspy503/python-ethgas).

:::info
The JWT access token is valid for 1 hour, after each hour an access token refresh is required. A private REST request needs to include the JWT access token in the request's HEADER, format: Authorization: 'Bearer accessToken'. A private session is valid for 7 days, after 7 days a re-login is required. A private websocket session needs to include the access token in the session header, format: 'Bearer accessToken'
:::




</TabItem>
</Tabs>



## Environment Overview



<Tabs>
<TabItem value="testnet" label="TestNet (Hoodi)" default>

### TestNet Environment

<!-- **Base URL**: `https://hoodi.app.ethgas.com/api` -->

The TestNet environment is designed for development and testing purposes:

- **Purpose**: Development, testing, and integration
- **Data**: Simulated market data and test transactions
- **Risk**: No real funds or actual trading
- **Features**: Full API functionality with test data
- **Recommended for**: Initial development, API testing, and learning

### Environment Details

| Environment | Chain | API Base URL | WebSocket Base URL | Collateral Contract |
|-------------|-------|--------------|-------------------|-------------------|
| Testnet | Hoodi Chain | `https://hoodi.app.ethgas.com/api` | `wss://hoodi.app.ethgas.com/ws` | `0xe8bfB84b14c383b94365a895fc8bfA36dE236dc8` |

### Configuration

```bash
# TestNet Configuration
ETHGAS_API_URL=https://hoodi.app.ethgas.com/api
ETHGAS_WS_URL=wss://hoodi.app.ethgas.com/ws

```
<!-- ETHGAS_NETWORK=testnet
ETHGAS_CHAIN_ID=17000 -->
<!-- ### Considerations
- **Authentication**: Test credentials provided
- **Data**: Simulated market conditions
- **Limits**: Higher rate limits for testing
- **Support**: Dedicated testnet support -->

</TabItem>
<TabItem value="mainnet" label="MainNet">

### MainNet Environment

<!-- **Base URL**: `https://mainnet.app.ethgas.com/api` -->

The MainNet environment is for production use:

- **Purpose**: Live trading and production applications
- **Data**: Real market data and actual transactions
- **Risk**: Real funds and actual trading
- **Features**: Complete production functionality
- **Recommended for**: Production applications and live trading

### Environment Details

| Environment | Chain | API Base URL | WebSocket Base URL | Collateral Contract |
|-------------|-------|--------------|-------------------|-------------------|
| Mainnet | Ethereum  | `https://mainnet.app.ethgas.com/api` | `wss://mainnet.app.ethgas.com/ws` | `0x41c95AB9DBAC21B3992963Adf0e90F6478364b88` |

### Configuration

```bash
# MainNet Configuration
ETHGAS_API_URL=https://mainnet.app.ethgas.com/api
ETHGAS_WS_URL=wss://mainnet.app.ethgas.com/ws

```
<!-- ETHGAS_NETWORK=mainnet
ETHGAS_CHAIN_ID=1 -->

<!-- ### Considerations
- **Authentication**: Production credentials required
- **Data**: Real market data and conditions
- **Limits**: Production rate limits apply
- **Support**: Production support channels -->

</TabItem>
</Tabs>

## REST API

### Response Structure

Every API response contains a success flag and a response body.

| Name | Type | Description |
|------|------|-------------|
| `success` | boolean | API call is successful or unsuccessful |
| `data` | object | Response body |


## Authentication Flow

ETHGas uses JWT Bearer token authentication as mentioned above. Here's the complete flow:

<details>
<summary><strong>1. Login</strong></summary>

:::Info
First, authenticate with your credentials to get the EIP712 message for signing.
:::
<Tabs>
<TabItem value="http" label="HTTP" default>
Example Code:
```bash
curl -X POST /api/v1/user/login?addr=0x8F02425B5f3c522b7EF8EA124162645F0397c478&name=username
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

**Example Response:**

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

**Request Parameters:**

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `addr` | YES | string | User's EOA account (account) address |
| `name` | NO | string | Display name |

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `status` | string | Login status |
| `eip712Message` | object | EIP712 message |
| `nonceHash` | string | A unique four-byte nonce to identify this particular login request |

**Usage:**

Get the response from `/api/v1/user/login` and sign the `eip712Message` and send the signed message through `/api/v1/user/login/verify`

</details>

<details>
<summary><strong>2. Verify Login</strong></summary>

Complete the verification process by sending the signed message.

<Tabs>
<TabItem value="http" label="HTTP" default>
Example Code:
```bash
curl -X POST /api/v1/user/login/verify?addr=0xe61f536f031f77C854b21652aB0F4fBe7CF3196F&nonceHash=517d9272&signature=0xc046037ec795f4cfe7aca33a0c283c0152bae91008b3e14b84be50f91f0e2db714054dee85b840e3edf0e26480231a684447f48337de64ea6697a3552aa9351a1b
```

</TabItem>
<TabItem value="python" label="Python">
Example Code:
```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/login/verify"

payload = {
    "addr": "0xe61f536f031f77C854b21652aB0F4fBe7CF3196F",
    "nonceHash": "517d9272",
    "signature": "0xc046037ec795f4cfe7aca33a0c283c0152bae91008b3e14b84be50f91f0e2db714054dee85b840e3edf0e26480231a684447f48337de64ea6697a3552aa9351a1b"  
}

headers = {
  'Content-Type': 'application/json'
}

response = requests.post(url, headers=headers, params=payload)

print(response.text)
```

</TabItem>
</Tabs>

**Example Response:**

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

**Request Parameters:**

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `addr` | YES | string | User's EOA account (account) address |
| `nonceHash` | YES | string | Nonce Hash |
| `signature` | YES | string | Signature |

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `user` | User | User details |
| `accessToken` | string | Access token |

</details>



<details>
<summary><strong>3. Token Refresh</strong></summary>

When your access token expires, refresh it to maintain your session.

#### Code Example:
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

**Example Response:**

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
                    ]
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

**Request Parameters:**

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `refreshToken` | YES | string | Refresh token |

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `user` | User | User details |
| `accessToken` | object | Access token used for authentication |

</details>

<details>
<summary><strong>Logout</strong></summary>

When you're done, logout.

#### Code Example:
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X POST /api/v1/user/logout
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/logout"

headers = {
  'Authorization': 'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6MzEsImFkZHJlc3MiOiIweDVjODEyYzlhNjdlNjkwMGViMjBmM2YzMWQwZWNjZTUyM2Q2YTVjMDMiLCJyb2xlcyI6WyJST0xFX1VTRVIiXX0sImFjY2Vzc190eXBlIjoiYWNjZXNzX3Rva2VuIiwiaWF0IjoxNjk3NDQ5MTM0LCJleHAiOjE2OTc0NTI3MzR9.reUyFbhlJ6ZXSUypWiWeikaPQdbcRB_ZgB2k4NxcKbJS1K9J1GZnfXl9GrYOmS67L19gC-wfKqSPN4-7T3Xk0w'
}

response = requests.post(url, headers=headers)

print(response.text)
```

</TabItem>
</Tabs>

**Example Response:**

```json
{}
```

</details>

## WebSocket Connection

For real-time data, establish a WebSocket connection:

<Tabs>
<TabItem value="mainnet-ws" label="MainNet" default>

**Connection URL:**
```
wss://mainnet.app.ethgas.com/ws
```

</TabItem>
<TabItem value="testnet-ws" label="TestNet">

**Connection URL:**
```
wss://hoodi.app.ethgas.com/ws
```

</TabItem>
</Tabs>

### WebSocket Authentication

Authenticate your WebSocket connection:

```json
{
  "cmd": "login",
  "args": {
    "accessToken": "YOUR_ACCESS_TOKEN"
  }
}
```

### WebSocket Message Structure

All WebSocket messages follow this format:

```json
{
  "cmd": "command_name",
  "args": {
    "parameter1": "value1",
    "parameter2": "value2"
  }
}
```

### Common WebSocket Commands

- **`login`**: Authenticate the connection
- **`subscribe`**: Subscribe to real-time updates
- **`unsubscribe`**: Unsubscribe from updates
- **`query`**: Request specific data

## Infrastructure

### Relay Endpoints

Official relay endpoints by region:

| Region | Environment | Endpoint |
|--------|-------------|----------|
| **Tokyo** | Mainnet | `https://0x88ef3061f598101ca713d556cf757763d9be93d33c3092d3ab6334a36855b6b4a4020528dd533a62d25ea6648251e62e@ap-relay.ethgas.com` |
| **Tokyo** | Hoodi | `https://0xb20c3fe59db9c3655088839ef3d972878d182eb745afd8abb1dd2abf6c14f93cd5934ed4446a5fe1ba039e2bc0cf1011@hoodi-relay.ethgas.com` |
| **Frankfurt** | Mainnet | `https://0x88ef3061f598101ca713d556cf757763d9be93d33c3092d3ab6334a36855b6b4a4020528dd533a62d25ea6648251e62e@eu-relay.ethgas.com` |
| **Virginia** | Mainnet | `https://0x88ef3061f598101ca713d556cf757763d9be93d33c3092d3ab6334a36855b6b4a4020528dd533a62d25ea6648251e62e@us-relay.ethgas.com` |

:::info Relay Usage
Prepend the key as shown in the endpoint URLs for authentication.
:::

## Response Structure

All API responses follow this structure:

```json
{
  "success": true,
  "data": {
    // Response data here
  },
  "message": "Optional message"
}
```

## Error Handling

ETHGas uses standard HTTP status codes and custom error codes. See the [Error Codes](/docs/reference/error-codes) section for details.

## Next Steps

- **API Reference**: [Complete API Documentation](/docs/api/overview)
- **WebSocket Guide**: [Real-time Data Streaming](/docs/websocket/overview)
- **Authentication API**: [Detailed Auth Reference](/docs/api/authentication)
- **Reference Materials**: [Data Types & Error Codes](/docs/reference/data-types)