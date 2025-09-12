# ETHGas API Documentation

**The End of Latency. The Beginning of Realtime.**

Welcome to the ETHGas API docs! This is your gateway to building on the real-time infrastructure layer for Ethereum's blockspace economy.

## 🚀 What is ETHGas?

ETHGas transforms Ethereum's chaotic gas markets into a structured, liquid, and tradable asset class. We're building the foundational financial market for Ethereum's blockspace - turning gas from a volatile friction point into a new asset class.

### For Developers Like You

**🎯 Build Better dApps**
- Gas abstraction for seamless user experiences
- Predictable transaction costs
- Real-time gas price feeds

**⚡ Trade Blockspace**
- Whole block markets for MEV opportunities  
- Inclusion preconf markets for gas price trading
- Professional-grade APIs and WebSocket feeds

**🔧 Integrate with Validators**
- Automated fee optimization
- Builder infrastructure
- Validator delegation tools

## 🛠️ Quick Start

### 1. Choose Your Environment
```bash
# TestNet (Recommended for development)
API: https://hoodi.app.ethgas.com/api
WS:  wss://hoodi.app.ethgas.com/ws

# MainNet (Production)
API: https://mainnet.app.ethgas.com/api  
WS:  wss://mainnet.app.ethgas.com/ws
```

### 2. Authenticate
```python
import requests

# Get login message
response = requests.post('https://hoodi.app.ethgas.com/api/v1/user/login', 
                        params={'addr': '0x...'})

# Sign and verify (see docs for full flow)
# Get your JWT access token
```

### 3. Start Building
```python
# Get market data
markets = requests.get('https://hoodi.app.ethgas.com/api/v1/p/wholeblock/markets')

# Place orders (authenticated)
headers = {'Authorization': f'Bearer {access_token}'}
order = requests.post('https://hoodi.app.ethgas.com/api/v1/wholeblock/order', 
                     headers=headers, json=order_data)
```

## 📚 Documentation

### Core APIs
- **[REST API](/docs/api/overview)** - Complete HTTP API reference
- **[WebSocket API](/docs/websocket/overview)** - Real-time data streams
- **[Authentication](/docs/api/authentication)** - JWT-based auth flow

### Trading
- **[Whole Block Markets](/docs/api/trading/whole-block)** - Trade entire blocks
- **[Inclusion Preconf](/docs/api/trading/inclusion-preconf)** - Gas price trading
- **[Market Data](/docs/api/markets)** - Public market information

### Integration
- **[Builder Tools](/docs/api/builder)** - Block building infrastructure
- **[Validator Integration](/docs/validators)** - Validator operations
- **[Bundle Submission](/docs/api/bundles)** - Transaction bundles

## 🛠️ Development

### Local Setup
```bash
git clone <repository-url>
cd ETHGas_Docs
npm install
npm start
```

Open [http://localhost:3002](http://localhost:3002) to view the docs locally.

### Build for Production
```bash
npm run build
```

## 🤝 Contributing

Help us improve the docs! Found a bug or have a suggestion? We'd love your input.

## 📞 Support

- **TestNet App**: [testnet.ethgas.com](https://testnet.ethgas.com)
- **ETHGas Homepage**: [ethgas.com](https://ethgas.com)  
- **Community**: Join our Discord for real-time support

---

*Building the real-time infrastructure for Ethereum's economy.*


