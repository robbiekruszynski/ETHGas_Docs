---
sidebar_position: 1
---

# Data Types

Reference for all data types used in the ETHGas API.

## Overview

This document describes the data types used throughout the ETHGas API, including request parameters, response fields, and WebSocket messages.

## Basic Types

### String
Text data encoded as UTF-8.

**Examples:**
```json
"username": "john_doe"
"email": "john@example.com"
"address": "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6"
```

### Integer
Whole numbers (positive, negative, or zero).

**Examples:**
```json
"blockNumber": 12345678
"gasLimit": 30000000
"timestamp": 1640995200
```

### Float
Decimal numbers.

**Examples:**
```json
"price": 0.5
"balance": 100.25
"profit": -2.5
```

### Boolean
True or false values.

**Examples:**
```json
"isActive": true
"isValid": false
"loggedOut": true
```

### Array
Ordered list of values.

**Examples:**
```json
"transactions": [
  "0x1234567890abcdef1234567890abcdef12345678",
  "0xabcdef1234567890abcdef1234567890abcdef12"
]
```

### Object
Key-value pairs.

**Examples:**
```json
"user": {
  "id": "user_123",
  "username": "john_doe",
  "email": "john@example.com"
}
```

## Ethereum Types

### Address
Ethereum address (20 bytes, hex-encoded with 0x prefix).

**Format:** `0x[a-fA-F0-9]{40}`

**Examples:**
```json
"payoutAddress": "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6"
"coinbase": "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6"
```

### Hash
32-byte hash value (hex-encoded with 0x prefix).

**Format:** `0x[a-fA-F0-9]{64}`

**Examples:**
```json
"transactionHash": "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"
"blockHash": "0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890"
```

### Wei
Ethereum's smallest unit (1 ETH = 10^18 Wei).

**Format:** String representation of integer

**Examples:**
```json
"baseFee": "20000000000"
"priorityFee": "1000000000"
"balance": "1000000000000000000"
```

### Gas
Gas units for transaction execution.

**Format:** Integer

**Examples:**
```json
"gasLimit": 30000000
"gasUsed": 15000000
"gasPrice": 20000000000
```

## API Response Types

### Standard Response
All API responses follow this structure:

```json
{
  "code": 200,
  "message": "OK",
  "data": {
    // Response data here
  }
}
```

### Error Response
Error responses include error details:

```json
{
  "code": 400,
  "message": "Invalid parameters",
  "data": null,
  "errors": [
    {
      "field": "username",
      "message": "Username is required"
    }
  ]
}
```

## WebSocket Types

### Message Format
WebSocket messages follow this structure:

```json
{
  "cmd": "command_name",
  "data": {
    // Message data
  },
  "timestamp": 1640995200
}
```

### Event Types
Different event types for real-time updates:

```json
{
  "type": "market_update",
  "data": {
    "market": "ETH-USD",
    "price": "2000.50",
    "volume": "1000.25"
  }
}
```

## Validation Rules

### String Validation
- **Username**: 3-20 characters, alphanumeric + underscore
- **Email**: Valid email format
- **Phone**: International format (+1234567890)
- **Country**: ISO country code (2 characters)
- **Timezone**: IANA timezone identifier

### Number Validation
- **Block Number**: Positive integer
- **Gas Limit**: 1,000,000 to 30,000,000
- **Fees**: Positive integers
- **Timestamps**: Unix timestamp (seconds)

### Address Validation
- **Ethereum Address**: 0x + 40 hex characters
- **Checksum**: Recommended for mainnet
- **Zero Address**: Not allowed for payouts

## Type Conversions

### Wei to ETH
```javascript
const weiToEth = (wei) => wei / 1e18;
const ethToWei = (eth) => eth * 1e18;
```

### Timestamp Conversions
```javascript
const timestampToDate = (timestamp) => new Date(timestamp * 1000);
const dateToTimestamp = (date) => Math.floor(date.getTime() / 1000);
```

### Address Formatting
```javascript
const formatAddress = (address) => {
  return address.slice(0, 6) + '...' + address.slice(-4);
};
```

## Best Practices

1. **Use Strings for Large Numbers** - Avoid precision loss with floats
2. **Validate Input** - Always validate data before sending
3. **Handle Errors** - Implement proper error handling
4. **Use Consistent Formats** - Follow established conventions

## Related Documentation

- [Error Codes](/docs/reference/error-codes/general) - API error codes
- [Lookup Tables](/docs/reference/lookup-tables/markets) - Reference data
- [API Overview](/docs/api/overview) - API documentation 