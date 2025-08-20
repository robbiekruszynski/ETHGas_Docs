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

### Exchange Performance
- **TPS**: 100k TPS
- **Latency**: 3-5ms (colo or direct EC2)
- **Location**: AWS - Asia Pacific (Tokyo) / ap-northeast-1

### Integration Resources

- **API Documentation**: This documentation
- **Commit Boost Module**: `https://github.com/ethgas-developer/ethgas-preconf-commit-boost-module`
- **Modified rbuilder (preconf-builder)**: `https://github.com/ethgas-developer/preconf-builder`
- **Builder Scripts**: `https://github.com/ethgas-developer/ethgas-builder-scripts`

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

All API requests require authentication using Bearer tokens.

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

<details className="api-category">
<summary className="api-category-header">
  <strong>Authentication</strong>
  <span className="api-category-desc">User login, verification, refresh, logout</span>
</summary>

- <span className="api-method-post">**POST**</span> `/v1/user/login`
- <span className="api-method-post">**POST**</span> `/v1/user/login/verify`
- <span className="api-method-post">**POST**</span> `/v1/user/login/refresh`
- <span className="api-method-post">**POST**</span> `/v1/user/logout`

</details>

<details className="api-category">
<summary className="api-category-header">
  <strong>User</strong>
  <span className="api-category-desc">User info and profile updates</span>
</summary>

- <span className="api-method-get">**GET**</span> `/v1/user/info`
- <span className="api-method-post">**POST**</span> `/v1/user/update`
- <span className="api-method-post">**POST**</span> `/v1/user/payoutAddress`
- <span className="api-method-post">**POST**</span> `/v1/user/collateralPerSlot`

</details>

<details className="api-category">
<summary className="api-category-header">
  <strong>Account</strong>
  <span className="api-category-desc">Accounts and transactions</span>
</summary>

- <span className="api-method-get">**GET**</span> `/v1/user/accounts`
- <span className="api-method-get">**GET**</span> `/v1/user/account/{accountId}`
- <span className="api-method-get">**GET**</span> `/v1/user/account/{accountId}/txs`
- <span className="api-method-get">**GET**</span> `/v1/user/account/txs`
- <span className="api-method-post">**POST**</span> `/v1/user/account/transfer/token`

</details>

<details className="api-category">
<summary className="api-category-header">
  <strong>Funding</strong>
  <span className="api-category-desc">Deposits and withdrawals</span>
</summary>

- <span className="api-method-get">**GET**</span> `/v1/p/funding/contractAddress`
- <span className="api-method-get">**GET**</span> `/v1/user/funding/deposits`
- <span className="api-method-post">**POST**</span> `/v1/user/funding/withdraw`
- <span className="api-method-get">**GET**</span> `/v1/p/funding/withdraw/dailyWithdrawLimits`
- <span className="api-method-get">**GET**</span> `/v1/user/funding/withdraw/status`
- <span className="api-method-get">**GET**</span> `/v1/user/funding/withdraws`

</details>

<details className="api-category">
<summary className="api-category-header">
  <strong>Network & Tokens</strong>
  <span className="api-category-desc">Network info, tokens, fees</span>
</summary>

- <span className="api-method-get">**GET**</span> `/v1/p/network`
- <span className="api-method-get">**GET**</span> `/v1/p/tokens`
- <span className="api-method-get">**GET**</span> `/v1/p/user/fees`

</details>

<details className="api-category">
<summary className="api-category-header">
  <strong>Whole Block Markets</strong>
  <span className="api-category-desc">Public market data</span>
</summary>

- <span className="api-method-get">**GET**</span> `/v1/p/wholeblock/markets`
- <span className="api-method-get">**GET**</span> `/v1/p/wholeblock/positions`
- <span className="api-method-get">**GET**</span> `/v1/p/wholeblock/orders`
- <span className="api-method-get">**GET**</span> `/v1/p/wholeblock/trades`

</details>

<details className="api-category">
<summary className="api-category-header">
  <strong>Inclusion Preconf Markets</strong>
  <span className="api-category-desc">Public market data</span>
</summary>

- <span className="api-method-get">**GET**</span> `/v1/p/inclusion-preconf/markets`
- <span className="api-method-get">**GET**</span> `/v1/p/inclusion-preconf/market`
- <span className="api-method-get">**GET**</span> `/v1/p/inclusion-preconf/trades`
- <span className="api-method-get">**GET**</span> `/v1/p/inclusion-preconf/top-sales`

</details>

<details className="api-category"> 
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

<details className="api-category">
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

<details className="api-category">
<summary className="api-category-header">
  <strong>Bundle Submission</strong>
  <span className="api-category-desc">Submit transaction bundles</span>
</summary>

- <span className="api-method-post">**POST**</span> `/api/v1/user/bundle/send`

</details>

<details className="api-category">
<summary className="api-category-header">
  <strong>Slot Bundles</strong>
  <span className="api-category-desc">Per-slot bundle data</span>
</summary>

- <span className="api-method-get">**GET**</span> `/v1/slot/bundles`
- <span className="api-method-get">**GET**</span> `/v1/account/slot/bundles`
- <span className="api-method-get">**GET**</span> `/v1/slot/forceEmptyBlockSpace`
- <span className="api-method-get">**GET**</span> `/v1/p/slot/txs/hash`

</details>

<details className="api-category">
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

<details className="api-category">
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

<details className="api-category">
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

- **API Reference**: This documentation
- **GitHub Organization**: `https://github.com/ethgas-developer`
- **WebSocket API**: See WebSocket section in this documentation 