---
sidebar_position: 3
---

# Connecting to ETHGas

This guide will help you establish connections to the ETHGas platform, including authentication setup and basic configuration.

## Prerequisites

Before connecting to ETHGas, ensure you have:

- **API Credentials**: Your API key and secret from ETHGas
- **Environment Selection**: Choose between TestNet and MainNet
- **Network Access**: Ensure your application can reach ETHGas endpoints
- **Authentication Method**: Decide on your preferred authentication approach

## Authentication Overview

ETHGas uses a token-based authentication system:

1. **Login**: Authenticate with your credentials
2. **Token Management**: Handle access and refresh tokens
3. **Session Management**: Maintain active sessions
4. **Security**: Implement proper token storage and rotation

## Basic Connection Setup

### Step 1: Choose Your Environment

Select the appropriate base URL for your environment:

#### MainNet Configuration
Use MainNet for production applications and real trading.

**API Endpoints:**
- **REST API:** `https://api.ethgas.com`
- **WebSocket:** `wss://ws.ethgas.com`

**Connection Example:**
```bash
# MainNet
BASE_URL=https://api.ethgas.com

curl -X POST "${BASE_URL}/api/v1/user/login" \
  -H "Content-Type: application/json" \
  -d '{
    "username": "your_username",
    "password": "your_password"
  }'
```

#### TestNet Configuration
Use TestNet for development, testing, and learning.

**API Endpoints:**
- **REST API:** `https://testnet-api.ethgas.com`
- **WebSocket:** `wss://testnet-ws.ethgas.com`

**Connection Example:**
```bash
# TestNet
BASE_URL=https://testnet-api.ethgas.com

curl -X POST "${BASE_URL}/api/v1/user/login" \
  -H "Content-Type: application/json" \
  -d '{
    "username": "your_username",
    "password": "your_password"
  }'
```

### Step 2: Authenticate

Start by authenticating with the platform:

```bash
curl -X POST "${BASE_URL}/api/v1/user/login" \
  -H "Content-Type: application/json" \
  -d '{
    "username": "your_username",
    "password": "your_password"
  }'
```

### Step 3: Handle Response

The authentication response includes:

```json
{
  "code": 200,
  "message": "OK",
  "data": {
    "accessToken": "your_access_token",
    "refreshToken": "your_refresh_token",
    "expiresIn": 3600
  }
}
```

### Step 4: Use Access Token

Include the access token in subsequent requests:

```bash
curl -X GET "${BASE_URL}/api/v1/user/info" \
  -H "Authorization: Bearer your_access_token"
```

## WebSocket Connection

For real-time data, establish a WebSocket connection:

#### MainNet WebSocket
Connect to MainNet WebSocket for production real-time data.

**Connection URL:**
```
wss://ws.ethgas.com
```

**Authentication:**
Send authentication message after connection:

```json
{
  "cmd": "login",
  "data": {
    "accessToken": "your_access_token"
  }
}
```

#### TestNet WebSocket
Connect to TestNet WebSocket for development and testing.

**Connection URL:**
```
wss://testnet-ws.ethgas.com
```

**Authentication:**
Send authentication message after connection:

```json
{
  "cmd": "login",
  "data": {
    "accessToken": "your_access_token"
  }
}
```

## Code Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>

```javascript
class ETHGasClient {
    constructor(baseUrl, username, password) {
        this.baseUrl = baseUrl;
        this.username = username;
        this.password = password;
        this.accessToken = null;
    }

    async authenticate() {
        const response = await fetch(`${this.baseUrl}/api/v1/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.username,
                password: this.password
            })
        });

        if (response.ok) {
            const data = await response.json();
            this.accessToken = data.data.accessToken;
            return true;
        }
        return false;
    }

    async getUserInfo() {
        const response = await fetch(`${this.baseUrl}/api/v1/user/info`, {
            headers: {
                'Authorization': `Bearer ${this.accessToken}`
            }
        });
        return response.json();
    }
}

// Usage
const client = new ETHGasClient(
    'https://testnet-api.ethgas.com',
    'your_username',
    'your_password'
);

client.authenticate().then(success => {
    if (success) {
        return client.getUserInfo();
    }
}).then(userInfo => {
    console.log(userInfo);
});
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests
import json

class ETHGasClient:
    def __init__(self, base_url, username, password):
        self.base_url = base_url
        self.username = username
        self.password = password
        self.access_token = None
    
    def authenticate(self):
        response = requests.post(
            f"{self.base_url}/api/v1/user/login",
            json={
                "username": self.username,
                "password": self.password
            }
        )
        
        if response.status_code == 200:
            data = response.json()
            self.access_token = data["data"]["accessToken"]
            return True
        return False
    
    def get_user_info(self):
        headers = {"Authorization": f"Bearer {self.access_token}"}
        response = requests.get(
            f"{self.base_url}/api/v1/user/info",
            headers=headers
        )
        return response.json()

# Usage
client = ETHGasClient(
    "https://testnet-api.ethgas.com",
    "your_username",
    "your_password"
)

if client.authenticate():
    user_info = client.get_user_info()
    print(user_info)
```

  </TabItem>
</Tabs>

## Error Handling

### Common Authentication Errors

| Error Code | Description | Solution |
|------------|-------------|----------|
| 401 | Unauthorized | Check credentials and token validity |
| 403 | Forbidden | Verify API permissions |
| 500 | Server Error | Retry request or contact support |

### Token Refresh

Implement token refresh logic:

```python
def refresh_token(self):
    response = requests.post(
        f"{self.base_url}/api/v1/user/login/refresh",
        headers={"Authorization": f"Bearer {self.refresh_token}"}
    )
    
    if response.status_code == 200:
        data = response.json()
        self.access_token = data["data"]["accessToken"]
        return True
    return False
```

## Security Best Practices

1. **Secure Storage**: Store tokens securely (environment variables, secure vaults)
2. **Token Rotation**: Implement automatic token refresh
3. **HTTPS Only**: Always use HTTPS for API communications
4. **Rate Limiting**: Respect API rate limits
5. **Error Handling**: Implement proper error handling and retry logic

## Next Steps

Now that you're connected:

1. [Explore the API](/docs/api/overview) to understand available endpoints
2. [Set up WebSocket connections](/docs/websocket/overview) for real-time data
3. [Test your integration](/docs/api/user) with user management endpoints
4. [Start trading](/docs/api/trading/whole-block) on the platform

Your ETHGas integration is ready to go! 