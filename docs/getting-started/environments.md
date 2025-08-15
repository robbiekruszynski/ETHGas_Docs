---
sidebar_position: 2
---

# Environments

ETHGas provides multiple environments for development, testing, and production use. Understanding these environments is crucial for proper integration.

## Environment Overview

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="testnet" label="TestNet (Hoodi)" default>

### TestNet Environment

**Base URL**: `https://testnet-api.ethgas.com`

The TestNet environment is designed for development and testing purposes:

- **Purpose**: Development, testing, and integration
- **Data**: Simulated market data and test transactions
- **Risk**: No real funds or actual trading
- **Features**: Full API functionality with test data
- **Recommended for**: Initial development, API testing, and learning

### Configuration

```bash
# TestNet Configuration
ETHGAS_API_URL= https://hoodi.app.ethgas.com/ 
ETHGAS_WS_URL= wss://hoodi.app.ethgas.com/ws
ETHGAS_NETWORK=testnet
ETHGAS_CHAIN_ID=17000
```

### Considerations
- **Authentication**: Test credentials provided
- **Data**: Simulated market conditions
- **Limits**: Higher rate limits for testing
- **Support**: Dedicated testnet support

</TabItem>
<TabItem value="mainnet" label="MainNet">

### MainNet Environment

**Base URL**: `https://api.ethgas.com`

The MainNet environment is for production use:

- **Purpose**: Live trading and production applications
- **Data**: Real market data and actual transactions
- **Risk**: Real funds and actual trading
- **Features**: Complete production functionality
- **Recommended for**: Production applications and live trading

### Configuration

```bash
# MainNet Configuration
ETHGAS_API_URL=https://api.ethgas.com
ETHGAS_WS_URL=wss://ws.ethgas.com
ETHGAS_NETWORK=mainnet
ETHGAS_CHAIN_ID=1
```

### Considerations
- **Authentication**: Production credentials required
- **Data**: Real market data and conditions
- **Limits**: Production rate limits apply
- **Support**: Production support channels

</TabItem>
</Tabs>

## API Endpoints

All API endpoints follow the same pattern across environments:

```
{ENVIRONMENT_BASE_URL}/api/v1/{ENDPOINT}
```

**Examples:**

| Endpoint | URL |
|----------|-----|
| **User Info** | `{BASE_URL}/api/v1/user/info` |
| **Authentication** | `{BASE_URL}/api/v1/user/login` |
| **Market Data** | `{BASE_URL}/api/v1/market/data` |

## Development Workflow

### Recommended Migration Path

<div className="row">
  <div className="col col--12">
    <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
      <span style={{ color: 'var(--ifm-color-primary)', fontSize: '1.2rem', marginRight: '0.5rem' }}>✅</span>
      <h4 style={{ color: 'var(--ifm-color-primary)', margin: '0 0.5rem 0 0', fontSize: '1.1rem' }}>
        Start with TestNet
      </h4>
      <span style={{ color: 'var(--ifm-color-text)', fontSize: '0.95rem' }}>Develop and test your integration</span>
    </div>
    
    <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
      <span style={{ color: 'var(--ifm-color-primary)', fontSize: '1.2rem', marginRight: '0.5rem' }}>✅</span>
      <h4 style={{ color: 'var(--ifm-color-primary)', margin: '0 0.5rem 0 0', fontSize: '1.1rem' }}>
        Validate Functionality
      </h4>
      <span style={{ color: 'var(--ifm-color-text)', fontSize: '0.95rem' }}>Ensure all features work correctly</span>
    </div>
    
    <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
      <span style={{ color: 'var(--ifm-color-primary)', fontSize: '1.2rem', marginRight: '0.5rem' }}>✅</span>
      <h4 style={{ color: 'var(--ifm-color-primary)', margin: '0 0.5rem 0 0', fontSize: '1.1rem' }}>
        Test with Real Data
      </h4>
      <span style={{ color: 'var(--ifm-color-text)', fontSize: '0.95rem' }}>Use TestNet's simulated real data</span>
    </div>
    
    <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
      <span style={{ color: 'var(--ifm-color-primary)', fontSize: '1.2rem', marginRight: '0.5rem' }}>✅</span>
      <h4 style={{ color: 'var(--ifm-color-primary)', margin: '0 0.5rem 0 0', fontSize: '1.1rem' }}>
        Deploy to MainNet
      </h4>
      <span style={{ color: 'var(--ifm-color-text)', fontSize: '0.95rem' }}>Move to production when ready</span>
    </div>
  </div>
</div>

## Infrastructure

### Collateral Contract (EthgasPool)

| Environment | Contract Address |
|-------------|------------------|
| **Mainnet** | `0x41c95AB9DBAC21B3992963Adf0e90F6478364b88` |
| **Hoodi (Test)** | `0xe8bfB84b14c383b94365a895fc8bfA36dE236dc8` |

:::tip Recommendation
Deposit collateral via the website for the best user experience.
:::

### Relay Endpoints

Official relay endpoints by region:

| Region | Environment | Endpoint |
|--------|-------------|----------|
| **Tokyo** | Mainnet | `https://0x88ef3061f598101ca713d556cf757763d9be93d33c3092d3ab6334a36855b6b4a4020528dd533a62d25ea6648251e62e@ap-relay.ethgas.com` |
| **Tokyo** | Hoodi | `https://0xb20c3fe59db9c3655088839ef3d972878d182eb745afd8abb1dd2abf6c14f93cd5934ed4446a5fe1ba039e2bc0cf1011@hoodi-relay.ethgas.com` |
| **Frankfurt** | Mainnet | `https://0x88ef3061f598101ca713d556cf757763d9be93d33c3092d3ab6334a36855b6b4a4020528dd533a62d25ea6648251e62e@eu-relay.ethgas.com` |
| **Virginia** | Mainnet | `https://0x88ef3061f598101ca713d556cf757763d9be93d33c3092d3ab6334a36855b6b4a4020528dd533a62d25ea6648251e62e@us-relay.ethgas.com` |

:::info Relay Usage
Prepend the key as shown in the endpoint URLs for authentication.
:::