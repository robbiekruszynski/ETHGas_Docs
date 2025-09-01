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
  <span className="api-method-get">**GET**</span> `/api/v1/p/funding/contractAddress` - Get funding contract address
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X GET /api/v1/p/funding/contractAddress
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/p/funding/contractAddress"

response = requests.get(url)

print(response.text)
```

</TabItem>
</Tabs>

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |
| contractAddress | string | deposit collateral address 0x818EF032D736B1a2ECC8556Fc1Bc65aEBD8482c5 |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/api/v1/user/funding/deposits` - Get user deposits
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
  'Authorization': 'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6MzEsImFkZHJlc3MiOiIweDVjODEyYzlhNjdlNjkwMGViMjBmM2YzMWQwZWNjZTUyM2Q2YTVjMDMiLCJyb2xlcyI6WyJST0xFX1VTRVIiXX0sImFjY2Vzc190eXBlIjoiYWNjZXNzX3Rva2VuIiwiaWF0IjoxNjk3NDQ5MTM0LCJleHAiOjE2OTc0NTI3MzR9.reUyFbhlJ6ZXSUypWiWeikaPQdbcRB_ZgB2k4NxcKbJS1K9J1GZnfXl9GrYOmS67L19gC-wfKqSPN4-7T3Xk0w'
}

response = requests.get(url, headers=headers, params=payload)

print(response.text)
```

</TabItem>
</Tabs>

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
| └ chainId | integer | Unique ID for the chain, assigned by ETHGas:Currently only Ethereum (Chain ID 1) is supported. |
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
  <span className="api-method-post">**POST**</span> `/api/v1/user/funding/withdraw` - Submit withdrawal request
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X POST /api/v1/user/funding/withdraw \
  -H "Content-Type: application/json" \
  -d '[
    {
        "accountId": 12,
        "tokenId": 1,
        "chainId": 1,
        "quantity": "0.05"
    }
]'
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
  'Authorization': 'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6MzEsImFkZHJlc3MiOiIweDVjODEyYzlhNjdlNjkwMGViMjBmM2YzMWQwZWNjZTUyM2Q2YTVjMDMiLCJyb2xlcyI6WyJST0xFX1VTRVIiXX0sImFjY2Vzc190eXBlIjoiYWNjZXNzX3Rva2VuIiwiaWF0IjoxNjk3NDQ5MTM0LCJleHAiOjE2OTc0NTI3MzR9.reUyFbhlJ6ZXSUypWiWeikaPQdbcRB_ZgB2k4NxcKbJS1K9J1GZnfXl9GrYOmS67L19gC-wfKqSPN4-7T3Xk0w'
}

response = requests.post(url, headers=headers, data=payload)

print(response.text)
```

</TabItem>
</Tabs>

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
  <span className="api-method-get">**GET**</span> `/api/v1/p/funding/withdraw/dailyWithdrawLimits` - Get daily withdrawal limits
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

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |
| dailyWithdrawLimits | object[] | Block chain details |
| └ tokenId | integer | Unique ID for the blockchain network assigned by ETHGas, assigned by ETHGas:Currently only Ethereum (Chain ID 1) is supported. |
| └ chainId | integer | Unique ID for the chain:Currently only Ethereum (Chain ID 1) is supported. |
| └ tokenAddress | string | Address of ERC-20 token contract (e.g. WETH) |
| └ withdrawFee | string | Withdrawal fee. |
| └ dailyWithdrawLimit | string | Daily withdraw limit of ERC-20 token |
| └ remainingWithdrawLimit | integer | remaining withdraw limit in past 24 hours. |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/api/v1/user/funding/withdraw/status` - Get withdrawal status
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X GET /api/v1/user/funding/withdraw/status?requestIds=123,456
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
  'Authorization': 'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6MzEsImFkZHJlc3MiOiIweDVjODEyYzlhNjdlNjkwMGViMjBmM2YzMWQwZWNjZTUyM2Q2YTVjMDMiLCJyb2xlcyI6WyJST0xFX1VTRVIiXX0sImFjY2Vzc190eXBlIjoiYWNjZXNzX3Rva2VuIiwiaWF0IjoxNjk3NDQ5MTM0LCJleHAiOjE2OTc0NTI3MzR9.reUyFbhlJ6ZXSUypWiWeikaPQdbcRB_ZgB2k4NxcKbJS1K9J1GZnfXl9GrYOmS67L19gC-wfKqSPN4-7T3Xk0w'
}

response = requests.get(url, headers=headers, params=params)

print(response.text)
```

</TabItem>
</Tabs>

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
| └ fee | string | Token ID |
| └ quantity | string | Quantity to be withdrawn |
| └ status | integer | Status of submitted withdraw request |
| └ quantity | string | Quantity to be withdrawn |
| └ txHash | string | Transaction hash of submitted withdraw transaction |
| └ createDate | string | Create date |
| └ updateDate | string | Last update date |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/api/v1/user/funding/withdraws` - Get user withdrawals
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
  'Authorization': 'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6MzEsImFkZHJlc3MiOiIweDVjODEyYzlhNjdlNjkwMGViMjBmM2YzMWQwZWNjZTUyM2Q2YTVjMDMiLCJyb2xlcyI6WyJST0xFX1VTRVIiXX0sImFjY2Vzc190eXBlIjoiYWNjZXNzX3Rva2VuIiwiaWF0IjoxNjk3NDQ5MTM0LCJleHAiOjE2OTc0NTI3MzR9.reUyFbhlJ6ZXSUypWiWeikaPQdbcRB_ZgB2k4NxcKbJS1K9J1GZnfXl9GrYOmS67L19gC-wfKqSPN4-7T3Xk0w'
}

response = requests.get(url, headers=headers)

print(response.text)
```

</TabItem>
</Tabs>

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
| └ fee | string | Token ID |
| └ quantity | string | Quantity to be withdrawn |
| └ status | integer | Status of submitted withdraw request |
| └ quantity | string | Quantity to be withdrawn |
| └ txHash | string | Transaction hash of submitted withdraw transaction |
| └ createDate | string | Create date |
| └ updateDate | string | Last update date |

</details>

</div>