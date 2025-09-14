# Account

## Account Object

The Account object represents a user's account within the ETHGas system. Each user can have multiple accounts for different purposes.

### Properties

| Name | Type | Description |
|------|------|-------------|
| `accountId` | long | Unique account ID assigned by ETHGas |
| `userId` | long | User ID associated with the account |
| `type` | integer | Account type (1 = Current, 2 = Trading) |
| `name` | string | Account name (default: "Current" or "Trading") |
| `status` | integer | Account status (1 = active) |
| `updateDate` | long | Last update timestamp in milliseconds |
| `tokens` | object[] | List of tokens in the account |

### Example

```json
{
  "accountId": 242,
  "userId": 78,
  "type": 1,
  "name": "Current",
  "status": 1,
  "updateDate": 1698127521000,
  "tokens": [
    {
      "accountId": 242,
      "tokenId": 1,
      "quantity": "100.5",
      "lockedQuantity": "10.0",
      "code": "ETH",
      "tokenType": 1,
      "valueType": 1,
      "tokenValuationProtocol": 1,
      "availableQuantity": "90.5"
    }
  ]
}
```

## Account Types

| Code | Type | Description |
|------|------|-------------|
| 1 | Current | Current account for general use |
| 2 | Trading | Trading account for market operations |

## Account Status Codes

| Code | Status | Description |
|------|--------|-------------|
| 1 | Active | Account is active and can be used |

## Token Object (within Account)

| Name | Type | Description |
|------|------|-------------|
| `accountId` | integer | Unique ID for the account |
| `tokenId` | integer | ETHGas Token ID (see Token IDs section) |
| `quantity` | string | Total amount of token in account |
| `lockedQuantity` | string | Amount locked for pending orders |
| `code` | string | Token code (e.g., "ETH") |
| `tokenType` | integer | Token type (currently all are type 1) |
| `valueType` | integer | Value type (1 = non-stablecoin, 2 = stablecoin) |
| `tokenValuationProtocol` | integer | Platform for complex token valuation |
| `availableQuantity` | string | Available quantity for trading/transfers |

## Value Types

| Code | Type | Description |
|------|------|-------------|
| 1 | Non-stablecoin | Volatile token (e.g., ETH) |
| 2 | Stablecoin | Stable value token (e.g., USDC) |

## Token Valuation Protocols

| Code | Protocol | Description |
|------|----------|-------------|
| 1 | ETHGas | Native ETHGas valuation |
| 2 | External | External protocol valuation |
