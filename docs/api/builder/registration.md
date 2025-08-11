---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Setup Guide

This guide provides step-by-step instructions for setting up a builder with ETHGas using the official builder scripts repository.

## Repository Overview

The ETHGas Builder Scripts repository contains everything needed to onboard your BLS public keys to the ETHGas Exchange. This repository is essential for builders who want to participate in the ETHGas ecosystem.

### Repository Structure

The ethgas-builder-scripts repository includes:

- **Docker Configuration**: Complete containerized setup
- **Environment Templates**: Mainnet and testnet configurations
- **Build Scripts**: Automated build and deployment
- **Registration Logic**: Builder registration and management
- **Monitoring**: Health checks and logging

### Related Repositories

- **Preconf Builder**: <a href="https://github.com/ethgas-developer/preconf-builder" target="_blank" rel="noopener noreferrer">Modified rbuilder for ETHGas integration</a>
- **ETHGas Contracts**: Smart contract implementations
- **Commit Boost Module**: Validator integration module

## Prerequisites

Before setting up your builder, ensure you have:

- **Docker**: For containerized deployment
- **BLS Key Pair**: Your BLS public and secret keys
- **EOA Signing Key**: Your registered or to-be-registered account on ETHGas Exchange
- **Entity Information**: Your company/entity name for registration
- **Network Access**: Ability to connect to ETHGas APIs

## Quick Start

Choose your network and follow all steps for that network:

<Tabs>
<TabItem value="mainnet" label="MainNet" default>

### 1. Clone the Repository

```bash
git clone https://github.com/ethgas-developer/ethgas-builder-scripts
cd ethgas-builder-scripts
```

### 2. Configure Environment Variables

```bash
cp .env.example.mainnet .env
```

The `.env.example.mainnet` file contains production settings:

```bash
# Mainnet API endpoint
EXCHANGE_API_BASE="https://mainnet.app.ethgas.com"
CHAIN=Mainnet
BLS_PUBKEY=0x...
BLS_SECRET_KEY=0x...
EOA_SIGNING_KEY=0x...
ENTITY_NAME="TestBuilder"
ENABLE_REGISTRATION=true
```

### 3. Build and Deploy

```bash
# Build the Docker image
./scripts/build.sh

# Start the container
docker-compose -f docker-compose.yml up
```

</TabItem>
<TabItem value="testnet" label="TestNet">

### 1. Clone the Repository

```bash
git clone https://github.com/ethgas-developer/ethgas-builder-scripts
cd ethgas-builder-scripts
```

### 2. Environment Configuration

```bash
cp .env.example.hoodi .env
```

The `.env.example.hoodi` file contains testnet settings:

```bash
# Testnet API endpoint
EXCHANGE_API_BASE="https://hoodi.app.ethgas.com"
CHAIN=Hoodi
BLS_PUBKEY=0x...
BLS_SECRET_KEY=0x...
EOA_SIGNING_KEY=0x...
ENTITY_NAME="TestBuilder"
ENABLE_REGISTRATION=true
```


### 3. Build and Deploy

```bash
# Build the Docker image
./scripts/build.sh

# Start the container
docker-compose -f docker-compose.yml up
```

</TabItem>
</Tabs>

<!-- ## Environment Configuration

### Mainnet Configuration

The `.env.example.mainnet` file contains production settings:

```bash
# Mainnet API endpoint
API_ENDPOINT=https://api.ethgas.com

# Mainnet chain ID
CHAIN_ID=1

# Production logging
LOG_LEVEL=info

# Mainnet contract addresses
REGISTRATION_CONTRACT=0x...
BUILDER_REGISTRY_CONTRACT=0x...
```

### Testnet Configuration

The `.env.example.hoodi` file contains testnet settings:

```bash
# Testnet API endpoint
API_ENDPOINT=https://testnet-api.ethgas.com

# Testnet chain ID
CHAIN_ID=17000

# Development logging
LOG_LEVEL=debug

# Testnet contract addresses
REGISTRATION_CONTRACT=0x...
BUILDER_REGISTRY_CONTRACT=0x...
``` -->

## Key Management

### BLS Key Pair

Your BLS key pair is essential for builder identification and block signing:

- **BLS_PUBKEY**: Your BLS public key (required for registration)
- **BLS_SECRET_KEY**: Your BLS secret key (keep secure, never commit to version control)

### EOA Signing Key

Your EOA signing key is used for authentication and fee collection:

- Must be a registered account on ETHGas Exchange
- Used for signing registration transactions
- Required for fee distribution

### Security Best Practices

- **Never commit private keys**: Keep all private keys secure
- **Use environment variables**: Store keys in `.env` files (not in version control)
- **Regular key rotation**: Consider rotating keys periodically
- **Backup keys securely**: Store backups in secure locations

<!-- ## Docker Deployment

### Building the Image

```bash
# Build the builder registration image
./scripts/build.sh
```

### Running the Container

```bash
# Start the container in detached mode
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

### Container Configuration

The `docker-compose.yml` file configures:

- **Image**: Built from the Dockerfile
- **Environment**: Loads variables from `.env` file
- **Networking**: Connects to ETHGas APIs
- **Logging**: Configurable log levels -->

## Registration Process

### Automatic Registration

When `ENABLE_REGISTRATION=true`:

1. **Validate keys**: Verify BLS and EOA keys are valid
2. **Check registration**: Verify if already registered
3. **Submit registration**: Register with ETHGas Exchange
4. **Confirm status**: Verify registration was successful

### Manual Registration

For manual registration, use the API directly:

```bash
# Register builder via API
curl -X POST "https://api.ethgas.com/api/v1/builder/register" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "blsPublicKey": "0x...",
    "feeRecipient": "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6",
    "builderUrl": "https://builder.example.com"
  }'
```

## Integration with Modified rbuilder

### Installation

```bash
# Clone the modified rbuilder
git clone https://github.com/ethgas-developer/preconf-builder
cd preconf-builder

# Build the project
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

[commitments]
# Commitment validation settings
validate_commitments = true
require_all_preconfs = true
bundle_positioning = true
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

### Example API Calls

```bash
# Get preconf transactions for slot
curl -X GET "https://api.ethgas.com/v1/builder/preconf-transactions/12345678" \
  -H "Authorization: Bearer YOUR_API_KEY"

# Submit built block
curl -X POST "https://api.ethgas.com/v1/builder/submit-block" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "slot": 12345678,
    "block_hash": "0x...",
    "parent_hash": "0x...",
    "transactions": ["0x...", "0x..."],
    "commitments_satisfied": ["commitment_123"]
  }'
```

## Compliance Requirements

### Block Validation

All built blocks must pass validation checks:

- **Preconf inclusion**: All preconf transactions for the slot must be included
- **Bundle positioning**: Top and bottom bundles must be in correct positions
- **Gas limit**: Block must not exceed gas limit
- **Commitment compliance**: Block must satisfy all trader commitments

<!-- ### Performance Requirements

- **Block building time**: Must complete within slot timeframe
- **Relay submission**: Must submit blocks to relay before deadline
- **Error handling**: Must handle failures gracefully
- **Monitoring**: Must provide status and health information  -->