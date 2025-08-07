---
sidebar_position: 1
---

# Whole-Block Trading

Trade entire blocks on the ETHGas platform for maximum MEV opportunities.

## Overview

Whole-block trading allows you to submit complete block proposals to the network, maximizing your MEV extraction potential. This advanced trading method gives you complete control over block composition and ordering.

## Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/v1/trading/whole-block/place-order` | POST | Place a whole-block order |
| `/api/v1/trading/whole-block/cancel-order` | POST | Cancel an existing order |
| `/api/v1/trading/whole-block/get-orders` | GET | Get user's orders |
| `/api/v1/trading/whole-block/get-order` | GET | Get specific order details |

## Quick Start

### Place a Whole-Block Order

```bash
curl -X POST "https://api.ethgas.com/api/v1/trading/whole-block/place-order" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "blockNumber": 12345678,
    "transactions": [
      "0x...",
      "0x..."
    ],
    "gasLimit": 30000000,
    "baseFee": "20000000000",
    "priorityFee": "1000000000"
  }'
```

### Get User Orders

```bash
curl -X GET "https://api.ethgas.com/api/v1/trading/whole-block/get-orders" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

## Block Structure

### Required Fields

| Field | Type | Description |
|-------|------|-------------|
| blockNumber | integer | Target block number |
| transactions | array | Array of transaction hashes |
| gasLimit | integer | Block gas limit |
| baseFee | string | Base fee per gas |
| priorityFee | string | Priority fee per gas |

### Optional Fields

| Field | Type | Description |
|-------|------|-------------|
| coinbase | string | Block reward address |
| extraData | string | Block extra data |
| nonce | string | Block nonce |
| timestamp | integer | Block timestamp |

## Order Types

### Market Orders
Submit orders that execute immediately at current market prices.

### Limit Orders
Submit orders that execute only at specified prices or better.

### Stop Orders
Submit orders that trigger when price reaches a certain level.

## MEV Strategies

### Sandwich Trading
1. Place front-running transaction
2. Target transaction executes
3. Place back-running transaction

### Arbitrage
1. Identify price differences across DEXs
2. Execute trades simultaneously
3. Profit from price convergence

### Liquidations
1. Monitor for liquidation opportunities
2. Execute liquidation transaction
3. Collect liquidation bonus

## Risk Management

### Position Sizing
- Never risk more than 2% of capital per trade
- Use proper position sizing based on volatility
- Consider correlation between positions

### Stop Losses
- Set automatic stop losses
- Use trailing stops for profitable positions
- Monitor drawdown limits

### Diversification
- Spread risk across multiple strategies
- Avoid over-concentration in single assets
- Consider market correlation

## Performance Metrics

### Key Metrics
- **Win Rate**: Percentage of profitable trades
- **Profit Factor**: Gross profit / Gross loss
- **Sharpe Ratio**: Risk-adjusted returns
- **Max Drawdown**: Largest peak-to-trough decline

### Monitoring
- Track performance in real-time
- Analyze strategy effectiveness
- Adjust parameters based on results

## Error Handling

| Error Code | Description | Solution |
|------------|-------------|----------|
| 400 | Invalid Order | Check order parameters |
| 401 | Unauthorized | Check access token |
| 403 | Insufficient Funds | Add more capital |
| 409 | Order Conflict | Check existing orders |
| 500 | Server Error | Retry or contact support |

## Best Practices

1. **Test Thoroughly** - Test strategies on testnet first
2. **Monitor Closely** - Watch for unusual activity
3. **Manage Risk** - Use proper risk management
4. **Stay Updated** - Keep up with market changes

## Related Documentation

- [Place Order](/docs/api/trading/whole-block/place-order) - Submit orders
- [WebSocket Overview](/docs/websocket/overview) - Real-time updates 