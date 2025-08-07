---
sidebar_position: 3
---

# GET /api/v1/user/info

Get current user information and account details.

## Endpoint

```
GET /api/v1/user/info
```

## Request Headers

| Header | Value |
|--------|-------|
| Authorization | Bearer YOUR_ACCESS_TOKEN |

## Request Body

No request body required.

## Response

### Success Response (200)

```json
{
  "code": 200,
  "message": "OK",
  "data": {
    "userId": "user_123",
    "username": "john_doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "country": "US",
    "timezone": "UTC",
    "payoutAddress": "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6",
    "accountType": "validator",
    "createdAt": 1640995200,
    "lastLogin": 1640995200,
    "status": "active"
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
| userId | string | Unique user identifier |
| username | string | User's display name |
| email | string | Email address |
| phone | string | Phone number |
| country | string | Country code |
| timezone | string | Timezone identifier |
| payoutAddress | string | Ethereum payout address |
| accountType | string | Account type (validator, trader, etc.) |
| createdAt | integer | Account creation timestamp |
| lastLogin | integer | Last login timestamp |
| status | string | Account status (active, suspended, etc.) |

## Usage Examples

### cURL

```bash
curl -X GET "https://api.ethgas.com/api/v1/user/info" \
  -H "Authorization: Bearer your_access_token"
```

### Python

```python
import requests

def get_user_info(access_token):
    url = "https://api.ethgas.com/api/v1/user/info"
    headers = {"Authorization": f"Bearer {access_token}"}
    
    response = requests.get(url, headers=headers)
    
    if response.status_code == 200:
        return response.json()["data"]
    else:
        return None

# Usage
user_info = get_user_info("your_access_token")
if user_info:
    print(f"Username: {user_info['username']}")
    print(f"Email: {user_info['email']}")
    print(f"Account Type: {user_info['accountType']}")
```

### JavaScript

```javascript
async function getUserInfo(accessToken) {
    const response = await fetch('https://api.ethgas.com/api/v1/user/info', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    });

    if (response.ok) {
        const data = await response.json();
        return data.data;
    }
    return null;
}

// Usage
const accessToken = 'your_access_token';
getUserInfo(accessToken)
    .then(userInfo => {
        if (userInfo) {
            console.log('Username:', userInfo.username);
            console.log('Email:', userInfo.email);
            console.log('Account Type:', userInfo.accountType);
        }
    })
    .catch(error => console.error('Error:', error));
```

## Account Types

| Type | Description |
|------|-------------|
| validator | Ethereum validator account |
| trader | Trading account |
| builder | Block builder account |
| developer | Developer account |

## Account Status

| Status | Description |
|--------|-------------|
| active | Account is active and functional |
| pending | Account is pending verification |
| suspended | Account is temporarily suspended |
| disabled | Account is permanently disabled |

## Error Handling

| Error Code | Description | Solution |
|------------|-------------|----------|
| 401 | Unauthorized | Check access token |
| 403 | Forbidden | Check account permissions |
| 500 | Server Error | Retry request or contact support |

## Related Endpoints

- [Update Profile](/docs/api/user/update) - Update user information
- [Payout Address](/docs/api/user/payout-address) - Manage payout address
- [Authentication](/docs/api/authentication) - Token management 