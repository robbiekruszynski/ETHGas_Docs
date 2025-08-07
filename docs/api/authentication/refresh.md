---
sidebar_position: 3
---

# POST /api/v1/user/login/refresh

Refresh an expired access token using a valid refresh token.

## Endpoint

```
POST /api/v1/user/login/refresh
```

## Request Headers

| Header | Value |
|--------|-------|
| Content-Type | application/json |

## Request Body

```json
{
  "refreshToken": "YOUR_REFRESH_TOKEN"
}
```

## Response

### Success Response (200)

```json
{
  "code": 200,
  "message": "OK",
  "data": {
    "accessToken": "new_access_token_here",
    "refreshToken": "new_refresh_token_here",
    "expiresIn": 3600
  }
}
```

### Error Response (401)

```json
{
  "code": 401,
  "message": "Invalid refresh token",
  "data": null
}
```

## Response Fields

| Field | Type | Description |
|-------|------|-------------|
| accessToken | string | New access token |
| refreshToken | string | New refresh token |
| expiresIn | number | Token expiration time in seconds |

## Usage Examples

### cURL

```bash
curl -X POST "https://api.ethgas.com/api/v1/user/login/refresh" \
  -H "Content-Type: application/json" \
  -d '{
    "refreshToken": "your_refresh_token_here"
  }'
```

### Python

```python
import requests
import json

def refresh_token(refresh_token):
    url = "https://api.ethgas.com/api/v1/user/login/refresh"
    headers = {"Content-Type": "application/json"}
    data = {"refreshToken": refresh_token}
    
    response = requests.post(url, headers=headers, json=data)
    
    if response.status_code == 200:
        return response.json()["data"]
    else:
        return None

# Usage
new_tokens = refresh_token("your_refresh_token_here")
if new_tokens:
    print(f"New access token: {new_tokens['accessToken']}")
    print(f"New refresh token: {new_tokens['refreshToken']}")
else:
    print("Token refresh failed")
```

### JavaScript

```javascript
async function refreshToken(refreshToken) {
    const response = await fetch('https://api.ethgas.com/api/v1/user/login/refresh', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            refreshToken: refreshToken
        })
    });

    if (response.ok) {
        const data = await response.json();
        return data.data;
    } else {
        throw new Error('Token refresh failed');
    }
}

// Usage
const refreshTokenValue = 'your_refresh_token_here';
refreshToken(refreshTokenValue)
    .then(tokens => {
        console.log('New access token:', tokens.accessToken);
        console.log('New refresh token:', tokens.refreshToken);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

## Token Refresh Flow

### Automatic Token Refresh

Implement automatic token refresh in your client:

```python
import time
import requests

class ETHGasClient:
    def __init__(self, username, password):
        self.username = username
        self.password = password
        self.access_token = None
        self.refresh_token = None
        self.token_expires_at = 0
    
    def authenticate(self):
        """Initial authentication"""
        response = requests.post(
            "https://api.ethgas.com/api/v1/user/login",
            json={
                "username": self.username,
                "password": self.password
            }
        )
        
        if response.status_code == 200:
            data = response.json()
            self.access_token = data["data"]["accessToken"]
            self.refresh_token = data["data"]["refreshToken"]
            self.token_expires_at = time.time() + data["data"]["expiresIn"]
            return True
        return False
    
    def refresh_if_needed(self):
        """Refresh token if it's expired or about to expire"""
        current_time = time.time()
        
        # Refresh if token expires in the next 5 minutes
        if current_time >= (self.token_expires_at - 300):
            try:
                response = requests.post(
                    "https://api.ethgas.com/api/v1/user/login/refresh",
                    headers={"Authorization": f"Bearer {self.refresh_token}"}
                )
                
                if response.status_code == 200:
                    data = response.json()
                    self.access_token = data["data"]["accessToken"]
                    self.refresh_token = data["data"]["refreshToken"]
                    self.token_expires_at = time.time() + data["data"]["expiresIn"]
                    return True
                else:
                    # Refresh failed, need to re-authenticate
                    return self.authenticate()
            except Exception:
                return self.authenticate()
        
        return True
    
    def make_request(self, endpoint, method="GET", data=None):
        """Make authenticated request with automatic token refresh"""
        if not self.refresh_if_needed():
            raise Exception("Authentication failed")
        
        headers = {"Authorization": f"Bearer {self.access_token}"}
        
        if method == "GET":
            response = requests.get(endpoint, headers=headers)
        else:
            response = requests.post(endpoint, headers=headers, json=data)
        
        return response.json()

