---
sidebar_position: 1
---

# Developer Overview

This guide provides a comprehensive overview for developers looking to integrate with the ETHGas Ecosystem.

## What is ETHGas?

ETHGas is the premier platform for trading Ethereum Blockspace, and acquiring Realtime confirmations.

### Core Components

- **Whole Block Markets**: Trade entire blocks for MEV opportunities
- **Inclusion Preconf Markets**: Trade gas price predictions and inclusion probabilities
- **Builder Infrastructure**: Modified rbuilder for block building
- **Validator Integration**: Commit boost module for validator participation
- **Smart Contracts**: On-chain infrastructure for trading and settlement

## Platform Architecture

<div className="row">
  <div className="col col--6">
    <div className="feature-card">
      <h3>REST API</h3>
      <p>Complete HTTP API for all platform operations including authentication, trading, and market data.</p>
      <a href="/docs/api/overview" className="button button--outline button--sm">
        API Reference →
      </a>
    </div>
  </div>
  <div className="col col--6">
    <div className="feature-card">
      <h3>WebSocket API</h3>
      <p>Real-time data streaming for live market updates, order book changes, and position updates.</p>
      <a href="/docs/websocket/overview" className="button button--outline button--sm">
        WebSocket Docs →
      </a>
    </div>
  </div>
</div>

## Key Concepts

### Markets
Markets are the core trading venues on ETHGas:
- **Whole Block Markets**: Trade complete blocks for MEV opportunities
- **Inclusion Preconf Markets**: Trade gas price predictions

### Orders
Orders represent your trading intentions:
- **Market Orders**: Execute immediately at current market price
- **Limit Orders**: Execute only at specified price or better
- **Fill-Or-Kill Orders**: Execute completely or not at all

### Positions
Positions track your current market exposure:
- **Long Positions**: Profitable when prices increase
- **Short Positions**: Profitable when prices decrease

## GitHub Repositories

### Core Infrastructure

#### [ETHGas Preconf Commit Boost Module](https://github.com/ethgas-developer/ethgas-preconf-commit-boost-module)
**Purpose**: Validator integration and preconfirmation commitments

**Key Features**:
- Commit boost module for validator participation
- PBS (Proposer-Builder Separation) integration
- Docker containerized deployment
- Health monitoring and logging

**Use Cases**:
- Validators wanting to earn additional rewards
- Operators managing validator infrastructure
- Developers building validator tools

#### [ETHGas Builder Scripts](https://github.com/ethgas-developer/ethgas-builder-scripts)
**Purpose**: Builder registration and management

**Key Features**:
- Automated builder registration
- Environment configuration (mainnet/testnet)
- Docker deployment
- Health checks and monitoring

**Use Cases**:
- Block builders wanting to participate in ETHGas
- Infrastructure operators
- MEV researchers and developers

#### [Preconf Builder](https://github.com/ethgas-developer/preconf-builder)
**Purpose**: Modified rbuilder for ETHGas integration

**Key Features**:
- Preconf transaction streaming
- Commitment compliance validation
- Bundle positioning management
- Mempool integration

**Use Cases**:
- Block builders requiring ETHGas integration
- MEV infrastructure developers
- Researchers studying block building

#### [ETHGas Contracts](https://github.com/ethgas-developer/ethgas-contracts-avs-for-audit)
**Purpose**: Smart contract implementations

**Key Features**:
- Trading contract implementations
- Settlement mechanisms
- Fee distribution logic
- Security audit reports

**Use Cases**:
- Smart contract developers
- Security researchers
- Protocol integrators

### Additional Resources

#### [ETHGas Audit](https://github.com/ethgas-developer/ethgas-audit)
**Purpose**: Security audit reports and findings

#### [ETHGas Bangkok DevCon Workshop](https://github.com/ethgas-developer/ethgas-bangkok-devcon-workshop)
**Purpose**: Workshop materials and examples

#### [Constraints Specs](https://github.com/ethgas-developer/constraints-specs)
**Purpose**: API specifications and constraints

## Development Paths

### For Traders

**Getting Started**:
1. **Environment Setup**: [Configure your environment](/docs/getting-started/environments)
2. **Authentication**: [Set up API authentication](/docs/api/authentication/login)
3. **Trading**: [Start trading on the platform](/docs/api/overview)

**Key APIs**:
- **Market Data**: Get real-time market information
- **Order Management**: Place and manage orders
- **Position Tracking**: Monitor your positions
- **WebSocket**: Real-time data streaming

**Example Integration**:
```python
import requests

class ETHGasTrader:
    def __init__(self, api_url, access_token):
        self.api_url = api_url
        self.access_token = access_token
        self.headers = {"Authorization": f"Bearer {access_token}"}
    
    def get_markets(self):
        response = requests.get(f"{self.api_url}/api/v1/p/wholeblock/markets")
        return response.json()
    
    def place_order(self, market_id, side, order_type, quantity, price=None):
        data = {
            "marketId": market_id,
            "side": side,
            "orderType": order_type,
            "quantity": quantity
        }
        if price:
            data["price"] = price
        
        response = requests.post(
            f"{self.api_url}/api/v1/wholeblock/order",
            headers=self.headers,
            json=data
        )
        return response.json()
```

### For Validators

