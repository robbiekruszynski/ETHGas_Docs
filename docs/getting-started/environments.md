---
sidebar_position: 2
---

# Environments

ETHGas provides multiple environments for development, testing, and production use. Understanding these environments is crucial for proper integration.

## Available Environments

### TestNet Environment
**Base URL**: `https://testnet-api.ethgas.com`

The TestNet environment is designed for development and testing purposes:

- **Purpose**: Development, testing, and integration
- **Data**: Simulated market data and test transactions
- **Risk**: No real funds or actual trading
- **Features**: Full API functionality with test data
- **Recommended for**: Initial development, API testing, and learning

### MainNet Environment
**Base URL**: `https://api.ethgas.com`

The MainNet environment is for production use:

- **Purpose**: Live trading and production applications
- **Data**: Real market data and actual transactions
- **Risk**: Real funds and actual trading
- **Features**: Complete production functionality
- **Recommended for**: Production applications and live trading

## Environment Configuration

### API Endpoints

All API endpoints follow the same pattern across environments:

```
{ENVIRONMENT_BASE_URL}/api/v1/{ENDPOINT}
```

Examples:
- TestNet: `https://testnet-api.ethgas.com/api/v1/user/info`
- MainNet: `https://api.ethgas.com/api/v1/user/info`

### WebSocket Connections

WebSocket connections also vary by environment:

- **TestNet**: `wss://testnet-ws.ethgas.com`
- **MainNet**: `wss://ws.ethgas.com`

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

## Environment-Specific Considerations

### TestNet
- **Authentication**: Test credentials provided
- **Data**: Simulated market conditions
- **Limits**: Higher rate limits for testing
- **Support**: Dedicated testnet support

### MainNet
- **Authentication**: Production credentials required
- **Data**: Real market data and conditions
- **Limits**: Production rate limits apply
- **Support**: Production support channels

## Migration Path

Recommended development workflow:

1. **Start with TestNet**: Develop and test your integration
2. **Validate Functionality**: Ensure all features work correctly
3. **Test with Real Data**: Use TestNet's simulated real data
4. **Deploy to MainNet**: Move to production when ready

## Environment Variables

Configure your application with environment-specific variables:

```bash
# TestNet Configuration
ETHGAS_API_URL=https://testnet-api.ethgas.com
ETHGAS_WS_URL=wss://testnet-ws.ethgas.com

# MainNet Configuration
ETHGAS_API_URL=https://api.ethgas.com
ETHGAS_WS_URL=wss://ws.ethgas.com
```

## Next Steps

Now that you understand the environments:

1. [Set up your connection](/docs/getting-started/connecting) to the appropriate environment
2. [Configure authentication](/docs/api/authentication) for your chosen environment
3. [Test your integration](/docs/api/overview) with basic API calls

Choose your environment and let's get started with the integration! 