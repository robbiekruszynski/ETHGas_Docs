---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Whole Block Trading

## API Endpoints

<div className="api-endpoints-grid">

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/api/v1/p/wholeblock/markets` - Get whole block markets
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X GET /api/v1/p/wholeblock/markets
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/p/wholeblock/markets"

headers = {}

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
        "markets": [
            {
                "marketId": 2000000295209,
                "slot": 295209,
                "instrumentId": "ETH-WB-295209",
                "name": "ETH Whole Block Slot #295209",
                "priceStep": "0.00000000001",
                "minPrice": "0.00000000001",
                "maxPrice": "0.00001",
                "availablePreconf": 17257755,
                "direction": true,
                "price": "0.00000000588",
                "midPrice": "0.00000000564",
                "status": 1,
                "maturityTime": 1751947307000,
                "blockTime": 1751947311000,
                "finalityTime": 1751948079000,
                "updateDate": 1751947297000
            }
        ]
    }
}
```

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |
| markets | array | Array of whole block markets |
| └ marketId | integer | Unique market ID |
| └ slot | integer | Block slot number |
| └ instrumentId | string | Market instrument ID |
| └ name | string | Market display name |
| └ priceStep | string | Minimum price increment |
| └ minPrice | string | Minimum allowed price |
| └ maxPrice | string | Maximum allowed price |
| └ availablePreconf | integer | Available preconfirmation amount |
| └ direction | boolean | Market direction |
| └ price | string | Current market price |
| └ midPrice | string | Mid price |
| └ status | integer | Market status |
| └ maturityTime | integer | Market maturity timestamp |
| └ blockTime | integer | Block time timestamp |
| └ finalityTime | integer | Finality time timestamp |
| └ updateDate | integer | Last update timestamp |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/api/v1/p/wholeblock/positions` - Get whole block positions
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X GET /api/v1/p/wholeblock/positions
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/p/wholeblock/positions"

headers = {}

response = requests.get(url, headers=headers)

print(response.text)
```

</TabItem>
</Tabs>

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |
| positions | array | Array of whole block positions |
| └ marketId | integer | Market ID |
| └ instrumentId | string | Instrument ID |
| └ quantity | string | Position quantity |
| └ averagePrice | string | Average entry price |
| └ unrealizedPnl | string | Unrealized profit/loss |
| └ realizedPnl | string | Realized profit/loss |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/api/v1/p/wholeblock/orders` - Get whole block orders
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X GET /api/v1/p/wholeblock/orders
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/p/wholeblock/orders"

headers = {}

response = requests.get(url, headers=headers)

print(response.text)
```

</TabItem>
</Tabs>

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |
| orders | array | Array of whole block orders |
| └ orderId | integer | Order ID |
| └ marketId | integer | Market ID |
| └ instrumentId | string | Instrument ID |
| └ side | boolean | Order side (true = buy, false = sell) |
| └ orderType | integer | Order type (1 = market, 2 = limit, 3 = FOK) |
| └ quantity | string | Order quantity |
| └ price | string | Order price |
| └ status | integer | Order status |
| └ createDate | integer | Creation timestamp |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/api/v1/p/wholeblock/trades` - Get whole block trades
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X GET /api/v1/p/wholeblock/trades
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/p/wholeblock/trades"

headers = {}

response = requests.get(url, headers=headers)

print(response.text)
```

</TabItem>
</Tabs>

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |
| trades | array | Array of whole block trades |
| └ tradeId | integer | Trade ID |
| └ marketId | integer | Market ID |
| └ instrumentId | string | Instrument ID |
| └ side | boolean | Trade side |
| └ quantity | string | Trade quantity |
| └ price | string | Trade price |
| └ timestamp | integer | Trade timestamp |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/api/v1/wholeblock/order` - Place whole block order
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X POST /api/v1/wholeblock/order \
  -H "Content-Type: application/json" \
  -d '{
    "instrumentId": "ETH-WB-9884031",
    "accountId": 128,
    "side": true,
    "orderType": 2,
    "clientOrderId": "05d61624",
    "passive": false,
    "price": "0.01",
    "quantity": "1"
}'
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests
import json

url = "https://mainnet.app.ethgas.com/api/v1/wholeblock/order"

payload = json.dumps({
    "instrumentId": "ETH-WB-9884031",
    "accountId": 128,
    "side": True,
    "orderType": 2,
    "clientOrderId": "05d61624",
    "passive": False,
    "price": "0.01",
    "quantity": "1"
})

headers = {
    'Authorization': 'Bearer {{access_token}}',
    'Content-Type': 'application/json'
}

response = requests.post(url, headers=headers, data=payload)

print(response.text)
```

