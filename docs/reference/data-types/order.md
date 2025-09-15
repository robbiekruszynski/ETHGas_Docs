# Order

## Order Object

The Order object represents a trading order in the ETHGas system. Orders can be placed in either Inclusion Preconf Markets or Whole Block Markets.

### Used in API Endpoints

The Order object is returned by the following API endpoints:

- [GET /api/v1/user/wholeblock/orders](/docs/api/trading/whole-block#get-user-whole-block-orders) - Returns user's whole block orders
- [GET /api/v1/user/wholeblock/all-orders](/docs/api/trading/whole-block#get-all-user-whole-block-orders) - Returns all user's whole block orders
- [GET /api/v1/user/inclusion-preconf/orders](/docs/api/trading/inclusion-preconf#get-user-inclusion-preconf-orders) - Returns user's inclusion preconf orders
- [GET /api/v1/user/inclusion-preconf/all-orders](/docs/api/trading/inclusion-preconf#get-all-user-inclusion-preconf-orders) - Returns all user's inclusion preconf orders

### Properties

| Name | Type | Description |
|------|------|-------------|
| `orderId` | long | Unique order ID assigned by ETHGas |
| `accountId` | long | Account ID that placed the order |
| `marketId` | long | Market ID where the order is placed |
| `instrumentId` | string | Market instrument ID |
| `side` | boolean | Order side (true = buy, false = sell) - see [Order Sides](#order-sides) |
| `type` | integer | Order type - see [Order Types](#order-types) |
| `quantity` | string | Order quantity |
| `price` | string | Order price |
| `status` | integer | Order status - see [Order Status Codes](#order-status-codes) |
| `filledQuantity` | string | Quantity that has been filled |
| `remainingQuantity` | string | Remaining quantity to be filled |
| `averagePrice` | string | Average fill price |
| `createDate` | long | Order creation timestamp in milliseconds |
| `updateDate` | long | Last update timestamp in milliseconds |
| `expireDate` | long | Order expiration timestamp in milliseconds |
| `deduplicateString` | string | Deduplication string for order matching |

### Example

```json
{
  "orderId": 123456789,
  "accountId": 242,
  "marketId": 1000002880221,
  "instrumentId": "ETH-PC-2880221",
  "side": true,
  "type": 2,
  "quantity": "1000",
  "price": "0.00000001302",
  "status": 1,
  "filledQuantity": "0",
  "remainingQuantity": "1000",
  "averagePrice": "0",
  "createDate": 1730465042000,
  "updateDate": 1730465042000,
  "expireDate": 1730465052000,
  "deduplicateString": "unique_order_123"
}
```

## Order Types

| Code | Type | Description |
|------|------|-------------|
| 1 | Market Order | Order executed at current market price |
| 2 | Limit Order | Order executed at specified price or better |
| 3 | Fill-Or-Kill Order | Order must be filled immediately or cancelled |

## Order Status Codes

| Code | Status | Description |
|------|--------|-------------|
| 0 | STATUS_PENDING | Pending (not yet sent to market) |
| 1 | STATUS_ONBOOK | On Book (live order in market) |
| 10 | STATUS_DONE | Done (fully executed) |
| 11 | STATUS_MANUALLY_CANCELLED | Manually cancelled |
| 12 | STATUS_AUTO_CANCELLED | Auto cancelled |
| 13 | STATUS_PARTIALLY_FILLED | Partially filled |
| 14 | STATUS_EXPIRED | Market expired |
| 99 | STATUS_ERROR | Error |

## Order Sides

| Boolean | Side | Description |
|---------|------|-------------|
| true | Buy | Buy order |
| false | Sell | Sell order |
