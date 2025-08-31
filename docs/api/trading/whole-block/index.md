---
sidebar_position: 1
---

# Whole Block

## GET /api/v1/p/wholeblock/markets

Code sample:

```http
curl -X GET /api/v1/p/wholeblock/markets
```

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/p/wholeblock/markets

headers = {}

response = requests.get(url, headers=headers)

print(response.text)
```

Example response:

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

Request

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |

Response Body

| Name | Type | Description |
| --- | --- | --- |
| markets | object[] | List of Whole Block Market objects |
| └ marketId | integer | Whole block market ID |
| └ slot | integer | Slot number of the block |
| └ instrumentId | string | Whole block market instrument IDUse endpoint [GET /api/v1/p/wholeblock/markets] to get a list of all available wholeblock markets' instrument IDs |
| └ name | string | Whole block market nameIn format: "ETH-WB-xxxxxx" |
| └ priceStep | string | Minimum increment between valid price levels |
| └ minPrice | string | Minimum price |
| └ maxPrice | string | Maximum price |
| └ availablePreconf | integer | Available preconf quantity for trading |
| └ direction | boolean | The last trading direction (true = buy, false = sell) |
| └ price | string | Latest traded market price for this market |
| └ status | integer | Market status - see the Market Status Codes section for more information |
| └ maturityTime | integer | Datetime (in UNIX time) when the market will be closed |
| └ trxSubmitTime | integer | Datetime (in UNIX time) when the market will be closed for submitting transactions |
| └ blockTime | integer | Datetime (in UNIX time) when the block starts |
| └ finalityTime | integer | Datetime (in UNIX time) when the block is being finalized |
| └ updateDate | integer | Datetime (in UNIX time) when the market orderbook was last updated |

## GET /api/v1/p/wholeblock/positions

Code sample:

```http
curl -X GET /api/v1/p/wholeblock/positions?instrumentId=ETH-WB-9884031&limit=10
```

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

Request

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| instrumentId | NO | string | Instrument ID |
| limit | NO | integer | Maximum Number of Positions To Return (default: 10) |

Response Body

| Name | Type | Description |
| --- | --- | --- |
| positions | object[] | List of position object |
| └ slot | integer | Slot number of the block |
| └ quantity | string | Position quantity |
| └ available | string | Position quantity available for trading |
| └ locked | string | Locked quantity |
| └ expired | boolean | Position expired or not |
| └ averagePrice | string | Average price of executed trades |
| └ updateDate | integer | Datetime (in UNIX time) when the order was last updated |

## GET /api/v1/p/wholeblock/orders

Code sample:

```http
curl -X GET /api/v1/p/wholeblock/orders?instrumentId=ETH-WB-9884031&onbook=false&done=false&limit=10
```

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

Request

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| instrumentId | YES | string | List whole block Orders for a market |
| onbook | NO | boolean | Pending Orders Only? (default: false) |
| done | NO | boolean | Done Orders Only? (default: false) |
| startId | NO | integer | Order Start ID (default: 0) |
| asc | NO | boolean | Sort Order Direction, true=asc, false=desc, Default to true=asc |
| limit | NO | integer | Maximum Number of Orders To Return (default: 10) |

Response Body

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
| └ status | integer | Order status - see the Order Status Codes section for more information |
| └ errorCode | integer | Error code if order failed (null if successful) |
| └ clientOrderId | string | An arbitrary string with max 32 characters (preferably unique) provided by the client when the order was created |
| └ passive | boolean | Whether the order is a maker order only |
| └ createDate | integer | Datetime (in UNIX time) when the order was created |
| └ source | integer | Where the order is originated |
| └ updateDate | integer | Datetime (in UNIX time) when the order was last updated |

## GET /api/v1/p/wholeblock/trades

Code sample:

```http
curl -X GET /api/v1/p/wholeblock/trades?instrumentId=ETH-WB-9884031&limit=10
```

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

Request

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| instrumentId | YES | string | List whole block trades for a market |
| limit | NO | integer | Maximum Number of Trades To Return (default: 10) |

Response Body

| Name | Type | Description |
| --- | --- | --- |
| trades | object[] | List of trades |
| └ instrumentId | string | Whole block market instrument ID |
| └ trxId | integer | Transaction Id |
| └ side | boolean | Order Side. Buy = true, Sell = false |
| └ price | string | Latest traded market price for this market |
| └ quantity | string | Quantity always = 1 |
| └ preconfQuantity | string | Preconf quantity sold with the whole block |
| └ date | integer | Datetime (in UNIX time) when the trade was executed |

## POST /api/v1/wholeblock/order

Code sample:

```http
curl -H "Authorization: Bearer {{access_token}}" -X POST /api/v1/wholeblock/order&instrumentId=ETH-WB-9884031&accountId=128&side=1&orderType=2&clientOrderId=05d61624&passive=false&price=0.01
```

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
  'Authorization': 'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6MzEsImFkZHJlc3MiOiIweDVjODEyYzlhNjdlNjkwMGViMjBmM2YzMWQwZWNjZTUyM2Q2YTVjMDMiLCJyb2xlcyI6WyJST0xFX1VTRVIiXX0sImFjY2Vzc190eXBlIjoiYWNjZXNzX3Rva2VuIiwiaWF0IjoxNjk3NDQ5MTM0LCJleHAiOjE2OTc0NTI3MzR9.reUyFbhlJ6ZXSUypWiWeikaPQdbcRB_ZgB2k4NxcKbJS1K9J1GZnfXl9GrYOmS67L19gC-wfKqSPN4-7T3Xk0w'
}

response = requests.post(url, headers=headers, json=payload)

print(response.text)
```