</TabItem>
</Tabs>

**Request Body:**

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| instrumentId | YES | string | Instrument ID |
| accountId | YES | integer | Account ID |
| side | YES | boolean | Order Side. Buy = true, Sell = false |
| orderType | YES | integer | Order Type. Market = 1, Limit = 2, FOK = 3 |
| clientOrderId | YES | string | A client generated random string as orderId |
| passive | NO | boolean | (Post-only) Whether the order is a maker order only (i.e. can only be lifted, but cannot lift/take any orders from the orderbook itself - in other words, can only add liquidity)<br/><br/>If set to false, there are no such restrictions and the order can immediately lift (i.e. take) existing orders in the orderbook if it is crossing the bid/sell price spread |
| price | NO | string | Price in Ethereum per gas bought. Only applicable to limit, fok order. |
| quantity | YES | string | Order quantity (1 for whole block orders) |

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |
| order | object | Order object |
| └ orderId | integer | Unique order ID, assigned by ETHGas |
| └ marketId | integer | Market ID for this order |
| └ instrumentId | string | Whole block market instrument ID<br/><br/>Use endpoint [GET /api/v1/p/wholeblock/markets] to get a list of all available wholeblock markets' instrument IDs |
| └ accountId | integer | Unique ID for each of the user's current & trading accounts assigned by ETHGas |
| └ side | boolean | buy order (true) or sell order (false) |
| └ orderType | integer | Market order (1) or limit order (2)<br/><br/>If an order is sent with both a price specified and an orderType of 1, then a maximum slippage order is created |
| └ quantity | string | Order quantity (1 for whole block orders) |
| └ fulfilled | string | Quantity that has already been executed |
| └ price | string | Price of the order<br/><br/>The should not be included for a regular market order; however if an order is sent with both a price specified and an orderType of 1, then a maximum slippage order is created |
| └ averageTradePrice | string | Average price of executed trades |
| └ fees | string | Fees charged for this order |
| └ status | integer | Order status - see the Order Status Codes section for more information |
| └ errorCode | integer | Error code if order failed (null if successful) |
| └ clientOrderId | string | An arbitrary string with max 32 characters (preferably unique) provided by the client when the order was created |
| └ passive | boolean | (Post-only) Whether the order is a maker order only (i.e. can only be lifted, but cannot lift/take any orders from the orderbook itself - in other words, can only add liquidity)<br/><br/>If set to false, there are no such restrictions and the order can immediately lift (i.e. take) existing orders in the orderbook if it is crossing the bid/sell price spread |
| └ createDate | integer | Datetime (in UNIX time) when the order was created |
| └ source | integer | Where the order is originated (1: User interface) |
| └ updateDate | integer | Datetime (in UNIX time) when the order was last updated |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/api/v1/wholeblock/cancel-all-orders` - Cancel all whole block orders
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X POST /api/v1/wholeblock/cancel-all-orders
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/wholeblock/cancel-all-orders"

headers = {
    'Authorization': 'Bearer {{access_token}}'
}

response = requests.post(url, headers=headers)

print(response.text)
```

</TabItem>
</Tabs>

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | Whether the operation was successful |
| message | string | Response message |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/api/v1/wholeblock/cancel-batch-orders` - Cancel batch of whole block orders
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X POST /api/v1/wholeblock/cancel-batch-orders \
  -H "Content-Type: application/json" \
  -d '{
    "orderIds": [12345, 67890]
}'
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests
import json

url = "https://mainnet.app.ethgas.com/api/v1/wholeblock/cancel-batch-orders"

payload = json.dumps({
    "orderIds": [12345, 67890]
})

headers = {
    'Authorization': 'Bearer {{access_token}}',
    'Content-Type': 'application/json'
}

response = requests.post(url, headers=headers, data=payload)

print(response.text)
```

</TabItem>
</Tabs>

**Request Body:**

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| orderIds | YES | array | Array of order IDs to cancel |

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | Whether the operation was successful |
| cancelledOrders | array | Array of cancelled order IDs |
| message | string | Response message |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/api/v1/wholeblock/cancel-order` - Cancel specific whole block order
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X POST /api/v1/wholeblock/cancel-order \
  -H "Content-Type: application/json" \
  -d '{
    "orderId": 12345
}'
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests
import json

url = "https://mainnet.app.ethgas.com/api/v1/wholeblock/cancel-order"

payload = json.dumps({
    "orderId": 12345
})

headers = {
    'Authorization': 'Bearer {{access_token}}',
    'Content-Type': 'application/json'
}

response = requests.post(url, headers=headers, data=payload)

print(response.text)
```

