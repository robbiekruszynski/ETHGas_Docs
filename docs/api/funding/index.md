---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Funding

## API Endpoints

<div className="api-endpoints-grid">

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/api/v1/user/funding/deposits` - Get fund deposits history
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X GET /api/v1/user/funding/deposits
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/funding/deposits"

payload = {}
headers = {
  'Authorization': 'Bearer {{access_token}}'
}

response = requests.get(url, headers=headers, params=payload)

print(response.text)
```

</TabItem>
</Tabs>

**Example Response:**

```json
{
    "success": true,
    "data": {
        "deposits": [
            {
                "eventId": 6,
                "chainId": 1,
                "blockIdx": 123456,
                "blockHash": "0xdd5a8e1742e26ce90feb865f1c6a0fdbf2d8cbed086314fc85281ff47aaea5ee",
                "transactionIdx": 2,
                "transactionHash": "0x866bb046a97243519679183e08e5ce6728d3e1e9976a2535ce8c8887b62997a2",
                "logIdx": 2,
                "senderAddress": "0xd055335192d920ce2de4a88557f232943a901a9f",
                "depositAddress": "0xd055335192d920ce2de4a88557f232943a901a9f",
                "status": 10,
                "deposits": [
                    {
                        "a": "0xdc0b8e3cd3fec447940cb8107957f22e7e320812",
                        "q": 500000000000000000,
                        "s": 10
                    }
                ],
                "actions": [],
                "createDate": 1746005076000
            }
        ]
    }
}
```

**Request Parameters:**

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| limit | NO | integer | Maximum number of deposits to return |
| startBlockId | NO | integer | Block start ID |

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |
| deposits | object[] | List of deposits |
| └ eventId | long | Unique ID for the deposit event |
| └ chainId | integer | Unique ID for the chain, assigned by ETHGas<br/><br/>Currently only Ethereum (Chain ID 1) is supported. |
| └ blockIdx | long | Block ID |
| └ blockHash | byte[] | Block hash |
| └ transactionIdx | long | Transaction ID |
| └ transactionHash | byte[] | Transaction hash |
| └ logIdx | integer | Log ID |
| └ senderAddress | string | Sender address |
| └ depositAddress | string | Deposit address |
| └ status | integer | Deposit status, success = 10 |
| └ deposits | object[] | Deposits |
| └ actions | string | Actions |
| └ createDate | date | create date |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/api/v1/user/funding/withdraw` - Request to withdraw funds
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -x POST /api/v1/user/funding/withdraw

[
    {
        "accountId": 12,
        "tokenId": 1,
        "chainId": 1,
        "quantity": "0.05"
    },
    {
        "accountId": 12,
        "tokenId": 2,
        "chainId": 1,
        "quantity": "0.001"
    }
]
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests
import json

url = "https://mainnet.app.ethgas.com/api/v1/user/funding/withdraw"

payload = json.dumps([
    {
        "accountId": 12,
        "tokenId": 1,
        "chainId": 1,
        "quantity": "0.05"
    }
])

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer {{access_token}}'
}

response = requests.post(url, headers=headers, params=payload)

print(response.text)
```

</TabItem>
</Tabs>

**Example Response:**

```json
{
    "success": true,
    "data": {
        "submittedRequestIds": [
            4
        ],
        "failedRequests": [
            {
                "accountId": 21,
                "tokenId": 1,
                "chainId": 32382,
                "quantity": "0.001",
                "status": 101,
                "remark": "Unsupported Chain ID."
            }
        ]
    }
}
```

**Request Parameters:**

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| requests | YES | object[] | List of withdraw requests |
| └ accountId | YES | integer | Account ID |
| └ chainId | YES | integer | Chain ID |
| └ tokenId | YES | integer | Token ID |
| └ quantity | YES | string | Quantity to be withdrawn |

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |
| submittedRequestIds | integer[] | List of successful submitted request IDs |
| failedRequests | object[] | List of failed submitted requests with reason. |
| └ accountId | integer | Account ID |
| └ chainId | integer | Chain ID |
| └ tokenId | integer | Token ID |
| └ fee | string | Token ID |
| └ quantity | string | Quantity to be withdrawn |
| └ status | integer | Status of submitted withdraw request |
| └ remark | string | Reason of failed request. |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/api/v1/p/funding/withdraw/dailyWithdrawLimits` - Get list of token's current on-chain daily withdraw limits
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X GET /api/v1/p/funding/withdraw/dailyWithdrawLimits
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/p/funding/withdraw/dailyWithdrawLimits"

response = requests.get(url)

print(response.text)
```

</TabItem>
</Tabs>

**Example Response:**

