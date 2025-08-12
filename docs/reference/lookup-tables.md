# Lookup Tables



## Markets

<details>
<summary style={{listStyle: 'none'}}>Market Status Codes</summary>

### Market Status Codes

| Status Code | Status                 | Description                       |
| ----------- | ---------------------- | --------------------------------- |
| 0           | NOT_STARTED            | Pending to be started             |
| 1           | ENABLE                 | Market enabled                    |
| 2           | EXPIRED                | Market expired                    |
| 3           | TRX_SUBMISSION_ENDED   | Transaction submission time ended |
| 4           | FINALIED               | Market finalized                  |

</details>

## Orders

<details>
<summary style={{listStyle: 'none'}}>Order Sides</summary>

### Order Sides

| Boolean   | Side |
| --------- | ---- |
| 0 (False) | Sell |
| 1 (True)  | Buy  |

</details>

<details>
<summary style={{listStyle: 'none'}}>Order Status Codes</summary>

### Order Status Codes

| Status Code | Status                      | Description                           |
| ----------- | --------------------------- | ------------------------------------- |
| 0           | STATUS_PENDING              | Pending (i.e. Not yet sent to market) |
| 1           | STATUS_ONBOOK               | On Book (i.e. Live order in market)   |
| 10          | STATUS_DONE                 | Done (i.e. Fully executed)            |
| 11          | STATUS_MANUALLY_CANCELLED   | Manually cancelled                    |
| 12          | STATUS_AUTO_CANCELLED       | Auto cancelled                        |
| 13          | STATUS_PARTIALLY_FILLED     | Partially Filled                      |
| 14          | STATUS_EXPIRED              | Market expired                        |
| 99          | STATUS_ERROR                | Error                                 |

</details>

<details>
<summary style={{listStyle: 'none'}}>Order Types</summary>

### Order Types

| Type Code | Meaning            |
| --------- | ------------------ |
| 1         | Market Order       |
| 2         | Limit Order        |
| 3         | Fill-Or-Kill Order |

</details>

## Token IDs

<details>
<summary style={{listStyle: 'none'}}>Currently Supported Tokens</summary>

Currently supported:

| Code | Name | Token ID | Quantity Step | Minimum Quantity | Pricer Step |
| ---- | ---- | -------- | ------------- | ---------------- | ----------- |
| ETH  | ETH  | 1        | 0.00001       | 0.001            | 0.0001      |

</details>

## Transaction Types

<details>
<summary style={{listStyle: 'none'}}>Transaction Type Codes</summary>

| Code | Meaning                            |
| ---- | ---------------------------------- |
| 1    | Buy                                |
| 2    | Sell                               |
| 3    | Borrow                             |
| 4    | Lend                               |
| 5    | Interest                           |
| 6    | Transfer In (Between accounts)     |
| 7    | Transfer Out (Between accounts)    |
| 8    | External Transfer In (Deposit)     |
| 9    | External Transfer Out (Withdrawal) |
| 10   | Trade                              |
| 14   | Withdrawal Fee                     |
| 15   | Transaction Fee                    |

</details>

## Market Types

<details>
<summary style={{listStyle: 'none'}}>Market Type Codes</summary>

| Code | Market                   |
| ---- | ------------------------ |
| 1    | Inclusion Preconf Market |
| 2    | Whole Block Market       |

</details>

## Action Types

<details>
<summary style={{listStyle: 'none'}}>WebSocket Action Types</summary>

Action type returned in some WebSocket messages.

| Type                     |
| ------------------------ |
| NewEpoch                 |
| MarketExpiry             |
| Snapshot                 |
| BlockBuilderChanged      |
| BundleSubmissionDeadline |

</details>

## Builder

<details>
<summary style={{listStyle: 'none'}}>Builder Registration Result Codes</summary>

### Builder Registration Result

| Code | Reason             |
| ---- | ------------------ |
| 0    | OK                 |
| 1    | NOT_FOUND          |
| 2    | SIGNATURE_INVALID  |
| 3    | ALREADY_REGISTERED |

</details>