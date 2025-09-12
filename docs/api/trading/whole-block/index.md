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
curl -X GET /api/v1/p/wholeblock/orders?instrumentId=ETH-WB-9884031&onbook=false&done=false&limit=10
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/p/wholeblock/orders"

params = {
  "instrumentId": "ETH-WB-9884031",
  "onbook": False,
  "done": False,
  "limit": 10
}

response = requests.get(url, params=params)

print(response.text)
```

</TabItem>
</Tabs>

**Example Response:**

```json
{
    "success": true,
    "data": {
        "orders": [
             {
                "orderId": 8522999,
                "marketId": 2000000160031,
                "side": false,
                "orderType": 2,
                "quantity": "1",
                "fulfilled": "1",
                "price": "0.00000000569",
                "fees": "0.0091793925",
                "status": 10,
                "clientOrderId": "b0eeb664",
                "passive": false,
                "createDate": 1750324420793,
                "source": 1,
                "updateDate": 1750324423349,
                "instrumentId": "ETH-WB-160031"
            },
            {
                "orderId": 8523033,
                "marketId": 2000000160031,
                "side": true,
                "orderType": 2,
                "quantity": "1",
                "fulfilled": "1",
                "price": "0.00000000591",
                "fees": "0.002039865",
                "status": 10,
                "clientOrderId": "b274e878",
                "passive": false,
                "createDate": 1750324423349,
                "source": 1,
                "updateDate": 1750324423349,
                "instrumentId": "ETH-WB-160031"
            }
        ]
    }
}
```

**Request Parameters:**

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| instrumentId | YES | string | List whole block Orders for a market |
| onbook | NO | boolean | Pending Orders Only? (default: false) |
| done | NO | boolean | Done Orders Only? (default: false) |
| startId | NO | integer | Order Start ID (default: 0) |
| asc | NO | boolean | Sort Order Direction, true=asc, false=desc, Default to true=asc |
| limit | NO | integer | Maximum Number of Orders To Return (default: 10) |

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |
| orders | object[] | List of order object |
| └ orderId | integer | Unique order ID, assigned by ETHGas |
| └ marketId | integer | Market ID for this order |
| └ instrumentId | string | Whole block market instrument ID |
| └ side | boolean | buy order (true) or sell order (false) |
| └ orderType | integer | Market order (1) or limit order (2) |
| └ quantity | string | Order quantity (1 for whole block orders) |
| └ fulfilled | string | Quantity that has already been executed |
| └ price | string | Price of the order |
| └ fees | string | Fees charged for this order |
| └ status | integer | Order status - see the [Order Status Codes](./#order-status-codes) section for more information |
| └ errorCode | integer | Error code if order failed (null if successful) |
| └ clientOrderId | string | An arbitrary string with max 32 characters (preferably unique) provided by the client when the order was created |
| └ passive | boolean | Whether the order is a maker order only |
| └ createDate | integer | Datetime (in UNIX time) when the order was created |
| └ source | integer | Where the order is originated |
| └ updateDate | integer | Datetime (in UNIX time) when the order was last updated |

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
  <span className="api-method-post">**POST**</span> `/api/v1/wholeblock/order` - Create new whole block order
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X POST /api/v1/wholeblock/order&instrumentId=ETH-WB-9884031&accountId=128&side=1&orderType=2&clientOrderId=05d61624&passive=false&price=0.01
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/wholeblock/order"

payload = {
    "instrumentId": "ETH-WB-9884031",
    "accountId": 128,
    "side": 1, 
    "orderType": 2,
    "clientOrderId": "05d61624",
    "passive": False,
    "price": 0.01
}

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer {{access_token}}'
}

response = requests.post(url, headers=headers, json=payload)

print(response.text)
```

</TabItem>
</Tabs>

**Example Response:**

```json
{
    "success": true,
    "data": {
        "order": {
            "orderId": 204415806,
            "marketId": 2000009884031,
            "instrumentId": "ETH-WB-9884031",
            "side": true,
            "orderType": 2,
            "quantity": "1",
            "fulfilled": "1",
            "price": "0.01",
            "averageTradePrice": "0.01",
            "fees": "0.0001",
            "status": 1,
            "errorCode": null,
            "clientOrderId": "05d61624",
            "preconfQuantity": "3585000",
            "passive": false,
            "createDate": 1697449417659,
            "source": 1,
            "updateDate": 1697449417659
        }
    }
}
```

