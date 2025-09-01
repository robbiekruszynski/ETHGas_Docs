---
sidebar_position: 1
---

# CHANGE LOG

## 2025-07-08

- Update inclusion-preconf cancel-all-orders api
- Update inclusion-preconf/markets api by adding validator_type field
- Allow user to update its payment address
- Allow user to specify its collater per slot for block owner / validator
- Rename field fee_recipient to validator_payout_address
- Added new api endpoint `POST /api/v1/user/payoutAddress`
- Removed api endpoint `POST /api/v1/builder/verify`
  - Now user can use `POST /api/v1/builder/register` to register and verify builder public keys with signatures

## 2025-06-26

- Update validator api

## 2025-06-18

- Update builder delegation api

## 2025-05-14

- Add validator fees payout api
- Add set User onchain_payout_enabled api
- Add contract address for different environments

## 2025-05-06

- Update withdraw api
- Rename `/api/v1/p/blockchain` to `/api/v1/p/network`

## 2025-04-16

- Add user fees api

## 2025-04-02

- Mainnet v1 launched.
- Updated mainnet collateral deposit address

## 2025-03-28

- Updated get wholeblock and inclusion preconf markets API

## 2025-03-25

Updated Production Hoodi API and WS base url
Updated testchain url for example usage
Updated Validator API and User deposit collateral API

## 2025-03-15

- Updated Production Hoodi API and WS base url
- Updated testchain url for example usage
- Updated Validator API and User deposit collateral API

## 2025-02-21

- Update API naming. Added version control (v1)

## 2025-01-12

- Added pricer api for market making and block building api for submitting bundles
- Added get user validators api for retrieving a list of validators for the user 

## 2024-12-01

- Updated RPC endpoint for Holesky chain

## 2024-10-01

- Ready for Testnet launch
