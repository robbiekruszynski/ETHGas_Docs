---
sidebar_position: 2
---

# Environments

ETHGas provides multiple environments for development, testing, and production use. Understanding these environments is crucial for proper integration.

## Available Environments

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="testnet" label="TestNet" default>

**Base URL**: `https://testnet-api.ethgas.com`

The TestNet environment is designed for development and testing purposes:

- **Purpose**: Development, testing, and integration
- **Data**: Simulated market data and test transactions
- **Risk**: No real funds or actual trading
- **Features**: Full API functionality with test data
- **Recommended for**: Initial development, API testing, and learning

### TestNet Configuration

```bash
# TestNet Configuration
ETHGAS_API_URL=https://testnet-api.ethgas.com
ETHGAS_WS_URL=wss://testnet-ws.ethgas.com
```

### TestNet Considerations
- **Authentication**: Test credentials provided
- **Data**: Simulated market conditions
- **Limits**: Higher rate limits for testing
- **Support**: Dedicated testnet support

</TabItem>
<TabItem value="mainnet" label="MainNet">

**Base URL**: `https://api.ethgas.com`

The MainNet environment is for production use:

- **Purpose**: Live trading and production applications
- **Data**: Real market data and actual transactions
- **Risk**: Real funds and actual trading
- **Features**: Complete production functionality
- **Recommended for**: Production applications and live trading

### MainNet Configuration

```bash
# MainNet Configuration
ETHGAS_API_URL=https://api.ethgas.com
ETHGAS_WS_URL=wss://ws.ethgas.com
```

### MainNet Considerations
- **Authentication**: Production credentials required
- **Data**: Real market data and conditions
- **Limits**: Production rate limits apply
- **Support**: Production support channels

</TabItem>
</Tabs>

## Environment Configuration

<Tabs>
<TabItem value="testnet-config" label="TestNet" default>

### API Endpoints

All API endpoints follow the same pattern across environments:

```
{ENVIRONMENT_BASE_URL}/api/v1/{ENDPOINT}
```

**TestNet Examples:**
- User Info: `https://testnet-api.ethgas.com/api/v1/user/info`
- Authentication: `https://testnet-api.ethgas.com/api/v1/user/login`
- Market Data: `https://testnet-api.ethgas.com/api/v1/market/data`

### WebSocket Connections

**TestNet WebSocket URL**: `wss://testnet-ws.ethgas.com`

### TestNet Environment Variables

```bash
# TestNet Configuration
ETHGAS_API_URL=https://testnet-api.ethgas.com
ETHGAS_WS_URL=wss://testnet-ws.ethgas.com
ETHGAS_NETWORK=testnet
ETHGAS_CHAIN_ID=17000
```

### TestNet Considerations

- **Authentication**: Test credentials provided
- **Data**: Simulated market conditions
- **Limits**: Higher rate limits for testing
- **Support**: Dedicated testnet support
- **Risk**: No real funds or actual trading

</TabItem>
<TabItem value="mainnet-config" label="MainNet">

### API Endpoints

All API endpoints follow the same pattern across environments:

```
{ENVIRONMENT_BASE_URL}/api/v1/{ENDPOINT}
```

**MainNet Examples:**
- User Info: `https://api.ethgas.com/api/v1/user/info`
- Authentication: `https://api.ethgas.com/api/v1/user/login`
- Market Data: `https://api.ethgas.com/api/v1/market/data`

### WebSocket Connections

**MainNet WebSocket URL**: `wss://ws.ethgas.com`

### MainNet Environment Variables

```bash
# MainNet Configuration
ETHGAS_API_URL=https://api.ethgas.com
ETHGAS_WS_URL=wss://ws.ethgas.com
ETHGAS_NETWORK=mainnet
ETHGAS_CHAIN_ID=1
```

### MainNet Considerations

- **Authentication**: Production credentials required
- **Data**: Real market data and conditions
- **Limits**: Production rate limits apply
- **Support**: Production support channels
- **Risk**: Real funds and actual trading

</TabItem>
</Tabs>

## Environment Selection

### For Development
Start with the TestNet environment:
- No risk of losing real funds
- Full API functionality for testing
- Simulated market data
- Faster iteration and debugging

### For Production
Use the MainNet environment:
- Real trading and market data
- Actual financial transactions
- Production-grade reliability
- Full market access

## Migration Path

Recommended development workflow:

1. **Start with TestNet**: Develop and test your integration
2. **Validate Functionality**: Ensure all features work correctly
3. **Test with Real Data**: Use TestNet's simulated real data
4. **Deploy to MainNet**: Move to production when ready 