**Request Parameters:**

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| instrumentId | YES | string | Instrument ID |
| side | YES | boolean | Order Side. Buy = true, Sell = false |
| orderType | YES | integer | Order Type. Market = 1, Limit = 2, FOK = 3 |
| clientOrderId | YES | string | A client generated random string as orderId |
| passive | NO | boolean | (Post-only) Whether the order is a maker order only (i.e. can only be lifted, but cannot lift/take any orders from the orderbook itself - in other words, can only add liquidity)<br /><br />If set to false, there are no such restrictions and the order can immediately lift (i.e. take) existing orders in the orderbook if it is crossing the bid/sell price spread |
| price | NO | string | Price in Ethereum per gas bought. Only applicable to limit, fok order. |
| quantity | YES | string | Order quantity (1 for whole block orders) |

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |
| order | object | Order object |
| └ orderId | integer | Unique order ID, assigned by ETHGas |
| └ marketId | integer | Market ID for this order |
| └ instrumentId | string | Whole block market instrument ID<br /><br />Use endpoint [GET /api/v1/p/wholeblock/markets] to get a list of all available wholeblock markets' instrument IDs |
| └ accountId | integer | Unique ID for each of the user's current & trading accounts assigned by ETHGas |
| └ side | boolean | buy order (true) or sell order (false) |
| └ orderType | integer | Market order (1) or limit order (2)<br /><br />If an order is sent with both a price specified and an orderType of 1, then a maximum slippage order is created |
| └ quantity | string | Order quantity (1 for whole block orders) |
| └ fulfilled | string | Quantity that has already been executed |
| └ price | string | Price of the order<br /><br />The should not be included for a regular market order; however if an order is sent with both a price specified and an orderType of 1, then a maximum slippage order is created |
| └ averageTradePrice | string | Average price of executed trades |
| └ fees | string | Fees charged for this order |
| └ status | integer | Order status - see the [Order Status Codes](./#order-status-codes) section for more information |
| └ errorCode | integer | Error code if order failed (null if successful) |
| └ clientOrderId | string | An arbitrary string with max 32 characters (preferably unique) provided by the client when the order was created |
| └ passive | boolean | (Post-only) Whether the order is a maker order only (i.e. can only be lifted, but cannot lift/take any orders from the orderbook itself - in other words, can only add liquidity)<br /><br />If set to false, there are no such restrictions and the order can immediately lift (i.e. take) existing orders in the orderbook if it is crossing the bid/sell price spread |
| └ createDate | integer | Datetime (in UNIX time) when the order was created |
| └ source | integer | Where the order is originated<br/><br/>1: User interface<br/>5: TWAP |
| └ updateDate | integer | Datetime (in UNIX time) when the order was last updated |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/api/v1/wholeblock/cancel-all-orders` - Cancel all whole block orders for a given user account ID for an instrument Id
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X POST /api/v1/wholeblock/cancel-all-orders?accountId=128&instrumentId=ETH-WB-1012051
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/wholeblock/cancel-all-orders"

payload = {
    "accountId": 128,
    "instrumentId": "ETH-WB-1012051"
}

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer {{access_token}}'
}

response = requests.post(url, headers=headers, json=payload)

print(response.text)
```

</TabItem>
</Tabs>

**Example Response:**

```json
{
    "success": false,
    "errorCode": 1002,
    "errorMsgKey": "error.order.doneOrCancelled",
    "data": {}
}
```

```json
{
    "success": true,
    "data": {}
}
```

**Request Parameters:**

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| accountId | YES | integer | Account ID |
| instrumentId | YES | string | Instrument ID |

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/api/v1/wholeblock/cancel-batch-orders` - Cancel whole block orders for a given user account ID, and user order IDs or whole block order IDs
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X POST /api/v1/wholeblock/cancel-all-orders?accountId=128&instrumentId=ETH-WB-1012051&orderIds=b25ab4023%2c5e885dd
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/wholeblock/cancel-batch-oders"

payload = {
    "accountId": 128,
    "instrumentId": "ETH-WB-1012051",
    "orderIds": [
        "b25ab402",
        "5e885ddd"
    ]
}

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer {{access_token}}'
}

response = requests.post(url, headers=headers, json=payload)

print(response.text)
```

</TabItem>
</Tabs>

**Example Response:**

```json
{
    "success": false,
    "errorCode": 1002,
    "errorMsgKey": "error.order.doneOrCancelled",
    "data": {}
}
```

```json
{
    "success": true,
    "data": {}
}
```

**Request Parameters:**

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| accountId | YES | integer | Account ID |
| orderIds | YES | List of integer | Order ID |
| instrumentId | YES | string | Instrument ID |

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/api/v1/wholeblock/cancel-order` - Cancel whole block order for a given order ID
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X POST /api/v1/wholeblock/cancel-order?accountId=128&instrumentId=ETH-WB-1012051&orderId=b25ab402


{
    "accountId": 128,
    "instrumentId": "ETH-WB-1012051",
    "orderId": "b25ab402" or "clientOrderId": "64395144"
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/wholeblock/cancel-order"

payload = {
    "accountId": 128,
    "instrumentId": "ETH-WB-1012051",
    "clientOrderId": "b25ab402" or "orderId" : "64395144"
}

headers = {
   'Content-Type': 'application/json',
   'Authorization': 'Bearer {{access_token}}'
}

response = requests.post(url, headers=headers, params=params)

print(response.text)
```

</TabItem>
</Tabs>

**Example Response:**

```json
{
    "success": false,
    "errorCode": 1002,
    "errorMsgKey": "error.order.doneOrCancelled",
    "data": {}
}
```

```json
{
    "success": true,
    "data": {}
}
```

**Request Parameters:**

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| instrumentId | YES | string | Instrument ID |
| orderId | YES | integer | Order ID |
| accountId | YES | integer | Account ID |
| clientOrderId | YES | string | A client generated random string as orderId |

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |
| message | string | Response message |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/api/v1/user/wholeblock/all-orders` - Get all user whole block orders for a given user account ID
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X GET /api/v1/user/wholeblock/all-orders?onBook=false&limit=10
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/wholeblock/all-orders"

params = {
  "onBook": False,
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
  <span className="api-method-get">**GET**</span> `/api/v1/user/wholeblock/orders` - Get user whole block orders for a given account ID (and instrument ID)
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
  "instrumentId": "ETH-WB-9884031"
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
| orders | object[] | List of order object |
| └ orderId | integer | Unique order ID, assigned by ETHGas |
| └ marketId | integer | Market ID for this order |
| └ instrumentId | string | Whole block market instrument ID<br /><br />Use endpoint [GET /api/v1/wholeblock/markets] to get a list of all available wholeblock markets' instrument IDs |
| └ accountId | integer | Unique ID for each of the user's current & trading accounts assigned by ETHGas |
| └ side | boolean | buy order (true) or sell order (false) |
| └ orderType | integer | Market order (1) or limit order (2)<br /><br />If an order is sent with both a price specified and an orderType of 1, then a maximum slippage order is created |
| └ quantity | string | Order quantity (1 for whole block orders) |
| └ fulfilled | string | Quantity that has already been executed |
| └ price | string | Price of the order |
| └ averageTradePrice | string | Average price of executed trades |
| └ fees | string | Fees charged for this order |
| └ status | integer | Order status - see the [Order Status Codes](./#order-status-codes) section for more information |
| └ errorCode | integer | Error code if order failed (null if successful) |
| └ clientOrderId | string | An arbitrary string with max 32 characters (preferably unique) provided by the client when the order was created |
| └ passive | boolean | (Post-only) Whether the order is a maker order only (i.e. can only be lifted, but cannot lift/take any orders from the orderbook itself - in other words, can only add liquidity)<br /><br />If set to false, there are no such restrictions and the order can immediately lift (i.e. take) existing orders in the orderbook if it is crossing the bid/sell price spread |
| └ createDate | integer | Datetime (in UNIX time) when the order was created |
| └ source | integer | Where the order is originated<br/><br/>1: User interface<br/>5: TWAP |
| └ updateDate | integer | Datetime (in UNIX time) when the order was last updated |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/api/v1/user/wholeblock/positions` - Get user wholeblock positions for a given account ID (and instrument ID)
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X GET /api/v1/user/wholeblock/positions?instrumentId=ETH-WB-9884031&limit=10
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/wholeblock/positions"

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
                "slot": 296895,
                "quantity": "1",
                "locked": "0",
                "expired": false,
                "updateDate": 1751967044730,
                "available": "1",
                "averagePrice": "0.0000000058"
            }
        ]
    }
}
```

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |
| positions | object[] | List of position object |
| └ slot | integer | Slot number |
| └ quantity | string | Total quantity |
| └ locked | string | Locked quantity |
| └ expired | boolean | Whether the position is expired |
| └ updateDate | integer | Datetime (in UNIX time) when the position was last updated |
| └ available | string | Available quantity |
| └ averagePrice | string | Average price of the position |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/api/v1/user/wholeblock/txs` - Get the user transactions for wholeblock market
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X GET /api/v1/user/wholeblock/txs?instrumentId=ETH-WB-63999&limit=100
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/wholeblock/txs"

params = {
  "instrumentId": "ETH-WB-63999",
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
| startId | NO | integer | Transaction start Id |
| asc | NO | boolean | Sort direction, true = ascending, false = descending, default to false |
| limit | NO | integer | Maximum Number of Transactions To Return |

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