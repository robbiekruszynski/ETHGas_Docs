---
sidebar_position: 1
---

# REST API

The ETHGas REST API provides access to authentication, user management, funding, markets, trading, builder, pricer, validator, bundles, and more.

## Quick Navigation

<div className="quick-nav">

<div className="row" style={{ marginBottom: '1rem' }}>
  <div className="col col--3">
    <div className="feature-card text--center" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <h3>Base URLs</h3>
        <p>Choose environment and connection endpoints.</p>
      </div>
      <div style={{ marginTop: '1.5rem' }}>
        <a href="#base-urls" className="button button--outline button--sm">
          View Base URLs →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--3">
    <div className="feature-card text--center" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <h3>Authentication</h3>
        <p>Login, verify, refresh, logout.</p>
      </div>
      <div style={{ marginTop: '1.5rem' }}>
        <a href="#authentication" className="button button--outline button--sm">
          View Authentication →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--3">
    <div className="feature-card text--center" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <h3>Response Format</h3>
        <p>Standard response schema.</p>
      </div>
      <div style={{ marginTop: '1.5rem' }}>
        <a href="#response-format" className="button button--outline button--sm">
          View Response Format →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--3">
    <div className="feature-card text--center" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <h3>Error Handling</h3>
        <p>HTTP codes, messages, and remediation.</p>
      </div>
      <div style={{ marginTop: '1.5rem' }}>
        <a href="#error-handling" className="button button--outline button--sm">
          View Error Handling →
        </a>
      </div>
    </div>
  </div>
</div>

<div className="row" style={{ marginBottom: '1rem' }}>
  <div className="col col--3">
    <div className="feature-card text--center" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <h3>Rate Limiting</h3>
        <p>Limits and guidance for high-volume usage.</p>
      </div>
      <div style={{ marginTop: '1.5rem' }}>
        <a href="#rate-limiting" className="button button--outline button--sm">
          View Rate Limits →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--3">
    <div className="feature-card text--center" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <h3>Quick Start</h3>
        <p>See official examples.</p>
      </div>
      <div style={{ marginTop: '1.5rem' }}>
        <a href="#quick-start-examples" className="button button--outline button--sm">
          View Quick Start →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--3">
    <div className="feature-card text--center" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <h3>API Endpoints</h3>
        <p>Browse endpoints by category.</p>
      </div>
      <div style={{ marginTop: '1.5rem' }}>
        <a href="#api-endpoints" className="button button--outline button--sm">
          View API Endpoints →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--3">
    <div className="feature-card text--center" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <h3>Resources</h3>
        <p>Official docs and GitHub links.</p>
      </div>
      <div style={{ marginTop: '1.5rem' }}>
        <a href="#essential-resources" className="button button--outline button--sm">
          View Resources →
        </a>
      </div>
    </div>
  </div>

</div>

</div>

## Technical Specifications


### Integration Resources

