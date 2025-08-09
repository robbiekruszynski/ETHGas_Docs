---
sidebar_position: 1
---

# Welcome to ETHGas

Welcome to ETHGas, the premier platform for trading Ethereum Blockspace, and acquiring Realtime confirmations.

## What is ETHGas?

ETHGas is a comprehensive platform that enables trading of Ethereum gas and MEV opportunities through various market types:

### Whole Block Markets
For Trading or Building Purposes, available up to 64 slots in advance. Trade entire blocks for MEV opportunities. These markets allow you to bid on complete blocks and extract value from transaction ordering and inclusion.

### Rest-of-Block Auction
For Whole Block owners, submit Top-of-Block bundles and run a realtime auction on the Rest-of-Block, available only for the current slot. This enables dynamic pricing for remaining block space after top-of-block transactions are included.

### Inclusion Preconf Markets
Trade generic blockspace (i.e. neither top-of-block, nor state contentious) with a conventional CLOB interface. Available up to 32 slots in advance. These markets focus on predicting gas prices and transaction inclusion likelihood.

## Platform Overview

The ETHGas platform consists of several key components:

- **REST API**: Complete HTTP API for all platform operations
- **WebSocket API**: Real-time data streaming for live market updates
- **Authentication System**: Secure user authentication and session management
- **Market Management**: Tools for creating and managing trading markets
- **Order Management**: Comprehensive order placement and management
- **Position Tracking**: Real-time position monitoring and updates

## Key Concepts

### Markets
Markets are the core trading venues on ETHGas:
- **Whole Block Markets**: For Trading or Building Purposes, available up to 64 slots in advance
- **Rest-of-Block Auction**: For Whole Block owners, submit Top-of-Block bundles and run a realtime auction on the Rest-of-Block, available only for the current slot
- **Inclusion Preconf Markets**: Trade generic blockspace with a conventional CLOB interface, available up to 32 slots in advance

### Orders
Orders represent your trading intentions:
- **Market Orders**: Execute immediately at current market price
- **Limit Orders**: Execute only at specified price or better
- **Fill-Or-Kill Orders**: Execute completely or not at all

### Positions
Positions track your current market exposure:
- **Long Positions**: Profitable when prices increase
- **Short Positions**: Profitable when prices decrease

## Getting Started Checklist

<div className="row">
  <div className="col col--4">
    <div className="feature-card text--center">
      <h3>Environment Setup</h3>
      <p>Configure your development environment and API credentials</p>
      <a href="/docs/getting-started/environments" className="button button--outline button--sm">
        Configure Environment →
      </a>
    </div>
  </div>
  <div className="col col--4">
    <div className="feature-card text--center">
      <h3>Authentication</h3>
      <p>Set up API credentials and establish secure connections</p>
      <a href="/docs/getting-started/connecting" className="button button--outline button--sm">
        Set Up Auth →
      </a>
    </div>
  </div>
  <div className="col col--4">
    <div className="feature-card text--center">
      <h3>API Testing</h3>
      <p>Test basic API calls and verify your integration</p>
      <a href="/docs/api/overview" className="button button--outline button--sm">
        Test APIs →
      </a>
    </div>
  </div>
</div>

<div className="row">
  <div className="col col--4">
    <div className="feature-card text--center">
      <h3>WebSocket Connection</h3>
      <p>Connect to real-time data streams for live updates</p>
      <a href="/docs/websocket/overview" className="button button--outline button--sm">
        Connect WebSocket →
      </a>
    </div>
  </div>
  <div className="col col--4">
    <div className="feature-card text--center">
      <h3>First Trade</h3>
      <p>Place your first order and start trading</p>
      <a href="/docs/api/trading/whole-block" className="button button--outline button--sm">
        Start Trading →
      </a>
    </div>
  </div>
</div>

## Next Steps

Ready to dive deeper? Check out these resources:

- [Environment Setup](/docs/getting-started/environments) - Configure your development environment
- [API Overview](/docs/api/overview) - Understand the REST API structure
- [WebSocket Guide](/docs/websocket/overview) - Learn about real-time data streaming
- [Reference Materials](/docs/reference/data-types) - Explore data types and error codes

## Support Resources

- **Original Documentation**: [developers.ethgas.com](https://developers.ethgas.com)
- **TestNet App**: [testnet.ethgas.com](https://testnet.ethgas.com)
- **ETHGas Homepage**: [ethgas.com](https://ethgas.com)

Let's get started with your ETHGas journey! 