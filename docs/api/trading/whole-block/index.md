---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Whole Block Trading

Complete API reference for whole block trading, including public market data and authenticated trading operations.

## Overview

Whole block trading allows you to trade entire Ethereum blocks. This API provides:

- **Public Market Data**: Access market information, order books, trades, and positions without authentication
- **Trading Operations**: Create, cancel, and manage orders (requires authentication)
- **Account Data**: View your orders, positions, and transaction history (requires authentication)

## API Endpoints

### Get all available whole block markets

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/p/wholeblock/markets` - Get all available whole block markets
</summary>

**Description:**
Get a list of all available whole block markets with their current status and details.

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X GET /v1/p/wholeblock/markets
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/p/wholeblock/markets"

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
| markets | object[] | List of Whole Block Market objects |
| └ marketId | integer | Whole block market ID |
| └ slot | integer | Slot number of the block |
| └ instrumentId | string | Whole block market instrument ID |
| └ name | string | Whole block market name (format: "ETH-WB-xxxxxx") |
| └ priceStep | string | Minimum increment between valid price levels |
| └ minPrice | string | Minimum price |
| └ maxPrice | string | Maximum price |
| └ availablePreconf | integer | Available preconf quantity for trading |
| └ direction | boolean | The last trading direction (true = buy, false = sell) |
| └ price | string | Latest traded market price for this market |
| └ midPrice | string | Mid price of the market |
| └ status | integer | Market status - see [Market Status Codes](../../../reference/lookup-tables#market-status-codes) |
| └ maturityTime | integer | Datetime (in UNIX time) when the market will be closed |
| └ blockTime | integer | Datetime (in UNIX time) when the block starts |
| └ finalityTime | integer | Datetime (in UNIX time) when the block is being finalized |
| └ updateDate | integer | Datetime (in UNIX time) when the market orderbook was last updated |

</details>

### Get public whole block orders

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/p/wholeblock/orders` - Get public whole block orders
</summary>

**Description:**
Get public order book data for whole block markets.

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X GET /v1/p/wholeblock/orders?instrumentId=ETH-WB-9884031&limit=10
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/p/wholeblock/orders"

params = {
    "instrumentId": "ETH-WB-9884031",
    "limit": 10
}

response = requests.get(url, params=params)

print(response.text)
```

</TabItem>
</Tabs>

**Request Parameters:**

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| instrumentId | YES | string | List whole block Orders for a market |
| onbook | NO | boolean | Pending Orders Only? (default: false) |
| done | NO | boolean | Done Orders Only? (default: false) |
| startId | NO | integer | Order Start ID (default: 0) |
| asc | NO | boolean | Sort Order Direction, true=asc, false=desc, Default to true=asc |
| limit | NO | integer | Maximum Number of Orders To Return (default: 10) |

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
| └ instrumentId | string | Whole block market instrument ID |
| └ side | boolean | buy order (true) or sell order (false) |
| └ orderType | integer | Market order (1) or limit order (2) |
| └ quantity | string | Order quantity (1 for whole block orders) |
| └ fulfilled | string | Quantity that has already been executed |
| └ price | string | Price of the order |
| └ fees | string | Fees charged for this order |
| └ status | integer | Order status - see [Order Status Codes](../../../reference/lookup-tables#order-status-codes) |
| └ errorCode | integer | Error code if order failed (null if successful) |
| └ clientOrderId | string | An arbitrary string with max 32 characters provided by the client |
| └ passive | boolean | Whether the order is a maker order only |
| └ createDate | integer | Datetime (in UNIX time) when the order was created |
| └ source | integer | Where the order is originated |
| └ updateDate | integer | Datetime (in UNIX time) when the order was last updated |

</details>

### Get public whole block trades

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/p/wholeblock/trades` - Get public whole block trades
</summary>

**Description:**
Get public trade history for whole block markets.

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X GET /v1/p/wholeblock/trades?instrumentId=ETH-WB-9884031&limit=10
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/p/wholeblock/trades"