- **API Documentation**: See Below
- **[Commit Boost Module](https://github.com/ethgas-developer/ethgas-preconf-commit-boost-module)** - Validator integration module
- **[Modified rbuilder (preconf-builder)](https://github.com/ethgas-developer/preconf-builder)** - Enhanced block builder
- **[Builder Scripts](https://github.com/ethgas-developer/ethgas-builder-scripts)** - Builder registration and management

## Base URLs

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="testnet" label="TestNet" default>

| Type | URL |
|------|-----|
| **REST API Base URL** | `https://hoodi.app.ethgas.com/api	` |
| **WebSocket URL** | `wss://hoodi.app.ethgas.com/ws	` |

</TabItem>
<TabItem value="mainnet" label="MainNet">

| Type | URL |
|------|-----|
| **REST API Base URL** | `https://mainnet.app.ethgas.com/api` |
| **WebSocket URL** | `wss://mainnet.app.ethgas.com/ws	` |

</TabItem>
</Tabs>

## Authentication

Authentication is required for all private API endpoints. See the authentication endpoints below for login, verification, refresh, and logout functionality.

## Response Format

```json
{
  "code": 200,
  "message": "OK",
  "data": {}
}
```

## Error Handling

API errors return appropriate HTTP status codes and error messages. For detailed error codes, descriptions, and troubleshooting guidance, see the [Error Codes Reference](/docs/reference/error-codes).

## Rate Limiting

API requests are subject to rate limiting. Check response headers for rate limit information.

## Core Components

### Market Types

ETHGas supports multiple market types for different trading and building scenarios.

## Quick Start Examples

For copy/paste‑ready HTTP and Python examples, see the API endpoints below.

## API Endpoints

<div className="api-endpoints-grid">

## Authentication

<details className="api-category" id="authentication">
<summary className="api-category-header">
  <strong>Authentication</strong>
  <span className="api-category-desc">User login, verification, refresh, logout</span>
</summary>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/user/login`
</summary>

Code Example:
**Request Parameters:**

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `addr` | YES | string | User's EOA account (account) address |
| `name` | NO | string | Display name |

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `status` | string | Login status |
| `eip712Message` | object | EIP712 message |
| `nonceHash` | string | A unique four-byte nonce to identify this particular login request |

**Usage:**

Get the response from `/v1/user/login` and sign the `eip712Message` and send the signed message through `/v1/user/login/verify`

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/user/login/verify`
</summary>

**Request Parameters:**

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `addr` | YES | string | User's EOA account (account) address |
| `nonceHash` | YES | string | Nonce Hash |
| `signature` | YES | string | Signature |

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `user` | User | User details |
| `accessToken` | string | Access token |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/user/login/refresh`
</summary>

**Request Parameters:**

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `refreshToken` | YES | string | Refresh token |

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `user` | User | User details |
| `accessToken` | object | Access token used for authentication |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/user/logout`
</summary>

**Request Parameters:**

No parameters required.

**Response Body:**

```json
{}
```

</details>

</details>

## User

<details className="api-category" id="user">
<summary className="api-category-header">
  <strong>User</strong>
  <span className="api-category-desc">User info and profile updates</span>
</summary>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/user/info`
</summary>

**Request Parameters:**

No parameters required.

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `user` | User | User information and details |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/user/update`
</summary>

**Request Parameters:**

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `name` | NO | string | User display name |

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `success` | boolean | Update operation status |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/user/payoutAddress`
</summary>

**Request Parameters:**

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `payoutAddress` | YES | string | User's payout address |

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `success` | boolean | Update operation status |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/user/collateralPerSlot`
</summary>

**Request Parameters:**

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `collateralPerSlot` | YES | number | Collateral amount per slot |

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `success` | boolean | Update operation status |

</details>

</details>

## Account

<details className="api-category" id="account">
<summary className="api-category-header">
  <strong>Account</strong>
  <span className="api-category-desc">Accounts and transactions</span>
</summary>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/user/accounts`
</summary>

**Request Parameters:**

No parameters required.

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `accounts` | array | List of user accounts |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/user/account/{accountId}`
</summary>

**Request Parameters:**

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `accountId` | YES | string | Account identifier |

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `account` | Account | Account details |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/user/account/{accountId}/txs`
</summary>

**Request Parameters:**

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `accountId` | YES | string | Account identifier |

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `transactions` | array | List of account transactions |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/user/account/txs`
</summary>

**Request Parameters:**

No parameters required.

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `transactions` | array | List of all user transactions |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/user/account/transfer/token`
</summary>

**Request Parameters:**

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `fromAccountId` | YES | string | Source account ID |
| `toAccountId` | YES | string | Destination account ID |
| `tokenId` | YES | number | Token identifier |
| `amount` | YES | number | Transfer amount |

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `success` | boolean | Transfer operation status |

</details>

</details>

## Funding

<details className="api-category" id="funding">
<summary className="api-category-header">
  <strong>Funding</strong>
  <span className="api-category-desc">Deposits and withdrawals</span>
</summary>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/p/funding/contractAddress`
</summary>

**Request Parameters:**

No parameters required.

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `contractAddress` | string | Funding contract address |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/user/funding/deposits`
</summary>

**Request Parameters:**

No parameters required.

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `deposits` | array | List of user deposits |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/user/funding/withdraw`
</summary>

**Request Parameters:**

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| `accountId` | YES | string | Account identifier |
| `tokenId` | YES | number | Token identifier |
| `amount` | YES | number | Withdrawal amount |

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `success` | boolean | Withdrawal operation status |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/p/funding/withdraw/dailyWithdrawLimits`
</summary>

**Request Parameters:**

No parameters required.

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `dailyLimits` | object | Daily withdrawal limits |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/user/funding/withdraw/status`
</summary>

**Request Parameters:**

No parameters required.

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `withdrawStatus` | object | Current withdrawal status |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/user/funding/withdraws`
</summary>

**Request Parameters:**

No parameters required.

**Response Body:**

| Name | Type | Description |
|------|------|-------------|
| `withdrawals` | array | List of user withdrawals |

</details>

</details>

## Network & Tokens

<details className="api-category" id="network-tokens">
<summary className="api-category-header">
  <strong>Network & Tokens</strong>
  <span className="api-category-desc">Network info, tokens, fees</span>
</summary>

- <span className="api-method-get">**GET**</span> `/v1/p/network`
- <span className="api-method-get">**GET**</span> `/v1/p/tokens`
- <span className="api-method-get">**GET**</span> `/v1/p/user/fees`

</details>

## Whole Block Markets

<details className="api-category" id="whole-block-markets">
<summary className="api-category-header">
  <strong>Whole Block Markets</strong>
  <span className="api-category-desc">Public market data</span>
</summary>

- <span className="api-method-get">**GET**</span> `/v1/p/wholeblock/markets`
- <span className="api-method-get">**GET**</span> `/v1/p/wholeblock/positions`
- <span className="api-method-get">**GET**</span> `/v1/p/wholeblock/orders`
- <span className="api-method-get">**GET**</span> `/v1/p/wholeblock/trades`

</details>

## Inclusion Preconf Markets

<details className="api-category" id="inclusion-preconf-markets">
<summary className="api-category-header">
  <strong>Inclusion Preconf Markets</strong>
  <span className="api-category-desc">Public market data</span>
</summary>

- <span className="api-method-get">**GET**</span> `/v1/p/inclusion-preconf/markets`
- <span className="api-method-get">**GET**</span> `/v1/p/inclusion-preconf/market`
- <span className="api-method-get">**GET**</span> `/v1/p/inclusion-preconf/trades`
- <span className="api-method-get">**GET**</span> `/v1/p/inclusion-preconf/top-sales`

</details>

## Whole Block Trading

<details className="api-category" id="whole-block-trading">
<summary className="api-category-header">
  <strong>Whole Block Trading</strong>
  <span className="api-category-desc">Place/cancel orders and view positions</span>
</summary>

- <span className="api-method-post">**POST**</span> `/v1/wholeblock/order`
- <span className="api-method-post">**POST**</span> `/v1/wholeblock/cancel-all-orders`
- <span className="api-method-post">**POST**</span> `/v1/wholeblock/cancel-batch-orders`
- <span className="api-method-post">**POST**</span> `/v1/wholeblock/cancel-order`
- <span className="api-method-get">**GET**</span> `/v1/user/wholeblock/all-orders`
- <span className="api-method-get">**GET**</span> `/v1/user/wholeblock/orders`
- <span className="api-method-get">**GET**</span> `/v1/user/wholeblock/positions`
- <span className="api-method-get">**GET**</span> `/v1/user/wholeblock/txs`

</details>

## Inclusion Preconf Trading

<details className="api-category" id="inclusion-preconf-trading">
<summary className="api-category-header">
  <strong>Inclusion Preconf Trading</strong>
  <span className="api-category-desc">Place/cancel orders and view positions</span>
</summary>

- <span className="api-method-post">**POST**</span> `/v1/inclusion-preconf/order`
- <span className="api-method-post">**POST**</span> `/v1/inclusion-preconf/cancel-all-orders`
- <span className="api-method-post">**POST**</span> `/v1/inclusion-preconf/cancel-batch-orders`
- <span className="api-method-post">**POST**</span> `/v1/inclusion-preconf/cancel-order`
- <span className="api-method-get">**GET**</span> `/v1/user/inclusion-preconf/orders`
- <span className="api-method-get">**GET**</span> `/v1/user/inclusion-preconf/all-orders`
- <span className="api-method-get">**GET**</span> `/v1/user/inclusion-preconf/positions`
- <span className="api-method-get">**GET**</span> `/v1/user/inclusion-preconf/txs`
- <span className="api-method-post">**POST**</span> `/v1/user/inclusion-preconf/market/update`

</details>

## Bundle Submission

<details className="api-category" id="bundle-submission">
<summary className="api-category-header">
  <strong>Bundle Submission</strong>
  <span className="api-category-desc">Submit transaction bundles</span>
</summary>

- <span className="api-method-post">**POST**</span> `/api/v1/user/bundle/send`

</details>

## Slot Bundles

<details className="api-category" id="slot-bundles">
<summary className="api-category-header">
  <strong>Slot Bundles</strong>
  <span className="api-category-desc">Per-slot bundle data</span>
</summary>

- <span className="api-method-get">**GET**</span> `/v1/slot/bundles`
- <span className="api-method-get">**GET**</span> `/v1/account/slot/bundles`
- <span className="api-method-get">**GET**</span> `/v1/slot/forceEmptyBlockSpace`
- <span className="api-method-get">**GET**</span> `/v1/p/slot/txs/hash`

</details>

## Builder

<details className="api-category" id="builder">
<summary className="api-category-header">
  <strong>Builder</strong>
  <span className="api-category-desc">Builder registration and delegation</span>
</summary>

- <span className="api-method-post">**POST**</span> `/v1/builder/register`
- <span className="api-method-get">**GET**</span> `/v1/builder/signingMessage`
- <span className="api-method-post">**POST**</span> `/v1/builder/deregister`
- <span className="api-method-get">**GET**</span> `/v1/p/builders`
- <span className="api-method-get">**GET**</span> `/v1/user/builder`
- <span className="api-method-post">**POST**</span> `/v1/user/delegate/builder`
- <span className="api-method-get">**GET**</span> `/v1/user/delegate/builder`
- <span className="api-method-get">**GET**</span> `/v1/p/builder/{slot}`
- <span className="api-method-get">**GET**</span> `/v1/builder/delegation`

</details>

## Pricer

<details className="api-category" id="pricer">
<summary className="api-category-header">
  <strong>Pricer</strong>
  <span className="api-category-desc">Delegation and active markets</span>
</summary>

- <span className="api-method-post">**POST**</span> `/v1/user/delegate/pricer`
- <span className="api-method-get">**GET**</span> `/v1/user/pricer`
- <span className="api-method-get">**GET**</span> `/v1/pricer/account-tokens`
- <span className="api-method-get">**GET**</span> `/v1/pricer/inclusion-preconf/orders`
- <span className="api-method-get">**GET**</span> `/v1/pricer/inclusion-preconf/positions`
- <span className="api-method-get">**GET**</span> `/v1/pricer/wholeblock/orders`
- <span className="api-method-get">**GET**</span> `/v1/pricer/wholeblock/positions`
- <span className="api-method-get">**GET**</span> `/v1/pricer/markets/active`

</details>

## Validator

<details className="api-category" id="validator">
<summary className="api-category-header">
  <strong>Validator</strong>
  <span className="api-category-desc">Registration, settings, payouts</span>
</summary>

- <span className="api-method-get">**GET**</span> `/v1/user/validators`
- <span className="api-method-get">**GET**</span> `/v1/p/validators`
- <span className="api-method-post">**POST**</span> `/v1/validator/register`
- <span className="api-method-post">**POST**</span> `/v1/validator/verify`
- <span className="api-method-post">**POST**</span> `/v1/validator/settings`
- <span className="api-method-post">**POST**</span> `/v1/validator/deregister`
- <span className="api-method-get">**GET**</span> `/v1/validator/fees`
- <span className="api-method-get">**GET**</span> `/v1/validator/onchain/payout`

</details>

</div>

## Essential Resources

- **[GitHub Organization](https://github.com/ethgas-developer)** - All source code and tools
- **[WebSocket API](/docs/websocket/overview)** - Real-time data streaming documentation 