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
        # Token expired or invalid
        return "Please re-authenticate"
    elif error_code == 403:
        # Insufficient permissions
        return "Check your API permissions"
    else:
        return "Authentication error occurred"
```

#### Validation Errors

```python
def handle_validation_error(error_code):
    if error_code == 1001:
        return "Check your request parameters"
    elif error_code == 10000:
        return "Invalid account for deposit"
    elif error_code == 10001:
        return "Invalid token for deposit"
    elif error_code == 10010:
        return "Invalid account for withdrawal"
    elif error_code == 10011:
        return "Invalid token for withdrawal"
    elif error_code == 10012:
        return "Insufficient funds for withdrawal"
    else:
        return "Validation error occurred"
```

## Common Error Scenarios

### Authentication Issues

```python
# Token expired
if response.status_code == 401:
    # Refresh token or re-authenticate
    new_token = refresh_access_token(refresh_token)
    # Retry request with new token
```

### Permission Issues

```python
# Insufficient permissions
if response.status_code == 403:
    # Check if user has required permissions
    # Contact support if permissions should be granted
```

### Validation Issues

```python
# Invalid parameters
if response_data["code"] == 1001:
    # Check request parameters
    # Ensure all required fields are present
    # Verify data types and formats
```

### Network Issues

```python
# Service unavailable
if response.status_code == 503:
    # Service is temporarily unavailable
    # Implement retry logic with exponential backoff
    time.sleep(2 ** retry_count)
    # Retry request
```

## Retry Logic

Implement retry logic for transient errors:

```python
import time
import requests

def api_request_with_retry(url, headers, data=None, max_retries=3):
    for attempt in range(max_retries):
        try:
            response = requests.post(url, headers=headers, json=data, timeout=30)
            
            if response.status_code == 200:
                return response.json()
            elif response.status_code == 503:
                # Service unavailable - retry
                if attempt < max_retries - 1:
                    time.sleep(2 ** attempt)  # Exponential backoff
                    continue
                else:
                    raise Exception("Service unavailable after retries")
            else:
                # Don't retry other errors
                response.raise_for_status()
                
        except requests.exceptions.RequestException as e:
            if attempt < max_retries - 1:
                time.sleep(2 ** attempt)
                continue
            else:
                raise Exception(f"Request failed after {max_retries} attempts: {e}")
    
    raise Exception("Max retries exceeded")
```

## Error Logging

Implement proper error logging:

```python
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def log_api_error(endpoint, error_code, message):
    logger.error(f"API Error on {endpoint}: Code {error_code} - {message}")
    
    # Log additional context for debugging
    logger.debug(f"Request details: {endpoint}")
    logger.debug(f"Error response: {message}")
```

## Related Documentation

- [Order API Error Codes](/docs/reference/error-codes/order-api) - Specific error codes for trading operations
- [Response Codes](/docs/reference/lookup-tables/response-codes) - HTTP response code reference
- [Authentication](/docs/api/authentication/login) - Authentication error handling 