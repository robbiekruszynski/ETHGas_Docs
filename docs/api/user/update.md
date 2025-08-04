---
sidebar_position: 1
---

# POST /api/v1/user/update

Update user profile information.

## Endpoint

```
POST /api/v1/user/update
```

## Request Headers

| Header | Value |
|--------|-------|
| Content-Type | application/json |
| Authorization | Bearer {access_token} |

## Request Body

```json
{
  "username": "string",
  "email": "string",
  "phone": "string",
  "country": "string",
  "timezone": "string"
}
```

### Request Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| username | string | No | New username |
| email | string | No | New email address |
| phone | string | No | Phone number |
| country | string | No | Country code |
| timezone | string | No | Timezone (e.g., "UTC") |

## Response

### Success Response (200)

```json
{
  "code": 200,
  "message": "OK",
  "data": {
    "userId": "user_123",
    "username": "updated_username",
    "email": "user@example.com",
    "phone": "+1234567890",
    "country": "US",
    "timezone": "UTC",
    "updatedAt": 1640995200
  }
}
```

### Error Response (400)

```json
{
  "code": 400,
  "message": "Validation Error",
  "data": null
}
```

## Usage Examples

### cURL

```bash
curl -X POST "https://api.ethgas.com/api/v1/user/update" \
  -H "Authorization: Bearer your_access_token" \
  -H "Content-Type: application/json" \
  -d '{
    "username": "new_username",
    "email": "newemail@example.com"
  }'
```

### Python

```python
import requests

def update_user_profile(access_token, user_data):
    url = "https://api.ethgas.com/api/v1/user/update"
    headers = {
        "Authorization": f"Bearer {access_token}",
        "Content-Type": "application/json"
    }
    
    response = requests.post(url, headers=headers, json=user_data)
    
    if response.status_code == 200:
        data = response.json()
        return data["data"]
    else:
        raise Exception(f"Update failed: {response.text}")

# Usage
user_data = {
    "username": "new_username",
    "email": "newemail@example.com",
    "timezone": "UTC"
}

try:
    updated_user = update_user_profile("your_access_token", user_data)
    print(f"User updated: {updated_user}")
except Exception as e:
    print(f"Error: {e}")
```

### JavaScript

```javascript
async function updateUserProfile(accessToken, userData) {
    const response = await fetch('https://api.ethgas.com/api/v1/user/update', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });

    if (response.ok) {
        const data = await response.json();
        return data.data;
    } else {
        throw new Error('Update failed');
    }
}

// Usage
const userData = {
    username: 'new_username',
    email: 'newemail@example.com',
    timezone: 'UTC'
};

updateUserProfile('your_access_token', userData)
    .then(updatedUser => console.log('User updated:', updatedUser))
    .catch(error => console.error('Error:', error));
```

## Validation Rules

### Username
- Must be 3-20 characters long
- Can contain letters, numbers, and underscores
- Must be unique across the platform

### Email
- Must be a valid email format
- Must be unique across the platform

### Phone
- Must be in international format (e.g., +1234567890)
- Optional field

### Country
- Must be a valid ISO country code
- Optional field

### Timezone
- Must be a valid timezone identifier
- Optional field

## Error Handling

### Common Errors

| Error Code | Description | Solution |
|------------|-------------|----------|
| 400 | Validation Error | Check input format and requirements |
| 401 | Unauthorized | Check access token |
| 409 | Username/Email Already Exists | Choose different username/email |
| 500 | Server Error | Retry request or contact support |

### Error Response Example

```json
{
  "code": 409,
  "message": "Username already exists",
  "data": null
}
```

## Best Practices

### Partial Updates
Only include fields you want to update:

```python
# Update only email
user_data = {"email": "newemail@example.com"}

# Update only timezone
user_data = {"timezone": "America/New_York"}
```

### Validation
Always validate data before sending:

```python
def validate_user_data(user_data):
    if 'email' in user_data:
        if not is_valid_email(user_data['email']):
            raise ValueError("Invalid email format")
    
    if 'username' in user_data:
        if len(user_data['username']) < 3:
            raise ValueError("Username too short")
    
    return True
```

### Error Handling
Implement proper error handling:

```python
def safe_update_user(access_token, user_data):
    try:
        # Validate data first
        validate_user_data(user_data)
        
        # Attempt update
        result = update_user_profile(access_token, user_data)
        return result
    except ValueError as e:
        print(f"Validation error: {e}")
        return None
    except Exception as e:
        print(f"Update failed: {e}")
        return None
```

## Related Endpoints

- [Get User Info](/docs/api/user/info) - Retrieve user information
- [Update Payout Address](/docs/api/user/payout-address) - Update payment address
- [Update Collateral Per Slot](/docs/api/user/collateral-per-slot) - Update collateral settings 