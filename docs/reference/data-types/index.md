# Data Types

This section contains detailed information about the data structures used in the ETHGas API.

## Available Data Types

- [User](/docs/reference/data-types/user) - User account information and properties
- [Account](/docs/reference/data-types/account) - Account details and token information

## Overview

The ETHGas API uses structured data types to ensure consistent data representation across all endpoints. Understanding these data types is essential for proper API integration.

### Common Patterns

- **IDs**: All entity IDs are long integers assigned by ETHGas
- **Timestamps**: All timestamps are in milliseconds since Unix epoch
- **Quantities**: All monetary amounts are represented as strings to maintain precision
- **Status Codes**: Integer codes representing various states and types
- **Addresses**: Ethereum addresses in hex format (0x...)

### Data Type Relationships

```
User
├── userId (long)
├── address (string)
├── accounts[] (Account[])
└── ... other properties

Account
├── accountId (long)
├── userId (long) -> references User.userId
├── tokens[] (Token[])
└── ... other properties
```

## Usage in API Responses

These data types appear in various API responses throughout the ETHGas platform. Refer to the specific API endpoint documentation for context on how these types are used.
