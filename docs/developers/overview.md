---
sidebar_position: 1
---

# Developer Overview

<!-- :::info Role scope
This page focuses on Developers. For Builders see [Builder Overview](/docs/api/builder/builders-sequencers). For Validators see [Validator Overview](/docs/validators/overview). For copy/paste‑ready code, see the API endpoints below.
::: -->

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

| Repository | Description | Link |
|------------|-------------|------|
| **Commit Boost Module** | Preconfirmation commit boost functionality | <a href="https://github.com/ethgas-developer/ethgas-preconf-commit-boost-module" target="_blank" rel="noopener noreferrer">View Repository</a> |
| **Preconf Builder** | Modified rbuilder for preconfirmation support | <a href="https://github.com/ethgas-developer/preconf-builder" target="_blank" rel="noopener noreferrer">View Repository</a> |
| **Builder Scripts** | Scripts and tools for builders | <a href="https://github.com/ethgas-developer/ethgas-builder-scripts" target="_blank" rel="noopener noreferrer">View Repository</a> |
| **Contracts (AVS)** | Smart contracts for audit (AVS) | <a href="https://github.com/ethgas-developer/ethgas-contracts-avs-for-audit" target="_blank" rel="noopener noreferrer">View Repository</a> |

## Development Paths

| Path | Description | Link |
|------|-------------|------|
| **Getting Started** | Welcome guide and introduction | [Welcome Guide](/docs/getting-started/welcome) |
| **Environments** | Set up TestNet and MainNet environments | [Environment Setup](/docs/getting-started/environments) |
| **Connecting** | Connect to ETHGas platform | [Connection Guide](/docs/getting-started/connecting) |
| **API Overview** | Complete API documentation | [API Documentation](/docs/api/overview) |
| **WebSocket Overview** | Real-time WebSocket API docs | [WebSocket Documentation](/docs/websocket/overview) |

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

- **API Reference**: [This documentation](/docs/api/overview)
- **GitHub**: <a href="https://github.com/ethgas-developer" target="_blank" rel="noopener noreferrer">ETHGas Developer Organization</a> 