---
sidebar_position: 2
---

# Builder Registration

This guide covers the process for registering as a builder with ETHGas and the requirements for participation in the gas trading ecosystem.

## Registration Process

### Prerequisites

Before registering as a builder, ensure you have:

- **Technical infrastructure**: Capable of building blocks within slot timeframes
- **Modified rbuilder**: ETHGas-modified version of the rbuilder software
- **API access**: Ability to integrate with ETHGas APIs
- **Relay connectivity**: Connection to ETHGas Relay infrastructure

### Registration Steps

1. **Repository Access**
   - Clone the builder registration repository: [https://github.com/ethgas-developer/ethgas-builder-scripts](https://github.com/ethgas-developer/ethgas-builder-scripts)
   - Follow the setup instructions in the repository

2. **Environment Configuration**
   - Configure your builder environment
   - Set up API credentials
   - Configure relay endpoints

3. **Testing**
   - Test block building with testnet
   - Verify compliance with commitment requirements
   - Validate fee distribution mechanisms

4. **Production Deployment**
   - Deploy to mainnet environment
   - Monitor performance and compliance
   - Establish monitoring and alerting

## Technical Requirements

### Modified rbuilder

ETHGas provides a modified version of rbuilder that includes:

- **Preconf transaction streaming**: Real-time access to preconf transactions
- **Commitment compliance**: Automatic validation of block commitments
- **Bundle positioning**: Correct placement of top and bottom bundles
- **Mempool integration**: Efficient filling of remaining blockspace

### Installation

```bash
# Clone the modified rbuilder
git clone https://github.com/ethgas-developer/preconf-builder

# Build the project
cd preconf-builder
cargo build --release

# Configure the builder
cp config.example.toml config.toml
# Edit config.toml with your settings
```

### Configuration

```toml
[ethgas]
# ETHGas API endpoint
api_url = "https://api.ethgas.com"
# Your API credentials
api_key = "your_api_key_here"

[relay]
# ETHGas relay endpoint
relay_url = "https://relay.ethgas.com"
# Relay authentication
relay_auth = "your_relay_auth_token"

[block_building]
# Maximum gas limit for blocks
max_gas_limit = 30000000
# Minimum gas price for mempool transactions
min_gas_price = 1000000000
# Enable preconf transaction inclusion
enable_preconf = true
```

## API Integration

### Authentication

Builders must authenticate with ETHGas APIs using:

```bash
# API key authentication
curl -H "Authorization: Bearer YOUR_API_KEY" \
     https://api.ethgas.com/v1/builder/status
```

### Required Endpoints

Builders must implement integration with these endpoints:

- **Preconf Transactions**: `/v1/builder/preconf-transactions`
- **Block Submission**: `/v1/builder/submit-block`
- **Commitment Validation**: `/v1/builder/validate-commitment`
- **Fee Distribution**: `/v1/builder/fee-distribution`

## Compliance Requirements

### Block Validation

All built blocks must pass validation checks:

- **Preconf inclusion**: All preconf transactions for the slot must be included
- **Bundle positioning**: Top and bottom bundles must be in correct positions
- **Gas limit**: Block must not exceed gas limit
- **Commitment compliance**: Block must satisfy all trader commitments

### Performance Requirements

- **Block building time**: Must complete within slot timeframe
- **Relay submission**: Must submit blocks to relay before deadline
- **Error handling**: Must handle failures gracefully
- **Monitoring**: Must provide status and health information

## Fee Distribution

### Priority Fees

Priority fees from block transactions are distributed as follows:

- **Self Building**: All fees go to the block owner
- **Specialist Builders**: Distribution negotiated between trader and builder
- **Fallback Builder**: All fees go to the block owner

### MEV Extraction

MEV extraction follows similar distribution patterns:

- **Self Building**: MEV goes to the block owner
- **Specialist Builders**: MEV distribution negotiated separately
- **Fallback Builder**: MEV goes to the block owner

## Monitoring and Maintenance

### Health Checks

Implement regular health checks for your builder:

```bash
# Check builder status
curl https://api.ethgas.com/v1/builder/health

# Monitor block building performance
curl https://api.ethgas.com/v1/builder/metrics
```

### Alerting

Set up alerts for:

- Block building failures
- API connectivity issues
- Compliance violations
- Performance degradation

### Logging

Maintain comprehensive logs for:

- Block building attempts
- API interactions
- Error conditions
- Performance metrics

## Support and Resources

### Documentation

- [Block Building API](/docs/api/builder/building) - Detailed API documentation
- [Relay Integration](/docs/api/builder/relay) - Relay submission guide
- [Fee Distribution](/docs/api/builder/fees) - Fee handling details

### Community

- **Discord**: Join the ETHGas Discord for builder discussions
- **GitHub**: Report issues and contribute to builder tools
- **Documentation**: Keep up with latest updates and changes

### Contact

For builder-specific support:

- **Technical issues**: Create GitHub issues in the builder repositories
- **Integration questions**: Use Discord builder channel
- **Emergency issues**: Contact ETHGas team directly 