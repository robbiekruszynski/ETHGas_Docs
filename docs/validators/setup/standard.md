---
sidebar_position: 1
---

# Standard Validator Setup

Set up a standard Ethereum validator on the ETHGas platform.

## Overview

Standard validator setup involves running a single validator client with ETHGas integration for MEV opportunities and enhanced rewards.

## Prerequisites

### Hardware Requirements

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| CPU | 4 cores | 8+ cores |
| RAM | 16GB | 32GB+ |
| Storage | 2TB SSD | 4TB+ NVMe SSD |
| Network | 100 Mbps | 1 Gbps+ |

### Software Requirements

- **Operating System**: Ubuntu 20.04+ or similar Linux distribution
- **Docker**: Latest stable version
- **Git**: For cloning repositories
- **Node.js**: 18+ for management scripts

## Installation Steps

### 1. Clone ETHGas Validator Repository

```bash
git clone https://github.com/ethgas-developer/ethgas-preconf-commit-boost-module
cd ethgas-preconf-commit-boost-module
```

### 2. Install Dependencies

```bash
# Install system dependencies
sudo apt update
sudo apt install -y docker.io docker-compose git curl

# Start and enable Docker
sudo systemctl start docker
sudo systemctl enable docker

# Add user to docker group
sudo usermod -aG docker $USER
```

### 3. Configure Environment

```bash
# Copy environment template
cp .env.example .env

# Edit configuration
nano .env
```

### Environment Configuration

```bash
# Network Configuration
NETWORK=mainnet
CHAIN_ID=1

# ETHGas API Configuration
ETHGAS_API_URL=https://api.ethgas.com
ETHGAS_WS_URL=wss://ws.ethgas.com

# Validator Configuration
VALIDATOR_COUNT=1
VALIDATOR_INDEX=0

# Client Configuration
EXECUTION_CLIENT=lighthouse
CONSENSUS_CLIENT=lighthouse

# MEV Configuration
MEV_BOOST_ENABLED=true
MEV_BOOST_RELAYS=https://0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c020fac0aa6978b2fd3cc4bf5a76cf2d4d9542a38f6c204@0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c020fac0aa6978b2fd3cc4bf5a76cf2d4d9542a38f6c204

# Logging
LOG_LEVEL=info
```

### 4. Generate Validator Keys

```bash
# Generate BLS key pair
./scripts/generate-keys.sh

# This will create:
# - validator_keys/
#   - keystore-*.json (encrypted private keys)
#   - deposit_data-*.json (deposit data)
#   - validator-*.json (validator configuration)
```

### 5. Configure Client Settings

#### Lighthouse Configuration

```yaml
# config.yaml
network: mainnet
data_dir: /var/lib/lighthouse
log_level: info

# Execution client settings
execution_client: http://localhost:8551

# Validator settings
validator:
  enable_doppelganger_protection: true
  slashing_protection: /var/lib/lighthouse/slashing_protection.sqlite
  
# MEV settings
mev_boost:
  enabled: true
  relays:
    - https://0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c020fac0aa6978b2fd3cc4bf5a76cf2d4d9542a38f6c204@0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c020fac0aa6978b2fd3cc4bf5a76cf2d4d9542a38f6c204

# ETHGas integration
ethgas:
  enabled: true
  api_url: https://api.ethgas.com
  ws_url: wss://ws.ethgas.com
  timeout_get_header_ms: 1950
```

#### Prysm Configuration

```yaml
# config.yaml
network: mainnet
data_dir: /var/lib/prysm
log_level: info

# Execution client settings
execution_client: http://localhost:8551

# Validator settings
validator:
  enable_doppelganger_protection: true
  slashing_protection: /var/lib/prysm/slashing_protection.sqlite
  
# MEV settings
mev_boost:
  enabled: true
  relays:
    - https://0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c020fac0aa6978b2fd3cc4bf5a76cf2d4d9542a38f6c204@0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c020fac0aa6978b2fd3cc4bf5a76cf2d4d9542a38f6c204

# ETHGas integration
ethgas:
  enabled: true
  api_url: https://api.ethgas.com
  ws_url: wss://ws.ethgas.com
```

#### Teku Configuration

