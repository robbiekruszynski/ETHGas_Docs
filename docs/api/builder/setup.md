---
sidebar_position: 4
---

# Builder Setup Guide

This guide provides step-by-step instructions for setting up a builder with ETHGas using the official builder scripts repository.

## Repository Overview

The [ETHGas Builder Scripts](https://github.com/ethgas-developer/ethgas-builder-scripts) repository contains everything needed to onboard your BLS public keys to the ETHGas Exchange. This repository is essential for builders who want to participate in the ETHGas ecosystem.

## Prerequisites

Before setting up your builder, ensure you have:

- **Docker**: For containerized deployment
- **BLS Key Pair**: Your BLS public and secret keys
- **EOA Signing Key**: Your registered or to-be-registered account on ETHGas Exchange
- **Entity Information**: Your company/entity name for registration

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/ethgas-developer/ethgas-builder-scripts
cd ethgas-builder-scripts
```

### 2. Environment Configuration

Choose the appropriate environment file and configure it:

#### For Mainnet
```bash
cp .env.example.mainnet .env
```

#### For Testnet (Hoodi)
```bash
cp .env.example.hoodi .env
```

### 3. Configure Environment Variables

Edit the `.env` file with your specific values:

```bash
# Required: BLS Key Pair (must be from the same key pair)
BLS_PUBKEY=your_bls_public_key_here
BLS_SECRET_KEY=your_bls_secret_key_here

# Required: Your registered account on ETHGas Exchange
EOA_SIGNING_KEY=your_eoa_signing_key_here

# Required: Your company/entity name
ENTITY_NAME=your_company_name

# Required: Set to true to register, false to deregister
ENABLE_REGISTRATION=true

# Optional: Additional configuration
LOG_LEVEL=info
API_ENDPOINT=https://api.ethgas.com
```

### 4. Build and Deploy

```bash
# Build the Docker image
./scripts/build.sh

# Start the container
docker-compose -f docker-compose.yml up
```

## Environment Configuration

### Mainnet Configuration

The `.env.example.mainnet` file contains production settings:

```bash
# Mainnet API endpoint
API_ENDPOINT=https://api.ethgas.com

# Mainnet chain ID
CHAIN_ID=1

# Production logging
LOG_LEVEL=info
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
```

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

## Docker Deployment

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
- **Logging**: Configurable log levels

## Registration Process

### Automatic Registration

When `ENABLE_REGISTRATION=true`:

1. **Validate keys**: Verify BLS and EOA keys are valid
2. **Check registration**: Verify if already registered
3. **Submit registration**: Send registration transaction
4. **Confirm registration**: Wait for transaction confirmation
5. **Verify status**: Check registration status on-chain

### Deregistration

When `ENABLE_REGISTRATION=false`:

1. **Check registration**: Verify current registration status
2. **Submit deregistration**: Send deregistration transaction
3. **Confirm deregistration**: Wait for transaction confirmation
4. **Verify removal**: Check deregistration status on-chain

## Monitoring and Logs

### Log Levels

- **debug**: Detailed debugging information
- **info**: General information and status updates
- **warn**: Warning messages
- **error**: Error messages and failures

### Monitoring

- **Registration status**: Check if builder is registered
- **Transaction status**: Monitor registration/deregistration transactions
- **API connectivity**: Verify connection to ETHGas APIs
- **Error handling**: Monitor for any registration failures

## Troubleshooting

### Common Issues

#### Invalid BLS Keys
```
Error: Invalid BLS key pair
Solution: Ensure BLS_PUBKEY and BLS_SECRET_KEY are from the same key pair
```

#### Invalid EOA Key
```
Error: Invalid EOA signing key
Solution: Verify the EOA key is valid and registered on ETHGas Exchange
```

#### Network Connectivity
```
Error: Cannot connect to ETHGas API
Solution: Check network connectivity and API endpoint configuration
```

#### Docker Issues
```
Error: Docker build failed
Solution: Ensure Docker is installed and running, check Dockerfile syntax
```

### Debug Mode

Enable debug logging for detailed troubleshooting:

```bash
LOG_LEVEL=debug
```

## Security Considerations

### Key Security

- **Secure storage**: Store private keys in secure environments
- **Access control**: Limit access to builder keys
- **Regular audits**: Periodically review key usage
- **Incident response**: Have a plan for key compromise

### Network Security

- **Firewall configuration**: Restrict network access
- **VPN usage**: Use secure connections when possible
- **Monitoring**: Monitor for suspicious activity
- **Updates**: Keep systems updated

## Integration with Builder Software

### Modified rbuilder

The ETHGas-modified rbuilder includes:

- **Preconf transaction streaming**: Receive latest preconf transactions
- **Compliance checking**: Ensure blocks meet commitment requirements
- **Position management**: Handle bundle positioning correctly
- **Mempool integration**: Fill remaining blockspace appropriately

### Relay Integration

Submit blocks through ETHGas Relay:

- **Block submission**: Send built blocks to relay
- **Compliance verification**: Ensure blocks meet requirements
- **Fee distribution**: Handle priority fee distribution
- **Performance monitoring**: Track block building performance

## Support and Resources

### Documentation

- [Builder Overview](/docs/api/builder/overview) - Understanding builders and sequencers
- [Builder Registration](/docs/api/builder/registration) - Detailed registration process
- [Block Building API](/docs/api/builder/building) - API endpoints for block building

### Community Support

- **ETHGas Discord**: Join for community support and updates
- **GitHub Issues**: Report issues in the [builder scripts repository](https://github.com/ethgas-developer/ethgas-builder-scripts)
- **ETHGas X/Twitter**: [@ETHGas](https://twitter.com/ETHGas) for announcements

### Essential Links

- **Builder Scripts**: [https://github.com/ethgas-developer/ethgas-builder-scripts](https://github.com/ethgas-developer/ethgas-builder-scripts)
- **Modified rbuilder**: [https://github.com/ethgas-developer/preconf-builder](https://github.com/ethgas-developer/preconf-builder)
- **ETHGas Documentation**: [https://docs.ethgas.com](https://docs.ethgas.com)

## Next Steps

After completing the setup:

1. **Test registration**: Verify builder registration on testnet
2. **Monitor performance**: Track block building performance
3. **Optimize configuration**: Fine-tune settings for your environment
4. **Join community**: Participate in ETHGas builder community

For detailed API reference, see the [Block Building API](/docs/api/builder/building) documentation. 