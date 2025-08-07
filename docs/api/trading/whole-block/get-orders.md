---
sidebar_position: 4
---

# GET /api/v1/trading/whole-block/get-orders

Get user's whole-block trading orders.

## Endpoint

```
GET /api/v1/trading/whole-block/get-orders
```

## Request Headers

| Header | Value |
|--------|-------|
| Authorization | Bearer YOUR_ACCESS_TOKEN |

## Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| status | string | No | Filter by order status |
| limit | integer | No | Number of orders to return (default: 50) |
| offset | integer | No | Number of orders to skip (default: 0) |
| startDate | integer | No | Start timestamp |
| endDate | integer | No | End timestamp |

## Response

### Success Response (200)

```json
{
  "code": 200,
  "message": "OK",
  "data": {
    "orders": [
      {
        "orderId": "order_123456",
        "blockNumber": 12345678,
        "status": "pending",
        "createdAt": 1640995200,
        "estimatedProfit": "0.5",
        "gasUsed": 15000000,
        "totalValue": "100.0",
        "transactions": [
          "0x1234567890abcdef1234567890abcdef12345678"
        ]
      },
      {
        "orderId": "order_123457",
        "blockNumber": 12345679,
        "status": "executed",
        "createdAt": 1640995200,
        "executedAt": 1640995260,
        "actualProfit": "0.75",
        "gasUsed": 18000000,
        "totalValue": "150.0",
        "transactions": [
          "0xabcdef1234567890abcdef1234567890abcdef12"
        ]
      }
    ],
    "pagination": {
      "total": 25,
      "limit": 50,
      "offset": 0,
      "hasMore": false
    }
  }
}
```

### Error Response (401)

```json
{
  "code": 401,
  "message": "Unauthorized",
  "data": null
}
```

## Usage Examples

### cURL

```bash
# Get all orders
curl -X GET "https://api.ethgas.com/api/v1/trading/whole-block/get-orders" \
  -H "Authorization: Bearer your_access_token"

# Get pending orders
curl -X GET "https://api.ethgas.com/api/v1/trading/whole-block/get-orders?status=pending" \
  -H "Authorization: Bearer your_access_token"

# Get orders with pagination
curl -X GET "https://api.ethgas.com/api/v1/trading/whole-block/get-orders?limit=10&offset=20" \
  -H "Authorization: Bearer your_access_token"
```

### Python

```python
import requests

def get_orders(access_token, status=None, limit=50, offset=0):
    url = "https://api.ethgas.com/api/v1/trading/whole-block/get-orders"
    headers = {"Authorization": f"Bearer {access_token}"}
    
    params = {
        "limit": limit,
        "offset": offset
    }
    
    if status:
        params["status"] = status
    
    response = requests.get(url, headers=headers, params=params)
    
    if response.status_code == 200:
        return response.json()["data"]
    else:
        raise Exception(f"Failed to get orders: {response.text}")

# Usage
try:
    # Get all orders
    orders = get_orders("your_access_token")
    print(f"Found {len(orders['orders'])} orders")
    
    # Get pending orders
    pending_orders = get_orders("your_access_token", status="pending")
    print(f"Found {len(pending_orders['orders'])} pending orders")
    
    # Get orders with pagination
    paginated_orders = get_orders("your_access_token", limit=10, offset=20)
    print(f"Page: {paginated_orders['pagination']}")
    
except Exception as e:
    print(f"Error: {e}")
```

### JavaScript

```javascript
async function getOrders(accessToken, options = {}) {
    const { status, limit = 50, offset = 0 } = options;
    
    const params = new URLSearchParams({
        limit: limit.toString(),
        offset: offset.toString()
    });
    
    if (status) {
        params.append('status', status);
    }
    
    const response = await fetch(`https://api.ethgas.com/api/v1/trading/whole-block/get-orders?${params}`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    });

    if (response.ok) {
        const data = await response.json();
        return data.data;
    }
    throw new Error('Failed to get orders');
}

// Usage
const accessToken = 'your_access_token';

// Get all orders
getOrders(accessToken)
    .then(data => {
        console.log('Orders:', data.orders);
        console.log('Pagination:', data.pagination);
    })
    .catch(error => console.error('Error:', error));

// Get pending orders
getOrders(accessToken, { status: 'pending' })
    .then(data => {
        console.log('Pending orders:', data.orders);
    })
    .catch(error => console.error('Error:', error));

// Get orders with pagination
getOrders(accessToken, { limit: 10, offset: 20 })
    .then(data => {
        console.log('Paginated orders:', data.orders);
        console.log('Has more:', data.pagination.hasMore);
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

## Filtering Examples

### Get Orders by Status

```javascript
// Get only pending orders
const pendingOrders = await getOrders(accessToken, { status: 'pending' });

// Get only executed orders
const executedOrders = await getOrders(accessToken, { status: 'executed' });

// Get only cancelled orders
const cancelledOrders = await getOrders(accessToken, { status: 'cancelled' });
```

### Pagination

```javascript
// Get first 10 orders
const firstPage = await getOrders(accessToken, { limit: 10, offset: 0 });

// Get next 10 orders
const secondPage = await getOrders(accessToken, { limit: 10, offset: 10 });

// Check if there are more orders
if (firstPage.pagination.hasMore) {
    console.log('More orders available');
}
```

## Order Processing

### Process Orders

```javascript
function processOrders(orders) {
    return orders.map(order => ({
        id: order.orderId,
        blockNumber: order.blockNumber,
        status: order.status,
        profit: order.estimatedProfit || order.actualProfit,
        gasUsed: order.gasUsed,
        totalValue: order.totalValue,
        createdAt: new Date(order.createdAt * 1000)
    }));
}

// Usage
getOrders(accessToken)
    .then(data => {
        const processedOrders = processOrders(data.orders);
        console.log('Processed orders:', processedOrders);
    })
    .catch(error => console.error('Error:', error));
```

## Error Handling

### Common Errors

| Error Code | Description | Solution |
|------------|-------------|----------|
| 401 | Unauthorized | Check access token |
| 403 | Forbidden | Check permissions |
| 400 | Bad Request | Check query parameters |
| 500 | Server Error | Retry request |

### Error Handling Example

```javascript
async function getOrdersWithRetry(accessToken, options = {}, retries = 3) {
    for (let i = 0; i < retries; i++) {
        try {
            return await getOrders(accessToken, options);
        } catch (error) {
            if (i === retries - 1) {
                throw error;
            }
            
            // Wait before retry
            await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
        }
    }
}

// Usage
getOrdersWithRetry(accessToken, { status: 'pending' })
    .then(data => console.log('Orders:', data))
    .catch(error => console.error('All retries failed:', error));
```

## Related Endpoints

- [Place Order](/docs/api/trading/whole-block/place-order) - Submit orders
- [Cancel Order](/docs/api/trading/whole-block/cancel-order) - Cancel orders
- [Get Order](/docs/api/trading/whole-block/get-order) - Order details 