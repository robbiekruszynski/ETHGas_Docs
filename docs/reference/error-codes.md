# Error Codes

The following codes are sourced from the official ETHGas API reference.

Source: Official ETHGas API documentation

## General Error Codes

| Error code | Description                  |
| ---------- | ---------------------------- |
| 1          | Success                      |
| 2          | Permission Denied            |
| 99         | Unexpected Error             |
| 1000       | Pemission Denied             |
| 1001       | Validation Error             |
| 1002       | Operation Failed             |
| 9999       | Unexpected Error             |
| 10000      | Invalid account (Deposit)    |
| 10001      | Invalid Token (Deposit)      |
| 10010      | Invalid account (Withdraw)   |
| 10011      | Invalid Token (Withdraw)     |
| 10012      | Not Enough Funds to Withdraw |

## Order API Error Codes

| Error code | Description                       |
| ---------- | --------------------------------- |
| 102        | INVALID_ACCOUNT                   |
| 104        | TIMEOUT                           |
| 107        | MINIMUM_QUANTITY_NOT_REACH        |
| 108        | NO_ORDER                          |
| 109        | ORDER_DONE_OR_CANCELLED           |
| 110        | TRADE_SERVER_PARSE                |
| 111        | TRADE_SERVER_ORDER_BOOK_ERROR     |
| 112        | TRADE_SERVER_DB                   |
| 113        | TRADE_SERVER_DB_CONNECTION        |
| 114        | MARKET_EXPIRED                    |
| 115        | RATE_TRANSACTION_ERROR            |
| 120        | QUANTITY_STEP_NOT_MATCH           |
| 122        | INVALID_DEDUPLICATE_STRING        |
| 191        | ORDER_AUTO_CANCELLED              |
| 192        | ORDER_MANUALLY_CANCELLED          |

## Response Codes

| Code | Description                               |
| ---- | ----------------------------------------- |
| 200  | OK                                        |
| 403  | Forbidden                                 |
| 500  | Internal Server Error or Invalid Response |
| 503  | Service Unavailable                       |