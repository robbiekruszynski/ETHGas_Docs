---
sidebar_position: 1
---

# Error Codes

ETHGas uses standardized error codes across all API endpoints. Understanding these codes is essential for proper error handling in your applications.

## General Error Codes

| Error Code | Description |
|------------|-------------|
| 1 | Success |
| 2 | Permission Denied |
| 99 | Unexpected Error |
| 1000 | Permission Denied |
| 1001 | Validation Error |
| 1002 | Operation Failed |
| 9999 | Unexpected Error |

## Deposit/Withdrawal Error Codes

| Error Code | Description |
|------------|-------------|
| 10000 | Invalid account (Deposit) |
| 10001 | Invalid Token (Deposit) |
| 10010 | Invalid account (Withdraw) |
| 10011 | Invalid Token (Withdraw) |
| 10012 | Not Enough Funds to Withdraw |

## Order API Error Codes

### 400 - Bad Request

| Code | Message | Description | Solution |
|------|---------|-------------|----------|
| 40001 | Invalid order parameters | Order data is malformed | Check request format |
| 40002 | Invalid block number | Block number is invalid | Use valid block number |
| 40003 | Invalid transaction hash | Transaction hash format is wrong | Use valid hex format |
| 40004 | Gas limit too high | Gas limit exceeds maximum | Reduce gas limit |
| 40005 | Gas limit too low | Gas limit below minimum | Increase gas limit |
| 40006 | Invalid fee structure | Fee parameters are invalid | Check fee values |
| 40007 | Invalid address format | Address is not valid Ethereum address | Use valid address |
| 40008 | Order already exists | Order for this block already placed | Cancel existing order first |

### 401 - Unauthorized

| Code | Message | Description | Solution |
|------|---------|-------------|----------|
| 40101 | Invalid access token | Token is missing or invalid | Re-authenticate |
| 40102 | Token expired | Access token has expired | Refresh token |
| 40103 | Insufficient permissions | User lacks trading permissions | Contact support |

### 403 - Forbidden

| Code | Message | Description | Solution |
|------|---------|-------------|----------|
| 40301 | Trading disabled | Trading is currently disabled | Wait for trading to resume |
| 40302 | Account suspended | Account is suspended | Contact support |
| 40303 | Rate limit exceeded | Too many requests | Wait before retrying |
| 40304 | Insufficient balance | Not enough funds for order | Add more funds |

### 404 - Not Found

| Code | Message | Description | Solution |
|------|---------|-------------|----------|
| 40401 | Order not found | Order ID does not exist | Check order ID |
| 40402 | Market not found | Market does not exist | Check market symbol |
| 40403 | Block not found | Block number does not exist | Check block number |

### 409 - Conflict

| Code | Message | Description | Solution |
|------|---------|-------------|----------|
| 40901 | Order conflict | Conflicting order exists | Cancel conflicting order |
| 40902 | Block already proposed | Block already has a proposal | Wait for next block |
| 40903 | Transaction conflict | Transaction already included | Use different transaction |

### 422 - Unprocessable Entity

| Code | Message | Description | Solution |
|------|---------|-------------|----------|
| 42201 | Invalid order type | Order type not supported | Use supported order type |
| 42202 | Invalid market | Market not available for trading | Check market status |
| 42203 | Invalid price | Price outside allowed range | Use valid price |
| 42204 | Invalid quantity | Quantity below minimum | Increase quantity |

### 429 - Too Many Requests

| Code | Message | Description | Solution |
|------|---------|-------------|----------|
| 42901 | Rate limit exceeded | Too many requests per minute | Wait before retrying |
| 42902 | Order limit exceeded | Too many orders per hour | Reduce order frequency |
| 42903 | Block limit exceeded | Too many block proposals | Wait for next slot |

### 500 - Internal Server Error

| Code | Message | Description | Solution |
|------|---------|-------------|----------|
| 50001 | Order processing failed | Internal error processing order | Retry request |
| 50002 | Market data unavailable | Market data temporarily unavailable | Wait and retry |
| 50003 | Network error | Network connectivity issue | Check connection |

## HTTP Response Codes

| Code | Description |
|------|-------------|
| 200 | OK |
| 403 | Forbidden |
| 500 | Internal Server Error or Invalid Response |
| 503 | Service Unavailable |

## Error Response Format

All error responses follow a consistent format:

```json
{
  "code": 1001,
  "message": "Validation Error",
  "data": null
}
```

### Detailed Error Response

