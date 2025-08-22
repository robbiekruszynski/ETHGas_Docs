---
sidebar_position: 1
sidebar_label: Welcome
---

import styles from '@site/src/pages/index.module.css';

# Welcome to ETHGas

Welcome to ETHGas, the premier platform for trading Ethereum Blockspace, and acquiring Realtime confirmations.

## What is ETHGas?

ETHGas is a comprehensive platform that enables trading of Ethereum gas and MEV opportunities through various market types:

### Market Types

**Whole Block Markets** - Trade entire blocks for MEV opportunities. Available up to 64 slots in advance for maximum planning flexibility.

<!-- **Rest-of-Block Auction** - Dynamic real-time auction for remaining block space. Available only for the current slot. -->

**Inclusion Preconf Markets** - Trade generic blockspace with conventional CLOB interface. Available up to 32 slots in advance.

### Platform Components

- **REST API**: Complete HTTP API for all platform operations
- **WebSocket API**: Real-time data streaming for live market updates
- **Authentication System**: Secure user authentication and session management
- **Trading Tools**: Advanced order management and position tracking

<!-- ## Key Trading Concepts -->

<!-- <div className="row">
  <div className="col col--6">
    <div className="feature-card">
      <h3>Order Types</h3>
      <p><strong>Market Orders</strong> - Execute immediately at current market price</p>
      <p><strong>Limit Orders</strong> - Execute only at specified price or better</p>
      <p><strong>Fill-Or-Kill Orders</strong> - Execute completely or not at all</p>
    </div>
  </div> -->
  
  <!-- <div className="col col--6">
    <div className="feature-card">
      <h3>Position Management</h3>
      <p><strong>Long Positions</strong> - Profitable when market prices increase</p>
      <p><strong>Short Positions</strong> - Profitable when market prices decrease</p>
      <p><strong>Real-time Tracking</strong> - Live updates on position status and P&L</p>
    </div>
  </div> -->
<!-- </div> -->

## Getting Started Checklist

Follow these steps to get started with ETHGas:

<div className="row">
  <div className="col col--4">
    <div className="feature-card text--center">
      <h3>1. Environment Setup</h3>
      <p>Configure your development environment and API credentials</p>
      <a href="/docs/getting-started/connecting" className="button button--outline button--sm">
        Configure Environment →
      </a>
    </div>
  </div>
  <div className="col col--4">
    <div className="feature-card text--center">
      <h3>2. Authentication</h3>
      <p>Set up API credentials and establish secure connections</p>
      <a href="/docs/getting-started/connecting" className="button button--outline button--sm">
        Set Up Auth →
      </a>
    </div>
  </div>
  <div className="col col--4">
    <div className="feature-card text--center">
      <h3>3. API Testing</h3>
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
      <h3>4. WebSocket Connection</h3>
      <p>Connect to real-time data streams for live updates</p>
      <a href="/docs/websocket/overview" className="button button--outline button--sm">
        Connect WebSocket →
      </a>
    </div>
  </div>
  <div className="col col--4">
    <div className="feature-card text--center">
      <h3>5. First Trade</h3>
      <p>Place your first order and start trading</p>
      <a href="/docs/api/trading/whole-block" className="button button--outline button--sm">
        Start Trading →
      </a>
    </div>
  </div>
  <div className="col col--4">
    <div className="feature-card text--center">
      <h3>6. Explore More</h3>
      <p>Dive deeper into advanced features and reference materials</p>
      <a href="/docs/reference/data-types" className="button button--outline button--sm">
        View Reference →
      </a>
    </div>
  </div>
</div>

## Next Steps

Ready to dive deeper? Check out these resources:

- [Environment Setup](/docs/getting-started/connecting) - Configure your development environment
- [API Overview](/docs/api/overview) - Understand the REST API structure
- [WebSocket Guide](/docs/websocket/overview) - Learn about real-time data streaming
- [Reference Materials](/docs/reference/data-types) - Explore data types and error codes