```yaml
# config.yaml
network: mainnet
data-path: /var/lib/teku
log-level: info

# Execution client settings
ee-endpoint: http://localhost:8551

# Validator settings
validator:
  enable-doppelganger-protection: true
  slashing-protection-enabled: true
  
# MEV settings
builder:
  enabled: true
  relays:
    - https://0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c020fac0aa6978b2fd3cc4bf5a76cf2d4d9542a38f6c204@0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c020fac0aa6978b2fd3cc4bf5a76cf2d4d9542a38f6c204

# ETHGas integration
ethgas:
  enabled: true
  api-url: https://api.ethgas.com
  ws-url: wss://ws.ethgas.com
```

### 6. Start Validator Services

```bash
# Start all services
docker-compose up -d

# Check service status
docker-compose ps

# View logs
docker-compose logs -f validator
```

### 7. Verify Setup

```bash
# Check validator status
curl -X GET "https://api.ethgas.com/api/v1/user/validators" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"

# Check attestation performance
curl -X GET "https://api.ethgas.com/api/v1/validator/metrics" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

## Configuration Options

### Network Selection

| Network | Chain ID | Description |
|---------|----------|-------------|
| mainnet | 1 | Ethereum mainnet |
| testnet | 17000 | Holesky testnet |

### Client Selection

| Client | Pros | Cons |
|--------|------|------|
| Lighthouse | Fast sync, good performance | Newer, less battle-tested |
| Prysm | Most popular, good support | Resource intensive |
| Teku | Java-based, good performance | Less community support |

### MEV Configuration

```yaml
# Enable MEV-boost for enhanced rewards
mev_boost:
  enabled: true
  relays:
    - https://0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c020fac0aa6978b2fd3cc4bf5a76cf2d4d9542a38f6c204@0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c020fac0aa6978b2fd3cc4bf5a76cf2d4d9542a38f6c204
    - https://0xa15b52576bcbf1072f4a011b0f9854d4dd0f084fecd7c9a3b45f85c7e8d03b8b@0xa15b52576bcbf1072f4a011b0f9854d4dd0f084fecd7c9a3b45f85c7e8d03b8b
```

## Monitoring

### Health Checks

```bash
# Check validator health
./scripts/health-check.sh

# Check sync status
curl -X GET "https://api.ethgas.com/api/v1/validator/sync-status"

# Check attestation rate
curl -X GET "https://api.ethgas.com/api/v1/validator/attestation-rate"
```

### Log Monitoring

```bash
# View validator logs
docker-compose logs -f validator

# View execution client logs
docker-compose logs -f execution

# View consensus client logs
docker-compose logs -f consensus
```

## Troubleshooting

### Common Issues

#### Validator Not Attesting
1. Check sync status
2. Verify network connectivity
3. Check validator keys
4. Review client logs

#### Low Attestation Rate
1. Check network latency
2. Verify client configuration
3. Monitor system resources
4. Check for network issues

#### MEV Not Working
1. Verify MEV-boost configuration
2. Check relay connectivity
3. Verify builder registration
4. Review MEV logs

### Diagnostic Commands

```bash
# Check validator status
curl -X GET "https://api.ethgas.com/api/v1/validator/status"

# Check network health
curl -X GET "https://api.ethgas.com/api/v1/validator/network/health"

# Check performance metrics
curl -X GET "https://api.ethgas.com/api/v1/validator/metrics/detailed"
```

## Security Considerations

### Key Management
- Store keys securely
- Use hardware security modules (HSM) if possible
- Backup keys safely
- Never share private keys

### Network Security
- Use firewall rules
- Monitor network traffic
- Keep systems updated
- Use secure connections

### Monitoring
- Set up alerts for critical events
- Monitor system resources
- Track validator performance
- Log all activities

## Best Practices

1. **Test First** - Test on testnet before mainnet
2. **Monitor Continuously** - Set up 24/7 monitoring
3. **Backup Regularly** - Backup configuration and keys
4. **Update Securely** - Keep software updated
5. **Document Everything** - Keep detailed logs

## Related Documentation

- [Validator Registration](/docs/validators/registration/standard) - Register with ETHGas
- [Validator Monitoring](/docs/validators/monitoring) - Monitor performance
- [Validator Deposits](/docs/validators/deposits) - Manage deposits
- [ETHGas API](/docs/api/overview) - API documentation 