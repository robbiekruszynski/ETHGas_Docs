---
sidebar_position: 1
---

# Developer Overview

:::info Role scope
This page focuses on Developers. For Builders see `/docs/api/builder/overview`. For Validators see `/docs/validators/overview`. For copy/paste‑ready code, use `https://developers.ethgas.com`.
:::

This guide provides a concise overview for developers integrating with the ETHGas ecosystem.

## What is ETHGas?

ETHGas is a platform for trading Ethereum blockspace and acquiring preconfirmations.

### Core Components

- **Whole Block Markets**
- **Inclusion Preconf Markets**
- **Builder Infrastructure**
- **Validator Integration**

## Platform Architecture

<div className="row">
  <div className="col col--6">
    <div className="feature-card">
      <h3>REST API</h3>
      <p>HTTP API for authentication, trading, user, funding, markets, builder, validator, pricer.</p>
      <a href="/docs/api/overview" className="button button--outline button--sm">
        API Reference →
      </a>
    </div>
  </div>
  <div className="col col--6">
    <div className="feature-card">
      <h3>WebSocket API</h3>
      <p>Real-time data streaming for market and account updates.</p>
      <a href="/docs/websocket/overview" className="button button--outline button--sm">
        WebSocket Docs →
      </a>
    </div>
  </div>
</div>

## GitHub Repositories

- **Commit Boost Module**: `https://github.com/ethgas-developer/ethgas-preconf-commit-boost-module`
- **Preconf Builder (modified rbuilder)**: `https://github.com/ethgas-developer/preconf-builder`
- **Builder Scripts**: `https://github.com/ethgas-developer/ethgas-builder-scripts`
- **Contracts (AVS for audit)**: `https://github.com/ethgas-developer/ethgas-contracts-avs-for-audit`

## Development Paths

- **Getting Started**: `/docs/getting-started/welcome`
- **Environments**: `/docs/getting-started/environments`
- **Connecting**: `/docs/getting-started/connecting`
- **API Overview**: `/docs/api/overview`
- **WebSocket Overview**: `/docs/websocket/overview`

## Market Types

- **Whole Block Markets**: Own complete blocks; reserve up to 64 slots ahead
- **Rest-of-Block Auction**: For block owners; realtime auction for remaining blockspace (current slot)
- **Inclusion Preconf Markets**: Trade generic blockspace; up to 32 slots ahead

## Technical Stack

- **REST API**
- **WebSocket**
- **Authentication (Bearer tokens)**
- **Rate Limiting**
- **Ethereum / PBS / BLS**

## Resources for Developers

- **API Reference**: `https://developers.ethgas.com`
- **GitHub**: `https://github.com/ethgas-developer` 