# Usage
client = ETHGasClient("username", "password")
if client.authenticate():
    # This will automatically refresh the token if needed
    user_info = client.make_request("https://api.ethgas.com/api/v1/user/info")
    print(user_info)
```

### Error Handling

Handle refresh token errors gracefully:

```python
def handle_token_refresh_error(client, error):
    """Handle token refresh errors"""
    if "401" in str(error) or "Unauthorized" in str(error):
        # Refresh token is invalid, re-authenticate
        if client.authenticate():
            return True
        else:
            raise Exception("Re-authentication failed")
    else:
        # Other error, retry once
        time.sleep(1)
        return client.refresh_if_needed()

# Usage in error handling
try:
    result = client.make_request(endpoint)
except Exception as e:
    if handle_token_refresh_error(client, e):
        # Retry the request
        result = client.make_request(endpoint)
    else:
        raise e
```

## Security Considerations

### Token Storage

Store tokens securely:

```python
import os
from cryptography.fernet import Fernet

class SecureTokenStorage:
    def __init__(self):
        self.key = Fernet.generate_key()
        self.cipher = Fernet(self.key)
    
    def store_tokens(self, access_token, refresh_token):
        """Encrypt and store tokens"""
        encrypted_access = self.cipher.encrypt(access_token.encode())
        encrypted_refresh = self.cipher.encrypt(refresh_token.encode())
        
        # Store in environment variables or secure storage
        os.environ['ETHGAS_ACCESS_TOKEN'] = encrypted_access.decode()
        os.environ['ETHGAS_REFRESH_TOKEN'] = encrypted_refresh.decode()
    
    def get_tokens(self):
        """Retrieve and decrypt tokens"""
        encrypted_access = os.environ.get('ETHGAS_ACCESS_TOKEN')
        encrypted_refresh = os.environ.get('ETHGAS_REFRESH_TOKEN')
        
        if encrypted_access and encrypted_refresh:
            access_token = self.cipher.decrypt(encrypted_access.encode()).decode()
            refresh_token = self.cipher.decrypt(encrypted_refresh.encode()).decode()
            return access_token, refresh_token
        return None, None
```

### Token Rotation

Implement token rotation for enhanced security:

```python
def rotate_tokens(client):
    """Rotate tokens periodically"""
    current_time = time.time()
    
    # Rotate tokens every 24 hours
    if current_time - client.last_rotation > 86400:
        if client.refresh_if_needed():
            client.last_rotation = current_time
            return True
    return False
```

## Error Handling

### Common Errors

| Error Code | Description | Solution |
|------------|-------------|----------|
| 401 | Unauthorized | Refresh token is invalid, re-authenticate |
| 403 | Forbidden | Insufficient permissions |
| 500 | Server Error | Retry request or contact support |

### Error Response Example

```json
{
  "code": 401,
  "message": "Refresh token is invalid or expired",
  "data": null
}
```

## Best Practices

1. **Automatic Refresh**: Implement automatic token refresh before expiration
2. **Error Handling**: Handle refresh failures gracefully
3. **Secure Storage**: Store tokens securely (encrypted)
4. **Token Rotation**: Rotate tokens periodically
5. **Fallback Authentication**: Re-authenticate when refresh fails

## Related Endpoints

- [Login](/docs/api/authentication/login) - Initial authentication
- [Verify Token](/docs/api/authentication/verify) - Verify token validity
- [Logout](/docs/api/authentication/logout) - Invalidate tokens 