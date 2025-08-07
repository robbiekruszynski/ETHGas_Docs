---
sidebar_position: 1
---

# Developer Overview

ETHGas is a decentralized platform that enables trading of Ethereum gas and MEV (Maximal Extractable Value) opportunities. This overview explains the core concepts, architecture, and opportunities for developers.

## What is ETHGas?

ETHGas provides infrastructure for:

- **Gas Trading**: Trade gas price predictions and inclusion guarantees
- **MEV Opportunities**: Extract value from block building and transaction ordering
- **Preconfirmation Markets**: Guarantee transaction inclusion in future blocks
- **Builder Infrastructure**: Specialized block building for optimized MEV extraction

## Core Concepts

### Preconfirmation (Preconf)
Preconfirmation allows traders to guarantee that specific transactions will be included in future blocks, creating a market for transaction inclusion.

### Whole Block Markets
Traders can bid on entire blocks, gaining control over transaction ordering and MEV extraction opportunities.

### Inclusion Preconf Markets
Traders can predict and trade on gas prices and transaction inclusion probabilities.

### Block Builders
Specialized entities that construct blocks with optimized transaction ordering for maximum MEV extraction.

## Platform Architecture

<div className="row">
  <div className="col col--6">
    <div className="feature-card">
      <h3>REST API</h3>
      <p>Complete HTTP API for all platform operations including market data, trading, and account management.</p>
      <a href="/docs/api/overview" className="button button--outline button--sm">
        API Reference →
      </a>
    </div>
  </div>
  <div className="col col--6">
    <div className="feature-card">
      <h3>WebSocket API</h3>
      <p>Real-time data streaming for market updates, order status, and position tracking.</p>
      <a href="/docs/websocket/overview" className="button button--outline button--sm">
        WebSocket Guide →
      </a>
    </div>
  </div>
</div>

## Market Types

### Whole Block Markets
- **Purpose**: Trade entire blocks for MEV opportunities
- **Participants**: Block builders, validators, traders
- **Value**: Control over transaction ordering and MEV extraction
- **Risk**: High capital requirements, complex strategies

### Inclusion Preconf Markets
- **Purpose**: Trade gas price predictions and inclusion guarantees
- **Participants**: Traders, validators, DApps
- **Value**: Guaranteed transaction inclusion, gas price hedging
- **Risk**: Moderate, suitable for various trading strategies

## Key Participants

### Traders
- **Role**: Buy and sell gas and MEV opportunities
- **Tools**: REST API, WebSocket API, trading interfaces
- **Opportunities**: Arbitrage, speculation, hedging

### Validators
- **Role**: Provide block building and transaction inclusion
- **Tools**: Commit Boost Module, PBS integration
- **Opportunities**: Earn additional rewards through preconfirmation fees

### Builders
- **Role**: Construct optimized blocks for MEV extraction
- **Tools**: Modified rbuilder, relay integration
- **Opportunities**: Specialized block building services

### Developers
- **Role**: Build applications and integrations
- **Tools**: APIs, SDKs, documentation
- **Opportunities**: Create trading tools, analytics, automation

## Technical Stack

### Backend Infrastructure
- **Blockchain**: Ethereum mainnet and testnets
- **APIs**: REST and WebSocket APIs
- **Authentication**: JWT-based authentication
- **Database**: Real-time market data storage

### Trading Infrastructure
- **Order Matching**: Real-time order book management
- **Position Tracking**: Real-time position and P&L tracking
- **Risk Management**: Automated risk controls and limits
- **Settlement**: On-chain settlement and collateral management

### Block Building
- **Modified rbuilder**: ETHGas-optimized block builder
- **Relay Integration**: PBS (Proposer-Builder Separation) support
- **MEV Extraction**: Optimized transaction ordering algorithms

## Development Opportunities

### Trading Applications
- **Automated Trading Bots**: Algorithmic trading strategies
- **Portfolio Management**: Multi-market position tracking
- **Risk Management**: Automated risk controls and alerts
- **Analytics**: Market analysis and performance tracking

### Integration Tools
- **API Wrappers**: Language-specific API libraries
- **SDKs**: Complete development kits for various platforms
- **Webhooks**: Real-time event notifications
- **Data Feeds**: Market data and analytics feeds

### Infrastructure Services
- **Builder Services**: Specialized block building
- **Relay Services**: PBS relay infrastructure
- **Analytics Services**: Market analysis and insights
- **Risk Services**: Risk management and compliance tools

## Getting Started

### For Traders
1. **Account Setup**: Register and verify your account
2. **API Access**: Generate API keys for programmatic access
3. **Market Research**: Study market types and trading strategies
4. **Risk Management**: Set up position limits and risk controls

### For Developers
1. **API Documentation**: Review REST and WebSocket APIs
2. **Authentication**: Set up API key authentication
3. **Testing**: Use testnet for development and testing
4. **Integration**: Build applications and tools

### For Validators
1. **Setup Guide**: Follow the validator setup guide
2. **Registration**: Register validators with ETHGas
3. **Collateral**: Deposit ETH as collateral
4. **Monitoring**: Track performance and earnings

## Market Dynamics

### Gas Price Factors
- **Network Congestion**: High transaction volume increases gas prices
- **Block Space**: Limited block space creates competition
- **MEV Opportunities**: Valuable transactions drive up gas prices
- **Market Sentiment**: Trader expectations influence prices

### MEV Sources
- **Arbitrage**: Price differences across DEXs
- **Liquidations**: DeFi liquidation opportunities
- **Sandwich Attacks**: Front-running and back-running
- **Time-Bandit Attacks**: Reorg-based MEV extraction

### Risk Factors
- **Market Volatility**: Rapid price changes
- **Liquidity Risk**: Limited market depth
- **Technical Risk**: API failures, network issues
- **Regulatory Risk**: Changing regulations and compliance

## Resources for Developers

### Documentation
- [API Reference](/docs/api/overview) - Complete API documentation
- [WebSocket Guide](/docs/websocket/overview) - Real-time data streaming
- [Error Codes](/docs/reference/error-codes/general) - Troubleshooting guide
- [Data Types](/docs/reference/data-types) - API data structures

### Tools and Libraries
- **TestNet App**: [testnet.ethgas.com](https://testnet.ethgas.com) - Interactive testing
- **API Playground**: Test API endpoints directly
- **SDK Examples**: Code examples in multiple languages
- **Webhook Testing**: Test webhook integrations

### Community
- **Discord**: Join the ETHGas Discord for community support
- **GitHub**: Contribute to open-source projects
- **Twitter**: Follow [@ETHGas](https://twitter.com/ETHGas) for updates
- **Blog**: Read technical articles and updates

## Next Steps

Ready to dive deeper? Choose your path:

- **Traders**: [Trading Guide](/docs/trading/overview) - Learn trading strategies
- **Developers**: [API Reference](/docs/api/overview) - Build applications
- **Validators**: [Validator Setup](/docs/validators/setup) - Earn additional rewards
- **Builders**: [Builder Setup](/docs/api/builder/setup) - Provide block building services

Start with the [Getting Started](/docs/getting-started/welcome) guide to begin your ETHGas journey! 