Example response:

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

Request Body

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| instrumentId | YES | string | Instrument ID |
| side | YES | boolean | Order Side. Buy = true, Sell = false |
| orderType | YES | integer | Order Type. Market = 1, Limit = 2, FOK = 3 |
| clientOrderId | YES | string | A client generated random string as orderId |
| passive | NO | boolean | (Post-only) Whether the order is a maker order only (i.e. can only be lifted, but cannot lift/take any orders from the orderbook itself - in other words, can only add liquidity)If set to false, there are no such restrictions and the order can immediately lift (i.e. take) existing orders in the orderbook if it is crossing the bid/sell price spread |
| price | NO | string | Price in Ethereum per gas bought. Only applicable to limit, fok order. |
| quantity | YES | string | Order quantity (1 for whole block orders) |

Response Body

| Name | Type | Description |
| --- | --- | --- |
| order | object | Order object |
| └ orderId | integer | Unique order ID, assigned by ETHGas |
| └ marketId | integer | Market ID for this order |
| └ instrumentId | string | Whole block market instrument IDUse endpoint [GET /api/v1/p/wholeblock/markets] to get a list of all available wholeblock markets' instrument IDs |
| └ accountId | integer | Unique ID for each of the user's current & trading accounts assigned by ETHGas |
| └ side | boolean | buy order (true) or sell order (false) |
| └ orderType | integer | Market order (1) or limit order (2)If an order is sent with both a price specified and an orderType of 1, then a maximum slippage order is created |
| └ quantity | string | Order quantity (1 for whole block orders) |
| └ fulfilled | string | Quantity that has already been executed |
| └ price | string | Price of the orderThe should not be included for a regular market order; however if an order is sent with both a price specified and an orderType of 1, then a maximum slippage order is created |
| └ averageTradePrice | string | Average price of executed trades |
| └ fees | string | Fees charged for this order |
| └ status | integer | Order status - see the Order Status Codes section for more information |
| └ errorCode | integer | Error code if order failed (null if successful) |
| └ clientOrderId | string | An arbitrary string with max 32 characters (preferably unique) provided by the client when the order was created |
| └ passive | boolean | (Post-only) Whether the order is a maker order only (i.e. can only be lifted, but cannot lift/take any orders from the orderbook itself - in other words, can only add liquidity)If set to false, there are no such restrictions and the order can immediately lift (i.e. take) existing orders in the orderbook if it is crossing the bid/sell price spread |
| └ createDate | integer | Datetime (in UNIX time) when the order was created |
| └ source | integer | Where the order is originated1: User interface |
| └ updateDate | integer | Datetime (in UNIX time) when the order was last updated |

## POST /api/v1/wholeblock/cancel-all-orders

Code sample:

```http
curl -H "Authorization: Bearer {{access_token}}" -X POST /api/v1/wholeblock/cancel-all-orders?accountId=128&instrumentId=ETH-WB-1012051
```

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/wholeblock/cancel-all-orders"


