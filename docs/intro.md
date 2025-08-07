---
sidebar_position: 1
---

# ETHGas Documentation

<div style={{ textAlign: 'center', marginBottom: '2rem' }}>
  <img src="/img/ETHGas_logo.png" alt="ETHGas Logo" style={{ maxWidth: '200px', height: 'auto' }} />
</div>

ETHGas is a decentralized platform for Ethereum gas trading and MEV (Maximal Extractable Value) opportunities. This documentation provides comprehensive guides for developers to integrate with the ETHGas platform.

## What is ETHGas?

ETHGas provides infrastructure for trading Ethereum gas and capturing MEV opportunities through:

- **Whole Block Markets**: Trade entire blocks for MEV opportunities
- **Inclusion Preconf Markets**: Trade gas price predictions and inclusion guarantees
- **Bundle Submission**: Submit transaction bundles to block builders
- **Builder Management**: Register and manage block builders
- **Validator Operations**: Manage validator operations and fee collection

## Quick Start

<div className="row">
  <div className="col col--4">
    <div className="feature-card">
      <h3>Get Started</h3>
      <p>Set up your environment and begin integrating with ETHGas.</p>
      <a href="/docs/getting-started/welcome" className="button button--primary">
        Getting Started →
      </a>
    </div>
  </div>
  <div className="col col--4">
    <div className="feature-card">
      <h3>API Reference</h3>
      <p>Complete REST and WebSocket API documentation.</p>
      <a href="/docs/api/overview" className="button button--primary">
        View APIs →
      </a>
    </div>
  </div>
  <div className="col col--4">
    <div className="feature-card">
      <h3>Try It Out</h3>
      <p>Test ETHGas on our testnet environment.</p>
      <a href="https://testnet.ethgas.com" className="button button--primary">
        Launch TestNet →
      </a>
    </div>
  </div>
</div>

## Platform Features

### REST API
Complete REST API for all platform operations including market data, trading, and account management.

### WebSocket API
Real-time data streaming for market updates, order status, and position tracking.

### Multiple Market Types
Support for both whole block and inclusion preconf markets with advanced trading features.

### Secure Authentication
Comprehensive user authentication and session management with industry-standard security.

### Real-time Updates
Live market data, order updates, and position tracking for optimal trading decisions.

## Documentation Structure

This documentation is organized into several main sections:

### **Getting Started**
- [Welcome](/docs/getting-started/welcome) - Introduction to ETHGas
- [Environments](/docs/getting-started/environments) - Testnet vs Mainnet
- [Connecting](/docs/getting-started/connecting) - How to connect to ETHGas

### **API Reference**
- [API Overview](/docs/api/overview) - Complete API documentation
- [Authentication](/docs/api/authentication/login) - User authentication
- [Trading](/docs/api/trading/whole-block) - Trading operations
- [WebSocket](/docs/websocket/overview) - Real-time data streams

### **Resources**
- [Error Codes](/docs/reference/error-codes/general) - Troubleshooting guide
- [Data Types](/docs/reference/data-types) - API data structures
- [Lookup Tables](/docs/reference/lookup-tables/markets) - Reference data

## Using ETHGas

### TestNet Environment
**Perfect for development and testing**
- [testnet.ethgas.com](https://testnet.ethgas.com) - Interactive web application
- Free test tokens for development
- Full API access with sandbox environment

### MainNet Environment
**Production environment for live trading**
- Real ETH trading and MEV opportunities
- Production-grade infrastructure
- Advanced trading features

## Integration Examples

### Basic API Call
```javascript
// Get market data
const response = await fetch('https://api.ethgas.com/v1/markets', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
});
const markets = await response.json();
```

### WebSocket Connection
```javascript
// Connect to real-time data
const ws = new WebSocket('wss://ws.ethgas.com/v1/stream');
ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log('Market update:', data);
};
```

## Support & Resources

- **Original Documentation**: [developers.ethgas.com](https://developers.ethgas.com)
- **TestNet App**: [testnet.ethgas.com](https://testnet.ethgas.com)
- **ETHGas Homepage**: [ethgas.com](https://ethgas.com)
- **Community**: Join our [Discord](https://discord.gg/ethgas) for support

## Getting Help

If you need assistance with the ETHGas platform:

1. **Check the [Error Codes](/docs/reference/error-codes/general)** section for troubleshooting
2. **Review the [API Overview](/docs/api/overview)** for implementation guidance
3. **Join our [Discord community](https://discord.gg/ethgas)** for real-time support
4. **Contact the ETHGas team** through official channels

---

<div style={{ textAlign: 'center', marginTop: '3rem', padding: '2rem', backgroundColor: 'var(--ifm-color-primary-lightest)', borderRadius: '12px' }}>
  <h3>Ready to get started?</h3>
  <p>Head over to the <a href="/docs/getting-started/welcome" className="button button--primary">Getting Started</a> section to begin your journey with ETHGas!</p>
</div>