</TabItem>
</Tabs>

**Request Body:**

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| orderId | YES | integer | Order ID to cancel |

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | Whether the operation was successful |
| orderId | integer | Cancelled order ID |
| message | string | Response message |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/api/v1/user/wholeblock/all-orders` - Get all whole block orders
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X GET /api/v1/user/wholeblock/all-orders?onBook=false&startId=0&limit=10&asc=true
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/wholeblock/all-orders"

params = {
    "onBook": False,
    "startId": 0,
    "limit": 10,
    "asc": True
}

headers = {
    'Authorization': 'Bearer {{access_token}}'
}

response = requests.get(url, headers=headers, params=params)

print(response.text)
```

</TabItem>
</Tabs>

**Request Parameters:**

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| onBook | NO | boolean | Pending Orders Only? (default: false) |
| startId | NO | integer | Order Start ID |
| limit | NO | integer | Maximum Number of Orders To Return (default: 10) |
| asc | NO | boolean | Sort Order Direction, true=asc, false=desc, Default to true=asc |

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |
| orders | array | List of order object |
| └ orderId | integer | Unique order ID, assigned by ETHGas |
| └ marketId | integer | Market ID for this order |
| └ instrumentId | string | Whole block market instrument ID |
| └ accountId | integer | Unique ID for each of the user's current & trading accounts assigned by ETHGas |
| └ side | boolean | buy order (true) or sell order (false) |
| └ orderType | integer | Market order (1) or limit order (2) |
| └ quantity | string | Order quantity (1 for whole block orders) |
| └ fulfilled | string | Quantity that has already been executed |
| └ price | string | Price of the order |
| └ averageTradePrice | string | Average price of executed trades |
| └ fees | string | Fees charged for this order |
| └ status | integer | Order status |
| └ errorCode | integer | Error code if order failed (null if successful) |
| └ clientOrderId | string | Client order ID |
| └ passive | boolean | Passive order flag |
| └ createDate | integer | Creation timestamp |
| └ source | integer | Order source |
| └ updateDate | integer | Last update timestamp |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/api/v1/user/wholeblock/orders` - Get user whole block orders
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X GET /api/v1/user/wholeblock/orders?accountId=128&instrumentId=ETH-WB-9884031
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/wholeblock/orders"

params = {
    "instrumentId": "ETH-WB-9884031",
    "accountId": 128
}

headers = {
    'Authorization': 'Bearer {{access_token}}'
}

response = requests.get(url, headers=headers, params=params)

print(response.text)
```

</TabItem>
</Tabs>

**Request Parameters:**

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| instrumentId | NO | string | Instrument ID |
| accountId | YES | integer | Account ID |
| onbook | NO | boolean | Pending Orders Only? |
| done | NO | boolean | Done Orders Only? |
| startId | NO | integer | Order Start ID |
| limit | NO | integer | Maximum Number of Orders To Return |

**Example Response:**

```json
{
    "success": true,
    "data": {
        "orders": [
            {
                "orderId": 204421028,
                "marketId": 2000009884031,
                "instrumentId": "ETH-WB-9884031",
                "accountId": 128,
                "side": false,
                "orderType": 1,
                "quantity": "1",
                "fulfilled": "1",
                "price": "0.01",
                "averageTradePrice": "0.01",
                "fees": "0.0001",
                "status": 10,
                "errorCode": null,
                "clientOrderId": "y0xja3Xi",
                "passive": false,
                "createDate": 1697449610000,
                "source": 1,
                "updateDate": 1697449609000
            }
        ]
    }
}
```

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |
| orders | array | Array of user's whole block orders |
| └ orderId | integer | Order ID |
| └ marketId | integer | Market ID |
| └ instrumentId | string | Instrument ID |
| └ accountId | integer | Account ID |
| └ side | boolean | Order side |
| └ orderType | integer | Order type |
| └ quantity | string | Order quantity |
| └ fulfilled | string | Fulfilled quantity |
| └ price | string | Order price |
| └ averageTradePrice | string | Average trade price |
| └ fees | string | Order fees |
| └ status | integer | Order status |
| └ errorCode | integer | Error code (null if successful) |
| └ clientOrderId | string | Client order ID |
| └ passive | boolean | Passive order flag |
| └ createDate | integer | Creation timestamp |
| └ source | integer | Order source |
| └ updateDate | integer | Last update timestamp |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/api/v1/user/wholeblock/positions` - Get user whole block positions
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X GET /api/v1/user/wholeblock/positions?instrumentId=ETH-WB-9884031&accountId=128&limit=10
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/wholeblock/positions"

params = {
    "instrumentId": "ETH-WB-9884031",
    "accountId": 128,
    "limit": 10
}

headers = {
    'Authorization': 'Bearer {{access_token}}'
}

response = requests.get(url, headers=headers, params=params)

print(response.text)
```

