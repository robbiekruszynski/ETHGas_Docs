---
sidebar_position: 2
---

# Validator Onchain Payout

Manage onchain payout settings and withdrawals for validators on ETHGas.

## Overview

Validators can configure onchain payout settings to automatically receive rewards and fees directly to their specified addresses.

## Payout Configuration

### Enable Onchain Payout

```bash
curl -X POST "https://api.ethgas.com/api/v1/validator/onchain-payout/enable" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "validatorPubkey": "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
    "payoutAddress": "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6",
    "payoutThreshold": "0.1",
    "autoWithdraw": true
  }'
```

## Related Documentation

- [Validator Fees](/docs/api/validator/fees) - Fee structures and calculations
- [Validator Setup](/docs/validators/setup) - Validator configuration
- [Validator Registration](/docs/validators/registration) - Registration process 