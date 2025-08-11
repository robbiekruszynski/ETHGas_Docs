---
sidebar_position: 1
---

# User Management

Manage user profiles, payout address, collateral per slot, and account information.

## Endpoints

- GET `/api/v1/user/info`
- POST `/api/v1/user/update`
- POST `/api/v1/user/payoutAddress`
- POST `/api/v1/user/collateralPerSlot`
- GET `/api/v1/user/accounts`
- GET `/api/v1/user/account/{accountId}`
- GET `/api/v1/user/account/{accountId}/txs`
- GET `/api/v1/user/account/txs`
- POST `/api/v1/user/account/transfer/token`

## Authorization Header

```
Authorization: Bearer YOUR_ACCESS_TOKEN
```

For copy/paste examples (HTTP/Python), use the official API reference:

- See API endpoints below

## Best Practices

☑️ Validate input
☑️ Handle errors
☑️ Send only fields you intend to update
☑️ Store sensitive data securely 