---
sidebar_position: 2
---

# Validator Setup Guide

This guide provides step-by-step instructions for setting up validators with ETHGas platform.

## Quick Start

```bash
git clone https://github.com/ethgas-developer/ethgas-preconf-commit-boost-module
cd ethgas-preconf-commit-boost-module
cp .env.example .env
# Edit .env with your configuration
docker compose up -d
```

## Prerequisites

Before setting up your validator, ensure you have:

- **Docker & Docker Compose** installed and running
- **Validator Keys** ready for registration
- **Network Access** to ETHGas endpoints
- **Environment Configuration** completed

## Setup Process

### 1. Repository Setup

**Primary Module:**
- **Repository**: [ethgas-preconf-commit-boost-module](https://github.com/ethgas-developer/ethgas-preconf-commit-boost-module)
- **Purpose**: Official validator integration module
- **Features**: Complete validator setup and management

**Related Resources:**
- **Builder Scripts**: [ethgas-builder-scripts](https://github.com/ethgas-developer/ethgas-builder-scripts)
- **Preconf Builder**: [preconf-builder](https://github.com/ethgas-developer/preconf-builder)
- **Contracts**: [ethgas-contracts-avs-for-audit](https://github.com/ethgas-developer/ethgas-contracts-avs-for-audit)

### 2. Environment Configuration

```bash
# Copy example environment file
cp .env.example .env

# Edit configuration
nano .env
```

**Key Configuration Variables:**
- `ETHGAS_API_URL`: API endpoint URL
- `ETHGAS_WS_URL`: WebSocket endpoint URL
- `VALIDATOR_KEYS`: Your validator keys
- `NETWORK`: MainNet or TestNet selection

### 3. Consensus Client Selection

Choose your preferred consensus client:

| Client | Description | Documentation |
|--------|-------------|---------------|
| **Lighthouse** | Rust-based client | [Lighthouse Docs](https://lighthouse-book.sigmaprime.io/) |
| **Prysm** | Go-based client | [Prysm Docs](https://docs.prylabs.network/) |
| **Teku** | Java-based client | [Teku Docs](https://docs.teku.consensys.net/) |

:::tip Recommendation
Choose a client based on your technical expertise and infrastructure requirements.
:::

### 4. Deployment

```bash
# Start the validator service
docker compose up -d

# Check service status
docker compose ps

# View logs
docker compose logs -f
```

## Monitoring & Management

### Service Status

Monitor your validator using the official API endpoints:

- **Health Check**: Verify service status
- **Performance Metrics**: Monitor validator performance
- **Error Logs**: Review and troubleshoot issues

### API Integration

Use the official API documentation for:
- Service monitoring endpoints
- Performance tracking
- Configuration management
- Error handling

:::info API Reference
See the API endpoints below for complete monitoring and management capabilities.
:::

## Troubleshooting

### Common Issues

1. **Service Won't Start**
   - Check Docker installation
   - Verify environment configuration
   - Review container logs

2. **Connection Issues**
   - Verify network connectivity
   - Check API endpoint URLs
   - Validate authentication credentials

3. **Performance Problems**
   - Monitor system resources
   - Check consensus client logs
   - Review validator configuration

### Getting Help

- **Documentation**: This documentation
- **GitHub Issues**: [Repository Issues](https://github.com/ethgas-developer/ethgas-preconf-commit-boost-module/issues)
- **Community**: [ETHGas Community](/docs/community)

## Resources

### Essential Links

| Resource | URL | Description |
|----------|-----|-------------|
| **ETHGas Platform** | https://www.ethgas.com/ | Main platform website |
| **TestNet** | https://testnet.ethgas.com/ | Test environment |
| **Technical Integration** | https://docs.ethgas.com/technical-integration | Technical documentation |
| **API Reference** | This documentation | Complete API documentation |

### Next Steps

1. **Complete Setup**: Follow the quick start guide
2. **Configure Monitoring**: Set up monitoring and alerts
3. **Test Integration**: Verify all components work correctly
4. **Go Live**: Deploy to production environment

:::tip Best Practice
Start with the TestNet environment to validate your setup before moving to production.
::: 