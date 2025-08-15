---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Connecting to ETHGas

This guide helps you establish connections to the ETHGas platform. For copy/paste‑ready code examples (HTTP and Python), see the API endpoints below.

## Prerequisites

- **API Credentials**: You'll need to register an account on ETHGas Exchange
- **Environment Selection**: Choose between TestNet (Hoodi) or MainNet
- **Network Access**: Ability to connect to ETHGas endpoints

## Environments

<Tabs>
<TabItem value="mainnet" label="MainNet" default>

| Parameter | Value |
|-----------|-------|
| **Environment** | MainNet |
| **Chain** | Ethereum |
| **RPC URL** | `https://ethereum-rpc.publicnode.com` |
| **Chain ID** | `1` |
| **API base URL** | `https://mainnet.app.ethgas.com` |
| **Websocket base URL** | `wss://mainnet.app.ethgas.com/ws` |
| **Collateral Deposit Address** | `0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6` |

</TabItem>
<TabItem value="testnet" label="TestNet">

| Parameter | Value |
|-----------|-------|
| **Environment** | TestNet |
| **Chain** | Holesky |
| **RPC URL** | `https://ethereum-hoodi-rpc.publicnode.com ` |
| **Chain ID** | `17000` |
| **API base URL** | `https://hoodi.app.ethgas.com` |
| **Websocket base URL** | `wss://hoodi.app.ethgas.com/ws` |
| **Collateral Deposit Address** | `0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6` |

</TabItem>
</Tabs>

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

- **API Reference (copy/paste code)**: This documentation
- **REST API Overview**: `/docs/api/overview`
- **WebSocket Overview**: `/docs/websocket/overview`
- **Authentication API**: `/docs/api/authentication` 