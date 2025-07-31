---
sidebar_position: 1
---

# Markets

This section provides comprehensive reference information about markets on the ETHGas platform, including market types, status codes, and trading parameters.

## Market Types

ETHGas supports two main types of markets:

| Code | Market Type | Description |
|------|-------------|-------------|
| 1 | Inclusion Preconf Market | Markets for trading gas price predictions and inclusion probabilities |
| 2 | Whole Block Market | Markets for trading entire blocks for MEV opportunities |

## Market Status Codes

Markets progress through different states during their lifecycle:

| Status Code | Status | Description |
|-------------|--------|-------------|
| 0 | NOT_STARTED | Market is pending and not yet started |
| 1 | ENABLE | Market is active and accepting orders |
| 2 | EXPIRED | Market has expired and is no longer accepting orders |
| 3 | TRX_SUBMISSION_ENDED | Transaction submission period has ended |
| 4 | FINALIZED | Market has been finalized and results are available |

## Market Lifecycle

### 1. NOT_STARTED (0)
- Market is created but not yet active
- No orders can be placed
- Market parameters are being finalized

### 2. ENABLE (1)
- Market is active and accepting orders
- Users can place, modify, and cancel orders
- Real-time market data is available
- WebSocket updates are sent for market changes

### 3. EXPIRED (2)
- Market has reached its expiration time
- No new orders can be placed
- Existing orders may be automatically cancelled
- Market enters finalization phase

### 4. TRX_SUBMISSION_ENDED (3)
- Transaction submission period has ended
- No new transactions can be submitted
- Market is preparing for finalization

### 5. FINALIZED (4)
- Market has been finalized
- Results are available
- Payouts are processed
- Market data is archived

## Market Parameters

### Inclusion Preconf Markets

| Parameter | Description | Example |
|-----------|-------------|---------|
| Market ID | Unique identifier for the market | `12345` |
| Token ID | Token being traded | `1` (ETH) |
| Expiration Time | When the market expires | `1640995200` |
| Quantity Step | Minimum quantity increment | `0.00001` |
| Price Step | Minimum price increment | `0.0001` |
| Minimum Quantity | Minimum order size | `0.001` |

### Whole Block Markets

| Parameter | Description | Example |
|-----------|-------------|---------|
| Market ID | Unique identifier for the market | `67890` |
| Slot Number | Ethereum slot number | `12345678` |
| Block Number | Ethereum block number | `12345678` |
| Expiration Time | When the market expires | `1640995200` |
| Minimum Bid | Minimum bid amount | `0.1` |

## Market Data Structure

### Market Information

```json
{
  "marketId": 12345,
  "marketType": 1,
  "status": 1,
  "tokenId": 1,
  "expirationTime": 1640995200,
  "quantityStep": 0.00001,
  "priceStep": 0.0001,
  "minimumQuantity": 0.001,
  "currentPrice": 0.0005,
  "totalVolume": 1.5,
  "openInterest": 0.8
}
```

### Market Status Response

```json
{
  "code": 200,
  "message": "OK",
  "data": {
    "markets": [
      {
        "id": 12345,
        "type": 1,
        "status": 1,
        "tokenId": 1,
        "expirationTime": 1640995200,
        "currentPrice": 0.0005,
        "volume24h": 2.5,
        "change24h": 0.02
      }
    ]
  }
}
```

## Market Queries

### Get All Markets

```bash
curl -X GET "https://api.ethgas.com/api/v1/p/wholeblock/markets" \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### Get Specific Market

```bash
curl -X GET "https://api.ethgas.com/api/v1/p/inclusion-preconf/market?marketId=12345" \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### Get Market Positions

```bash
curl -X GET "https://api.ethgas.com/api/v1/p/wholeblock/positions" \
  -H "Authorization: Bearer YOUR_TOKEN"
```

## Market Trading

### Order Types

| Type Code | Order Type | Description |
|-----------|------------|-------------|
| 1 | Market Order | Execute immediately at current market price |
| 2 | Limit Order | Execute only at specified price or better |
| 3 | Fill-Or-Kill Order | Execute completely or not at all |

### Order Sides

| Boolean | Side | Description |
|---------|------|-------------|
| 0 (False) | Sell | Selling the underlying asset |
| 1 (True) | Buy | Buying the underlying asset |

## Market Monitoring

### WebSocket Market Updates

Subscribe to real-time market updates:

```json
{
  "cmd": "subscribe",
  "args": {
    "channel": "preconfMarketUpdate",
    "marketId": 12345
  }
}
```

### Market Data Queries

Query current market data:

```json
{
  "cmd": "query",
  "args": {
    "queryType": "preconfMarkets"
  }
}
```

## Market Analysis

### Key Metrics

- **Volume**: Total trading volume in the market
- **Open Interest**: Total outstanding positions
- **Price Change**: 24-hour price change percentage
- **Bid/Ask Spread**: Difference between best bid and ask
- **Order Book Depth**: Available liquidity at different price levels

### Market Indicators

- **Liquidity**: How easily orders can be filled
- **Volatility**: Price movement frequency and magnitude
- **Trend**: Direction of price movement over time
- **Support/Resistance**: Key price levels where orders cluster

## Best Practices

### Market Selection

1. **Check Market Status**: Ensure market is active (status = 1)
2. **Verify Expiration**: Confirm market hasn't expired
3. **Review Parameters**: Check minimum quantities and price steps
4. **Monitor Liquidity**: Look for sufficient order book depth

### Order Placement

1. **Use Appropriate Order Types**: Market orders for immediate execution, limit orders for specific prices
2. **Check Minimums**: Ensure order meets minimum quantity requirements
3. **Monitor Status**: Track order status and execution
4. **Manage Risk**: Use stop-loss orders and position sizing

### Market Monitoring

1. **Real-time Updates**: Subscribe to WebSocket channels for live data
2. **Regular Queries**: Poll market data for updates
3. **Error Handling**: Implement proper error handling for market operations
4. **Performance Tracking**: Monitor execution speed and slippage

## Related Documentation

- [Orders](/docs/reference/lookup-tables/orders) - Order types and status codes
- [Trading](/docs/api/trading/whole-block/place-order) - How to place orders
- [WebSocket API](/docs/websocket/public/preconf-market-update) - Real-time market updates
- [Error Codes](/docs/reference/error-codes/general) - Market-related error codes 