payload = {
    "accountId": 128,
    "instrumentId": "ETH-WB-1012051"
}

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6MzEsImFkZHJlc3MiOiIweDVjODEyYzlhNjdlNjkwMGViMjBmM2YzMWQwZWNjZTUyM2Q2YTVjMDMiLCJyb2xlcyI6WyJST0xFX1VTRVIiXX0sImFjY2Vzc190eXBlIjoiYWNjZXNzX3Rva2VuIiwiaWF0IjoxNjk3NDQ5MTM0LCJleHAiOjE2OTc0NTI3MzR9.reUyFbhlJ6ZXSUypWiWeikaPQdbcRB_ZgB2k4NxcKbJS1K9J1GZnfXl9GrYOmS67L19gC-wfKqSPN4-7T3Xk0w'
}

response = requests.post(url, headers=headers, params=params, json=payload)

print(response.text)
```

Request

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| accountId | YES | integer | Account ID |
| instrumentId | YES | string | Instrument ID |

Response Body

| Name | Type | Description |
| --- | --- | --- |

## GET /api/v1/user/wholeblock/all-orders

Code sample:

```http
curl -H "Authorization: Bearer {{access_token}}" -X GET /api/v1/user/wholeblock/all-orders?onBook=false&limit=10
```

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/wholeblock/all-orders"

params = {
  "onBook": False,
  "limit": 10
}

headers = {
  'Authorization': 'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6MzEsImFkZHJlc3MiOiIweDVjODEyYzlhNjdlNjkwMGViMjBmM2YzMWQwZWNjZTUyM2Q2YTVjMDMiLCJyb2xlcyI6WyJST0xFX1VTRVIiXX0sImFjY2Vzc190eXBlIjoiYWNjZXNzX3Rva2VuIiwiaWF0IjoxNjk3NDQ5MTM0LCJleHAiOjE2OTc0NTI3MzR9.reUyFbhlJ6ZXSUypWiWeikaPQdbcRB_ZgB2k4NxcKbJS1K9J1GZnfXl9GrYOmS67L19gC-wfKqSPN4-7T3Xk0w'
}

response = requests.get(url, headers=headers, params=params)

print(response.text)
```

## GET /api/v1/user/wholeblock/orders

Code sample:

```http
curl -H "Authorization: Bearer {{access_token}}" -X GET /api/v1/user/wholeblock/orders?accountId=128&instrumentId=ETH-WB-9884031
```

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/wholeblock/orders"

params = {
  "instrumentId": "ETH-WB-9884031"
}

headers = {
   'Authorization': 'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6MzEsImFkZHJlc3MiOiIweDVjODEyYzlhNjdlNjkwMGViMjBmM2YzMWQwZWNjZTUyM2Q2YTVjMDMiLCJyb2xlcyI6WyJST0xFX1VTRVIiXX0sImFjY2Vzc190eXBlIjoiYWNjZXNzX3Rva2VuIiwiaWF0IjoxNjk3NDQ5MTM0LCJleHAiOjE2OTc0NTI3MzR9.reUyFbhlJ6ZXSUypWiWeikaPQdbcRB_ZgB2k4NxcKbJS1K9J1GZnfXl9GrYOmS67L19gC-wfKqSPN4-7T3Xk0w'
}

response = requests.get(url, headers=headers, params=params)

print(response.text)
```

## GET /api/v1/user/wholeblock/positions

Code sample:

```http
curl -H "Authorization: Bearer {{access_token}}" -X GET /api/v1/user/wholeblock/positions?instrumentId=ETH-WB-9884031&limit=10
```

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/wholeblock/positions"

params = {
  "instrumentId": "ETH-WB-9884031",
  "limit": 10
}

headers = {
  'Authorization': 'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6MzEsImFkZHJlc3MiOiIweDVjODEyYzlhNjdlNjkwMGViMjBmM2YzMWQwZWNjZTUyM2Q2YTVjMDMiLCJyb2xlcyI6WyJST0xFX1VTRVIiXX0sImFjY2Vzc190eXBlIjoiYWNjZXNzX3Rva2VuIiwiaWF0IjoxNjk3NDQ5MTM0LCJleHAiOjE2OTc0NTI3MzR9.reUyFbhlJ6ZXSUypWiWeikaPQdbcRB_ZgB2k4NxcKbJS1K9J1GZnfXl9GrYOmS67L19gC-wfKqSPN4-7T3Xk0w'
}

response = requests.get(url, headers=headers, params=params)

print(response.text)
```

