---
sidebar_position: 2
---

# POST /api/v1/trading/whole-block/place-order

Place a whole-block trading order on the ETHGas platform.

## Endpoint

```
POST /api/v1/trading/whole-block/place-order
```

## Request Headers

| Header | Value |
|--------|-------|
| Content-Type | application/json |
| Authorization | Bearer YOUR_ACCESS_TOKEN |

## Request Body

```json
{
  "blockNumber": 12345678,
  "transactions": [
    "0x1234567890abcdef1234567890abcdef12345678",
    "0xabcdef1234567890abcdef1234567890abcdef12"
  ],
  "gasLimit": 30000000,
  "baseFee": "20000000000",
  "priorityFee": "1000000000",
  "coinbase": "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6",
  "extraData": "0x",
  "nonce": "0x0000000000000000",
  "timestamp": 1640995200
}
```

### Request Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| blockNumber | integer | Yes | Target block number |
| transactions | array | Yes | Array of transaction hashes |
| gasLimit | integer | Yes | Block gas limit |
| baseFee | string | Yes | Base fee per gas (wei) |
| priorityFee | string | Yes | Priority fee per gas (wei) |
| coinbase | string | No | Block reward address |
| extraData | string | No | Block extra data |
| nonce | string | No | Block nonce |
| timestamp | integer | No | Block timestamp |

## Response

### Success Response (200)

```json
{
  "code": 200,
  "message": "OK",
  "data": {
    "orderId": "order_123456",
    "blockNumber": 12345678,
    "status": "pending",
    "createdAt": 1640995200,
    "estimatedProfit": "0.5",
    "gasUsed": 15000000,
    "totalValue": "100.0"
  }
}
```

### Error Response (400)

```json
{
  "code": 400,
  "message": "Invalid order parameters",
  "data": null
}
```

## Response Fields

| Field | Type | Description |
|-------|------|-------------|
| orderId | string | Unique order identifier |
| blockNumber | integer | Target block number |
| status | string | Order status (pending, executed, cancelled) |
| createdAt | integer | Order creation timestamp |
| estimatedProfit | string | Estimated profit in ETH |
| gasUsed | integer | Gas used by transactions |
| totalValue | string | Total value of transactions |

## Usage Examples

### cURL

```bash
curl -X POST "https://api.ethgas.com/api/v1/trading/whole-block/place-order" \
  -H "Authorization: Bearer your_access_token" \
  -H "Content-Type: application/json" \
  -d '{
    "blockNumber": 12345678,
    "transactions": [
      "0x1234567890abcdef1234567890abcdef12345678"
    ],
    "gasLimit": 30000000,
    "baseFee": "20000000000",
    "priorityFee": "1000000000"
  }'
```

### Python

```python
import requests
import json

def place_whole_block_order(access_token, order_data):
    url = "https://api.ethgas.com/api/v1/trading/whole-block/place-order"
    headers = {
        "Authorization": f"Bearer {access_token}",
        "Content-Type": "application/json"
    }
    
    response = requests.post(url, headers=headers, json=order_data)
    
    if response.status_code == 200:
        return response.json()["data"]
    else:
        raise Exception(f"Order failed: {response.text}")

# Usage
order_data = {
    "blockNumber": 12345678,
    "transactions": [
        "0x1234567890abcdef1234567890abcdef12345678"
    ],
    "gasLimit": 30000000,
    "baseFee": "20000000000",
    "priorityFee": "1000000000"
}

try:
    result = place_whole_block_order("your_access_token", order_data)
    print(f"Order placed: {result['orderId']}")
    print(f"Estimated profit: {result['estimatedProfit']} ETH")
except Exception as e:
    print(f"Error: {e}")
```

### JavaScript

```javascript
async function placeWholeBlockOrder(accessToken, orderData) {
    const response = await fetch('https://api.ethgas.com/api/v1/trading/whole-block/place-order', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
    });

    if (response.ok) {
        const data = await response.json();
        return data.data;
    }
    throw new Error('Order placement failed');
}

// Usage
const orderData = {
    blockNumber: 12345678,
    transactions: [
        '0x1234567890abcdef1234567890abcdef12345678'
    ],
    gasLimit: 30000000,
    baseFee: '20000000000',
    priorityFee: '1000000000'
};

const accessToken = 'your_access_token';
placeWholeBlockOrder(accessToken, orderData)
    .then(result => {
        console.log('Order placed:', result.orderId);
        console.log('Estimated profit:', result.estimatedProfit, 'ETH');
    })
    .catch(error => console.error('Error:', error));
```

## Order Status

| Status | Description |
|--------|-------------|
| pending | Order is waiting for execution |
| executed | Order was successfully executed |
| cancelled | Order was cancelled |
| failed | Order execution failed |

## Validation Rules

### Block Number
- Must be greater than current block
- Must be within reasonable range (current + 1000)

### Transactions
- Must be valid transaction hashes
- Maximum 1000 transactions per block
- Must be sorted by priority

### Gas Limit
- Must be between 1,000,000 and 30,000,000
- Must accommodate all transactions

### Fees
- Base fee must be positive
- Priority fee must be positive
- Total fee must be reasonable

## Error Handling

| Error Code | Description | Solution |
|------------|-------------|----------|
| 400 | Invalid Parameters | Check order data |
| 401 | Unauthorized | Check access token |
| 403 | Insufficient Funds | Add more capital |
| 409 | Order Conflict | Check existing orders |
| 500 | Server Error | Retry or contact support |

## Best Practices

1. **Validate Input** - Check all parameters before sending
2. **Monitor Status** - Track order execution status
3. **Handle Errors** - Implement proper error handling
4. **Test First** - Test on testnet before mainnet

## Related Endpoints

- [Cancel Order](/docs/api/trading/whole-block/cancel-order) - Cancel orders
- [Get Orders](/docs/api/trading/whole-block/get-orders) - List orders
- [Get Order](/docs/api/trading/whole-block/get-order) - Order details 