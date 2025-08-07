---
sidebar_position: 1
---

# REST API Overview

The ETHGas REST API provides comprehensive access to all platform features including authentication, user management, trading, and market data.

## Technical Specifications

### Exchange Performance
- **TPS**: 100k TPS
- **Latency**: 3-5ms latency (depending on colo or direct EC2)
- **Location**: AWS - Asia Pacific (Tokyo) / ap-northeast-1

### Integration Resources

**Documentation & Source Code**:
- **[API Documentation](https://developers.ethgas.com)** - Complete API reference
- **[Commit Boost Module](https://github.com/ethgas-developer/ethgas-preconf-commit-boost-module)** - Validator registration and setup
- **[Modified rbuilder](https://github.com/ethgas-developer/preconf-builder)** - Enhanced block builder
- **[Builder Scripts](https://github.com/ethgas-developer/ethgas-builder-scripts)** - Builder registration and management

**Platform Links**:
- **[ETHGas Website](https://ethgas.com)** - Main platform
- **[ETHGas TestNet](https://testnet.ethgas.com)** - Test environment
- **[GitHub Organization](https://github.com/ethgas-developer)** - All source code and tools

## Base URLs

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="testnet" label="TestNet" default>

Use TestNet for development, testing, and learning.

**Base URL:** `https://testnet-api.ethgas.com`

**WebSocket URL:** `wss://testnet-ws.ethgas.com`

**Example:**
```bash
curl -X POST "https://testnet-api.ethgas.com/api/v1/user/login" \
  -H "Content-Type: application/json" \
  -d '{
    "username": "your_username",
    "password": "your_password"
  }'
```

</TabItem>
<TabItem value="mainnet" label="MainNet">

Use MainNet for production applications and real trading.

**Base URL:** `https://api.ethgas.com`

**WebSocket URL:** `wss://ws.ethgas.com`

**Example:**
```bash
curl -X POST "https://api.ethgas.com/api/v1/user/login" \
  -H "Content-Type: application/json" \
  -d '{
    "username": "your_username",
    "password": "your_password"
  }'
```

</TabItem>
</Tabs>

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

## Quick Start Examples

### Authentication Example

```bash
# Login to get access token
curl -X POST "https://api.ethgas.com/api/v1/user/login" \
  -H "Content-Type: application/json" \
  -d '{
    "username": "your_username",
    "password": "your_password"
  }'

# Response
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

### Get User Information

```bash
# Get user profile
curl -X GET "https://api.ethgas.com/api/v1/user/info" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"

# Response
{
  "code": 200,
  "message": "OK",
  "data": {
    "userId": "user_123",
    "username": "your_username",
    "email": "user@example.com",
    "accounts": [
      {
        "accountId": "acc_456",
        "balance": "100.5",
        "currency": "ETH"
      }
    ]
  }
}
```

### Place a Market Order

```bash
# Place market order
curl -X POST "https://api.ethgas.com/api/v1/wholeblock/order" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "marketId": 67890,
    "side": 1,
    "orderType": 1,
    "quantity": 1.5
  }'

# Response
{
  "code": 200,
  "message": "OK",
  "data": {
    "orderId": "order_789",
    "status": "filled",
    "filledQuantity": 1.5,
    "averagePrice": 0.0005
  }
}
```

## API Endpoints

<div className="api-endpoints-grid">

<details className="api-category">
<summary className="api-category-header">
  <strong>Authentication</strong>
  <span className="api-category-desc">User login, verification, and session management</span>
</summary>

- **GET** `/api/v1/user/login/verify` - Verify authentication status
- **POST** `/api/v1/user/login` - User authentication
- **POST** `/api/v1/user/login/refresh` - Refresh access token
- **POST** `/api/v1/user/logout` - User logout

**Example Usage:**
```bash
# Verify token validity
curl -X GET "https://api.ethgas.com/api/v1/user/login/verify" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"

# Refresh expired token
curl -X POST "https://api.ethgas.com/api/v1/user/login/refresh" \
  -H "Content-Type: application/json" \
  -d '{
    "refreshToken": "your_refresh_token"
  }'
```

</details>

<details className="api-category">
<summary className="api-category-header">
  <strong>User Management</strong>
  <span className="api-category-desc">User profiles, accounts, and settings</span>
</summary>

- **GET** `/api/v1/user/info` - Get user information
- **GET** `/api/v1/user/accounts` - Get user accounts
- **GET** `/api/v1/user/account/{accountId}` - Get specific account
- **GET** `/api/v1/user/account/{accountId}/txs` - Get account transactions
- **GET** `/api/v1/user/account/txs` - Get all account transactions
- **POST** `/api/v1/user/update` - Update user profile
- **POST** `/api/v1/user/payoutAddress` - Set payout address
- **POST** `/api/v1/user/collateralPerSlot` - Set collateral per slot
- **POST** `/api/v1/user/account/transfer/token` - Transfer tokens between accounts

**Example Usage:**
```bash
# Get all user accounts
curl -X GET "https://api.ethgas.com/api/v1/user/accounts" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"

# Update user profile
curl -X POST "https://api.ethgas.com/api/v1/user/update" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "newemail@example.com",
    "phone": "+1234567890"
  }'

# Set payout address
curl -X POST "https://api.ethgas.com/api/v1/user/payoutAddress" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "address": "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6"
  }'
```

</details>

<details className="api-category">
<summary className="api-category-header">
  <strong>Funding</strong>
  <span className="api-category-desc">Deposits, withdrawals, and account funding</span>
</summary>

- **GET** `/api/v1/p/funding/contractAddress` - Get funding contract address
- **GET** `/api/v1/user/funding/deposits` - Get user deposits
- **GET** `/api/v1/p/funding/withdraw/dailyWithdrawLimits` - Get withdrawal limits
- **GET** `/api/v1/user/funding/withdraw/status` - Get withdrawal status
- **GET** `/api/v1/user/funding/withdraws` - Get withdrawal history
- **POST** `/api/v1/user/funding/withdraw` - Withdraw funds

**Example Usage:**
```bash
# Get funding contract address
curl -X GET "https://api.ethgas.com/api/v1/p/funding/contractAddress"

# Get user deposits
curl -X GET "https://api.ethgas.com/api/v1/user/funding/deposits" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"

# Withdraw funds
curl -X POST "https://api.ethgas.com/api/v1/user/funding/withdraw" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "amount": "10.5",
    "currency": "ETH",
    "address": "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6"
  }'
```

</details>

<details className="api-category">
<summary className="api-category-header">
  <strong>Market Data</strong>
  <span className="api-category-desc">Network info, tokens, markets, and trading data</span>
</summary>

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

**Example Usage:**
```bash
# Get network information
curl -X GET "https://api.ethgas.com/api/v1/p/network"

# Get whole block markets
curl -X GET "https://api.ethgas.com/api/v1/p/wholeblock/markets"

# Get specific market details
curl -X GET "https://api.ethgas.com/api/v1/p/inclusion-preconf/market?marketId=12345"

# Get recent trades
curl -X GET "https://api.ethgas.com/api/v1/p/wholeblock/trades?limit=50"
```

</details>

<details className="api-category">
<summary className="api-category-header">
  <strong>Trading</strong>
  <span className="api-category-desc">Order placement, cancellation, and position management</span>
</summary>

- **GET** `/api/v1/user/wholeblock/all-orders` - Get all whole block orders
- **GET** `/api/v1/user/wholeblock/orders` - Get user whole block orders
- **GET** `/api/v1/user/wholeblock/positions` - Get user whole block positions
- **GET** `/api/v1/user/inclusion-preconf/all-orders` - Get all inclusion preconf orders
- **GET** `/api/v1/user/inclusion-preconf/orders` - Get user inclusion preconf orders
- **GET** `/api/v1/user/inclusion-preconf/positions` - Get user inclusion preconf positions
- **POST** `/api/v1/wholeblock/order` - Place whole block order
- **POST** `/api/v1/wholeblock/cancel-all-orders` - Cancel all whole block orders
- **POST** `/api/v1/wholeblock/cancel-batch-orders` - Cancel batch whole block orders
- **POST** `/api/v1/wholeblock/cancel-order` - Cancel specific whole block order
- **POST** `/api/v1/inclusion-preconf/order` - Place inclusion preconf order
- **POST** `/api/v1/inclusion-preconf/cancel-all-orders` - Cancel all inclusion preconf orders
- **POST** `/api/v1/inclusion-preconf/cancel-batch-orders` - Cancel batch inclusion preconf orders
- **POST** `/api/v1/inclusion-preconf/cancel-order` - Cancel specific inclusion preconf order

**Example Usage:**
```bash
# Place limit order
curl -X POST "https://api.ethgas.com/api/v1/wholeblock/order" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "marketId": 67890,
    "side": 1,
    "orderType": 2,
    "quantity": 1.5,
    "price": 0.0005
  }'

# Get user positions
curl -X GET "https://api.ethgas.com/api/v1/user/wholeblock/positions" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"

# Cancel specific order
curl -X POST "https://api.ethgas.com/api/v1/wholeblock/cancel-order" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "orderId": "order_123"
  }'
