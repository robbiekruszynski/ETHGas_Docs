---
sidebar_position: 2
---

# POST /api/v1/user/payoutAddress

Update the user's payout address for receiving validator fees and other payments.

## Endpoint

```
POST /api/v1/user/payoutAddress
```

## Request Headers

| Header | Value |
|--------|-------|
| Content-Type | application/json |
| Authorization | Bearer YOUR_ACCESS_TOKEN |

## Request Body

```json
{
  "payoutAddress": "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6"
}
```

### Request Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| payoutAddress | string | Yes | Ethereum address for receiving payouts |

## Response

### Success Response (200)

```json
{
  "code": 200,
  "message": "OK",
  "data": {
    "userId": "user_123",
    "payoutAddress": "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6",
    "updatedAt": 1640995200
  }
}
```

### Error Response (400)

```json
{
  "code": 400,
  "message": "Invalid payout address",
  "data": null
}
```

## Usage Examples

### cURL

```bash
curl -X POST "https://api.ethgas.com/api/v1/user/payoutAddress" \
  -H "Authorization: Bearer your_access_token" \
  -H "Content-Type: application/json" \
  -d '{
    "payoutAddress": "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6"
  }'
```

### Python

```python
import requests
import re

def update_payout_address(access_token, payout_address):
    # Validate Ethereum address format
    if not re.match(r'^0x[a-fA-F0-9]{40}$', payout_address):
        raise ValueError("Invalid Ethereum address format")
    
    url = "https://api.ethgas.com/api/v1/user/payoutAddress"
    headers = {
        "Authorization": f"Bearer {access_token}",
        "Content-Type": "application/json"
    }
    
    data = {"payoutAddress": payout_address}
    response = requests.post(url, headers=headers, json=data)
    
    if response.status_code == 200:
        data = response.json()
        return data["data"]
    else:
        raise Exception(f"Update failed: {response.text}")

# Usage
try:
    result = update_payout_address(
        "your_access_token", 
        "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6"
    )
    print(f"Payout address updated: {result}")
except Exception as e:
    print(f"Error: {e}")
```

### JavaScript

```javascript
function isValidEthereumAddress(address) {
    return /^0x[a-fA-F0-9]{40}$/.test(address);
}

async function updatePayoutAddress(accessToken, payoutAddress) {
    // Validate Ethereum address format
    if (!isValidEthereumAddress(payoutAddress)) {
        throw new Error('Invalid Ethereum address format');
    }

    const response = await fetch('https://api.ethgas.com/api/v1/user/payoutAddress', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ payoutAddress })
    });

    if (response.ok) {
        const data = await response.json();
        return data.data;
    } else {
        throw new Error('Update failed');
    }
}

// Usage
updatePayoutAddress('your_access_token', '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6')
    .then(result => console.log('Payout address updated:', result))
    .catch(error => console.error('Error:', error));
```

## Validation Rules

### Payout Address
- Must be a valid Ethereum address format (0x followed by 40 hex characters)
- Must be a checksummed address (recommended)
- Cannot be a zero address (0x0000000000000000000000000000000000000000)
- Must be different from the current payout address

## Use Cases

### Validator Fee Collection
Set up automatic fee collection for validator operations:

```python
def setup_validator_payout(access_token, validator_address):
    """Set up payout address for validator fees"""
    try:
        result = update_payout_address(access_token, validator_address)
        print(f"Validator payout address set: {result['payoutAddress']}")
        return result
    except Exception as e:
        print(f"Failed to set payout address: {e}")
        return None
```

### Multiple Account Management
Manage payout addresses for different accounts:

```python
class PayoutManager:
    def __init__(self, access_token):
        self.access_token = access_token
    
    def set_payout_address(self, address):
        """Set payout address for the current user"""
        return update_payout_address(self.access_token, address)
    
    def validate_address(self, address):
        """Validate Ethereum address format"""
        import re
        return re.match(r'^0x[a-fA-F0-9]{40}$', address) is not None
    
    def get_checksum_address(self, address):
        """Convert to checksummed address"""
        from eth_utils import to_checksum_address
        return to_checksum_address(address)

# Usage
manager = PayoutManager("your_access_token")
if manager.validate_address("0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6"):
    checksum_address = manager.get_checksum_address("0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6")
    result = manager.set_payout_address(checksum_address)
```

## Error Handling

### Common Errors

| Error Code | Description | Solution |
|------------|-------------|----------|
| 400 | Invalid payout address | Check address format and validity |
| 401 | Unauthorized | Check access token |
| 409 | Address already set | Address is already the current payout address |
| 500 | Server Error | Retry request or contact support |

### Error Response Example

```json
{
  "code": 400,
  "message": "Invalid payout address format",
  "data": null
}
```

## Security Considerations

### Address Validation
Always validate addresses before sending:

```python
def validate_ethereum_address(address):
    """Comprehensive Ethereum address validation"""
    import re
    from eth_utils import is_address, to_checksum_address
    
    # Check basic format
    if not re.match(r'^0x[a-fA-F0-9]{40}$', address):
        return False, "Invalid address format"
    
    # Check if it's a valid address
    if not is_address(address):
        return False, "Invalid Ethereum address"
    
    # Convert to checksummed address
    try:
        checksummed = to_checksum_address(address)
        return True, checksummed
    except Exception:
        return False, "Invalid checksum"

# Usage
is_valid, result = validate_ethereum_address("0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6")
if is_valid:
    update_payout_address(token, result)
else:
    print(f"Invalid address: {result}")
```

### Address Verification
Consider implementing address verification:

```python
def verify_payout_address(access_token, address):
    """Verify payout address before setting"""
    # Check if address is already set
    current_info = get_user_info(access_token)
    if current_info.get('payoutAddress') == address:
        print("Address is already set as payout address")
        return False
    
    # Validate address format
    is_valid, checksummed = validate_ethereum_address(address)
    if not is_valid:
        print(f"Invalid address: {checksummed}")
        return False
    
    # Set the address
    try:
        result = update_payout_address(access_token, checksummed)
        print(f"Payout address updated successfully: {result['payoutAddress']}")
        return True
    except Exception as e:
        print(f"Failed to update payout address: {e}")
        return False
```

## Related Endpoints

- [Get User Info](/docs/api/user/info) - Retrieve user information including current payout address
- [Update User Profile](/docs/api/user/update) - Update other user profile information
- [Validator Fees](/docs/api/validator/fees) - View validator fee information
- [Validator Onchain Payout](/docs/api/validator/onchain-payout) - View onchain payout information 