---
sidebar_position: 2
---

# POST /api/v1/user/login/verify

Verify the validity of an access token.

## Endpoint

```
POST /api/v1/user/login/verify
```

## Request Headers

| Header | Value |
|--------|-------|
| Content-Type | application/json |
| Authorization | Bearer {access_token} |

## Request Body

No request body required. The token is passed in the Authorization header.

## Response

### Success Response (200)

```json
{
  "code": 200,
  "message": "OK",
  "data": {
    "valid": true,
    "userId": "user_123",
    "expiresAt": 1640995200
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
| valid | boolean | Whether the token is valid |
| userId | string | User ID associated with the token |
| expiresAt | integer | Token expiration timestamp |

## Usage Examples

### cURL

```bash
curl -X POST "https://api.ethgas.com/api/v1/user/login/verify" \
  -H "Authorization: Bearer your_access_token"
```

### Python

```python
import requests

def verify_token(access_token):
    url = "https://api.ethgas.com/api/v1/user/login/verify"
    headers = {"Authorization": f"Bearer {access_token}"}
    
    response = requests.post(url, headers=headers)
    
    if response.status_code == 200:
        data = response.json()
        return data["data"]["valid"]
    else:
        return False

# Usage
is_valid = verify_token("your_access_token")
print(f"Token is valid: {is_valid}")
```

### JavaScript

```javascript
async function verifyToken(accessToken) {
    const response = await fetch('https://api.ethgas.com/api/v1/user/login/verify', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    });

    if (response.ok) {
        const data = await response.json();
        return data.data.valid;
    }
    return false;
}

// Usage
verifyToken('your_access_token')
    .then(isValid => console.log('Token is valid:', isValid))
    .catch(error => console.error('Error:', error));
```

## Use Cases

### Token Validation
Use this endpoint to verify token validity before making API calls:

```python
def make_authenticated_request(access_token, endpoint, data=None):
    # First verify the token
    if not verify_token(access_token):
        # Token is invalid, re-authenticate
        new_token = authenticate_user(username, password)
        access_token = new_token
    
    # Make the actual request
    headers = {"Authorization": f"Bearer {access_token}"}
    response = requests.post(endpoint, headers=headers, json=data)
    return response.json()
```

### Session Management
Implement automatic token verification:

```python
class ETHGasClient:
    def __init__(self, access_token):
        self.access_token = access_token
        self.last_verify_time = 0
        self.verify_interval = 300  # 5 minutes
    
    def verify_token_if_needed(self):
        current_time = time.time()
        if current_time - self.last_verify_time > self.verify_interval:
            if not verify_token(self.access_token):
                raise Exception("Token is invalid")
            self.last_verify_time = current_time
    
    def make_request(self, endpoint, data=None):
        self.verify_token_if_needed()
        # Make the actual request
        headers = {"Authorization": f"Bearer {self.access_token}"}
        response = requests.post(endpoint, headers=headers, json=data)
        return response.json()
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

## Best Practices

1. **Regular Verification**: Verify tokens periodically during long sessions
2. **Error Handling**: Implement proper error handling for invalid tokens
3. **Re-authentication**: Automatically re-authenticate when tokens are invalid
4. **Caching**: Cache verification results to reduce API calls

## Related Endpoints

- [Login](/docs/api/authentication/login) - Authenticate and get tokens
- [Refresh Token](/docs/api/authentication/refresh) - Get new access token
- [Logout](/docs/api/authentication/logout) - Invalidate tokens 