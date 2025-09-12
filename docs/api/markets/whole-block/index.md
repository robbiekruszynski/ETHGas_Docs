---
title: Whole Block Markets
description: Public endpoints for whole block market data
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Whole Block Markets

Public endpoints for accessing whole block market data without authentication.

<div className="api-endpoints-grid">

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/api/v1/p/wholeblock/markets` - Get all available whole block markets
</summary>

**Description:**
Get a list of all available whole block markets with their current status and details.

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
            },
            {
                "marketId": 2000000295211,
                "slot": 295211,
                "instrumentId": "ETH-WB-295211",
                "name": "ETH Whole Block Slot #295211",
                "priceStep": "0.00000000001",
                "minPrice": "0.00000000001",
                "maxPrice": "0.00001",
                "availablePreconf": 16587826,
                "direction": true,
                "price": "0.00000000581",
                "status": 1,
                "maturityTime": 1751947331000,
                "blockTime": 1751947335000,
                "finalityTime": 1751948103000,
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
| └ instrumentId | string | Whole block market instrument ID<br /><br />Use endpoint [GET /api/v1/p/wholeblock/markets] to get a list of all available wholeblock markets' instrument IDs |
| └ name | string | Whole block market name<br /><br />In format: "ETH-WB-xxxxxx" |
| └ priceStep | string | Minimum increment between valid price levels |
| └ minPrice | string | Minimum price |
| └ maxPrice | string | Maximum price |
| └ availablePreconf | integer | Available preconf quantity for trading |
| └ direction | boolean | The last trading direction (true = buy, false = sell) |
| └ price | string | Latest traded market price for this market |
| └ midPrice | string | Mid price of the market |
| └ status | integer | Market status - see the [Market Status Codes](../../reference/lookup-tables#market-status-codes) section for more information |
| └ maturityTime | integer | Datetime (in UNIX time) when the market will be closed |
| └ trxSubmitTime | integer | Datetime (in UNIX time) when the market will be closed for submitting transactions |
| └ blockTime | integer | Datetime (in UNIX time) when the block starts |
| └ finalityTime | integer | Datetime (in UNIX time) when the block is being finalized |
| └ updateDate | integer | Datetime (in UNIX time) when the market orderbook was last updated |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/api/v1/p/wholeblock/positions` - Get public whole block positions
</summary>

**Description:**
Get public position data for whole block markets.

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X GET /api/v1/p/wholeblock/positions?instrumentId=ETH-WB-9884031&limit=10
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

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/api/v1/p/wholeblock/orders` - Get public whole block orders
</summary>

**Description:**
Get public order book data for whole block markets.

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X GET /api/v1/p/wholeblock/orders?instrumentId=ETH-WB-9884031&limit=10
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
| instrumentId | NO | string | Instrument ID |
| limit | NO | integer | Maximum Number of Orders To Return |

**Example Response:**

```json
{
    "success": true,
    "data": {
        "orders": [
            {
                "orderId": 204415806,
                "marketId": 2000009884031,
                "instrumentId": "ETH-WB-9884031",
                "side": true,
                "orderType": 2,
                "quantity": "1",
                "fulfilled": "1",
                "price": "0.01",
                "fees": "0.0001",
                "status": 1,
                "errorCode": null,
                "clientOrderId": "05d61624",
                "passive": false,
                "createDate": 1697449417659,
                "source": 1,
                "updateDate": 1697449417659
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
| └ status | integer | Order status - see the [Order Status Codes](../../reference/lookup-tables#order-status-codes) section for more information |
| └ errorCode | integer | Error code if order failed (null if successful) |
| └ clientOrderId | string | An arbitrary string with max 32 characters (preferably unique) provided by the client when the order was created |
| └ passive | boolean | Whether the order is a maker order only |
| └ createDate | integer | Datetime (in UNIX time) when the order was created |
| └ source | integer | Where the order is originated |
| └ updateDate | integer | Datetime (in UNIX time) when the order was last updated |

</details>

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/api/v1/p/wholeblock/trades` - Get public whole block trades
</summary>

**Description:**
Get public trade history for whole block markets.

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X GET /api/v1/p/wholeblock/trades?instrumentId=ETH-WB-9884031&limit=10
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

</div>
