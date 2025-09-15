---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Inclusion Preconf Trading

## API Endpoints

### Get active all preconf market details

<div className="api-endpoints-grid">

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/api/v1/p/inclusion-preconf/markets` - Get active all preconf market details
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X GET /api/v1/p/inclusion-preconf/markets
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/p/inclusion-preconf/markets"

headers = {}

response = requests.get(url, headers=headers)

print(response.text)
```

</TabItem>
</Tabs>

**Request Parameters:**

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| None | - | - | No parameters required |

**Example Response:**

```json
{
    "success": true,
    "data": {
        "markets": [
            {
                "marketId": 1000002880221,
                "slot": 2880221,
                "instrumentId": "ETH-PC-2880221",
                "name": "Eth Preconf Inclusion Slot #2880221",
                "quantityStep": "1",
                "minQuantity": "1",
                "maxQuantity": "30000000",
                "priceStep": "0.00000000001",
                "minPrice": "0.00000000001",
                "maxPrice": "0.00001",
                "collateralPerSlot": "3.996",
                "totalPreconf": 36000000,
                "availablePreconf": 30000000,
                "direction": true,
                "price": "0.00000001302",
                "midPrice": "0.00000001299",
                "status": 1,
                "maturityTime": 1730465048000,
                "trxSubmitTime": 1730465050000,
                "blockTime": 1730465052000,
                "finalityTime": 1730465820000,
                "totalGas": 29982469,
                "validatorType": 1,
                "updateDate": 1730465042000
            }
        ]
    }
}
```

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |
| markets | array | List of Market objects |
| └ marketId | integer | Preconf market ID |
| └ slot | integer | Slot number of the block |
| └ instrumentId | string | Inclusion Preconf Market instrument ID<br/><br/>Use endpoint [GET /api/v1/p/inclusion-preconf/markets] to get a list of all available inclusion preconf markets' instrument IDs |
| └ name | string | Preconf market name<br/><br/>In format: "ETH-PC-xxxxxx" |
| └ quantityStep | string | Minimum increment between different order quantities |
| └ minQuantity | string | Minimum order quantity |
| └ maxQuantity | string | Maximum order quantity |
| └ priceStep | string | Minimum increment between valid price levels |
| └ minPrice | string | Minimum price |
| └ maxPrice | string | Maximum price |
| └ collateralPerSlot | string | ETH reserved by validator as collateral for this slot |
| └ totalPreconf | integer | Total preconf quantity for this slot |
| └ availablePreconf | integer | Available preconf quantity for trading |
| └ direction | boolean | The last trading direction (true = buy, false = sell) |
| └ price | string | Latest traded market price for this market |
| └ midPrice | string | Mid price of bid and ask |
| └ status | integer | Market status - see [Market Status Codes](/docs/reference/lookup-tables#market-status-codes) |
| └ maturityTime | integer | Datetime (in UNIX time) when the market will be closed |
| └ trxSubmitTime | integer | Datetime (in UNIX time) when the market will be closed for submitting transactions |
| └ blockTime | integer | Datetime (in UNIX time) when the block starts |
| └ finalityTime | integer | Datetime (in UNIX time) when the block is being finalized |
| └ totalGas | integer | Total gas available for sale in this block |
| └ validatorType | integer | Type of validator (0 for normal validators, 1 for SSV validators) |
| └ updateDate | integer | Datetime (in UNIX time) when the market orderbook was last updated |

</details>

### Get preconfs market details for a given slot

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/api/v1/p/inclusion-preconf/market` - Get preconfs market details for a given slot
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X GET /api/v1/p/inclusion-preconf/market?slot=2880221
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/p/inclusion-preconf/market"

params = {
    "slot": 2880221
}

headers = {}

response = requests.get(url, headers=headers, params=params)

print(response.text)
```

</TabItem>
</Tabs>

**Request Parameters:**

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| slot | YES | integer | Slot number |

**Example Response:**

```json
{
    "success": true,
    "data": {
        "market": {
            "marketId": 1000002880221,
            "slot": 2880221,
            "instrumentId": "ETH-PC-2880221",
            "name": "Eth Preconf Inclusion Slot #2880221",
            "quantityStep": "1",
            "minQuantity": "1",
            "maxQuantity": "30000000",
            "priceStep": "0.00000000001",
            "minPrice": "0.00000000001",
            "maxPrice": "0.00001",
            "collateralPerSlot": "3.996",
            "totalPreconf": 36000000,
            "availablePreconf": 30000000,
            "direction": true,
            "price": "0.00000001302",
            "midPrice": "0.00000001299",
            "status": 1,
            "maturityTime": 1730465048000,
            "trxSubmitTime": 1730465050000,
            "blockTime": 1730465052000,
            "finalityTime": 1730465820000,
            "totalGas": 29982469,
            "validatorType": 1,
            "updateDate": 1730465042000
        }
    }
}
```

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |
| market | object | Market object |
| └ marketId | integer | Preconf market ID |
| └ slot | integer | Slot number of the block |
| └ instrumentId | string | Inclusion Preconf Market instrument ID<br/><br/>Use endpoint [GET /api/v1/p/inclusion-preconf/markets] to get a list of all available instrument IDs |
| └ name | string | Preconf market name<br/><br/>In format: "ETH-PC-xxxxxx" |
| └ quantityStep | string | Minimum increment between different order quantities |
| └ minQuantity | string | Minimum order quantity |
| └ maxQuantity | string | Maximum order quantity |
| └ priceStep | string | Minimum increment between valid price levels |
| └ minPrice | string | Minimum price |
| └ maxPrice | string | Maximum price |
| └ collateralPerSlot | string | ETH reserved by validator as collateral for this slot |
| └ totalPreconf | integer | Total preconf quantity for this slot |
| └ availablePreconf | integer | Available preconf quantity for trading |
| └ direction | boolean | The last trading direction (true = buy, false = sell) |
| └ price | string | Latest traded market price for this market |
| └ midPrice | string | Mid price of bid and ask |
| └ status | integer | Market status - see [Market Status Codes](/docs/reference/lookup-tables#market-status-codes) |
| └ maturityTime | integer | Datetime (in UNIX time) when the market will be closed |
| └ trxSubmitTime | integer | Datetime (in UNIX time) when the market will be closed for submitting transactions |
| └ blockTime | integer | Datetime (in UNIX time) when the block starts |
| └ finalityTime | integer | Datetime (in UNIX time) when the block is being finalized |
| └ totalGas | integer | Total gas available for sale in this block |
| └ validatorType | integer | Type of validator (0 for normal validators, 1 for SSV validators) |
| └ updateDate | integer | Datetime (in UNIX time) when the market orderbook was last updated |

</details>

### Get recent preconf trade details

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/api/v1/p/inclusion-preconf/trades` - Get recent preconf trade details for a given preconf instrument ID
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X GET /api/v1/p/inclusion-preconf/trades?instrumentId=ETH-PC-988403&limit=10
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/p/inclusion-preconf/trades"

params = {
    "instrumentId": "ETH-PC-988403",
    "limit": 10
}

headers = {}

response = requests.get(url, headers=headers, params=params)

print(response.text)
```

</TabItem>
</Tabs>

**Request Parameters:**

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| instrumentId | YES | string | Instrument ID |
| limit | NO | integer | Maximum number of transactions to return |

**Example Response:**

```json
{
    "trades": [
        {
            "trxId": "1231310314",
            "instrumentId": "ETH-PC-988403",
            "side": false,
            "price": "0.0501",
            "quantity": "210000",
            "date": 1689833397180
        },
        {
            "trxId": "1231310327",
            "instrumentId": "ETH-PC-988403",
            "side": false,
            "price": "0.0493",
            "quantity": "400000",
            "date": 1689833043675
        }
    ]
}
```

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |
| trades | array | List of trades |
| └ trxId | string | Transaction Id |
| └ instrumentId | string | Inclusion Preconf market instrument ID<br/><br/>Use endpoint [GET /api/v1/p/inclusion-preconf/markets] to get a list of all available inclusion preconf markets' instrument IDs |
| └ side | boolean | Trade side (true for buy, false for sell) |
| └ price | string | Price at which the trade occurred |
| └ quantity | string | Traded quantity |
| └ date | integer | Timestamp of the trade in milliseconds |

</details>

### Get inclusion preconf top sales

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/api/v1/p/inclusion-preconf/top-sales` - Get inclusion preconf top sales
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X GET /api/v1/p/inclusion-preconf/top-sales
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/p/inclusion-preconf/top-sales"

headers = {}

response = requests.get(url, headers=headers)

print(response.text)
```

</TabItem>
</Tabs>

**Request Parameters:**

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| None | - | - | No parameters required |

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |
| topSales | array | List of top sales |
| └ slot | integer | Slot ID |
| └ totalGas | integer | Total gas purchased in this slot |
| └ sales | array | Array of top gas sales |
| 　└ price | string | Purchased price in average |
| 　└ quantity | string | Purchased gas quantity |

</details>

### Create new preconfs order

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/api/v1/inclusion-preconf/order` - Create new preconfs order
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X POST /api/v1/inclusion-preconf/order \
  -H "Content-Type: application/json" \
  -d '{
    "instrumentId": "ETH-PC-9884031",
    "accountId": 128,
    "side": 1,
    "orderType": 2,
    "quantity": 10000,
    "clientOrderId": "05d61624",
    "passive": false,
    "price": 0.01
}'
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/inclusion-preconf/order"

payload = {
    "instrumentId": "ETH-PC-9884031",
    "accountId": 128,
    "side": 1,
    "orderType": 2,
    "quantity": 10000,
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

**Request Parameters:**

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| instrumentId | NO | string | Instrument ID |
| accountId | YES | integer | Account ID |
| side | NO | integer | Order Side. Buy = 1, Sell = 0 |
| orderType | YES | integer | Order Type. Market = 1, Limit = 2, FOK = 3 |
| clientOrderId | YES | string | A client generated random string as orderId |
| passive | NO | boolean | (Post-only) Whether the order is a maker order only (i.e. can only be lifted, but cannot lift/take any orders from the orderbook itself - in other words, can only add liquidity)<br/><br/>If set to false, there are no such restrictions and the order can immediately lift (i.e. take) existing orders in the orderbook if it is crossing the bid/sell price spread |
| price | NO | double | Order price. Only applicable to limit, fok order |
| quantity | YES | integer | Quantity to buy or sell |

**Example Response:**

```json
{
    "success": true,
    "data": {
        "order": {
            "orderId": 204415806,
            "instrumentId": "ETH-PC-9884031",
            "accountId": 128,
            "side": true,
            "orderType": 2,
            "quantity": "10000",
            "fulfilled": "5000",
            "price": "0.01",
            "status": 1,
            "clientOrderId": "05d61624",
            "passive": false,
            "orderDate": 1697449417659,
            "source": 1
        }
    }
}
```

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |
| order | object | Order object |
| └ orderId | integer | Unique order ID, assigned by ETHGas |
| └ instrumentId | string | Inclusion Preconf market instrument ID<br/><br/>Use endpoint [GET /api/v1/p/inclusion-preconf/markets] to get a list of all available inclusion preconf markets' instrument IDs |
| └ accountId | integer | Unique ID for each of the user's current & trading accounts assigned by ETHGas |
| └ side | boolean | buy order (true) or sell order (false) |
| └ orderType | integer | Market order (1) or limit order (2) |
| └ quantity | string | Order quantity |
| └ fulfilled | string | Quantity that has already been executed |
| └ price | string | Price of the order |
| └ status | integer | Order status - see [Order Status Codes](/docs/reference/lookup-tables#order-status-codes) |
| └ clientOrderId | string | An arbitrary string with max 32 characters (preferably unique) provided by the client when the order was created |
| └ passive | boolean | Whether the order is a maker order only |
| └ orderDate | integer | Datetime (in UNIX time) when the order was created |
| └ source | integer | Where the order is originated |

</details>

### Cancel all inclusion preconf orders

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/api/v1/inclusion-preconf/cancel-all-orders` - Cancel all inclusion preconf orders for a given user account ID for an instrument Id
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X POST /api/v1/inclusion-preconf/cancel-all-orders \
  -H "Content-Type: application/json" \
  -d '{
    "accountId": 128,
    "instrumentId": "ETH-PC-1012051"
}'
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/inclusion-preconf/cancel-all-oders"

payload = {
    "accountId": 128,
    "instrumentId": "ETH-PC-1012051"
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

**Request Parameters:**

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| accountId | YES | integer | Account ID |
| instrumentId | YES | string | Instrument ID |

**Example Response:**

```json
{
    "success": true,
    "data": {}
}
```

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |
| accountId | integer | Account ID |
| orderId | integer | Order ID |
| code | integer | Response code |

</details>

### Cancel batch preconfs orders

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/api/v1/inclusion-preconf/cancel-batch-orders` - Cancel preconfs orders for a given user account ID, and user order IDs or preconfs order IDs
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X POST /api/v1/inclusion-preconf/cancel-batch-oders \
  -H "Content-Type: application/json" \
  -d '{
    "accountId": 128,
    "instrumentId": "ETH-PC-1012051",
    "orderIds": ["b25ab402", "5e885ddd"]
}'
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/inclusion-preconf/cancel-batch-oders"

payload = {
    "accountId": 128,
    "instrumentId": "ETH-PC-1012051",
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

**Request Parameters:**

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| accountId | YES | integer | account ID |
| orderIds | YES | List of integer | Order ID |
| instrumentId | YES | string | Instrument ID |

**Example Response:**

```json
{
    "success": true,
    "data": {}
}
```

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |
| accountId | integer | Account ID |
| orderId | integer | Order ID |
| code | integer | Response code |

</details>

### Cancel preconfs order

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/api/v1/inclusion-preconf/cancel-order` - Cancel preconfs order for a given order ID
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X POST /api/v1/inclusion-preconf/cancel-order \
  -H "Content-Type: application/json" \
  -d '{
    "accountId": 128,
    "instrumentId": "ETH-PC-1012051",
    "orderId": "b25ab402"
}'
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/inclusion-preconf/cancel-order"

payload = {
    "accountId": 128,
    "instrumentId": "ETH-PC-1012051",
    "orderId": "b25ab402"
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

**Request Parameters:**

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| instrumentId | YES | string | Instrument ID |
| orderId | YES | integer | Order ID |
| accountId | YES | integer | Account ID |
| clientOrderId | YES | string | A client generated random string as orderId |

**Example Response:**

```json
{
    "success": true,
    "data": {}
}
```

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |
| accountId | integer | Account ID |
| orderId | integer | Order ID |
| code | integer | Response code |

</details>

### Get user preconfs orders

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/api/v1/user/inclusion-preconf/orders` - Get user preconfs orders for a given account ID (and instrument ID)
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X GET /api/v1/user/inclusion-preconf/orders?accountId=128&instrumentId=ETH-PC-9884031
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/inclusion-preconf/orders"

params = {
    "accountId": 128,
    "instrumentId": "ETH-PC-9884031"
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
| asc | NO | boolean | Sort direction, true = ascending, false = descending, default to false |
| limit | NO | integer | Maximum Number of Orders To Return |

**Example Response:**

```json
{
    "success": true,
    "data": {
        "orders": [
            {
                "orderId": 204421028,
                "marketId": 1000009884031,
                "accountId": 128,
                "instrumentId": "ETH-PC-9884031",
                "side": false,
                "orderType": 1,
                "quantity": "994.66",
                "fulfilled": "994.66",
                "price": 0.00000000535,
                "fees": "0",
                "status": 10,
                "clientOrderId": "y0xja3Xi",
                "passive": false,
                "orderDate": 1697449610000,
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
| orders | array | List of order object |
| └ orderId | integer | Unique order ID, assigned by ETHGas |
| └ marketId | integer | ETHGas marketId |
| └ accountId | integer | Unique ID for each of the user's current & trading accounts assigned by ETHGas |
| └ instrumentId | string | Inclusion Preconf Market instrument ID<br/><br/>Use endpoint [GET /api/v1/p/inclusion-preconf/markets] to get a list of all available inclusion preconf markets' instrument IDs |
| └ side | boolean | buy order (true) or sell order (false) |
| └ orderType | integer | Market order (1) or limit order (2)<br/><br/>If an order is sent with both a price specified and an orderType of 1, then a maximum slippage order is created |
| └ quantity | string | Order quantity |
| └ fulfilled | string | Whether the order has already been executed |
| └ price | string | Price of the preconfirmation<br/><br/>The should not be included for a regular market order; however if an order is sent with both a price specified and an orderType of 1, then a maximum slippage order is created |
| └ fees | string | Fees charged for this order |
| └ status | integer | Order status - see [Order Status Codes](/docs/reference/lookup-tables#order-status-codes) |
| └ clientOrderId | string | An arbitrary string with max 32 characters (preferably unique) provided by the client when the order was created |
| └ passive | boolean | (Post-only) Whether the order is a maker order only (i.e. can only be lifted, but cannot lift/take any orders from the orderbook itself - in other words, can only add liquidity)<br/><br/>If set to false, there are no such restrictions and the order can immediately lift (i.e. take) existing orders in the orderbook if it is crossing the bid/sell price spread |
| └ orderDate | integer | Datetime (in UNIX time) when the order was placed |
| └ source | integer | Where the order is originated<br/><br/>1: User interface |
| └ updateDate | integer | Datetime (in UNIX time) when the order was last updated |

</details>

### Get all inclusion preconf orders

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/api/v1/user/inclusion-preconf/all-orders` - Get all inclusion preconf orders
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X GET /api/v1/user/inclusion-preconf/all-orders
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/inclusion-preconf/all-orders"

headers = {
    'Authorization': 'Bearer {{access_token}}'
}

response = requests.get(url, headers=headers)

print(response.text)
```

</TabItem>
</Tabs>

**Request Parameters:**

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| None | - | - | No parameters required |

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |
| orders | array | List of all user's inclusion preconf orders |
| └ orderId | integer | Order ID |
| └ marketId | integer | Market ID |
| └ instrumentId | string | Instrument ID |
| └ side | boolean | Order side |
| └ orderType | integer | Order type |
| └ quantity | string | Order quantity |
| └ price | string | Order price |
| └ status | integer | Order status |
| └ createDate | integer | Creation timestamp |
| └ updateDate | integer | Last update timestamp |

</details>

### Get user inclusion preconf positions

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/api/v1/user/inclusion-preconf/positions` - Get user inclusion preconf positions
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X GET /api/v1/user/inclusion-preconf/positions
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/inclusion-preconf/positions"

headers = {
    'Authorization': 'Bearer {{access_token}}'
}

response = requests.get(url, headers=headers)

print(response.text)
```

</TabItem>
</Tabs>

**Request Parameters:**

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| None | - | - | No parameters required |

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |
| positions | array | List of user's inclusion preconf positions |
| └ positionId | integer | Position ID |
| └ marketId | integer | Market ID |
| └ instrumentId | string | Instrument ID |
| └ quantity | string | Position quantity |
| └ price | string | Position price |
| └ status | integer | Position status |
| └ createDate | integer | Creation timestamp |
| └ updateDate | integer | Last update timestamp |

</details>

### Get user inclusion preconf transactions

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-get">**GET**</span> `/api/v1/user/inclusion-preconf/txs` - Get user inclusion preconf transactions
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X GET /api/v1/user/inclusion-preconf/txs?instrumentId=ETH-PC-9884031&limit=10
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/inclusion-preconf/txs"

params = {
    "instrumentId": "ETH-PC-9884031",
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
| instrumentId | YES | string | Preconf Market instrument ID<br/><br/>Use endpoint [GET /api/v1/p/inclusion-preconf/markets] to get a list of all available inclusion preconf markets' instrument IDs |
| limit | NO | integer | number of transactions returned |

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |
| txs | array | List of trades |
| └ instrumentId | string | Preconf Market instrument ID<br/><br/>Use endpoint [GET /api/v1/p/inclusion-preconf/markets] to get a list of all available inclusion preconf markets' instrument IDs |
| └ trxId | integer | Transaction Id |
| └ buyerAccountId | integer | Buyer Account Id |
| └ sellerAccountId | integer | Seller Account Id |
| └ side | integer | Order Side. Buy = 1, Sell = 0 |
| └ price | string | Latest traded market price for this market |
| └ quantity | integer | Quantity always = 1 |
| └ date | integer | Datetime (in UNIX time) when the market orderbook was last updated |

</details>

### Block owner reserve Inclusion Preconfs

<details className="api-endpoint">
<summary className="api-endpoint-header">
  <span className="api-method-post">**POST**</span> `/api/v1/user/inclusion-preconf/market/update` - Block owner reserve Inclusion Preconfs
</summary>

**Code Example:**
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X POST /api/v1/user/inclusion-preconf/market/update \
  -H "Content-Type: application/json" \
  -d '{
    "instrumentId": "ETH-PC-475423",
    "reservedQty": 1000
}'
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/inclusion-preconf/market/update"

payload = {
    'instrumentId': 'ETH-PC-475423',
    'reservedQty': 1000
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

**Request Parameters:**

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| instrumentId | YES | String | Instrument ID |
| reservedQty | YES | Integer | Reserved quantity |

**Example Response:**

```json
{
    "success": true,
    "data": {}
}
```

**Response Body:**

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | Operation success status |

</details>

</div>