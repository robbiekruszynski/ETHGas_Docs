---
sidebar_position: 2
sidebar_label: Connect
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Connecting to ETHGas

ETHGas provides multiple environments for development, testing, and production use. This guide helps you establish connections to the ETHGas platform and understand the different environments available.

## Prerequisites

- **API Credentials**: You'll need to register an account on ETHGas Exchange
- **Environment Selection**: Choose between TestNet (Hoodi) or MainNet
- **Network Access**: Ability to connect to ETHGas endpoints

## Connecting to ETHGas

Endpoints are divided into two categories: 
`/api/v1/p` and `/api/v1`.

### Public Endpoints (`/api/v1/p`)

These endpoints provide access to market data, order book snapshots, trade history, and more; information that is available to all users. These endpoints are open and do not require authentication, allowing developers to retrieve real-time market data for analysis or display purposes.

### Private Endpoints (`/api/v1`)

These endpoints require authentication and provide access to account-specific information and trading functionality.

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

## Environment Overview

<Tabs>
<TabItem value="testnet" label="TestNet (Hoodi)" default>

### TestNet Environment

**Base URL**: `https://hoodi.app.ethgas.com/api`

The TestNet environment is designed for development and testing purposes:

- **Purpose**: Development, testing, and integration
- **Data**: Simulated market data and test transactions
- **Risk**: No real funds or actual trading
- **Features**: Full API functionality with test data
- **Recommended for**: Initial development, API testing, and learning

### Configuration

```bash
# TestNet Configuration
ETHGAS_API_URL=https://hoodi.app.ethgas.com/api
ETHGAS_WS_URL=wss://hoodi.app.ethgas.com/ws

```
<!-- ETHGAS_NETWORK=testnet
ETHGAS_CHAIN_ID=17000 -->
### Considerations
- **Authentication**: Test credentials provided
- **Data**: Simulated market conditions
- **Limits**: Higher rate limits for testing
- **Support**: Dedicated testnet support

</TabItem>
<TabItem value="mainnet" label="MainNet">

### MainNet Environment

**Base URL**: `https://mainnet.app.ethgas.com/api`

The MainNet environment is for production use:

- **Purpose**: Live trading and production applications
- **Data**: Real market data and actual transactions
- **Risk**: Real funds and actual trading
- **Features**: Complete production functionality
- **Recommended for**: Production applications and live trading

### Configuration

```bash
# MainNet Configuration
ETHGAS_API_URL=https://mainnet.app.ethgas.com/api
ETHGAS_WS_URL=wss://mainnet.app.ethgas.com/ws

```
<!-- ETHGAS_NETWORK=mainnet
ETHGAS_CHAIN_ID=1 -->
### Considerations
- **Authentication**: Production credentials required
- **Data**: Real market data and conditions
- **Limits**: Production rate limits apply
- **Support**: Production support channels

</TabItem>
</Tabs>

## API Endpoints

All API endpoints follow the same pattern across environments:

```
{ENVIRONMENT_BASE_URL}/api/v1/{ENDPOINT}
```

**Examples:**

| Endpoint | URL |
|----------|-----|
| **User Info** | `{BASE_URL}/api/v1/user/info` |
| **Authentication** | `{BASE_URL}/api/v1/user/login` |
| **Market Data** | `{BASE_URL}/api/v1/market/data` |

## Development Workflow

### Recommended Migration Path

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

## Authentication Flow

ETHGas uses JWT Bearer token authentication. Here's the complete flow:

### 1. Login

First, authenticate with your credentials:

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X POST "https://mainnet.app.ethgas.com/api/v1/user/login" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "your-email@example.com",
    "password": "your-password"
  }'
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/login"
payload = {
    "email": "your-email@example.com",
    "password": "your-password"
}
headers = {
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)
print(response.text)
```

</TabItem>
</Tabs>

### 2. Verify Login

Complete the verification process:

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X POST "https://mainnet.app.ethgas.com/api/v1/user/login/verify" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "your-email@example.com",
    "code": "verification-code"
  }'
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/login/verify"
payload = {
    "email": "your-email@example.com",
    "code": "verification-code"
}
headers = {
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)
print(response.text)
```

</TabItem>
</Tabs>

### 3. Use Access Token

Include the JWT access token in all subsequent requests:

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X GET "https://mainnet.app.ethgas.com/api/v1/user/info" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json"
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/info"
headers = {
    "Authorization": "Bearer YOUR_ACCESS_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.text)
```

</TabItem>
</Tabs>

## Authentication Best Practices

:::warning
The JWT access token is valid for 1 hour, after each hour an access token refresh is required. A private REST request needs to include the JWT access token in the request's HEADER, format: Authorization: 'Bearer accessToken'. A private session is valid for 7 days, after 7 days a re-login is required. A private websocket session needs to include the access token in the session header, format: 'Bearer accessToken'
:::

### Token Refresh

When your access token expires, refresh it:

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X POST "https://mainnet.app.ethgas.com/api/v1/user/login/refresh" \
  -H "Content-Type: application/json" \
  -d '{
    "refreshToken": "your-refresh-token"
  }'
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/login/refresh"
payload = {
    "refreshToken": "your-refresh-token"
}
headers = {
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)
print(response.text)
```

</TabItem>
</Tabs>

### Logout

When you're done, logout to invalidate your session:

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X POST "https://mainnet.app.ethgas.com/api/v1/user/logout" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json"
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/logout"
headers = {
    "Authorization": "Bearer YOUR_ACCESS_TOKEN",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers)
print(response.text)
```

</TabItem>
</Tabs>

## WebSocket Connection

For real-time data, establish a WebSocket connection:

<Tabs>
<TabItem value="mainnet-ws" label="MainNet WebSocket" default>

**Connection URL:**
```
wss://mainnet.app.ethgas.com/ws
```

</TabItem>
<TabItem value="testnet-ws" label="TestNet WebSocket">

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

### Collateral Contract (EthgasPool)

| Environment | Contract Address |
|-------------|------------------|
| **Mainnet** | `0x41c95AB9DBAC21B3992963Adf0e90F6478364b88` |
| **Hoodi (Test)** | `0xe8bfB84b14c383b94365a895fc8bfA36dE236dc8` |

:::tip Recommendation
Deposit collateral via the website for the best user experience.
:::

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