```json
{
    "success": true,
    "data": {
        "dailyWithdrawLimits": [
            {
                "tokenId": 1,
                "chainId": 1,
                "tokenAddress": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
                "withdrawFee": "0.01",
                "dailyWithdrawLimit": "50",
                "remainingWithdrawLimit": "49.863"
            }
        ]
    }
}
```

**Request Parameters:**

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |
| dailyWithdrawLimits | object[] | List of daily withdraw limits |
| └ tokenId | integer | Token ID |
| └ chainId | integer | Chain ID |
| └ tokenAddress | string | Token address |
| └ withdrawFee | string | Withdraw fee |
| └ dailyWithdrawLimit | string | Daily withdraw limit |
| └ remainingWithdrawLimit | string | Remaining withdraw limit |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/api/v1/user/funding/withdraw/status` - Get fund withdrawal request status (for given list of request IDs)
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X GET /api/v1/user/funding/withdraw/status?requestIds=123%2c456
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/funding/withdraw/status?requestIds=123,456"

params = {
    'requestIds': '123,456'
}

headers = {
  'Authorization': 'Bearer {{access_token}}'
}

response = requests.get(url, headers=headers, params=params)

print(response.text)
```

</TabItem>
</Tabs>

**Example Response:**

```json
{
    "success": true,
    "data": {
        "requests": [
            {
                "requestId": 16,
                "userId": 17,
                "accountId": 15,
                "tokenId": 1,
                "chainId": 17000,
                "quantity": "0.005",
                "fee": "0.001",
                "status": 10,
                "txHash": "0x4de9ecf18ea11d8d290a01e759f3b150809f70cccb08bb74ceede7a801e2e9a5",
                "createDate": 1746161880000,
                "updateDate": 1746162105000
            },
            {
                "requestId": 15,
                "userId": 17,
                "accountId": 15,
                "tokenId": 1,
                "chainId": 17000,
                "quantity": "0.005",
                "fee": "0.001",
                "status": 10,
                "txHash": "0xba85584d93dd7a209838308a767c9848535d0ada4f83c17526147f9c74104edd",
                "createDate": 1746160279000,
                "updateDate": 1746160538000
            }
        ]
    }
}
```

**Request Parameters:**

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| requestIds | YES | integer[] | List of fund withdrawal request IDs |

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |
| requests | object[] | List of withdraw requests with status |
| └ requestId | integer | Request ID |
| └ userId | integer | User ID |
| └ accountId | integer | Account ID |
| └ chainId | integer | Chain ID |
| └ tokenId | integer | Token ID |
| └ fee | string | Fee |
| └ quantity | string | Quantity to be withdrawn |
| └ status | integer | Status of submitted withdraw request |
| └ txHash | string | Transaction hash of submitted withdraw transaction |
| └ createDate | string | Create date |
| └ updateDate | string | Last update date |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/api/v1/user/funding/withdraws` - Get list of fund withdrawals
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X GET /api/v1/user/funding/withdraws
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/funding/withdraws"

headers = {
  'Authorization': 'Bearer {{access_token}}'
}

response = requests.get(url, headers=headers)

print(response.text)
```

</TabItem>
</Tabs>

**Example Response:**

```json
{
    "success": true,
    "data": {
        "requests": [
            {
                "requestId": 16,
                "userId": 17,
                "accountId": 15,
                "tokenId": 1,
                "chainId": 17000,
                "quantity": "0.005",
                "fee": "0.001",
                "status": 10,
                "txHash": "0x4de9ecf18ea11d8d290a01e759f3b150809f70cccb08bb74ceede7a801e2e9a5",
                "createDate": 1746161880000,
                "updateDate": 1746162105000
            },
            {
                "requestId": 15,
                "userId": 17,
                "accountId": 15,
                "tokenId": 1,
                "chainId": 17000,
                "quantity": "0.005",
                "fee": "0.001",
                "status": 10,
                "txHash": "0xba85584d93dd7a209838308a767c9848535d0ada4f83c17526147f9c74104edd",
                "createDate": 1746160279000,
                "updateDate": 1746160538000
            }
        ]
    }
}
```

**Request Parameters:**

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| limit | NO | integer | Maximum number of withdrawals to return |
| startId | NO | integer | Fund withdrawal request start ID |

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |
| requests | object[] | List of withdraw requests |
| └ requestId | integer | Request ID |
| └ userId | integer | User ID |
| └ accountId | integer | Account ID |
| └ chainId | integer | Chain ID |
| └ tokenId | integer | Token ID |
| └ fee | string | Fee |
| └ quantity | string | Quantity to be withdrawn |
| └ status | integer | Status of submitted withdraw request |
| └ txHash | string | Transaction hash of submitted withdraw transaction |
| └ createDate | string | Create date |
| └ updateDate | string | Last update date |

</details>

</div>