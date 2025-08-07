---
sidebar_position: 1
---

# User Management

Manage user profiles, settings, and account information through the ETHGas API.

## Overview

The User Management API provides endpoints for updating user profiles, managing payout addresses, and accessing account information.

## Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/v1/user/update` | POST | Update user profile information |
| `/api/v1/user/payoutAddress` | POST | Update payout address |
| `/api/v1/user/info` | GET | Get user information |

## Quick Start

### Get User Information

```bash
curl -X GET "https://api.ethgas.com/api/v1/user/info" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

### Update Profile

```bash
curl -X POST "https://api.ethgas.com/api/v1/user/update" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "username": "new_username",
    "email": "newemail@example.com"
  }'
```

### Set Payout Address

```bash
curl -X POST "https://api.ethgas.com/api/v1/user/payoutAddress" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "payoutAddress": "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6"
  }'
```

## User Profile Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| username | string | No | User's display name |
| email | string | No | Email address |
| phone | string | No | Phone number |
| country | string | No | Country code |
| timezone | string | No | Timezone identifier |

## Payout Address

The payout address is used for receiving:
- Validator fees
- Trading profits
- Platform rewards
- Other payments

### Address Requirements

- Must be a valid Ethereum address
- Should be checksummed (recommended)
- Cannot be a zero address
- Must be different from current address

## Error Handling

| Error Code | Description | Solution |
|------------|-------------|----------|
| 400 | Validation Error | Check input format |
| 401 | Unauthorized | Check access token |
| 409 | Already Exists | Choose different value |
| 500 | Server Error | Retry or contact support |

## Best Practices

1. **Validate Input** - Always validate data before sending
2. **Handle Errors** - Implement proper error handling
3. **Partial Updates** - Only include fields you want to update
4. **Secure Storage** - Store sensitive data securely

## Related Documentation

- [Update Profile](/docs/api/user/update) - Update user information
- [Payout Address](/docs/api/user/payout-address) - Manage payout address
- [Authentication](/docs/api/authentication) - Token management 