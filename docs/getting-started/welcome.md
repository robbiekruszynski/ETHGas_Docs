---
sidebar_position: 1
---

import styles from '@site/src/pages/index.module.css';

# Welcome to ETHGas

Welcome to ETHGas, the premier platform for trading Ethereum Blockspace, and acquiring Realtime confirmations.

## What is ETHGas?

ETHGas is a comprehensive platform that enables trading of Ethereum gas and MEV opportunities through various market types:

<div className="row" style={{ marginTop: '2rem' }}>
  <div className="col col--4">
    <div className="feature-card text--center" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className={styles.stepNumber} style={{ marginBottom: '1rem' }}></div>
      <h3>Whole Block Markets</h3>
      <p style={{ flex: 1 }}>
        For Trading or Building Purposes, available up to 64 slots in advance. Trade entire blocks for MEV opportunities. These markets allow you to bid on complete blocks and extract value from transaction ordering and inclusion.
      </p>
    </div>
  </div>
  <div className="col col--4">
    <div className="feature-card text--center" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className={styles.stepNumber} style={{ marginBottom: '1rem' }}></div>
      <h3>Rest-of-Block Auction</h3>
      <p style={{ flex: 1 }}>
        For Whole Block owners, submit Top-of-Block bundles and run a realtime auction on the Rest-of-Block, available only for the current slot. This enables dynamic pricing for remaining block space after top-of-block transactions are included.
      </p>
    </div>
  </div>
  <div className="col col--4">
    <div className="feature-card text--center" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className={styles.stepNumber} style={{ marginBottom: '1rem' }}></div>
      <h3>Inclusion Preconf Markets</h3>
      <p style={{ flex: 1 }}>
        Trade generic blockspace (i.e. neither top-of-block, nor state contentious) with a conventional CLOB interface. Available up to 32 slots in advance. These markets focus on predicting gas prices and transaction inclusion likelihood.
      </p>
    </div>
  </div>
</div>

## Platform Overview

The ETHGas platform consists of several key components:

- **REST API**: Complete HTTP API for all platform operations
- **WebSocket API**: Real-time data streaming for live market updates
- **Authentication System**: Secure user authentication and session management
- **Market Management**: Tools for creating and managing trading markets
- **Order Management**: Comprehensive order placement and management
- **Position Tracking**: Real-time position monitoring and updates

## Key Concepts

<div className="row">
  <div className="col col--4">
    <div className="feature-card" style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '2rem' }}>
      <h3 style={{ color: 'var(--ifm-color-primary)', marginBottom: '1.5rem', fontSize: '1.75rem', fontWeight: '600', textAlign: 'center' }}>Markets</h3>
      <p style={{ marginBottom: '1.5rem' }}>
        Markets are the core trading venues on ETHGas where you can trade Ethereum blockspace and MEV opportunities.
      </p>
      <ul style={{ textAlign: 'left', margin: 0, paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Whole Block Markets:</strong> Available up to 64 slots in advance
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Rest-of-Block Auction:</strong> Real-time auction for current slot
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Inclusion Preconf Markets:</strong> Available up to 32 slots in advance
        </li>
      </ul>
    </div>
  </div>
  
  <div className="col col--4">
    <div className="feature-card" style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '2rem' }}>
      <h3 style={{ color: 'var(--ifm-color-primary)', marginBottom: '1.5rem', fontSize: '1.75rem', fontWeight: '600', textAlign: 'center' }}>Orders</h3>
      <p style={{ marginBottom: '1.5rem' }}>
        Orders represent your trading intentions and how you want to execute trades on the platform.
      </p>
      <ul style={{ textAlign: 'left', margin: 0, paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Market Orders:</strong> Execute immediately at current market price
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Limit Orders:</strong> Execute only at specified price or better
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Fill-Or-Kill Orders:</strong> Execute completely or not at all
        </li>
      </ul>
    </div>
  </div>
  
  <div className="col col--4">
    <div className="feature-card" style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '2rem' }}>
      <h3 style={{ color: 'var(--ifm-color-primary)', marginBottom: '1.5rem', fontSize: '1.75rem', fontWeight: '600', textAlign: 'center' }}>Positions</h3>
            <p style={{ marginBottom: '1.5rem', minHeight: '4rem' }}>
        Positions track your current market exposure and potential profit/loss scenarios.
         
      </p>
      <ul style={{ textAlign: 'left', margin: 0, paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Long Positions:</strong> Profitable when prices increase
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Short Positions:</strong> Profitable when prices decrease
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Real-time tracking and updates</strong>
        </li>
      </ul>
    </div>
  </div>
</div>

## Getting Started Checklist

<div className="row">
  <div className="col col--6">
    <div className="feature-card text--center">
      <h3>Environment Setup</h3>
      <p>Configure your development environment and API credentials</p>
      <a href="/docs/getting-started/environments" className="button button--outline button--sm">
        Configure Environment →
      </a>
    </div>
  </div>
  <div className="col col--6">
    <div className="feature-card text--center">
      <h3>Authentication</h3>
      <p>Set up API credentials and establish secure connections</p>
      <a href="/docs/getting-started/connecting" className="button button--outline button--sm">
        Set Up Auth →
      </a>
    </div>
  </div>
</div>

<div className="row">
  <div className="col col--4">
    <div className="feature-card text--center">
      <h3>API Testing</h3>
      <p>Test basic API calls and verify your integration</p>
      <a href="/docs/api/overview" className="button button--outline button--sm">
        Test APIs →
      </a>
    </div>
  </div>
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