## GET /api/v1/user/wholeblock/txs

Code sample:

```http
curl -H "Authorization: Bearer {{access_token}}" -X GET /api/v1/user/wholeblock/txs?instrumentId=ETH-WB-63999&limit=100
```

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/wholeblock/txs"

params = {
  "instrumentId": "ETH-WB-63999",
  "limit": 10
}

headers = {
  'Authorization': 'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6MzEsImFkZHJlc3MiOiIweDVjODEyYzlhNjdlNjkwMGViMjBmM2YzMWQwZWNjZTUyM2Q2YTVjMDMiLCJyb2xlcyI6WyJST0xFX1VTRVIiXX0sImFjY2Vzc190eXBlIjoiYWNjZXNzX3Rva2VuIiwiaWF0IjoxNjk3NDQ5MTM0LCJleHAiOjE2OTc0NTI3MzR9.reUyFbhlJ6ZXSUypWiWeikaPQdbcRB_ZgB2k4NxcKbJS1K9J1GZnfXl9GrYOmS67L19gC-wfKqSPN4-7T3Xk0w'
}


response = requests.get(url, headers=headers, params=params)

print(response.text)
```

## POST /api/v1/wholeblock/cancel-batch-orders

Code sample:

```http
curl -H "Authorization: Bearer {{access_token}}" -X POST /api/v1/wholeblock/cancel-all-orders?accountId=128&instrumentId=ETH-WB-1012051&orderIds=b25ab4023%2c5e885dd
```

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
  'Authorization': 'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6MzEsImFkZHJlc3MiOiIweDVjODEyYzlhNjdlNjkwMGViMjBmM2YzMWQwZWNjZTUyM2Q2YTVjMDMiLCJyb2xlcyI6WyJST0xFX1VTRVIiXX0sImFjY2Vzc190eXBlIjoiYWNjZXNzX3Rva2VuIiwiaWF0IjoxNjk3NDQ5MTM0LCJleHAiOjE2OTc0NTI3MzR9.reUyFbhlJ6ZXSUypWiWeikaPQdbcRB_ZgB2k4NxcKbJS1K9J1GZnfXl9GrYOmS67L19gC-wfKqSPN4-7T3Xk0w'
}

response = requests.post(url, headers=headers, params=params, json=payload)

print(response.text)
```

Request

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| accountId | YES | integer | Account ID |
| orderIds | YES | List of integer | Order ID |
| instrumentId | YES | string | Instrument ID |

Response Body

| Name | Type | Description |
| --- | --- | --- |

## POST /api/v1/wholeblock/cancel-order

Code sample:

```http
curl -H "Authorization: Bearer {{access_token}}" -X POST /api/v1/wholeblock/cancel-order?accountId=128&instrumentId=ETH-WB-1012051&orderId=b25ab402

{
    "accountId": 128,
    "instrumentId": "ETH-WB-1012051",
    "orderId": "b25ab402" or "clientOrderId": "64395144"
}
```

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
   'Authorization': 'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6MzEsImFkZHJlc3MiOiIweDVjODEyYzlhNjdlNjkwMGViMjBmM2YzMWQwZWNjZTUyM2Q2YTVjMDMiLCJyb2xlcyI6WyJST0xFX1VTRVIiXX0sImFjY2Vzc190eXBlIjoiYWNjZXNzX3Rva2VuIiwiaWF0IjoxNjk3NDQ5MTM0LCJleHAiOjE2OTc0NTI3MzR9.reUyFbhlJ6ZXSUypWiWeikaPQdbcRB_ZgB2k4NxcKbJS1K9J1GZnfXl9GrYOmS67L19gC-wfKqSPN4-7T3Xk0w'
}

response = requests.post(url, headers=headers, params=params)

print(response.text)
```

Request

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| instrumentId | YES | string | Instrument ID |
| orderId | YES | integer | Order ID |
| accountId | YES | integer | Account ID |
| clientOrderId | YES | string | A client generated random string as orderId |

Response Body

| Name | Type | Description |
| --- | --- | --- |
