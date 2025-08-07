---
sidebar_position: 3
---

# Block Building API

This document provides detailed API reference for block building operations with ETHGas. Builders use these endpoints to receive preconf transactions, submit blocks, and manage the building process.

## Authentication

All builder API endpoints require authentication using API keys:

```bash
Authorization: Bearer YOUR_API_KEY
```

## Endpoints

### Get Preconf Transactions

Retrieve preconf transactions for a specific slot.

```http
GET /v1/builder/preconf-transactions/{slot}
```

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `slot` | integer | The slot number to retrieve transactions for |

#### Response

```json
{
  "slot": 12345678,
  "transactions": [
    {
      "hash": "0x...",
      "from": "0x...",
      "to": "0x...",
      "value": "0x0",
      "gas": 21000,
      "gasPrice": "0x...",
      "nonce": 123,
      "data": "0x...",
      "r": "0x...",
      "s": "0x...",
      "v": 27,
      "type": "preconf",
      "commitment_id": "commitment_123"
    }
  ],
  "commitments": [
    {
      "id": "commitment_123",
      "trader_id": "trader_456",
      "slot": 12345678,
      "gas_limit": 15000000,
      "priority_fee": "0x...",
      "bundle_position": "top"
    }
  ]
}
```

### Submit Block

Submit a built block to ETHGas relay.

```http
POST /v1/builder/submit-block
```

#### Request Body

```json
{
  "slot": 12345678,
  "block_hash": "0x...",
  "parent_hash": "0x...",
  "timestamp": 1234567890,
  "gas_limit": 30000000,
  "gas_used": 15000000,
  "base_fee_per_gas": "0x...",
  "extra_data": "0x...",
  "transactions": [
    "0x...",
    "0x..."
  ],
  "commitments_satisfied": [
    "commitment_123",
    "commitment_456"
  ],
  "builder_signature": "0x...",
  "relay_signature": "0x..."
}
```

#### Response

```json
{
  "status": "success",
  "block_hash": "0x...",
  "slot": 12345678,
  "submission_time": 1234567890,
  "relay_confirmation": true
}
```

### Validate Commitment

Validate that a block satisfies all commitments for a slot.

```http
POST /v1/builder/validate-commitment
```

#### Request Body

```json
{
  "slot": 12345678,
  "block_data": {
    "transactions": ["0x...", "0x..."],
    "gas_used": 15000000,
    "base_fee_per_gas": "0x..."
  },
  "commitments": [
    {
      "id": "commitment_123",
      "gas_limit": 15000000,
      "priority_fee": "0x...",
      "bundle_position": "top"
    }
  ]
}
```

#### Response

```json
{
  "valid": true,
  "satisfied_commitments": ["commitment_123"],
  "violations": [],
  "warnings": []
}
```

### Get Builder Status

Retrieve current builder status and performance metrics.

```http
GET /v1/builder/status
```

#### Response

```json
{
  "builder_id": "builder_123",
  "status": "active",
  "last_block_slot": 12345678,
  "blocks_built_24h": 7200,
  "success_rate": 0.998,
  "average_build_time_ms": 150,
  "current_slot": 12345679,
  "health": {
    "api_connected": true,
    "relay_connected": true,
    "preconf_stream_active": true
  }
}
```

### Get Fee Distribution

Retrieve fee distribution information for a specific block.

```http
GET /v1/builder/fee-distribution/{block_hash}
```

#### Response

```json
{
  "block_hash": "0x...",
  "slot": 12345678,
  "total_priority_fees": "0x...",
  "total_mev": "0x...",
  "distribution": {
    "block_owner": "0x...",
    "block_owner_fees": "0x...",
    "builder_fees": "0x...",
    "relay_fees": "0x..."
  },
  "transactions": [
    {
      "hash": "0x...",
      "priority_fee": "0x...",
      "recipient": "0x..."
    }
  ]
}
```

## WebSocket Events

Builders can subscribe to real-time events via WebSocket.

### Subscribe to Preconf Updates

```json
{
  "cmd": "subscribe",
  "args": {
    "channel": "preconfUpdates",
    "slot": 12345678
  }
}
```

### Preconf Update Event

```json
{
  "cmd": "preconfUpdate",
  "data": {
    "slot": 12345678,
    "transaction": {
      "hash": "0x...",
      "commitment_id": "commitment_123"
    },
    "timestamp": 1234567890
  }
}
```

## Error Handling

### Common Error Codes

| Code | Description | Solution |
|------|-------------|----------|
| 4001 | Invalid slot | Check slot number format |
| 4002 | Block validation failed | Review block compliance |
| 4003 | Commitment violation | Ensure all commitments are satisfied |
| 4004 | Relay submission failed | Check relay connectivity |
| 4005 | Authentication failed | Verify API key |

### Error Response Format

```json
{
  "error": {
    "code": 4001,
    "message": "Invalid slot number",
    "details": {
      "slot": 12345678,
      "expected_format": "integer"
    }
  }
}
```

## Rate Limiting

### Limits

- **Preconf transactions**: 100 requests per minute
- **Block submissions**: 10 submissions per minute
- **Validation requests**: 50 requests per minute
- **Status checks**: 200 requests per minute

### Rate Limit Response

```json
{
  "error": {
    "code": 429,
    "message": "Rate limit exceeded",
    "retry_after": 60
  }
}
```

## Best Practices

### Block Building

1. **Start early**: Begin building blocks well before slot deadline
2. **Validate commitments**: Ensure all commitments are satisfied
3. **Optimize gas usage**: Fill remaining blockspace efficiently
4. **Handle failures**: Implement retry logic for failed submissions

### API Integration

1. **Use WebSocket**: Subscribe to real-time updates for efficiency
2. **Implement caching**: Cache preconf transactions locally
3. **Monitor performance**: Track build times and success rates
4. **Handle errors gracefully**: Implement proper error handling

### Compliance

1. **Validate blocks**: Always validate before submission
2. **Respect commitments**: Ensure all trader commitments are met
3. **Monitor violations**: Track and report any compliance issues
4. **Maintain logs**: Keep detailed logs for audit purposes

## Related Documentation

- [Builder Registration](/docs/api/builder/registration) - How to register as a builder
- [Relay Integration](/docs/api/builder/relay) - Relay submission requirements
- [Fee Distribution](/docs/api/builder/fees) - Fee handling details 