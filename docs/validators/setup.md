---
sidebar_position: 2
---

# Validator Setup Guide

This guide provides step-by-step instructions for setting up validators with ETHGas, tailored to your specific consensus client.

## Repository Overview

The [ETHGas Preconf Commit Boost Module](https://github.com/ethgas-developer/ethgas-preconf-commit-boost-module) is the official repository for validator integration with ETHGas. This module enables validators to participate in preconfirmation commitments and earn additional rewards.

### Repository Structure

The [ethgas-preconf-commit-boost-module](https://github.com/ethgas-developer/ethgas-preconf-commit-boost-module) repository includes:

- **Commit Boost Module**: Core validator integration logic
- **PBS Module**: Proposer-Builder Separation integration
- **Docker Configuration**: Complete containerized setup
- **Configuration Templates**: Environment-specific configurations
- **Monitoring Tools**: Health checks and performance monitoring

### Related Repositories

- **[ETHGas Builder Scripts](https://github.com/ethgas-developer/ethgas-builder-scripts)**: Builder registration and management
- **[Preconf Builder](https://github.com/ethgas-developer/preconf-builder)**: Modified rbuilder for ETHGas integration
- **[ETHGas Contracts](https://github.com/ethgas-developer/ethgas-contracts-avs-for-audit)**: Smart contract implementations

## Prerequisites

Before beginning the setup process, ensure you have:

- **Validator Keys**: Your BLS key pair for validator identification
- **EOA Signing Key**: Ethereum account for authentication and fee collection
- **Docker & Docker Compose**: For containerized deployment
- **Consensus Client**: Lighthouse, Prysm, or Teku (choose one)
- **Execution Client**: Compatible with your consensus client
- **Minimum Requirements**: 4GB RAM, 100GB storage, stable internet
- **Network Access**: Ability to connect to ETHGas APIs

## Choose Your Consensus Client

<div className="feature-card">
  <h3>Lighthouse</h3>
  <p>Fast, secure, and written in Rust. Recommended for high-performance setups.</p>
  <a href="#lighthouse-setup" className="button button--primary">Lighthouse Setup</a>
</div>

<div className="feature-card">
  <h3>Prysm</h3>
  <p>Go-based client with excellent tooling and community support.</p>
  <a href="#prysm-setup" className="button button--primary">Prysm Setup</a>
</div>

<div className="feature-card">
  <h3>Teku</h3>
  <p>Java-based client with enterprise features and high reliability.</p>
  <a href="#teku-setup" className="button button--primary">Teku Setup</a>
</div>

## Quick Start

### 1. Clone Repository
```bash
git clone https://github.com/ethgas-developer/ethgas-preconf-commit-boost-module
cd ethgas-preconf-commit-boost-module
```

### 2. Environment Configuration
```bash
cp .env.example .env
# Edit .env with your configuration
```

### 3. Configure Variables

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="mainnet" label="MainNet" default>

```bash
# Set your validator keys
BLS_KEY_PAIR=your_bls_key_pair
EOA_SIGNING_KEY=your_eoa_signing_key

# Set network (mainnet)
NETWORK=mainnet

# Optional: Additional configuration
LOG_LEVEL=info
METRICS_ENABLED=true
ALERTING_ENABLED=true
```

### MainNet Configuration

For MainNet production use:

- **Network**: MainNet
- **Chain ID**: 1
- **Contract Addresses**: Production addresses
- **Security**: Production-grade security measures

</TabItem>
<TabItem value="testnet" label="TestNet">

```bash
# Set your validator keys
BLS_KEY_PAIR=your_bls_key_pair
EOA_SIGNING_KEY=your_eoa_signing_key

# Set network (testnet)
NETWORK=testnet

# Optional: Additional configuration
LOG_LEVEL=debug
METRICS_ENABLED=true
ALERTING_ENABLED=true
```

### TestNet Configuration

For TestNet development and testing:

- **Network**: TestNet
- **Chain ID**: 17000 (Hoodi)
- **Contract Addresses**: Test addresses
- **Security**: Development security measures

</TabItem>
</Tabs>

### 4. Build and Deploy
```bash
docker-compose up -d
```

## Client-Specific Setup

### Lighthouse Setup {#lighthouse-setup}

Lighthouse is a high-performance Rust-based consensus client. Follow these specific configuration steps:

#### Lighthouse Configuration

**Important**: For Lighthouse validators, configure these specific timeout settings to boost value:

```bash
# In your Lighthouse configuration
--builder-header-timeout 2000
```

And in your commit boost module configuration:

```toml
# In commitboost.toml
timeout_get_header_ms = 1950
```

#### Complete Lighthouse Setup

1. **Install Lighthouse**
```bash
# Using binary (recommended)
curl -L https://github.com/sigp/lighthouse/releases/download/v4.5.0/lighthouse-v4.5.0-x86_64-unknown-linux-gnu.tar.gz | tar xz
sudo mv lighthouse /usr/local/bin/
```

2. **Generate Validator Keys**
```bash
lighthouse account validator new --network mainnet
```

3. **Configure Lighthouse**
```bash
# Create lighthouse.toml
cat > lighthouse.toml << EOF
[consensus_client]
builder-header-timeout = 2000

[validator_client]
enable-builder = true
builder-proposals = true
EOF
```

4. **Start Lighthouse**
```bash
lighthouse beacon_node --network mainnet --http --checkpoint-sync-url https://sync.mainnet.ethpandaops.io
lighthouse validator_client --network mainnet --beacon-node http://localhost:5052
```

### Prysm Setup {#prysm-setup}

Prysm is a Go-based consensus client with excellent tooling support.

#### Prysm Configuration

```bash
# In your Prysm configuration
--builder-header-timeout 2000
--enable-builder
```

#### Complete Prysm Setup

1. **Install Prysm**
```bash
curl -L https://github.com/prysmaticlabs/prysm/releases/download/v4.1.3/beacon-chain-v4.1.3-linux-amd64 | sudo tee /usr/local/bin/beacon-chain
curl -L https://github.com/prysmaticlabs/prysm/releases/download/v4.1.3/validator-v4.1.3-linux-amd64 | sudo tee /usr/local/bin/validator
sudo chmod +x /usr/local/bin/beacon-chain /usr/local/bin/validator
```

2. **Generate Validator Keys**
```bash
./prysm.sh validator accounts create --wallet-dir /path/to/wallet
```

3. **Configure Prysm**
```bash
# Create prysm.yaml
cat > prysm.yaml << EOF
beacon-chain:
  builder-header-timeout: 2000
  enable-builder: true

validator:
  enable-builder: true
  builder-proposals: true
EOF
```

4. **Start Prysm**
```bash
./prysm.sh beacon-chain --config-file prysm.yaml
./prysm.sh validator --wallet-dir /path/to/wallet --config-file prysm.yaml
```

### Teku Setup {#teku-setup}

Teku is a Java-based consensus client with enterprise features.

#### Teku Configuration

```bash
# In your Teku configuration
--builder-header-timeout 2000
--validators-builder-registration-default-enabled=true
```

#### Complete Teku Setup

1. **Install Teku**
```bash
# Download Teku
wget https://artifacts.consensys.net/public/teku/raw/names/teku.tar.gz/versions/23.12.1/teku-23.12.1.tar.gz
tar -xzf teku-23.12.1.tar.gz
sudo mv teku-23.12.1 /opt/teku
```

2. **Generate Validator Keys**
```bash
/opt/teku/bin/teku validator generate-keys --output-file /path/to/keys
```

3. **Configure Teku**
```bash
# Create teku.yaml
cat > teku.yaml << EOF
beacon-chain:
  builder-header-timeout: 2000
  validators-builder-registration-default-enabled: true

validator:
  builder-registration-default-enabled: true
EOF
```

4. **Start Teku**
```bash
/opt/teku/bin/teku --config-file teku.yaml
```

## ETHGas Integration

### 1. Configure Commit Boost Module

```bash
# Edit commitboost.toml
cat > commitboost.toml << EOF
[network]
network = "mainnet"

[keys]
bls_key_pair = "${BLS_KEY_PAIR}"
eoa_signing_key = "${EOA_SIGNING_KEY}"

[timeouts]
timeout_get_header_ms = 1950  # Lighthouse specific

[registration]
enable_registration = true
entity_name = "your_entity_name"
registration_mode = "standard"  # standard, ssv, or skipped

[collateral]
collateral_per_slot = 0.1  # ETH per slot
overall_wait_interval_in_second = 3600
api_wait_interval_in_ms = 1000

[authentication]
is_jwt_provided = false
eoa_signing_key = "${EOA_SIGNING_KEY}"

# Or use JWT tokens
# is_jwt_provided = true
# access_jwt = "your_access_jwt_here"
# refresh_jwt = "your_refresh_jwt_here"
EOF
```

### 2. Start Commit Module

```bash
# Start the commit boost module
docker-compose up commit-module -d
```

### 3. Start PBS Module

```bash
# Start the PBS module
docker-compose up pbs-module -d
```

### 4. Deposit Collateral

```bash
# Deposit required collateral
curl -X POST http://localhost:8080/deposit \
  -H "Content-Type: application/json" \
  -d '{"amount": "32", "validator_index": "your_validator_index"}'
```

## Configuration Options

### Registration Modes

- **Standard**: Basic validator registration
- **Advanced**: Enhanced features with additional configuration
- **Enterprise**: Full feature set with monitoring and analytics

### Authentication Methods

- **BLS Key Pair**: Primary authentication method
- **EOA Signing Key**: Secondary authentication for fee collection
- **API Key**: Optional for enhanced security

### Builder Delegation

- **Direct**: Connect directly to ETHGas builders
- **Relay**: Use through relay networks
- **Hybrid**: Combination of direct and relay connections

### Pricing

- **Fixed Fee**: Standard pricing model
- **Dynamic**: Performance-based pricing
- **Custom**: Enterprise pricing arrangements

## Environment Variables

```bash
# Required variables
NETWORK=mainnet
BLS_KEY_PAIR=your_bls_key_pair
EOA_SIGNING_KEY=your_eoa_signing_key

# Optional variables
LOG_LEVEL=info
METRICS_ENABLED=true
ALERTING_ENABLED=true
```

## Troubleshooting

### Common Issues

1. **Connection Timeout**
   - Check network connectivity
   - Verify firewall settings
   - Ensure correct timeout configurations

2. **Authentication Errors**
   - Verify BLS key pair format
   - Check EOA signing key permissions
   - Ensure proper key file permissions

3. **Performance Issues**
   - Monitor system resources
   - Check consensus client logs
   - Verify builder registration status

### Log Analysis

```bash
# View commit module logs
docker-compose logs commit-module

# View PBS module logs
docker-compose logs pbs-module

# View consensus client logs
journalctl -u lighthouse-validator -f
```

## Security Considerations

### Key Management

- **Secure Storage**: Store keys in hardware security modules (HSM) when possible
- **Access Control**: Limit access to validator keys
- **Backup Strategy**: Implement secure backup procedures
- **Monitoring**: Monitor for unauthorized access attempts

### Network Security

- **Firewall Configuration**: Restrict access to validator ports
- **VPN Usage**: Use VPN for remote access
- **Regular Updates**: Keep all software updated
- **Security Audits**: Regular security assessments

## Integration with Builder Software

### Supported Builders

- **Modified rbuilder**: ETHGas-modified Flashbots builder
- **Custom Builders**: Enterprise builder solutions
- **Relay Networks**: Integration with major relay networks

### Configuration Examples

```bash
# rbuilder configuration
./rbuilder \
  --bls-key-pair ${BLS_KEY_PAIR} \
  --eoa-signing-key ${EOA_SIGNING_KEY} \
  --network mainnet \
  --commit-boost-url http://localhost:8080
```

## Support and Resources

### Documentation

- **ETHGas Documentation**: [docs.ethgas.com](https://docs.ethgas.com)
- **Consensus Client Docs**: 
  - [Lighthouse](https://lighthouse-book.sigmaprime.io/)
  - [Prysm](https://docs.prylabs.network/)
  - [Teku](https://docs.teku.consensys.net/)

### Community Support

- **Discord**: Join our validator community
- **GitHub**: Report issues and feature requests
- **Email**: Direct support for enterprise users

### Essential Links

- **ETHGas TestNet**: [testnet.ethgas.com](https://testnet.ethgas.com)
- **GitHub Repository**: [ethgas-preconf-commit-boost-module](https://github.com/ethgas-developer/ethgas-preconf-commit-boost-module)
- **Builder Scripts**: [ethgas-builder-scripts](https://github.com/ethgas-developer/ethgas-builder-scripts)
- **Preconf Builder**: [preconf-builder](https://github.com/ethgas-developer/preconf-builder)
- **ETHGas Contracts**: [ethgas-contracts-avs-for-audit](https://github.com/ethgas-developer/ethgas-contracts-avs-for-audit)

## Next Steps

1. **Complete Setup**: Follow the client-specific instructions above
2. **Test Integration**: Verify connection to ETHGas network
3. **Monitor Performance**: Set up monitoring and alerting
4. **Optimize Configuration**: Fine-tune based on performance metrics
5. **Join Community**: Connect with other validators for support

For additional assistance, contact our support team or join our community channels. 