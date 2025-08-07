---
sidebar_position: 1
---

# REST API Overview

The ETHGas REST API provides comprehensive access to all platform features including authentication, user management, trading, and market data.

## Base URLs

- **TestNet**: `https://testnet-api.ethgas.com`
- **MainNet**: `https://api.ethgas.com`

## Authentication

All API requests require authentication using Bearer tokens. See the [Authentication](/docs/api/authentication) section for details.

## Response Format

All API responses follow a standard format:

```json
{
  "code": 200,
  "message": "OK",
  "data": {
    // Response data here
  }
}
```

## Error Handling

API errors return appropriate HTTP status codes and error messages:

```json
{
  "code": 400,
  "message": "Bad Request",
  "data": null
}
```

## Rate Limiting

API requests are subject to rate limiting. Check response headers for rate limit information.

## API Endpoints

<details>
<summary><strong>Authentication</strong> - User login, verification, and session management</summary>

### GET Endpoints

- **GET** `/api/v1/user/login/verify` - Verify authentication status

### POST Endpoints

- **POST** `/api/v1/user/login` - User authentication
- **POST** `/api/v1/user/login/refresh` - Refresh access token
- **POST** `/api/v1/user/logout` - User logout

</details>

<details>
<summary><strong>User Management</strong> - User profiles, accounts, and settings</summary>

### GET Endpoints

- **GET** `/api/v1/user/info` - Get user information
- **GET** `/api/v1/user/accounts` - Get user accounts
- **GET** `/api/v1/user/account/{accountId}` - Get specific account
- **GET** `/api/v1/user/account/{accountId}/txs` - Get account transactions
- **GET** `/api/v1/user/account/txs` - Get all account transactions

### POST Endpoints

- **POST** `/api/v1/user/update` - Update user profile
- **POST** `/api/v1/user/payoutAddress` - Set payout address
- **POST** `/api/v1/user/collateralPerSlot` - Set collateral per slot
- **POST** `/api/v1/user/account/transfer/token` - Transfer tokens between accounts

</details>

<details>
<summary><strong>Funding</strong> - Deposits, withdrawals, and account funding</summary>

### GET Endpoints

- **GET** `/api/v1/p/funding/contractAddress` - Get funding contract address
- **GET** `/api/v1/user/funding/deposits` - Get user deposits
- **GET** `/api/v1/p/funding/withdraw/dailyWithdrawLimits` - Get withdrawal limits
- **GET** `/api/v1/user/funding/withdraw/status` - Get withdrawal status
- **GET** `/api/v1/user/funding/withdraws` - Get withdrawal history

### POST Endpoints

- **POST** `/api/v1/user/funding/withdraw` - Withdraw funds

</details>

<details>
<summary><strong>Market Data</strong> - Network info, tokens, markets, and trading data</summary>

### GET Endpoints

- **GET** `/api/v1/p/network` - Get network information
- **GET** `/api/v1/p/tokens` - Get supported tokens
- **GET** `/api/v1/p/user/fees` - Get user fees
- **GET** `/api/v1/p/wholeblock/markets` - Get whole block markets
- **GET** `/api/v1/p/wholeblock/positions` - Get whole block positions
- **GET** `/api/v1/p/wholeblock/orders` - Get whole block orders
- **GET** `/api/v1/p/wholeblock/trades` - Get whole block trades
- **GET** `/api/v1/p/inclusion-preconf/markets` - Get inclusion preconf markets
- **GET** `/api/v1/p/inclusion-preconf/market` - Get specific inclusion preconf market
- **GET** `/api/v1/p/inclusion-preconf/trades` - Get inclusion preconf trades
- **GET** `/api/v1/p/inclusion-preconf/top-sales` - Get top sales

</details>

<details>
<summary><strong>Trading</strong> - Order placement, cancellation, and position management</summary>

### GET Endpoints

- **GET** `/api/v1/user/wholeblock/all-orders` - Get all whole block orders
- **GET** `/api/v1/user/wholeblock/orders` - Get user whole block orders
- **GET** `/api/v1/user/wholeblock/positions` - Get user whole block positions
- **GET** `/api/v1/user/inclusion-preconf/all-orders` - Get all inclusion preconf orders
- **GET** `/api/v1/user/inclusion-preconf/orders` - Get user inclusion preconf orders
- **GET** `/api/v1/user/inclusion-preconf/positions` - Get user inclusion preconf positions

### POST Endpoints

- **POST** `/api/v1/wholeblock/order` - Place whole block order
- **POST** `/api/v1/wholeblock/cancel-all-orders` - Cancel all whole block orders
- **POST** `/api/v1/wholeblock/cancel-batch-orders` - Cancel batch whole block orders
- **POST** `/api/v1/wholeblock/cancel-order` - Cancel specific whole block order
- **POST** `/api/v1/inclusion-preconf/order` - Place inclusion preconf order
- **POST** `/api/v1/inclusion-preconf/cancel-all-orders` - Cancel all inclusion preconf orders
- **POST** `/api/v1/inclusion-preconf/cancel-batch-orders` - Cancel batch inclusion preconf orders
- **POST** `/api/v1/inclusion-preconf/cancel-order` - Cancel specific inclusion preconf order

</details>

<details>
<summary><strong>Bundle Submission</strong> - Transaction bundle management</summary>

### GET Endpoints

- **GET** `/api/v1/bundle/status` - Get bundle status
- **GET** `/api/v1/bundle/history` - Get bundle history

### POST Endpoints

- **POST** `/api/v1/bundle/submit` - Submit transaction bundle

</details>

<details>
<summary><strong>Builder Management</strong> - Block builder registration and delegation</summary>

### GET Endpoints

- **GET** `/api/v1/builder/info` - Get builder information
- **GET** `/api/v1/builder/list` - Get builder list

### POST Endpoints

- **POST** `/api/v1/builder/register` - Register block builder
- **POST** `/api/v1/builder/delegate` - Delegate to builder

</details>

<details>
<summary><strong>Validator Operations</strong> - Fee recipient and withdrawal management</summary>

### GET Endpoints

- **GET** `/api/v1/validator/fee-recipient` - Get fee recipient

### POST Endpoints

- **POST** `/api/v1/validator/fee-recipient` - Set fee recipient
- **POST** `/api/v1/validator/withdraw` - Withdraw validator fees

</details>

## Next Steps

- [Authentication](/docs/api/authentication) - Learn about API authentication
- [User Management](/docs/api/user) - Manage user accounts and profiles
- [Trading](/docs/api/whole-block-trading) - Start trading on the platform
- [WebSocket API](/docs/websocket/overview) - Real-time data streaming 