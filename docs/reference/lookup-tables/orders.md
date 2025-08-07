---
sidebar_position: 2
---

# Orders

This section provides comprehensive reference information about orders on the ETHGas platform, including order types, status codes, and trading parameters.

## Order Sides

Orders can be either buy or sell orders:

| Boolean | Side | Description |
|---------|------|-------------|
| 0 (False) | Sell | Selling the underlying asset |
| 1 (True) | Buy | Buying the underlying asset |

## Order Types

ETHGas supports three main order types:

| Type Code | Order Type | Description |
|-----------|------------|-------------|
| 1 | Market Order | Execute immediately at current market price |
| 2 | Limit Order | Execute only at specified price or better |
| 3 | Fill-Or-Kill Order | Execute completely or not at all |

### Market Orders
- **Execution**: Immediate execution at best available price
- **Use Case**: When you need immediate execution regardless of price
- **Risk**: May experience slippage in volatile markets
- **Example**: Buy 1 ETH at market price

### Limit Orders
- **Execution**: Only execute at specified price or better
- **Use Case**: When you want to control the execution price
- **Risk**: May not execute if market doesn't reach your price
- **Example**: Buy 1 ETH at $2000 or lower

### Fill-Or-Kill Orders
- **Execution**: Execute completely or cancel entirely
- **Use Case**: When you need all-or-nothing execution
- **Risk**: May not execute if insufficient liquidity
- **Example**: Buy 1 ETH at $2000, cancel if not fully filled

## Order Status Codes

Orders progress through different states during their lifecycle:

| Status Code | Status | Description |
|-------------|--------|-------------|
| 0 | STATUS_PENDING | Pending (not yet sent to market) |
| 1 | STATUS_ONBOOK | On Book (live order in market) |
| 10 | STATUS_DONE | Done (fully executed) |
| 11 | STATUS_MANUALLY_CANCELLED | Manually cancelled |
| 12 | STATUS_AUTO_CANCELLED | Auto cancelled |
| 13 | STATUS_PARTIALLY_FILLED | Partially filled |
| 14 | STATUS_EXPIRED | Market expired |
| 99 | STATUS_ERROR | Error |

## Order Lifecycle

### 1. STATUS_PENDING (0)
- Order is created but not yet sent to market
- Validation checks are being performed
- Order parameters are being verified

### 2. STATUS_ONBOOK (1)
- Order is live in the market
- Order is visible in order book
- Order can be matched with opposing orders

### 3. STATUS_DONE (10)
- Order is fully executed
- All quantity has been filled
- Order is no longer active

### 4. STATUS_PARTIALLY_FILLED (13)
- Order is partially executed
- Some quantity remains unfilled
- Order remains active for remaining quantity

### 5. STATUS_MANUALLY_CANCELLED (11)
- Order was cancelled by user
- Order is no longer active
- Any unfilled quantity is cancelled

### 6. STATUS_AUTO_CANCELLED (12)
- Order was automatically cancelled
- Cancellation reasons: market expiry, insufficient funds, etc.
- Order is no longer active

### 7. STATUS_EXPIRED (14)
- Market has expired
- Order is automatically cancelled
- Order is no longer active

### 8. STATUS_ERROR (99)
- Order encountered an error
- Order is no longer active
- Check error details for specific issue

## Order Data Structure

### Order Information

```json
{
  "orderId": "12345",
  "marketId": 67890,
  "side": 1,
  "orderType": 2,
  "quantity": 1.5,
  "price": 0.0005,
  "status": 1,
  "filledQuantity": 0.5,
  "remainingQuantity": 1.0,
  "averagePrice": 0.0004,
  "createdAt": 1640995200,
  "updatedAt": 1640995300
}
```

### Order Response

```json
{
  "code": 200,
  "message": "OK",
  "data": {
    "orderId": "12345",
    "status": 1,
    "filledQuantity": 0.5,
    "remainingQuantity": 1.0,
    "averagePrice": 0.0004
  }
}
```