params = {
    "instrumentId": "ETH-WB-9884031",
    "limit": 10
}

response = requests.get(url, params=params)

print(response.text)
```

</TabItem>
</Tabs>

**Request Parameters:**

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| instrumentId | NO | string | Instrument ID |
| limit | NO | integer | Maximum Number of Trades To Return |

**Example Response:**

```json
{
    "success": true,
    "data": {
        "trades": [
            {
                "tradeId": 12345,
                "marketId": 2000009884031,
                "instrumentId": "ETH-WB-9884031",
                "side": true,
                "quantity": "1",
                "price": "0.01",
                "fees": "0.0001",
                "createDate": 1697449417659
            }
        ]
    }
}
```

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |
| trades | object[] | List of trade object |
| └ tradeId | integer | Unique trade ID |
| └ marketId | integer | Market ID for this trade |
| └ instrumentId | string | Whole block market instrument ID |
| └ side | boolean | buy trade (true) or sell trade (false) |
| └ quantity | string | Trade quantity |
| └ price | string | Trade price |
| └ fees | string | Fees for this trade |
| └ createDate | integer | Datetime (in UNIX time) when the trade was executed |

</details>

### Get public whole block positions

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/p/wholeblock/positions` - Get public whole block positions
</summary>

**Description:**
Get public position data for whole block markets.

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X GET /v1/p/wholeblock/positions?instrumentId=ETH-WB-9884031&limit=10
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/p/wholeblock/positions"

params = {
    "instrumentId": "ETH-WB-9884031",
    "limit": 10
}

response = requests.get(url, params=params)

print(response.text)
```

</TabItem>
</Tabs>

**Request Parameters:**

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| instrumentId | NO | string | Instrument ID |
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

### Create new whole block order

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/wholeblock/order` - Create new whole block order
</summary>

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X POST /v1/wholeblock/order \
  -d '{
    "instrumentId": "ETH-WB-9884031",
    "accountId": 128,
    "side": 1, 
    "orderType": 2,
    "clientOrderId": "05d61624",
    "passive": false,
    "price": 0.01
  }'
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
| passive | NO | boolean | Whether the order is a maker order only (post-only) |
| price | NO | string | Price in Ethereum per gas bought. Only applicable to limit, fok order. |
| quantity | YES | string | Order quantity (1 for whole block orders) |

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |
| order | object | Order object |
| └ orderId | integer | Unique order ID, assigned by ETHGas |
| └ marketId | integer | Market ID for this order |
| └ instrumentId | string | Whole block market instrument ID |
| └ accountId | integer | Unique ID for each of the user's current & trading accounts |
| └ side | boolean | buy order (true) or sell order (false) |
| └ orderType | integer | Market order (1) or limit order (2) |
| └ quantity | string | Order quantity (1 for whole block orders) |
| └ fulfilled | string | Quantity that has already been executed |
| └ price | string | Price of the order |
| └ averageTradePrice | string | Average price of executed trades |
| └ fees | string | Fees charged for this order |
| └ status | integer | Order status - see [Order Status Codes](../../../reference/lookup-tables#order-status-codes) |
| └ errorCode | integer | Error code if order failed (null if successful) |
| └ clientOrderId | string | An arbitrary string with max 32 characters provided by the client |
| └ passive | boolean | Whether the order is a maker order only |
| └ createDate | integer | Datetime (in UNIX time) when the order was created |
| └ source | integer | Where the order is originated (1: User interface, 5: TWAP) |
| └ updateDate | integer | Datetime (in UNIX time) when the order was last updated |

</details>

### Cancel whole block order

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/wholeblock/cancel-order` - Cancel whole block order for a given order ID
</summary>

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X POST /v1/wholeblock/cancel-order \
  -d '{
    "accountId": 128,
    "instrumentId": "ETH-WB-1012051",
    "clientOrderId": "b25ab402"
  }'
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/wholeblock/cancel-order"

payload = {
    "accountId": 128,
    "instrumentId": "ETH-WB-1012051",
    "clientOrderId": "b25ab402"
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

### Cancel all whole block orders

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/wholeblock/cancel-all-orders` - Cancel all whole block orders for a given user account ID for an instrument Id
</summary>

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X POST /v1/wholeblock/cancel-all-orders \
  -d '{
    "accountId": 128,
    "instrumentId": "ETH-WB-1012051"
  }'
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

