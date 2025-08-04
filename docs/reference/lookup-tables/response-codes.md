---
sidebar_position: 3
---

# Response Codes

This section provides comprehensive reference information about HTTP response codes used by the ETHGas API.

## HTTP Response Codes

ETHGas uses standard HTTP response codes to indicate the status of API requests:

| Code | Description |
|------|-------------|
| 200 | OK |
| 403 | Forbidden |
| 500 | Internal Server Error or Invalid Response |
| 503 | Service Unavailable |

## Response Code Details

### 200 - OK
- **Description**: Request was successful
- **Use Case**: Successful API calls, data retrieval, order placement
- **Example**: User authentication, order placement, data queries

### 403 - Forbidden
- **Description**: Access denied due to insufficient permissions
- **Use Case**: Invalid API credentials, insufficient account permissions
- **Solution**: Check API credentials and account permissions

### 500 - Internal Server Error or Invalid Response
- **Description**: Server encountered an error processing the request
- **Use Case**: Server-side errors, invalid request format
- **Solution**: Retry request or contact support

### 503 - Service Unavailable
- **Description**: Service is temporarily unavailable
- **Use Case**: Server maintenance, high load, temporary outages
- **Solution**: Retry request with exponential backoff

## Response Format

All API responses follow a consistent format:

### Success Response

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

```json
{
  "code": 403,
  "message": "Forbidden",
  "data": null
}
```

## Error Handling

### HTTP Status Code Handling

```python
import requests

def make_api_request(url, headers, data=None):
    try:
        if data:
            response = requests.post(url, headers=headers, json=data)
        else:
            response = requests.get(url, headers=headers)
        
        if response.status_code == 200:
            return response.json()
        elif response.status_code == 403:
            raise Exception("Access denied - check your credentials and permissions")
        elif response.status_code == 500:
            raise Exception("Server error - try again later")
        elif response.status_code == 503:
            raise Exception("Service unavailable - try again later")
        else:
            raise Exception(f"Unexpected error: {response.status_code}")
            
    except requests.exceptions.RequestException as e:
        raise Exception(f"Network error: {e}")
```

### Retry Logic

Implement retry logic for transient errors:

```python
import time
import requests

def api_request_with_retry(url, headers, data=None, max_retries=3):
    for attempt in range(max_retries):
        try:
            if data:
                response = requests.post(url, headers=headers, json=data, timeout=30)
            else:
                response = requests.get(url, headers=headers, timeout=30)
            
            if response.status_code == 200:
                return response.json()
            elif response.status_code == 503:
                # Service unavailable - retry with exponential backoff
                if attempt < max_retries - 1:
                    wait_time = 2 ** attempt
                    time.sleep(wait_time)
                    continue
                else:
                    raise Exception("Service unavailable after retries")
            else:
                # Don't retry other errors
                response.raise_for_status()
                
        except requests.exceptions.RequestException as e:
            if attempt < max_retries - 1:
                wait_time = 2 ** attempt
                time.sleep(wait_time)
                continue
            else:
                raise Exception(f"Request failed after {max_retries} attempts: {e}")
    
    raise Exception("Max retries exceeded")
```

## Common Error Scenarios

### Authentication Errors (403)

```python
def handle_auth_error(response):
    if response.status_code == 403:
        # Check if token is expired
        if "token" in response.text.lower():
            return "Token expired - re-authenticate"
        else:
            return "Insufficient permissions - check account access"
    return None
```

### Server Errors (500)

```python
def handle_server_error(response):
    if response.status_code == 500:
        # Log the error for debugging
        print(f"Server error: {response.text}")
        return "Server error - try again later"
    return None
```

### Service Unavailable (503)

```python
def handle_service_unavailable(response):
    if response.status_code == 503:
        # Implement exponential backoff
        return "Service temporarily unavailable"
    return None
```

## Response Validation

### Validate Response Structure

```python
def validate_response(response_data):
    """Validate API response structure"""
    required_fields = ['code', 'message']
    
    if not isinstance(response_data, dict):
        raise Exception("Invalid response format")
    
    for field in required_fields:
        if field not in response_data:
            raise Exception(f"Missing required field: {field}")
    
    return True
```

### Check Response Code

```python
def check_response_code(response_data):
    """Check if response indicates success"""
    if response_data.get('code') == 200:
        return True
    else:
        error_message = response_data.get('message', 'Unknown error')
        raise Exception(f"API error: {error_message}")
```

## Best Practices

### Error Handling

1. **Always Check Status Codes**: Verify HTTP status codes before processing response
2. **Implement Retry Logic**: Retry transient errors with exponential backoff
3. **Log Errors**: Log error details for debugging
4. **User-Friendly Messages**: Provide clear error messages to users

### Response Processing

1. **Validate Structure**: Check response format before processing
2. **Handle Null Data**: Account for null data in error responses
3. **Extract Error Messages**: Use error messages from API responses
4. **Graceful Degradation**: Handle errors without crashing application

### Monitoring

1. **Track Error Rates**: Monitor error rates for different endpoints
2. **Alert on High Errors**: Set up alerts for high error rates
3. **Log Response Times**: Track API response times
4. **Monitor Service Status**: Check service availability

## Code Examples

### Complete Error Handling

