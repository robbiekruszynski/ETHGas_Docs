---
sidebar_position: 1
---

# ETHGas Documentation

<div style={{ textAlign: 'center', marginBottom: '2rem' }}>
  <img src="/img/ETHGas_logo.png" alt="ETHGas Logo" style={{ maxWidth: '200px', height: 'auto' }} />
</div>

ETHGas is a decentralized platform for Ethereum gas trading and MEV (Maximal Extractable Value) opportunities. This documentation provides comprehensive guides for all participants in the ETHGas ecosystem.

## What is ETHGas?

ETHGas provides infrastructure for trading Ethereum gas and capturing MEV opportunities through:

- **Whole Block Markets**: Trade entire blocks for MEV opportunities
- **Inclusion Preconf Markets**: Trade gas price predictions and inclusion guarantees
- **Bundle Submission**: Submit transaction bundles to block builders
- **Builder Management**: Register and manage block builders
- **Validator Operations**: Manage validator operations and fee collection

## Choose Your Path

<div className="row">
  <div className="col col--4">
    <div className="feature-card">
      <h3>For Developers</h3>
      <p>Build applications, integrate APIs, and create trading tools with our comprehensive developer documentation.</p>
      <a href="/docs/developers/overview" className="button button--primary">
        Developer Guide →
      </a>
    </div>
  </div>
  <div className="col col--4">
    <div className="feature-card">
      <h3>For Validators</h3>
      <p>Earn additional rewards through preconfirmation commitments and automated pricing strategies.</p>
      <a href="/docs/validators/overview" className="button button--primary">
        Validator Guide →
      </a>
    </div>
  </div>
  <div className="col col--4">
    <div className="feature-card">
      <h3>For Builders</h3>
      <p>Provide specialized block building services and optimize MEV extraction for maximum rewards.</p>
      <a href="/docs/api/builder/overview" className="button button--primary">
        Builder Guide →
      </a>
    </div>
  </div>
</div>

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

This documentation is organized for different types of users:

### **For Developers**
- [Developer Overview](/docs/developers/overview) - Understanding ETHGas for developers
- [API Reference](/docs/api/overview) - Complete API documentation
- [WebSocket Guide](/docs/websocket/overview) - Real-time data streaming
- [Reference Materials](/docs/reference/data-types) - Data structures and error codes

### **For Validators**
- [Validator Overview](/docs/validators/overview) - Understanding validator roles
- [Validator Setup](/docs/validators/setup) - Complete setup guide
- [Registration Process](/docs/validators/registration) - How to register validators
- [Collateral Management](/docs/validators/deposits) - Managing deposits

### **For Builders**
- [Builder Overview](/docs/api/builder/overview) - Understanding builder roles
- [Builder Setup](/docs/api/builder/setup) - Complete setup guide
- [Builder Registration](/docs/api/builder/registration) - How to register as a builder
- [Block Building API](/docs/api/builder/building) - API endpoints for building

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
  <p>Choose your path and begin your journey with ETHGas!</p>
  <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
    <a href="/docs/developers/overview" className="button button--primary">For Developers</a>
    <a href="/docs/validators/overview" className="button button--primary">For Validators</a>
    <a href="/docs/api/builder/overview" className="button button--primary">For Builders</a>
  </div>
</div>
