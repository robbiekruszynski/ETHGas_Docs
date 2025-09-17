---
sidebar_position: 1
---

# Overview

<!-- :::info Role scope
This page focuses on Validators. For Developers see `/docs/developers/overview`. For Builders see `/docs/api/builder/builders-sequencers`. For copy/paste‑ready code, see the API endpoints below.
::: -->

Validators play a crucial role in the ETHGas ecosystem by participating in preconfirmation (preconf) commitments and earning rewards through gas trading opportunities.

## What is ETHGas for Validators?

ETHGas provides validators with the opportunity to:

<div className="row" style={{marginTop: '1rem'}}>
  <div className="col col--6">
    <div className="feature-card" style={{padding: '1.5rem', borderRadius: '8px', height: '100%', border: '2px solid var(--ifm-color-primary)', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
      <h4 style={{color: 'var(--ifm-color-primary)', marginTop: 0}}>Earn Additional Rewards</h4>
      <p style={{marginBottom: 0}}>Generate extra income through preconfirmation commitments and gas trading opportunities</p>
    </div>
  </div>
  <div className="col col--6">
    <div className="feature-card" style={{padding: '1.5rem', borderRadius: '8px', height: '100%', border: '2px solid var(--ifm-color-primary)', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
      <h4 style={{color: 'var(--ifm-color-primary)', marginTop: 0}}>Simplified Trading</h4>
      <p style={{marginBottom: 0}}>Participate in gas trading without complex strategies using our automated pricing</p>
    </div>
  </div>
</div>

<div className="row" style={{marginTop: '1rem'}}>
  <div className="col col--6">
    <div className="feature-card" style={{padding: '1.5rem', borderRadius: '8px', height: '100%', border: '2px solid var(--ifm-color-primary)', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
      <h4 style={{color: 'var(--ifm-color-primary)', marginTop: 0}}>Builder Delegation</h4>
      <p style={{marginBottom: 0}}>Delegate to specialized builders for optimized block building and performance</p>
    </div>
  </div>
  <div className="col col--6">
    <div className="feature-card" style={{padding: '1.5rem', borderRadius: '8px', height: '100%', border: '2px solid var(--ifm-color-primary)', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
      <h4 style={{color: 'var(--ifm-color-primary)', marginTop: 0}}>Automated Operations</h4>
      <p style={{marginBottom: 0}}>Maintain validator operations while earning extra income through automated systems</p>
    </div>
  </div>
</div>

## Validator Roles

### Preconfirmation Commitments
Validators can commit to including specific transactions in their blocks, earning fees from traders who want guaranteed transaction inclusion.

### Block Building
Validators can either:
- **Self-build blocks** with their own infrastructure
- **Delegate to specialist builders** for optimized performance
- **Use ETHGas fallback builder** for reliable backup

### Fee Collection
Validators earn from:
- **Priority fees** from included transactions
- **MEV opportunities** from block ordering
- **Preconfirmation fees** from traders

## Quick Start for Validators

<div className="row">
  <div className="col col--4">
    <div className="feature-card" style={{ textAlign: 'left' }}>
      <h3>1. Setup Environment</h3>
      <p>Configure your validator environment with the ETHGas Commit Boost module.</p>
      <a href="/docs/validators/setup" className="button button--outline button--sm">
        Setup Guide →
      </a>
    </div>
  </div>
  <div className="col col--4">
    <div className="feature-card" style={{ textAlign: 'left' }}>
      <h3>2. Register Validators</h3>
      <p>Register your validator public keys with ETHGas Exchange.</p>
      <a href="/docs/validators/registration" className="button button--outline button--sm">
        Registration Guide →
      </a>
    </div>
  </div>
  <div className="col col--4">
    <div className="feature-card" style={{ textAlign: 'left' }}>
      <h3>3. Deposit Collateral</h3>
      <p>Deposit ETH as collateral to secure preconfirmation commitments.</p>
      <a href="/docs/validators/deposits" className="button button--outline button--sm">
        Deposit Guide →
      </a>
    </div>
  </div>
</div>

## Validator Benefits

### Automated Trading
- **Default Pricer**: Automatically sell preconfirmations at optimal prices
- **Risk Management**: Built-in safeguards to protect validator funds
- **Performance Optimization**: Maximize earnings through intelligent pricing

### Flexible Delegation
- **Builder Delegation**: Delegate to specialist builders for better performance
- **Fallback Protection**: ETHGas provides backup block building
- **Custom Strategies**: Implement your own trading strategies

### Revenue Streams
- **Preconfirmation Fees**: Earn from traders seeking guaranteed inclusion
- **Priority Fees**: Collect fees from high-value transactions
- **MEV Opportunities**: Extract value from transaction ordering

## Integration Options

### Standard Validators
For typical Ethereum validators using standard infrastructure:
- [Setup Guide](/docs/validators/setup) - Complete setup guide
- [Registration Process](/docs/validators/registration) - How to register
- [Collateral Management](/docs/validators/deposits) - Managing deposits

<!-- ## Next Steps

- Official API Reference: This documentation
- ETHGas Repos: `https://github.com/ethgas-developer`  -->