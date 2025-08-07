---
sidebar_position: 2
---

# Validator Setup Guide

This guide provides step-by-step instructions for setting up validators with ETHGas using the [ETHGas Preconf Commit Boost Module](https://github.com/ethgas-developer/ethgas-preconf-commit-boost-module).

## Prerequisites

Before setting up your validators, ensure you have:

- **Docker and Docker Compose**: For containerized deployment
- **Validator Keys**: Your BLS public and secret keys
- **EOA Signing Key**: A registered account on ETHGas Exchange
- **Entity Information**: Your company/entity name for registration
- **Collateral**: ETH for deposit (minimum 0.01 ETH per slot)

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/ethgas-developer/ethgas-preconf-commit-boost-module
cd ethgas-preconf-commit-boost-module
```

### 2. Environment Configuration

Copy the example environment file and configure it:

```bash
cp .cb.example.env .cb.env
```

Edit `.cb.env` with your specific values:

```bash
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

### 3. Configure Commit Boost Module

Edit `config.toml` to configure the ETHGas Commit module:

```toml
[[modules]]
id = "ETHGAS_COMMIT"
entity_name = "your_company_name"
registration_mode = "standard"  # standard, ssv, or skipped
enable_registration = true
enable_pricer = true
enable_builder = false
collateral_per_slot = 0.1
overall_wait_interval_in_second = 3600
api_wait_interval_in_ms = 1000

# Authentication (choose one method)
is_jwt_provided = false
eoa_signing_key = "your_eoa_signing_key_here"

# Or use JWT tokens
# is_jwt_provided = true
# access_jwt = "your_access_jwt_here"
# refresh_jwt = "your_refresh_jwt_here"
```

### 4. Configure Validator Keys

#### For Standard Validators

Set up your validator keys in `docker-compose.yml`:

```yaml
services:
  cb_signer:
    # ... other config
    environment:
      - CB_SIGNER_LOADER_FILE=/keys.json
    volumes:
      - ./validator-keys:/keys.json:ro
```

Create `validator-keys` file with your BLS keys:

```json
[
  {
    "pubkey": "your_bls_public_key_1",
    "secret": "your_bls_secret_key_1"
  },
  {
    "pubkey": "your_bls_public_key_2", 
    "secret": "your_bls_secret_key_2"
  }
]
```

#### For SSV Validators

Configure SSV-specific settings in `config.toml`:

```toml
[[modules]]
id = "ETHGAS_COMMIT"
registration_mode = "ssv"
ssv_node_operator_owner_mode = "key"  # key, keystore, or ledger
ssv_node_operator_owner_signing_keys = [
  "your_owner_signing_key_1",
  "your_owner_signing_key_2"
]
ssv_node_operator_owner_validator_pubkeys = [
  "your_validator_pubkey_1",
  "your_validator_pubkey_2"
]
```

### 5. Start the Signer Module

```bash
docker-compose -f docker-compose.yml up cb_signer
```

You should see logs like:
```
INFO Starting signing service version="0.8.0" 
loaded_consensus=100 loaded_proxies=0
```

Where `loaded_consensus` indicates the number of loaded validator keys.

### 6. Start the ETHGas Commit Module

```bash
docker-compose -f docker-compose.yml up cb_ethgas_commit
```

Successful registration will show:
```
INFO successful registration, you can now sell preconfs on ETHGas!
```

### 7. Start the PBS Module

```bash
docker-compose -f docker-compose.yml up cb_pbs
```

Update your beacon node configuration to point to the PBS module:

```yaml
# Update your beacon node config
builder_endpoint: http://cb_pbs:18550
```

### 8. Deposit Collateral

Deposit ETH to secure your preconfirmation commitments:

#### Through Docker

Configure the deposit module in `config.toml`:

```toml
[[modules]]
id = "ETHGAS_DEPOSIT"
collateral_to_be_deposited = 1.0  # ETH amount
eoa_signing_key = "your_eoa_signing_key_here"
```

Run the deposit module:

```bash
docker-compose -f docker-compose-example-deposit.yml up
```

#### Through Direct Contract Interaction

**Mainnet Contract**: `0x41c95AB9DBAC21B3992963Adf0e90F6478364b88`
**Testnet Contract**: `0xe8bfB84b14c383b94365a895fc8bfA36dE236dc8`

Call the deposit function:

```solidity
struct TokenTransfer {
    address token;
    uint256 amount;
}

function deposit(TokenTransfer[] memory tokenTransfers) external payable;
```

## Configuration Options

### Registration Modes

#### Standard Mode
For typical validators:
```toml
registration_mode = "standard"
```

#### SSV Mode
For SSV validators:
```toml
registration_mode = "ssv"
ssv_node_operator_owner_mode = "key"  # or "keystore", "ledger"
```

#### Standard with PBS Multiplexer
For validators using PBS multiplexer:
```toml
registration_mode = "standard-mux"
[[mux]]
id = "your_mux_id"
[[mux.relays]]
id = "ethgas"
```

### Authentication Methods

#### EOA Signing Key
```toml
is_jwt_provided = false
eoa_signing_key = "your_private_key"
```

#### JWT Tokens
```toml
is_jwt_provided = true
access_jwt = "your_access_token"
refresh_jwt = "your_refresh_token"
```

### Builder Delegation

Enable builder delegation:
```toml
enable_builder = true
builder_pubkey = "your_builder_public_key"
```

### Pricing Configuration

Enable default pricer:
```toml
enable_pricer = true
```

## Environment Variables

Set these in your `.cb.env` file:

```bash
# Required
EOA_SIGNING_KEY=your_eoa_signing_key
ENTITY_NAME=your_company_name
ENABLE_REGISTRATION=true

# Optional
LOG_LEVEL=info
API_ENDPOINT=https://api.ethgas.com
CB_SIGNER_URL=http://cb_signer:20000
CB_MODULE_ID=ETHGAS_COMMIT
CB_CONFIG=./config.toml

# For SSV validators
SSV_NODE_OPERATOR_OWNER_SIGNING_KEYS=key1,key2
SSV_NODE_OPERATOR_OWNER_KEYSTORE_PATHS=path1,path2
SSV_NODE_OPERATOR_OWNER_PASSWORD_PATHS=pass1,pass2
```

## Troubleshooting

### Common Issues

#### Connection Refused Error
```
Error: ConnectionRefused when connecting to cb_signer:20000
```
**Solution**: Wait 20 minutes for retry or check signer service status.

#### Invalid BLS Keys
```
Error: Invalid BLS key pair
```
**Solution**: Ensure BLS public and secret keys are from the same pair.

#### Registration Failed
```
Error: Registration failed
```
**Solution**: Check EOA signing key and ensure account is registered on ETHGas Exchange.

### Debug Mode

Enable debug logging:
```bash
LOG_LEVEL=debug
```

Debug locally without Docker:
```bash
export CB_MODULE_ID=ETHGAS_COMMIT
export CB_SIGNER_JWT=your_jwt
export CB_SIGNER_URL="http://localhost:20000"
export CB_CONFIG="./config.toml"
cargo run --bin ethgas_commit
```

## Security Considerations

### Key Management
- **Secure storage**: Store private keys in secure environments
- **Access control**: Limit access to validator keys
- **Regular audits**: Periodically review key usage
- **Backup strategy**: Secure backups of all keys

### Network Security
- **Firewall configuration**: Restrict network access
- **VPN usage**: Use secure connections when possible
- **Monitoring**: Monitor for suspicious activity
- **Updates**: Keep systems updated

## Support and Resources

### Documentation
- [ETHGas Documentation](https://docs.ethgas.com) - Complete platform documentation
- [Validator Overview](/docs/validators/overview) - Understanding validator roles
- [Registration Guide](/docs/validators/registration) - Detailed registration process
- [Deposit Management](/docs/validators/deposits) - Managing collateral

### Community Support
- **ETHGas Discord**: Join for community support and updates
- **GitHub Issues**: Report issues in the [commit boost module repository](https://github.com/ethgas-developer/ethgas-preconf-commit-boost-module)
- **ETHGas X/Twitter**: [@ETHGas](https://twitter.com/ETHGas) for announcements

### Essential Links
- **Commit Boost Module**: [https://github.com/ethgas-developer/ethgas-preconf-commit-boost-module](https://github.com/ethgas-developer/ethgas-preconf-commit-boost-module)
- **ETHGas Documentation**: [https://docs.ethgas.com](https://docs.ethgas.com)
- **TestNet App**: [https://testnet.ethgas.com](https://testnet.ethgas.com)

## Next Steps

After completing the setup:

1. **Test registration**: Verify validator registration on testnet
2. **Monitor performance**: Track preconfirmation earnings
3. **Optimize configuration**: Fine-tune settings for your environment
4. **Join community**: Participate in ETHGas validator community

For detailed API reference, see the [Validator API](/docs/api/validators) documentation. 