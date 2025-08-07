---
sidebar_position: 3
---

# POST /api/v1/trading/whole-block/cancel-order

Cancel a whole-block trading order on the ETHGas platform.

## Endpoint

```
POST /api/v1/trading/whole-block/cancel-order
```

## Request Headers

| Header | Value |
|--------|-------|
| Content-Type | application/json |
| Authorization | Bearer YOUR_ACCESS_TOKEN |

## Request Body

```json
{
  "orderId": "order_123456",
  "reason": "user_requested"
}
```

### Request Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| orderId | string | Yes | Unique order identifier |
| reason | string | No | Cancellation reason |

## Response

### Success Response (200)

```json
{
  "code": 200,
  "message": "OK",
  "data": {
    "orderId": "order_123456",
    "status": "cancelled",
    "cancelledAt": 1640995200,
    "reason": "user_requested"
  }
}
```

### Error Response (404)

```json
{
  "code": 404,
  "message": "Order not found",
  "data": null
}
```

## Usage Examples

### cURL

```bash
curl -X POST "https://api.ethgas.com/api/v1/trading/whole-block/cancel-order" \
  -H "Authorization: Bearer your_access_token" \
  -H "Content-Type: application/json" \
  -d '{
    "orderId": "order_123456",
    "reason": "user_requested"
  }'
```

### Python

```python
import requests

def cancel_order(access_token, order_id, reason="user_requested"):
    url = "https://api.ethgas.com/api/v1/trading/whole-block/cancel-order"
    headers = {
        "Authorization": f"Bearer {access_token}",
        "Content-Type": "application/json"
    }
    
    data = {
        "orderId": order_id,
        "reason": reason
    }
    
    response = requests.post(url, headers=headers, json=data)
    
    if response.status_code == 200:
        return response.json()["data"]
    else:
        raise Exception(f"Cancel failed: {response.text}")

# Usage
try:
    result = cancel_order("your_access_token", "order_123456")
    print(f"Order cancelled: {result['orderId']}")
except Exception as e:
    print(f"Error: {e}")
```

### JavaScript

```javascript
async function cancelOrder(accessToken, orderId, reason = "user_requested") {
    const response = await fetch('https://api.ethgas.com/api/v1/trading/whole-block/cancel-order', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            orderId,
            reason
        })
    });

    if (response.ok) {
        const data = await response.json();
        return data.data;
    }
    throw new Error('Cancel failed');
}

// Usage
const accessToken = 'your_access_token';
cancelOrder(accessToken, 'order_123456')
    .then(result => {
        console.log('Order cancelled:', result.orderId);
    })
    .catch(error => console.error('Error:', error));
```

## Related Endpoints

- [Place Order](/docs/api/trading/whole-block/place-order) - Submit orders
- [Get Orders](/docs/api/trading/whole-block/get-orders) - List orders
- [Get Order](/docs/api/trading/whole-block/get-order) - Order details 