```python
import requests
import time
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class ETHGasAPI:
    def __init__(self, base_url, access_token):
        self.base_url = base_url
        self.access_token = access_token
        self.session = requests.Session()
        self.session.headers.update({
            'Authorization': f'Bearer {access_token}',
            'Content-Type': 'application/json'
        })
    
    def make_request(self, endpoint, method='GET', data=None, max_retries=3):
        """Make API request with comprehensive error handling"""
        url = f"{self.base_url}{endpoint}"
        
        for attempt in range(max_retries):
            try:
                if method == 'GET':
                    response = self.session.get(url, timeout=30)
                else:
                    response = self.session.post(url, json=data, timeout=30)
                
                # Log request details
                logger.info(f"{method} {endpoint} - Status: {response.status_code}")
                
                # Handle different status codes
                if response.status_code == 200:
                    response_data = response.json()
                    if self.validate_response(response_data):
                        return response_data
                    else:
                        raise Exception("Invalid response format")
                
                elif response.status_code == 403:
                    logger.error(f"Access denied: {response.text}")
                    raise Exception("Access denied - check credentials")
                
                elif response.status_code == 500:
                    logger.error(f"Server error: {response.text}")
                    if attempt < max_retries - 1:
                        time.sleep(2 ** attempt)
                        continue
                    else:
                        raise Exception("Server error after retries")
                
                elif response.status_code == 503:
                    logger.warning(f"Service unavailable: {response.text}")
                    if attempt < max_retries - 1:
                        time.sleep(2 ** attempt)
                        continue
                    else:
                        raise Exception("Service unavailable after retries")
                
                else:
                    response.raise_for_status()
                    
            except requests.exceptions.RequestException as e:
                logger.error(f"Request error: {e}")
                if attempt < max_retries - 1:
                    time.sleep(2 ** attempt)
                    continue
                else:
                    raise Exception(f"Request failed after {max_retries} attempts")
        
        raise Exception("Max retries exceeded")
    
    def validate_response(self, response_data):
        """Validate API response structure"""
        if not isinstance(response_data, dict):
            return False
        
        required_fields = ['code', 'message']
        for field in required_fields:
            if field not in response_data:
                return False
        
        return True

# Usage
api = ETHGasAPI("https://api.ethgas.com", "your_access_token")

try:
    user_info = api.make_request("/api/v1/user/info")
    print(f"User info: {user_info}")
except Exception as e:
    print(f"Error: {e}")
```

### JavaScript Error Handling

```javascript
class ETHGasAPI {
    constructor(baseUrl, accessToken) {
        this.baseUrl = baseUrl;
        this.accessToken = accessToken;
    }

    async makeRequest(endpoint, method = 'GET', data = null, maxRetries = 3) {
        const url = `${this.baseUrl}${endpoint}`;
        
        for (let attempt = 0; attempt < maxRetries; attempt++) {
            try {
                const options = {
                    method: method,
                    headers: {
                        'Authorization': `Bearer ${this.accessToken}`,
                        'Content-Type': 'application/json'
                    }
                };

                if (data && method !== 'GET') {
                    options.body = JSON.stringify(data);
                }

                const response = await fetch(url, options);
                
                console.log(`${method} ${endpoint} - Status: ${response.status}`);

                if (response.status === 200) {
                    const responseData = await response.json();
                    if (this.validateResponse(responseData)) {
                        return responseData;
                    } else {
                        throw new Error('Invalid response format');
                    }
                } else if (response.status === 403) {
                    console.error('Access denied:', await response.text());
                    throw new Error('Access denied - check credentials');
                } else if (response.status === 500) {
                    console.error('Server error:', await response.text());
                    if (attempt < maxRetries - 1) {
                        await this.sleep(2 ** attempt);
                        continue;
                    } else {
                        throw new Error('Server error after retries');
                    }
                } else if (response.status === 503) {
                    console.warn('Service unavailable:', await response.text());
                    if (attempt < maxRetries - 1) {
                        await this.sleep(2 ** attempt);
                        continue;
                    } else {
                        throw new Error('Service unavailable after retries');
                    }
                } else {
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }
            } catch (error) {
                console.error('Request error:', error);
                if (attempt < maxRetries - 1) {
                    await this.sleep(2 ** attempt);
                    continue;
                } else {
                    throw new Error(`Request failed after ${maxRetries} attempts: ${error.message}`);
                }
            }
        }
        
        throw new Error('Max retries exceeded');
    }

    validateResponse(responseData) {
        if (typeof responseData !== 'object' || responseData === null) {
            return false;
        }

        const requiredFields = ['code', 'message'];
        for (const field of requiredFields) {
            if (!(field in responseData)) {
                return false;
            }
        }

        return true;
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Usage
const api = new ETHGasAPI('https://api.ethgas.com', 'your_access_token');

api.makeRequest('/api/v1/user/info')
    .then(userInfo => console.log('User info:', userInfo))
    .catch(error => console.error('Error:', error));
```

## Related Documentation

- [Error Codes](/docs/reference/error-codes/general) - API error codes
- [Authentication](/docs/api/authentication/login) - Authentication error handling
- [Markets](/docs/reference/lookup-tables/markets) - Market-related responses
- [Orders](/docs/reference/lookup-tables/orders) - Order-related responses 