```json
{
  "code": 400,
  "message": "Invalid order parameters",
  "data": null,
  "errorCode": "40001",
  "details": {
    "field": "blockNumber",
    "value": "invalid",
    "expected": "positive integer"
  }
}
```

### Validation Error Response

```json
{
  "code": 422,
  "message": "Validation failed",
  "data": null,
  "errors": [
    {
      "field": "gasLimit",
      "message": "Gas limit must be between 1,000,000 and 30,000,000",
      "value": "50000000"
    },
    {
      "field": "baseFee",
      "message": "Base fee must be positive",
      "value": "-1000000000"
    }
  ]
}
```

## Error Handling Best Practices

### 1. Check HTTP Status Codes

Always check the HTTP status code first:

```python
import requests

def make_api_request(url, headers, data=None):
    response = requests.post(url, headers=headers, json=data)
    
    if response.status_code == 200:
        return response.json()
    elif response.status_code == 401:
        raise Exception("Authentication failed - check your credentials")
    elif response.status_code == 403:
        raise Exception("Permission denied - check your API permissions")
    elif response.status_code == 500:
        raise Exception("Server error - try again later")
    else:
        raise Exception(f"Unexpected error: {response.status_code}")
```

### 2. Check API Error Codes

After confirming a successful HTTP response, check the API error code:

```python
def handle_api_response(response_data):
    if response_data["code"] == 1:
        return response_data["data"]  # Success
    elif response_data["code"] == 2:
        raise Exception("Permission denied")
    elif response_data["code"] == 1001:
        raise Exception("Validation error - check your request parameters")
    elif response_data["code"] == 1002:
        raise Exception("Operation failed - try again")
    else:
        raise Exception(f"API error {response_data['code']}: {response_data['message']}")
```

### 3. Handle Specific Error Types

#### Authentication Errors

```python
def handle_auth_error(error_code):
    if error_code == 401:
        return "Authentication failed - check your credentials"
    elif error_code == 403:
        return "Permission denied - check your API permissions"
    else:
        return "Unknown authentication error"
```

#### Trading Errors

```python
def handle_trading_error(error_code):
    if error_code == 40001:
        return "Invalid order parameters - check your request format"
    elif error_code == 40002:
        return "Invalid block number - use a valid future block"
    elif error_code == 40304:
        return "Insufficient balance - add more funds"
    elif error_code == 42901:
        return "Rate limit exceeded - wait before retrying"
    else:
        return "Unknown trading error"
```

### 4. JavaScript Error Handling

```javascript
async function handleApiError(response) {
    if (!response.ok) {
        const errorData = await response.json();
        
        switch (response.status) {
            case 400:
                if (errorData.errorCode === '40001') {
                    throw new Error('Invalid order parameters');
                } else if (errorData.errorCode === '40002') {
                    throw new Error('Invalid block number');
                }
                break;
            case 401:
                throw new Error('Authentication failed');
            case 403:
                throw new Error('Insufficient permissions or funds');
            case 429:
                throw new Error('Rate limit exceeded');
            default:
                throw new Error(`Error ${response.status}: ${errorData.message}`);
        }
    }
    
    return response.json();
}

// Usage
fetch('/api/v1/trading/whole-block/place-order', {
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(orderData)
})
.then(handleApiError)
.then(data => console.log('Order placed:', data))
.catch(error => console.error('Error:', error));
```

### 5. Retry Logic

```javascript
async function makeRequestWithRetry(requestFn, maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            return await requestFn();
        } catch (error) {
            if (i === maxRetries - 1) {
                throw error;
            }
            
            // Wait before retry (exponential backoff)
            await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, i)));
        }
    }
}

// Usage
makeRequestWithRetry(() => placeOrder(orderData))
    .then(result => console.log('Success:', result))
    .catch(error => console.error('Failed after retries:', error));
```

## Common Error Scenarios

### Authentication Issues
- **401 Unauthorized**: Check your access token
- **403 Forbidden**: Verify your API permissions
- **Token Expired**: Refresh your access token

### Trading Issues
- **Invalid Parameters**: Check request format and data types
- **Insufficient Balance**: Add more funds to your account
- **Rate Limits**: Wait before making additional requests
- **Market Closed**: Check market status and trading hours

### Network Issues
- **Connection Timeout**: Check your internet connection
- **Server Errors**: Retry the request later
- **Service Unavailable**: Check ETHGas service status

## Related Documentation

- [API Overview](/docs/api/overview) - Complete API reference
- [Trading API](/docs/api/trading/whole-block) - Trading endpoints
- [Authentication](/docs/api/authentication) - Authentication guide 