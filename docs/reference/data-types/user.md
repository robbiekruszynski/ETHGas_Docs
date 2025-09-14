# User

## User Object

The User object represents a user account in the ETHGas system.

### Properties

| Name | Type | Description |
|------|------|-------------|
| `userId` | long | Unique user ID assigned by ETHGas |
| `address` | string | User's Ethereum wallet address |
| `status` | integer | User status (1 = active) |
| `userType` | integer | User type classification |
| `userClass` | integer | User class classification |
| `displayName` | string | User's display name |
| `payoutAddress` | string | User's payout address for withdrawals |
| `collateralPerSlot` | string | Collateral amount per slot |
| `onchainPayout` | boolean | Whether on-chain payout is enabled |
| `accounts` | object[] | List of user accounts |

### Example

```json
{
  "userId": 78,
  "address": "0xe61f536f031f77c854b21652ab0f4fbe7cf3196f",
  "status": 1,
  "userType": 1,
  "userClass": 1,
  "displayName": "username",
  "payoutAddress": "0xe61f536f031f77c854b21652ab0f4fbe7cf3196f",
  "collateralPerSlot": "10.5",
  "onchainPayout": true,
  "accounts": [
    {
      "accountId": 242,
      "userId": 78,
      "type": 1,
      "name": "Current",
      "status": 1,
      "updateDate": 1698127521000
    },
    {
      "accountId": 243,
      "userId": 78,
      "type": 2,
      "name": "Preconf",
      "status": 1,
      "updateDate": 1698127521000
    }
  ]
}
```

## User Status Codes

| Code | Status | Description |
|------|--------|-------------|
| 1 | Active | User account is active and can use the platform |

## User Types

| Code | Type | Description |
|------|------|-------------|
| 1 | Standard | Standard user account |
| 2 | Premium | Premium user account with additional features |

## User Classes

| Code | Class | Description |
|------|-------|-------------|
| 1 | Regular | Regular user class |
| 2 | VIP | VIP user class with enhanced privileges |
