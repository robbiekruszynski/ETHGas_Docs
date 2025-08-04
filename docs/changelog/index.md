---
sidebar_position: 1
---

# Changelog

This page tracks all updates to the ETHGas platform and documentation.

## 2025-07-08

### API Updates
- **Updated inclusion-preconf cancel-all-orders API**
- **Updated inclusion-preconf/markets API** by adding validator_type field
- **Added new API endpoint** `POST /api/v1/user/payoutAddress`
- **Removed API endpoint** `POST /api/v1/builder/verify`
  - Now users can use `POST /api/v1/builder/register` to register and verify builder public keys with signatures

### User Management
- **Allow users to update payment address**
- **Allow users to specify collateral per slot** for block owner / validator
- **Renamed field** `fee_recipient` to `validator_payout_address`

## 2025-06-26

### Validator API
- **Updated validator API** with enhanced functionality

## 2025-06-18

### Builder Management
- **Updated builder delegation API** with improved features

## 2025-05-14

### Validator Operations
- **Added validator fees payout API**
- **Added set User onchain_payout_enabled API**
- **Added contract address for different environments**

## 2025-05-06

### API Improvements
- **Updated withdraw API** with enhanced functionality
- **Renamed endpoint** `/api/v1/p/blockchain` to `/api/v1/p/network`

## 2025-04-16

### User Features
- **Added user fees API** for fee management

## 2025-04-02

### Mainnet Launch
- **Mainnet v1 launched**
- **Updated mainnet collateral deposit address**

## 2025-03-28

### Market Data
- **Updated get wholeblock and inclusion preconf markets API**

## 2025-03-25

### Infrastructure Updates
- **Updated Production Hoodi API and WS base URL**
- **Updated testchain URL** for example usage
- **Updated Validator API and User deposit collateral API**

## 2025-03-15

### Infrastructure Updates
- **Updated Production Hoodi API and WS base URL**
- **Updated testchain URL** for example usage
- **Updated Validator API and User deposit collateral API**

## 2025-02-21

### API Versioning
- **Updated API naming**
- **Added version control (v1)**

## 2025-01-12

### New Features
- **Added pricer API** for market making
- **Added block building API** for submitting bundles
- **Added get user validators API** for retrieving a list of validators for the user

## 2024-12-01

### Infrastructure Updates
- **Updated RPC endpoint** for Holesky chain

## 2024-10-01

### Initial Launch
- **Ready for Testnet launch**

## Documentation Structure

The documentation is organized into the following sections:

### Getting Started
- **Welcome**: Platform overview and key concepts
- **Environments**: TestNet and MainNet configuration
- **Connecting**: Authentication and connection setup

### REST API
- **Overview**: API structure and response format
- **Authentication**: Login, logout, and token management
- **User Management**: Profile and account operations
- **Trading**: Order placement and management
- **Market Data**: Market information and status

### WebSocket API
- **Overview**: Real-time data streaming
- **Authentication**: WebSocket authentication
- **Public Channels**: Market data and updates
- **Private Channels**: User-specific data streams
- **Queries**: Real-time data queries

### Reference
- **Data Types**: Complete data structure definitions
- **Error Codes**: Comprehensive error code reference
- **Lookup Tables**: Market types, order types, and more
- **Response Codes**: Standard HTTP response codes

## Future Updates

This documentation will be updated as the ETHGas platform evolves:

- **New Features**: Additional trading capabilities
- **API Enhancements**: New endpoints and functionality
- **Performance Improvements**: Optimized data delivery
- **Security Updates**: Enhanced security measures
- **User Experience**: Improved interface and usability

## Contributing

To contribute to this documentation:

1. **Report Issues**: Submit documentation bugs or improvements
2. **Suggest Enhancements**: Propose new documentation sections
3. **Submit Examples**: Share code examples and use cases
4. **Update Content**: Help keep documentation current

## Support

For questions about this documentation or the ETHGas platform:

- **Original Documentation**: [developers.ethgas.com](https://developers.ethgas.com)
- **TestNet App**: [testnet.ethgas.com](https://testnet.ethgas.com)
- **ETHGas Homepage**: [ethgas.com](https://ethgas.com)

---

*Last updated: 2025-07-08* 