## Order Parameters

### Required Parameters

| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| marketId | integer | Market ID to trade on | `67890` |
| side | boolean | Buy (1) or Sell (0) | `1` |
| orderType | integer | Order type (1-3) | `2` |
| quantity | number | Order quantity | `1.5` |

### Optional Parameters

| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| price | number | Limit price (required for limit orders) | `0.0005` |
| deduplicateString | string | Unique identifier to prevent duplicate orders | `"order_123"` |

## Order Placement

### Market Order

```json
{
  "marketId": 67890,
  "side": 1,
  "orderType": 1,
  "quantity": 1.5
}
```

### Limit Order

```json
{
  "marketId": 67890,
  "side": 1,
  "orderType": 2,
  "quantity": 1.5,
  "price": 0.0005
}
```

### Fill-Or-Kill Order

```json
{
  "marketId": 67890,
  "side": 1,
  "orderType": 3,
  "quantity": 1.5,
  "price": 0.0005
}
```

## Order Management

### Get Order Status

```bash
curl -X GET "https://api.ethgas.com/api/v1/user/wholeblock/orders?orderId=12345" \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### Cancel Order

```bash
curl -X POST "https://api.ethgas.com/api/v1/wholeblock/cancel-order" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "orderId": "12345"
  }'
```

### Cancel All Orders

```bash
curl -X POST "https://api.ethgas.com/api/v1/wholeblock/cancel-all-orders" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "marketId": 67890
  }'
```

## Order Validation

### Quantity Validation

- **Minimum Quantity**: Must meet market minimum quantity
- **Quantity Step**: Must be multiple of market quantity step
- **Maximum Quantity**: Must not exceed available balance

### Price Validation

- **Limit Orders**: Price must be within market price range
- **Market Orders**: No price validation required
- **Price Step**: Price must be multiple of market price step

### Balance Validation

- **Buy Orders**: Must have sufficient funds
- **Sell Orders**: Must have sufficient quantity
- **Margin Requirements**: Must meet margin requirements

## Error Handling

### Common Order Errors

| Error Code | Description | Solution |
|------------|-------------|----------|
| 102 | INVALID_ACCOUNT | Check account permissions |
| 107 | MINIMUM_QUANTITY_NOT_REACH | Increase order quantity |
| 120 | QUANTITY_STEP_NOT_MATCH | Adjust quantity to match step |
| 122 | INVALID_DEDUPLICATE_STRING | Use unique deduplicate string |
| 191 | ORDER_AUTO_CANCELLED | Check order parameters |
| 192 | ORDER_MANUALLY_CANCELLED | Order was cancelled by user |

### Error Response Example

```json
{
  "code": 107,
  "message": "MINIMUM_QUANTITY_NOT_REACH",
  "data": null
}
```

## Best Practices

### Order Placement

1. **Check Market Status**: Ensure market is active before placing orders
2. **Validate Parameters**: Verify all required parameters are correct
3. **Use Deduplicate Strings**: Prevent accidental duplicate orders
4. **Monitor Order Status**: Track order execution and status changes

### Order Management

1. **Regular Monitoring**: Check order status periodically
2. **Timely Cancellation**: Cancel orders when no longer needed
3. **Error Handling**: Implement proper error handling for failed orders
4. **Order Tracking**: Maintain order history for analysis

### Risk Management

1. **Position Sizing**: Use appropriate order sizes
2. **Price Limits**: Set reasonable price limits for limit orders
3. **Market Monitoring**: Monitor market conditions before placing orders
4. **Order Types**: Choose appropriate order type for your needs

## Related Documentation

- [Markets](/docs/reference/lookup-tables/markets) - Market types and status codes
- [Trading](/docs/api/trading/whole-block/place-order) - How to place orders
- [Error Codes](/docs/reference/error-codes/general) - Order-related error codes
- [WebSocket Overview](/docs/websocket/overview) - Real-time updates 