**Getting Started**:
1. **Repository Setup**: Clone [ethgas-preconf-commit-boost-module](https://github.com/ethgas-developer/ethgas-preconf-commit-boost-module)
2. **Client Configuration**: [Configure your consensus client](/docs/validators/setup)
3. **Integration**: [Set up ETHGas integration](/docs/validators/setup)

**Key Features**:
- **Commit Boost Module**: Participate in preconfirmation commitments
- **PBS Integration**: Proposer-Builder Separation support
- **Fee Collection**: Earn additional rewards
- **Monitoring**: Health checks and performance tracking

**Example Configuration**:
```toml
# commitboost.toml
[network]
network = "mainnet"

[keys]
bls_key_pair = "your_bls_key_pair"
eoa_signing_key = "your_eoa_signing_key"

[registration]
enable_registration = true
entity_name = "your_entity_name"
registration_mode = "standard"

[collateral]
collateral_per_slot = 0.1
```

### For Builders

**Getting Started**:
1. **Repository Setup**: Clone [ethgas-builder-scripts](https://github.com/ethgas-developer/ethgas-builder-scripts)
2. **Registration**: [Register as a builder](/docs/api/builder/setup)
3. **Integration**: [Set up modified rbuilder](/docs/api/builder/setup)

**Key Features**:
- **Builder Registration**: Automated registration process
- **Block Building**: Modified rbuilder for ETHGas
- **Preconf Integration**: Handle preconfirmation transactions
- **Fee Distribution**: Manage priority fees and MEV

**Example Setup**:
```bash
# Clone builder scripts
git clone https://github.com/ethgas-developer/ethgas-builder-scripts
cd ethgas-builder-scripts

# Configure environment
cp .env.example.mainnet .env
# Edit .env with your keys

# Build and deploy
./scripts/build.sh
docker-compose up -d
```

### For Smart Contract Developers

**Getting Started**:
1. **Repository Access**: Clone [ethgas-contracts-avs-for-audit](https://github.com/ethgas-developer/ethgas-contracts-avs-for-audit)
2. **Audit Review**: Review security audit reports
3. **Integration**: Integrate with ETHGas contracts

**Key Features**:
- **Trading Contracts**: Core trading functionality
- **Settlement Logic**: Order settlement mechanisms
- **Fee Distribution**: Priority fee and MEV distribution
- **Security Audits**: Comprehensive security reviews

## Market Types

### Whole Block Markets
Trade entire blocks for MEV opportunities:
- **Block Ownership**: Own complete blocks for MEV extraction
- **Bundle Positioning**: Control transaction ordering
- **Priority Fees**: Collect all priority fees from the block

### Inclusion Preconf Markets
Trade gas price predictions:
- **Gas Price Prediction**: Predict future gas prices
- **Inclusion Probability**: Trade transaction inclusion likelihood
- **Risk Management**: Hedge against gas price volatility

## Technical Stack

### Backend Infrastructure
- **REST API**: Comprehensive HTTP API
- **WebSocket**: Real-time data streaming
- **Authentication**: JWT-based authentication
- **Rate Limiting**: API rate limiting and quotas

### Blockchain Integration
- **Ethereum**: Native Ethereum integration
- **MEV-Boost**: Proposer-Builder Separation
- **BLS Signatures**: Validator authentication
- **Smart Contracts**: On-chain trading infrastructure

### Development Tools
- **Docker**: Containerized deployment
- **Monitoring**: Health checks and logging
- **Testing**: Comprehensive test suites
- **Documentation**: Complete API documentation

## Getting Started Checklist

### For Traders
- [ ] Set up API credentials
- [ ] Configure environment (testnet/mainnet)
- [ ] Test authentication
- [ ] Place first order
- [ ] Set up WebSocket connection

### For Validators
- [ ] Clone commit boost module repository
- [ ] Configure consensus client
- [ ] Set up ETHGas integration
- [ ] Test preconfirmation commitments
- [ ] Monitor performance

### For Builders
- [ ] Clone builder scripts repository
- [ ] Register as builder
- [ ] Set up modified rbuilder
- [ ] Test block building
- [ ] Monitor builder performance

### For Smart Contract Developers
- [ ] Review contract implementations
- [ ] Study audit reports
- [ ] Understand integration points
- [ ] Test contract interactions
- [ ] Deploy custom integrations

## Resources for Developers

### Documentation
- **[API Reference](/docs/api/overview)**: Complete REST API documentation
- **[WebSocket API](/docs/websocket/overview)**: Real-time data streaming
- **[Authentication](/docs/api/authentication/login)**: API authentication guide
- **[Error Codes](/docs/reference/error-codes/general)**: Comprehensive error reference

### Community
- **GitHub**: [ethgas-developer](https://github.com/ethgas-developer) organization
- **Discord**: Join our developer community
- **Email**: Direct support for enterprise users

### Testing
- **TestNet**: [testnet.ethgas.com](https://testnet.ethgas.com) for testing
- **API Sandbox**: Test API endpoints safely
- **WebSocket Testing**: Real-time data testing

## Next Steps

Choose your development path and get started:

1. **[Trading Integration](/docs/api/overview)** - Start building trading applications
2. **[Validator Setup](/docs/validators/setup)** - Integrate validators with ETHGas
3. **[Builder Registration](/docs/api/builder/setup)** - Register as a block builder
4. **[Smart Contract Development](https://github.com/ethgas-developer/ethgas-contracts-avs-for-audit)** - Review and integrate contracts

For additional assistance, contact our support team or join our community channels. 