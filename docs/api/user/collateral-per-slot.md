---
sidebar_position: 4
---

# User Collateral Per Slot

Manage collateral settings for block ownership and validator participation.

## Overview

Users can configure collateral amounts per slot for block ownership and validator participation on the ETHGas platform.

## Collateral Configuration

### Set Collateral Per Slot

```bash
curl -X POST "https://api.ethgas.com/api/v1/user/collateral-per-slot" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "collateralAmount": "0.1",
    "slotType": "block_owner",
    "validatorPubkey": "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"
  }'
```

## Related Documentation

- [User Management](/docs/api/user) - User account management
- [Validator Setup](/docs/validators/setup) - Validator configuration
- [ETHGas API](/docs/api/overview) - API documentation 