</TabItem>
</Tabs>

**Request Parameters:**

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| instrumentId | NO | string | Instrument ID |
| accountId | YES | integer | Account ID |
| startId | NO | integer | Slot start Id |
| asc | NO | boolean | Sort direction, true = ascending, false = descending, default to false |
| limit | NO | integer | Maximum Number of Positions To Return |

**Example Response:**

```json
{
    "success": true,
    "data": {
        "positions": [
            {
                "positionId": 204421028,
                "instrumentId": "ETH-WB-9884031",
                "accountId": 128,
                "side": false,
                "orderType": 1,
                "quantity": "1",
                "fulfilled": "1",
                "status": 10,
                "clientOrderId": "y0xja3Xi",
                "passive": false,
                "orderDate": 1697449610000,
                "source": 1,
                "updateDate": 1697449609000,
                "averageTradePrice": "0.047",
                "trades": [
                    {
                        "side": false,
                        "price": "0.047",
                        "quantity": "1",
                        "date": 1697449609000
                    }
                ]
            }
        ]
    }
}
```

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |
| positions | array | List of position object |
| └ positionId | integer | Unique position ID, assigned by ETHGas |
| └ instrumentId | string | Whole block market instrument ID<br/><br/>Use endpoint [GET /api/v1/wholeblock/markets] to get a list of all available wholeblock markets' instrument IDs |
| └ accountId | integer | Unique ID for each of the user's current & trading accounts assigned by ETHGas |
| └ side | boolean | Order side - buy (true) or sell (false) |
| └ orderType | integer | Order type |
| └ quantity | string | Order quantity |
| └ fulfilled | string | Quantity that has been fulfilled |
| └ status | integer | Order status - see the Order Status Codes section for more information |
| └ clientOrderId | string | Client order ID |
| └ passive | boolean | (Post-only) Whether the order is a maker order only (i.e. can only be lifted, but cannot lift/take any orders from the orderbook itself - in other words, can only add liquidity)<br/><br/>If set to false, there are no such restrictions and the order can immediately lift (i.e. take) existing orders in the orderbook if it is crossing the bid/sell price spread |
| └ orderDate | integer | Datetime (in UNIX time) when the order was created |
| └ source | integer | Where the order is originated<br/><br/>1: User interface<br/>5: TWAP |
| └ updateDate | integer | Datetime (in UNIX time) something last occurred to the order |
| └ averageTradePrice | string | Average trade price |
| └ trades | array | List of executed trades for this order |
| 　└ side | boolean | Order side - buy (true) or sell (false) |
| 　└ price | string | Price executed |
| 　└ quantity | string | Quantity executed |
| 　└ date | integer | Datetime (in UNIX time) executed |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/api/v1/user/wholeblock/txs` - Get user whole block transactions
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X GET /api/v1/user/wholeblock/txs?instrumentId=ETH-WB-9884031&limit=10
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/wholeblock/txs"

params = {
    "instrumentId": "ETH-WB-9884031",
    "limit": 10
}

headers = {
    'Authorization': 'Bearer {{access_token}}'
}

response = requests.get(url, headers=headers, params=params)

print(response.text)
```

</TabItem>
</Tabs>

**Request Parameters:**

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| instrumentId | YES | string | Whole block market instrument ID<br/><br/>Use endpoint [GET /api/v1/p/wholeblock/markets] to get a list of all available wholeblock markets' instrument IDs |
| limit | NO | integer | Maximum number of transactions to return |

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |
| txs | array | List of trades |
| └ instrumentId | string | Whole block market instrument ID<br/><br/>Use endpoint [GET /api/v1/p/wholeblock/markets] to get a list of all available whole block markets' instrument IDs |
| └ trxId | integer | Transaction Id |
| └ buyerAccountId | integer | Buyer Account Id |
| └ sellerAccountId | integer | Seller Account Id |
| └ side | boolean | Transaction side |
| └ quantity | string | Transaction quantity |
| └ price | string | Transaction price |
| └ fees | string | Transaction fees |
| └ timestamp | integer | Transaction timestamp |
| └ status | integer | Transaction status |

</details>

</div>