---
sidebar_position: 4
---

# POST /api/v1/user/logout

Logout and invalidate the current access token.

## Endpoint

```
POST /api/v1/user/logout
```

## Request Headers

| Header | Value |
|--------|-------|
| Content-Type | application/json |
| Authorization | Bearer {access_token} |

## Request Body

No request body required. The access token is passed in the Authorization header.

## Response

### Success Response (200)

```json
{
  "code": 200,
  "message": "OK",
  "data": {
    "loggedOut": true
  }
}
```

### Error Response (401)

```json
{
  "code": 401,
  "message": "Unauthorized",
  "data": null
}
```

## Response Fields

| Field | Type | Description |
|-------|------|-------------|
| loggedOut | boolean | Confirmation that logout was successful |

## Usage Examples

### cURL

```bash
curl -X POST "https://api.ethgas.com/api/v1/user/logout" \
  -H "Authorization: Bearer your_access_token"
```

### Python

```python
import requests

def logout(access_token):
    url = "https://api.ethgas.com/api/v1/user/logout"
    headers = {"Authorization": f"Bearer {access_token}"}
    
    response = requests.post(url, headers=headers)
    
    if response.status_code == 200:
        data = response.json()
        return data["data"]["loggedOut"]
    else:
        return False

# Usage
success = logout("your_access_token")
if success:
    print("Successfully logged out")
else:
    print("Logout failed")
```

### JavaScript

```javascript
async function logout(accessToken) {
    const response = await fetch('https://api.ethgas.com/api/v1/user/logout', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    });

    if (response.ok) {
        const data = await response.json();
        return data.data.loggedOut;
    }
    return false;
}

// Usage
logout('your_access_token')
    .then(success => {
        if (success) {
            console.log('Successfully logged out');
        } else {
            console.log('Logout failed');
        }
    })
    .catch(error => console.error('Error:', error));
```

## Session Management

### Complete Authentication Flow

Implement a complete authentication flow with logout:

```python
import requests
import time

class ETHGasSession:
    def __init__(self, username, password):
        self.username = username
        self.password = password
        self.access_token = None
        self.refresh_token = None
        self.base_url = "https://api.ethgas.com"
    
    def login(self):
        """Authenticate and get tokens"""
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
            self.refresh_token = data["data"]["refreshToken"]
            return True
        return False
    
    def logout(self):
        """Logout and invalidate tokens"""
        if not self.access_token:
            return True  # Already logged out
        
        response = requests.post(
            f"{self.base_url}/api/v1/user/logout",
            headers={"Authorization": f"Bearer {self.access_token}"}
        )
        
        # Clear tokens regardless of response
        self.access_token = None
        self.refresh_token = None
        
        return response.status_code == 200
    
    def is_authenticated(self):
        """Check if user is authenticated"""
        return self.access_token is not None
    
    def make_request(self, endpoint, method="GET", data=None):
        """Make authenticated request"""
        if not self.access_token:
            raise Exception("Not authenticated")
        
        headers = {"Authorization": f"Bearer {self.access_token}"}
        
        if method == "GET":
            response = requests.get(f"{self.base_url}{endpoint}", headers=headers)
        else:
            response = requests.post(f"{self.base_url}{endpoint}", headers=headers, json=data)
        
        return response.json()

# Usage
session = ETHGasSession("username", "password")

# Login
if session.login():
    print("Successfully logged in")
    
    # Make some requests
    user_info = session.make_request("/api/v1/user/info")
    print(f"User info: {user_info}")
    
    # Logout when done
    if session.logout():
        print("Successfully logged out")
    else:
        print("Logout failed")
else:
    print("Login failed")
```

### Secure Logout Implementation

Implement secure logout with proper cleanup:

```python
import os
import requests

class SecureETHGasClient:
    def __init__(self):
        self.access_token = os.environ.get('ETHGAS_ACCESS_TOKEN')
        self.refresh_token = os.environ.get('ETHGAS_REFRESH_TOKEN')
    
    def logout(self):
        """Secure logout with cleanup"""
        try:
            # Attempt to logout on server
            if self.access_token:
                response = requests.post(
                    "https://api.ethgas.com/api/v1/user/logout",
                    headers={"Authorization": f"Bearer {self.access_token}"}
                )
            
            # Always clean up local tokens
            self.clear_tokens()
            
            return True
        except Exception as e:
            print(f"Logout error: {e}")
            # Still clear tokens even if server logout fails
            self.clear_tokens()
            return True
    
    def clear_tokens(self):
        """Clear all stored tokens"""
        # Remove from environment variables
        if 'ETHGAS_ACCESS_TOKEN' in os.environ:
            del os.environ['ETHGAS_ACCESS_TOKEN']
        if 'ETHGAS_REFRESH_TOKEN' in os.environ:
            del os.environ['ETHGAS_REFRESH_TOKEN']
        
        # Clear instance variables
        self.access_token = None
        self.refresh_token = None
    
    def clear_secure_storage(self):
        """Clear tokens from secure storage"""
        try:
            # Clear from keychain (macOS)
            import subprocess
            subprocess.run([
                'security', 'delete-generic-password',
                '-s', 'ETHGas', '-a', os.getenv('USER')
            ], capture_output=True)
        except:
            pass
        
        try:
            # Clear from Windows Credential Manager
            import subprocess
            subprocess.run([
                'cmdkey', '/delete:ETHGas'
            ], capture_output=True)
        except:
            pass

# Usage
client = SecureETHGasClient()
client.logout()
client.clear_secure_storage()
```

## Error Handling

### Common Errors

| Error Code | Description | Solution |
|------------|-------------|----------|
| 401 | Unauthorized | Token is invalid or expired |
| 403 | Forbidden | Insufficient permissions |
| 500 | Server Error | Retry request or contact support |

### Error Response Example

```json
{
  "code": 401,
  "message": "Token is invalid or expired",
  "data": null
}
```

## Security Best Practices

### Token Invalidation

Always invalidate tokens on logout:

```python
def secure_logout(client):
    """Secure logout with token invalidation"""
    try:
        # Logout on server
        client.logout()
    except Exception:
        # Continue even if server logout fails
        pass
    
    # Always clear local tokens
    client.clear_tokens()
    
    # Clear any cached data
    client.clear_cache()
    
    # Reset session state
    client.reset_session()
```

### Session Cleanup

Implement comprehensive session cleanup:

```python
class ETHGasSessionManager:
    def __init__(self):
        self.active_sessions = {}
    
    def create_session(self, username, password):
        """Create new session"""
        session = ETHGasSession(username, password)
        if session.login():
            self.active_sessions[username] = session
            return session
        return None
    
    def logout_session(self, username):
        """Logout specific session"""
        if username in self.active_sessions:
            session = self.active_sessions[username]
            session.logout()
            del self.active_sessions[username]
            return True
        return False
    
    def logout_all(self):
        """Logout all active sessions"""
        for username in list(self.active_sessions.keys()):
            self.logout_session(username)
    
    def cleanup_expired_sessions(self):
        """Clean up expired sessions"""
        current_time = time.time()
        expired_users = []
        
        for username, session in self.active_sessions.items():
            if not session.is_authenticated():
                expired_users.append(username)
        
        for username in expired_users:
            del self.active_sessions[username]
```

## Use Cases

### Application Shutdown

Logout when application shuts down:

```python
import atexit

# Register logout on application exit
atexit.register(client.logout)

# Or use context manager
class ETHGasContext:
    def __init__(self, username, password):
        self.client = ETHGasSession(username, password)
    
    def __enter__(self):
        self.client.login()
        return self.client
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        self.client.logout()

# Usage
with ETHGasContext("username", "password") as client:
    # Use client for API calls
    user_info = client.make_request("/api/v1/user/info")
    # Automatic logout when exiting context
```

### User-Initiated Logout

Handle user logout requests:

```python
def handle_user_logout(client):
    """Handle user logout request"""
    try:
        # Show logout confirmation
        confirm = input("Are you sure you want to logout? (y/n): ")
        
        if confirm.lower() == 'y':
            if client.logout():
                print("Successfully logged out")
                return True
            else:
                print("Logout failed")
                return False
        else:
            print("Logout cancelled")
            return False
    except Exception as e:
        print(f"Logout error: {e}")
        return False
```

## Related Endpoints

- [Login](/docs/api/authentication/login) - Initial authentication
- [Verify Token](/docs/api/authentication/verify) - Verify token validity
- [Refresh Token](/docs/api/authentication/refresh) - Get new access token 