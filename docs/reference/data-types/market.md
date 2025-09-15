# Market

## Market Object

The Market object represents a trading market in the ETHGas system. Markets can be either Inclusion Preconf Markets or Whole Block Markets.

### Used in API Endpoints

The Market object is returned by the following API endpoints:

- [GET /api/v1/p/wholeblock/markets](/docs/api/trading/whole-block#get-all-available-whole-block-markets) - Returns list of whole block markets
- [GET /api/v1/p/inclusion-preconf/markets](/docs/api/trading/inclusion-preconf#get-all-available-inclusion-preconf-markets) - Returns list of inclusion preconf markets
- [GET /api/v1/p/inclusion-preconf/market](/docs/api/trading/inclusion-preconf#get-inclusion-preconf-market-by-slot) - Returns specific inclusion preconf market

### Properties

| Name | Type | Description |
|------|------|-------------|
| `marketId` | long | Unique market ID assigned by ETHGas |
| `slot` | integer | Slot number of the block |
| `instrumentId` | string | Market instrument ID (e.g., "ETH-PC-2880221") |
| `name` | string | Market name (e.g., "Eth Preconf Inclusion Slot #2880221") |
| `quantityStep` | string | Minimum increment between different order quantities |
| `minQuantity` | string | Minimum order quantity |
| `maxQuantity` | string | Maximum order quantity |
| `priceStep` | string | Minimum increment between valid price levels |
| `minPrice` | string | Minimum price |
| `maxPrice` | string | Maximum price |
| `collateralPerSlot` | string | ETH reserved by validator as collateral for this slot |
| `totalPreconf` | integer | Total preconfirmation capacity |
| `availablePreconf` | integer | Available preconfirmation capacity |
| `direction` | boolean | Market direction (true = buy, false = sell) |
| `price` | string | Current market price |
| `midPrice` | string | Mid price between bid and ask |
| `status` | integer | Market status - see [Market Status Codes](#market-status-codes) |
| `maturityTime` | long | Market maturity timestamp in milliseconds |
| `trxSubmitTime` | long | Transaction submission deadline timestamp |
| `blockTime` | long | Block time timestamp in milliseconds |
| `finalityTime` | long | Finality time timestamp in milliseconds |
| `totalGas` | integer | Total gas available in the block |
| `validatorType` | integer | Type of validator for this market |
| `updateDate` | long | Last update timestamp in milliseconds |

### Example

```json
{
  "marketId": 1000002880221,
  "slot": 2880221,
  "instrumentId": "ETH-PC-2880221",
  "name": "Eth Preconf Inclusion Slot #2880221",
  "quantityStep": "1",
  "minQuantity": "1",
  "maxQuantity": "30000000",
  "priceStep": "0.00000000001",
  "minPrice": "0.00000000001",
  "maxPrice": "0.00001",
  "collateralPerSlot": "3.996",
  "totalPreconf": 36000000,
  "availablePreconf": 30000000,
  "direction": true,
  "price": "0.00000001302",
  "midPrice": "0.00000001299",
  "status": 1,
  "maturityTime": 1730465048000,
  "trxSubmitTime": 1730465050000,
  "blockTime": 1730465052000,
  "finalityTime": 1730465820000,
  "totalGas": 29982469,
  "validatorType": 1,
  "updateDate": 1730465042000
}
```

## Market Types

| Code | Type | Description |
|------|------|-------------|
| 1 | Inclusion Preconf Market | Market for inclusion preconfirmations |
| 2 | Whole Block Market | Market for whole block commitments |

## Market Status Codes

| Code | Status | Description |
|------|--------|-------------|
| 0 | NOT_STARTED | Pending to be started |
| 1 | ENABLE | Market enabled |
| 2 | EXPIRED | Market expired |
| 3 | TRX_SUBMISSION_ENDED | Transaction submission time ended |
| 4 | FINALIED | Market finalized |

## Validator Types

| Code | Type | Description |
|------|------|-------------|
| 1 | Standard | Standard validator type |
| 2 | Premium | Premium validator type |