```

</details>

<details className="api-category">
<summary className="api-category-header">
  <strong>Bundle Submission</strong>
  <span className="api-category-desc">Transaction bundle management</span>
</summary>

- **GET** `/api/v1/bundle/status` - Get bundle status
- **GET** `/api/v1/bundle/history` - Get bundle history
- **POST** `/api/v1/bundle/submit` - Submit transaction bundle

**Example Usage:**
```bash
# Submit transaction bundle
curl -X POST "https://api.ethgas.com/api/v1/bundle/submit" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "transactions": [
      "0x02f8c201...",
      "0x02f8c202..."
    ],
    "targetBlock": 12345678,
    "maxFeePerGas": "0x59682f00",
    "maxPriorityFeePerGas": "0x59682f"
  }'

# Get bundle status
curl -X GET "https://api.ethgas.com/api/v1/bundle/status?bundleId=bundle_123" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

</details>

<details className="api-category">
<summary className="api-category-header">
  <strong>Builder Management</strong>
  <span className="api-category-desc">Block builder registration and delegation</span>
</summary>

- **GET** `/api/v1/builder/info` - Get builder information
- **GET** `/api/v1/builder/list` - Get builder list
- **POST** `/api/v1/builder/register` - Register block builder
- **POST** `/api/v1/builder/delegate` - Delegate to builder