Empty response on success.

</details>

### Cancel batch whole block orders

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/v1/wholeblock/cancel-batch-orders` - Cancel whole block orders for a given user account ID, and user order IDs or whole block order IDs
</summary>

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X POST /v1/wholeblock/cancel-batch-orders \
  -d '{
    "accountId": 128,
    "instrumentId": "ETH-WB-1012051",
    "orderIds": ["b25ab402", "5e885ddd"]
  }'
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/wholeblock/cancel-batch-orders"

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

Empty response on success.

</details>

### Get user whole block orders

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/user/wholeblock/orders` - Get user whole block orders for a given account ID (and instrument ID)
</summary>

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X GET /v1/user/wholeblock/orders?accountId=128&instrumentId=ETH-WB-9884031
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
| └ instrumentId | string | Whole block market instrument ID |
| └ accountId | integer | Unique ID for each of the user's current & trading accounts |
| └ side | boolean | buy order (true) or sell order (false) |
| └ orderType | integer | Market order (1) or limit order (2) |
| └ quantity | string | Order quantity (1 for whole block orders) |
| └ fulfilled | string | Quantity that has already been executed |
| └ price | string | Price of the order |
| └ averageTradePrice | string | Average price of executed trades |
| └ fees | string | Fees charged for this order |
| └ status | integer | Order status - see [Order Status Codes](../../../reference/lookup-tables#order-status-codes) |
| └ errorCode | integer | Error code if order failed (null if successful) |
| └ clientOrderId | string | An arbitrary string with max 32 characters provided by the client |
| └ passive | boolean | Whether the order is a maker order only |
| └ createDate | integer | Datetime (in UNIX time) when the order was created |
| └ source | integer | Where the order is originated (1: User interface, 5: TWAP) |
| └ updateDate | integer | Datetime (in UNIX time) when the order was last updated |

</details>

### Get all user whole block orders

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/user/wholeblock/all-orders` - Get all user whole block orders for a given user account ID
</summary>

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X GET /v1/user/wholeblock/all-orders?onBook=false&limit=10
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

**Request Parameters:**

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| onBook | NO | boolean | Pending Orders Only? (default: false) |
| startId | NO | integer | Order Start ID |
| limit | NO | integer | Maximum Number of Orders To Return (default: 10) |
| asc | NO | boolean | Sort Order Direction, true=asc, false=desc, Default to true=asc |

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

Same as "Get user whole block orders" response format.

</details>

### Get user wholeblock positions

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/user/wholeblock/positions` - Get user wholeblock positions for a given account ID (and instrument ID)
</summary>

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X GET /v1/user/wholeblock/positions?instrumentId=ETH-WB-9884031&limit=10
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

### Get user wholeblock transactions

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/v1/user/wholeblock/txs` - Get the user transactions for wholeblock market
</summary>

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X GET /v1/user/wholeblock/txs?instrumentId=ETH-WB-63999&limit=100
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

**Example Response:**

```json
{
    "success": true,
    "data": {
        "txs": [
            {
                "instrumentId": "ETH-WB-63999",
                "trxId": 146600149,
                "buyerAccountId": 2049,
                "sellerAccountId": 128,
                "side": true,
                "quantity": "1",
                "price": "0.00000000001",
                "fees": "0.0000011240748",
                "timestamp": 1742288580863,
                "status": 10
            }
        ]
    }
}
```

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |
| txs | array | List of trades |
| └ instrumentId | string | Whole block market instrument ID |
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
