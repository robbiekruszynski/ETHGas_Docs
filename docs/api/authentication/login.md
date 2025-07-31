---
sidebar_position: 1
---

# POST /api/v1/user/login

Authenticate a user and obtain access tokens for API access.

## Endpoint

```
POST /api/v1/user/login
```

## Request Headers

| Header | Value |
|--------|-------|
| Content-Type | application/json |

## Request Body

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| username | string | Yes | User's username |
| password | string | Yes | User's password |

### Example Request

```json
{
  "username": "your_username",
  "password": "your_password"
}
```

## Response

### Success Response (200)

```json
{
  "code": 200,
  "message": "OK",
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expiresIn": 3600
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
| accessToken | string | JWT access token for API authentication |
| refreshToken | string | JWT refresh token for renewing access |
| expiresIn | integer | Token expiration time in seconds |

## Usage Examples

### cURL

```bash
curl -X POST "https://api.ethgas.com/api/v1/user/login" \
  -H "Content-Type: application/json" \
  -d '{
    "username": "your_username",
    "password": "your_password"
  }'
```

### Python

```python
import requests

def login(username, password):
    url = "https://api.ethgas.com/api/v1/user/login"
    payload = {
        "username": username,
        "password": password
    }
    
    response = requests.post(url, json=payload)
    
    if response.status_code == 200:
        data = response.json()
        return data["data"]["accessToken"]
    else:
        raise Exception(f"Login failed: {response.text}")

# Usage
access_token = login("your_username", "your_password")
```

### JavaScript

```javascript
async function login(username, password) {
    const response = await fetch('https://api.ethgas.com/api/v1/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    });

    if (response.ok) {
        const data = await response.json();
        return data.data.accessToken;
    } else {
        throw new Error('Login failed');
    }
}

// Usage
login('your_username', 'your_password')
    .then(token => console.log('Access token:', token))
    .catch(error => console.error('Error:', error));
```

## Authentication Flow

1. **Login**: Use this endpoint to authenticate and get tokens
2. **Use Access Token**: Include the access token in subsequent API requests
3. **Refresh Token**: Use the refresh token to get a new access token when it expires
4. **Logout**: Use the logout endpoint to invalidate tokens

## Security Notes

- Store tokens securely (environment variables, secure vaults)
- Never expose tokens in client-side code
- Implement automatic token refresh
- Use HTTPS for all API communications

## Related Endpoints

- [Verify Authentication](/docs/api/authentication/verify) - Verify token validity
- [Refresh Token](/docs/api/authentication/refresh) - Get new access token
- [Logout](/docs/api/authentication/logout) - Invalidate tokens 