**Example Usage:**
```bash
# Register as builder
curl -X POST "https://api.ethgas.com/api/v1/builder/register" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "blsPublicKey": "0x...",
    "feeRecipient": "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6",
    "builderUrl": "https://builder.example.com"
  }'

# Get builder list
curl -X GET "https://api.ethgas.com/api/v1/builder/list"

# Delegate to builder
curl -X POST "https://api.ethgas.com/api/v1/builder/delegate" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "builderId": "builder_123",
    "validatorKeys": ["0x...", "0x..."]
  }'
```

</details>

<details className="api-category">
<summary className="api-category-header">
  <strong>Validator Operations</strong>
  <span className="api-category-desc">Fee recipient and withdrawal management</span>
</summary>

- **GET** `/api/v1/validator/fee-recipient` - Get fee recipient
- **POST** `/api/v1/validator/fee-recipient` - Set fee recipient
- **POST** `/api/v1/validator/withdraw` - Withdraw validator fees

**Example Usage:**
```bash
# Set fee recipient
curl -X POST "https://api.ethgas.com/api/v1/validator/fee-recipient" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "validatorIndex": 12345,
    "feeRecipient": "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6"
  }'

# Get fee recipient
curl -X GET "https://api.ethgas.com/api/v1/validator/fee-recipient?validatorIndex=12345" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"

# Withdraw validator fees
curl -X POST "https://api.ethgas.com/api/v1/validator/withdraw" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "validatorIndex": 12345,
    "amount": "1.5",
    "recipient": "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6"
  }'
```

</details>

</div>

## Essential Resources

### GitHub Repositories

- **[ETHGas Preconf Commit Boost Module](https://github.com/ethgas-developer/ethgas-preconf-commit-boost-module)** - Validator setup and integration
- **[ETHGas Builder Scripts](https://github.com/ethgas-developer/ethgas-builder-scripts)** - Builder registration and management
- **[Preconf Builder](https://github.com/ethgas-developer/preconf-builder)** - Modified rbuilder for ETHGas integration
- **[ETHGas Contracts](https://github.com/ethgas-developer/ethgas-contracts-avs-for-audit)** - Smart contract implementations

### Documentation Links

- **[Builder Setup Guide](/docs/api/builder/setup)** - Complete builder setup instructions
- **[Validator Setup Guide](/docs/validators/setup)** - Validator integration guide
- **[WebSocket API](/docs/websocket/overview)** - Real-time data streaming
- **[Authentication Guide](/docs/api/authentication/login)** - API authentication details

## Next Steps

- [Authentication](/docs/api/authentication) - Learn about API authentication
- [User Management](/docs/api/user) - Manage user accounts and profiles
- [Trading](/docs/api/whole-block-trading) - Start trading on the platform
- [WebSocket API](/docs/websocket/overview) - Real-time data streaming 