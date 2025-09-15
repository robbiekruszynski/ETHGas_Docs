---
sidebar_position: 5
---

# Token

## Token Object

The Token object represents a token within a user's account in the ETHGas system.

### Used in API Endpoints

The Token object is returned by the following API endpoints:

- [GET /api/v1/user/account/\{accountId\}](/docs/api/user#get-account-by-id) - Returns account details with tokens array
- [GET /api/v1/user/accounts](/docs/api/user#get-user-accounts) - Returns accounts with tokens array
- [GET /api/v1/p/tokens](/docs/api/public#get-tokens) - Returns list of available tokens

### Properties

| Name | Type | Description |
|------|------|-------------|
| `accountId` | integer | Unique ID for the account |
| `tokenId` | integer | ETHGas Token ID - see [Token IDs](#token-ids) |
| `quantity` | string | Total amount of token in account |
| `lockedQuantity` | string | Amount locked for pending orders |
| `code` | string | Token code (e.g., "ETH") |
| `tokenType` | integer | Token type (currently all are type 1) - see [Token Types](#token-types) |
| `valueType` | integer | Value type (1 = non-stablecoin, 2 = stablecoin) - see [Value Types](#value-types) |
| `tokenValuationProtocol` | integer | Platform for complex token valuation - see [Token Valuation Protocols](#token-valuation-protocols) |
| `availableQuantity` | string | Available quantity for trading/transfers |

### Example

```json
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
```

## Token IDs

Currently supported tokens:

| Code | Name | Token ID | Quantity Step | Minimum Quantity | Pricer Step |
|------|------|----------|---------------|------------------|-------------|
| ETH  | ETH  | 1        | 0.00001       | 0.001            | 0.0001      |

## Token Types

| Code | Type | Description |
|------|------|-------------|
| 1 | Standard | Standard token type |

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
