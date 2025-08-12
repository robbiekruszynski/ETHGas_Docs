---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Setup Guide

This guide provides step-by-step instructions for setting up a builder with ETHGas using the official builder scripts repository.

:::warning
The JWT access token is valid for 1 hour, after each hour an access token refresh is required. A private REST request needs to include the JWT access token in the request's HEADER, format: Authorization: 'Bearer accessToken'. A private session is valid for 7 days, after 7 days a re-login is required. A private websocket session needs to include the access token in the session header, format: 'Bearer accessToken'
:::

 ## Repository Overview
The [ETHGas Builder Scripts](https://github.com/ethgas-developer/ethgas-builder-scripts) repository contains everything needed to onboard your BLS public keys to the ETHGas Exchange. This repository is essential for builders who want to participate in the ETHGas ecosystem.

<!-- ### Repository Structure

The ethgas-builder-scripts repository includes:

- **Docker Configuration**: Complete containerized setup
- **Environment Templates**: Mainnet and testnet configurations
- **Build Scripts**: Automated build and deployment
- **Registration Logic**: Builder registration and management
- **Monitoring**: Health checks and logging -->

### Related Repositories

- **Preconf Builder**: <a href="https://github.com/ethgas-developer/preconf-builder" target="_blank" rel="noopener noreferrer">Modified rbuilder for ETHGas integration</a>
<!-- - **Commit Boost Module**: <a href="https://github.com/ethgas-developer/ethgas-preconf-commit-boost-module" target="_blank" rel="noopener noreferrer">ETHGas preconf commit-boost module</a> -->

## Prerequisites

Before setting up your builder, ensure you have:

- [x] **Docker**: For containerized deployment
- [x] **BLS Key Pair**: Your BLS public and secret keys
- [x] **EOA Signing Key**: Your registered or to-be-registered account on ETHGas Exchange
- [x] **Entity Information**: Your company/entity name for registration
- [x] **Network Access**: Ability to connect to ETHGas APIs

## Quick Start

Choose your network and follow all steps for that network:

<Tabs>
<TabItem value="mainnet" label="MainNet" default>

### 1. Clone the Repository

```bash
git clone https://github.com/ethgas-developer/ethgas-builder-scripts
cd ethgas-builder-scripts
```

### 2. Configure Environment 

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

### 2. Configure Environment

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

• **BLS_PUBKEY**: Your BLS public key (required for registration)
• **BLS_SECRET_KEY**: Your BLS secret key (keep secure, never commit to version control)

### EOA Signing Key

Your EOA signing key is used for authentication and fee collection:

• Must be a registered account or a to-be-registered account on ETHGas Exchange
• Used for signing registration transactions
• Required for fee distribution

### Security Best Practices

• **Never commit private keys**: Keep all private keys secure
• **Use environment variables**: Store keys in `.env` files (not in version control)
• **Regular key rotation**: Consider rotating keys periodically
• **Backup keys securely**: Store backups in secure locations

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

- [x] **Validate keys**: Verify BLS and EOA keys are valid
- [x] **Check registration**: Verify if already registered
- [x] **Submit registration**: Register with ETHGas Exchange
- [x] **Confirm status**: Verify registration was successful

## Manual Registration

<details>
<summary style={{listStyle: 'none'}}>Manual registration process for builder public keys</summary>

#### Code Sample

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X POST "https://mainnet.app.ethgas.com/api/v1/builder/register" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <your-auth-token>" \
  -d '{
    "publicKeys": "0x1234567890abcdef1234567890abcdef12345678,0xabcdef1234567890abcdef1234567890abcdef12345678",
    "signatures": "0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890,0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890"
  }'
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/builder/register"
payload = {
    "publicKeys": "0x1234567890abcdef1234567890abcdef12345678,0xabcdef1234567890abcdef1234567890abcdef12345678",
    "signatures": "0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890,0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890"
}
headers = {
    "Authorization": "Bearer <your-auth-token>",
    "Content-Type": "application/json"
}

response = requests.post(url, params=payload, headers=headers)
print(response.text)
```

</TabItem>
</Tabs>

**Request Parameters**

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| publicKeys | Yes | string | Comma separated list of builder bls public key in hex |
| signatures | Yes | string | Comma separated list of bls signatures in hex |

**Response Example**

```json
{
    "success": true,
    "data": {
        "results": [
            {
                "publicKey": "0xa25addc4fc16f72ca667177d7a5533d4287b3574f0127ffc227095e90b0b1fd0dd48c421e04e613d2298fe4dac83a2a5",
                "result": {
                    "result": 0,
                    "description": "Success"
                }
            },
            {
                "publicKey": "0xaea551245bd0512de5222834db5f3bc9cba1a04a2e8f5de0d4fea843c9fee1af31bb9373ba6b9da08a0820f695c6ab6e",
                "result": {
                    "result": 0,
                    "description": "Success"
                }
            }
        ]
    }
}
```

:::note
Note: Please refer to [look up table](/docs/reference/lookup-tables) as needed
:::

</details>

<!-- ## Monitoring and Logs

### Container Logs

```bash
# View real-time logs
docker-compose logs -f

# View specific service logs
docker-compose logs builder-registration

# View logs with timestamps
docker-compose logs -f --timestamps
```

### Health Checks

```bash
# Check container status
docker-compose ps

# Check builder registration status
curl -X GET "https://api.ethgas.com/v1/builder/status" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## Troubleshooting

### Common Issues

1. **Registration Failed**
   - Verify BLS key pair is valid
   - Check EOA signing key permissions
   - Ensure account is registered on ETHGas Exchange

2. **Container Won't Start**
   - Check environment variables are set correctly
   - Verify Docker and Docker Compose are installed
   - Check network connectivity to ETHGas APIs

3. **API Authentication Errors**
   - Verify API key is correct
   - Check token expiration
   - Ensure proper Authorization header format

### Debug Mode

Enable debug logging for troubleshooting:

```bash
# Set debug logging
LOG_LEVEL=debug

# Restart container
docker-compose restart
```

## Security Considerations

### Key Management

- **Secure storage**: Store private keys in hardware security modules (HSM) when possible
- **Access control**: Limit access to builder keys
- **Regular rotation**: Consider rotating keys periodically
- **Backup strategy**: Implement secure backup procedures

### Network Security

- **Firewall configuration**: Restrict access to builder ports
- **VPN usage**: Use VPN for remote access
- **Regular updates**: Keep all software updated
- **Security audits**: Regular security assessments -->

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
log_json = false
log_level = "info,rbuilder=debug"
#log_file_path = "<project path>/preconf-builder/logs/rbuilder.log"
redacted_telemetry_server_port = 6061
redacted_telemetry_server_ip = "0.0.0.0"
full_telemetry_server_port = 6060
full_telemetry_server_ip = "0.0.0.0"

chain = ""
reth_datadir = ""

coinbase_secret_key = "env:COINBASE_SECRET_KEY"
relay_secret_key = "env:RELAY_SECRET_KEY"
optimistic_relay_secret_key = "env:OPTIMISTIC_RELAY_SECRET_KEY"


# cl_node_url can be a single value, array of values, or passed by an environment variables with values separated with a comma
# cl_node_url = "http://localhost:3500"
cl_node_url = ["env:CL_NODE_URL"]
jsonrpc_server_port = 8645
jsonrpc_server_ip = "0.0.0.0"
el_node_ipc_path = "/tmp/reth.ipc"
extra_data = "ETHGas www.ethgas.com"

#blocklist_file_path = "./blocklist.json"

ignore_cancellable_orders = false

# watchdog_timeout_sec = 600
# simulation_threads = 1

# genesis_fork_version = "0x00112233"

sbundle_mergeabe_signers = []
live_builders = ["preconf-ordering"]

enabled_relays = ["custom"]


# EthGas API domain
preconf_api_url = "https://"
# EthGas WebSocket domain
preconf_ws_url = "wss://"
fallback_fee_recipient = ""

[[relays]]
name = "custom"
url = ""
priority = 0
use_ssz_for_submit = false
use_gzip_for_submit = false

[[builders]]
name = "preconf-ordering"
algo = "ordering-builder"
discard_txs = false
coinbase_payment = true
sorting = "preconf"
failed_order_retries = 1
drop_failed_orders = true
build_duration_deadline_ms = 1500

#[[builders]]
#name = "mgp-ordering"
#algo = "ordering-builder"
#discard_txs = true
#sorting = "mev-gas-price"
#failed_order_retries = 1
#drop_failed_orders = true
#
#[[builders]]
#name = "mp-ordering"
#algo = "ordering-builder"
#discard_txs = true
#sorting = "max-profit"
#failed_order_retries = 1
#drop_failed_orders = true
#coinbase_payment = false
```
<!-- 
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
``` -->

## Compliance Requirements

### Block Validation

All built blocks must pass validation checks:

- [x] **Preconf inclusion**: All preconf transactions with <b>canRevert equal to false</b> must be included
- [x] **Bundle positioning**: Top and bottom bundles must be in correct positions
- [x] **Empty Space Requirement**: The minimum gas unit of a block needs to be left as empty
- [x] **Gas limit**: Block must not exceed gas limit
- [x] **Commitment compliance**: Block must satisfy all trader commitments

## Market Lists

The Market Lists API provides endpoints for retrieving market information and data.

### GET /api/v1/p/wholeblock/markets

<details>
<summary style={{listStyle: 'none'}}>Retrieve whole block markets</summary>

#### Code Example

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X GET /api/v1/p/wholeblock/markets
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/p/wholeblock/markets

headers = {}

response = requests.get(url, headers=headers)

print(response.text)
```

</TabItem>
</Tabs>

<!-- **Request Parameters**

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| N/A | N/A | N/A | No parameters required | -->

**Response Example**

```json
{
    "success": true,
    "data": {
        "markets": [
            {
                "marketId": 2000000295209,
                "slot": 295209,
                "instrumentId": "ETH-WB-295209",
                "name": "ETH Whole Block Slot #295209",
                "priceStep": "0.00000000001",
                "minPrice": "0.00000000001",
                "maxPrice": "0.00001",
                "availablePreconf": 17257755,
                "direction": true,
                "price": "0.00000000588",
                "midPrice": "0.00000000564",
                "status": 1,
                "maturityTime": 1751947307000,
                "blockTime": 1751947311000,
                "finalityTime": 1751948079000,
                "updateDate": 1751947297000
            },
            {
                "marketId": 2000000295211,
                "slot": 295211,
                "instrumentId": "ETH-WB-295211",
                "name": "ETH Whole Block Slot #295211",
                "priceStep": "0.00000000001",
                "minPrice": "0.00000000001",
                "maxPrice": "0.00001",
                "availablePreconf": 16587826,
                "direction": true,
                "price": "0.00000000581",
                "status": 1,
                "maturityTime": 1751947331000,
                "blockTime": 1751947335000,
                "finalityTime": 1751948103000,
                "updateDate": 1751947297000
            }
        ]
    }
}
```

**Response Body**

| Name | Type | Description |
|------|------|-------------|
| markets | object[] | List of Whole Block Market objects |
| └ marketId | integer | Whole block market ID |
| └ slot | integer | Slot number of the block |
| └ instrumentId | string | Whole block market instrument ID<br/><br/>Use endpoint to get a list of all available wholeblock markets' instrument IDs |
| └ name | string | Whole block market name<br/><br/>In format: "ETH-WB-xxxxxx" |
| └ priceStep | string | Minimum increment between valid price levels |
| └ minPrice | string | Minimum price |
| └ maxPrice | string | Maximum price |
| └ availablePreconf | integer | Available preconf quantity for trading |
| └ direction | boolean | The last trading direction (true = buy, false = sell) |
| └ price | string | Latest traded market price for this market |
| └ status | integer | Market status - see the Market Status Codes section for more information |
| └ maturityTime | integer | Datetime (in UNIX time) when the market will be closed |
| └ trxSubmitTime | integer | Datetime (in UNIX time) when the market will be closed for submitting transactions |
| └ blockTime | integer | Datetime (in UNIX time) when the block starts |
| └ finalityTime | integer | Datetime (in UNIX time) when the block is being finalized |
| └ updateDate | integer | Datetime (in UNIX time) when the market orderbook was last updated |

</details>

### GET /api/v1/p/inclusion-preconf/markets

<details>
<summary style={{listStyle: 'none'}}>Retrieve active preconf markets</summary>


#### Code Example

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -x GET /api/v1/p/inclusion-preconf/markets
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/p/inclusion-preconf/markets

headers = {}

response = requests.get(url, headers=headers)

print(response.text)
```

</TabItem>
</Tabs>

<!-- **Request Parameters**

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| N/A | N/A | N/A | No parameters required | -->

**Response Example**

```json
{
    "success": true,
    "data": {
        "markets": [
           {
                "marketId": 1000000295045,
                "slot": 295045,
                "instrumentId": "ETH-PC-295045",
                "name": "Eth Preconf Inclusion Slot #295045",
                "quantityStep": "1",
                "minQuantity": "1",
                "maxQuantity": "35850000",
                "priceStep": "0.00000000001",
                "minPrice": "0.00000000001",
                "maxPrice": "0.00001",
                "bestBid": "0.00000000015",
                "totalPreconf": 35850000,
                "availablePreconf": 19678280,
                "direction": true,
                "price": "0.00000000002",
                "midPrice": "0.00000000015",
                "status": 1,
                "maturityTime": 1751945339000,
                "trxSubmitTime": 1751945341000,
                "blockTime": 1751945343000,
                "finalityTime": 1751946111000,
                "totalGas": 16171720,
                "validatorType": 0,
                "updateDate": 1751945326000
            },
            {
                "marketId": 1000002880222,
                "slot": 2880222,
                "instrumentId": "ETH-PC-2880222",
                "name": "Eth Preconf Inclusion Slot #2880222",
                "quantityStep": "1",
                "minQuantity": "1",
                "maxQuantity": "30000000",
                "priceStep": "0.00000000001",
                "minPrice": "0.00000000001",
                "maxPrice": "0.00001",
                "collateralPerSlot": "2",
                "totalPreconf": 36000000,
                "availablePreconf": 36000000,
                "direction": true,
                "price": "0.00000001256",
                "midPrice": "0.00000001256",
                "status": 1,
                "maturityTime": 1730465060000,
                "trxSubmitTime": 1730465062000,
                "blockTime": 1730465064000,
                "finalityTime": 1730465832000,
                "totalGas": 29952852,
                "validatorType": 0,
                "updateDate": 1730465041000
            }
        ]
    }
}
```

**Response Body**

| Name | Type | Description |
|------|------|-------------|
| markets | object[] | List of Market objects |
| └ marketId | integer | Preconf market ID |
| └ slot | integer | Slot number of the block |
| └ instrumentId | string | Inclusion Preconf Market instrument ID<br/><br/>Use endpoint [GET /api/v1/p/inclusion-preconf/markets] to get a list of all available inclusion preconf markets' instrument IDs |
| └ name | string | Preconf market name<br/><br/>In format: "ETH-PC-xxxxxx" |
| └ quantityStep | string | Minimum increment between different order quantities |
| └ minQuantity | string | Minimum order quantity |
| └ maxQuantity | string | Maximum order quantity |
| └ priceStep | string | Minimum increment between valid price levels |
| └ minPrice | string | Minimum price |
| └ maxPrice | string | Maximum price |
| └ collateralPerSlot | string | ETH reserved by validator as collateral for this slot |
| └ totalPreconf | integer | Total preconf quantity for this slot |
| └ availablePreconf | integer | Available preconf quantity for trading |
| └ direction | boolean | The last trading direction (true = buy, false = sell) |
| └ price | string | Latest traded market price for this market |
| └ midPrice | string | Mid price of bid and ask |
| └ status | integer | Market status - see the Market Status Codes section for more information |
| └ maturityTime | integer | Datetime (in UNIX time) when the market will be closed |
| └ trxSubmitTime | integer | Datetime (in UNIX time) when the market will be closed for submitting transactions |
| └ blockTime | integer | Datetime (in UNIX time) when the block starts |
| └ finalityTime | integer | Datetime (in UNIX time) when the block is being finalized |
| └ totalGas | integer | Total gas available for sale in this block |
| └ validatorType | integer | Type of validator (0 for normal validators, 1 for SSV validators) |
| └ updateDate | integer | Datetime (in UNIX time) when the market orderbook was last updated |

</details>

## Slot Bundles

The Slot Bundles API provides endpoints for managing and querying bundle information for specific slots.

### GET /api/v1/slot/bundles

<details>

<summary style={{listStyle: 'none'}}>Retrieve bundles for a specific slot</summary>

#### Code Example

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X GET /api/v1/slot/bundles?slot=123
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/slot/bundles"
params = {"slot": 1234}
headers = {
    "Authorization": "Bearer <your-auth-token>"
}

response = requests.get(url, params=params, headers=headers)
print(response.text)
```

</TabItem>
</Tabs>

**Request Parameters**

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| slot | Yes | integer | The slot number to query |

**Response Example**

```json
{
{
    "slot": 123,
    "emptySpace": 0,
    "isSold": true,
    "feeRecipient": "0xasdfadflj2lwejf...",
    "bundles": [
            {
                "txs": [
                    {
                        "tx": "0x02f86b0180843b9aca00852ecc889a0082520894c87037874aed04e51c29f582394217a0a2b89d808080c080a0a463985c616dd8ee17d7ef9112af4e6e06a27b071525b42182fe7b0b5c8b4925a00af5ca177ffef2ff28449292505d41be578bebb77110dfc09361d2fb56998260",
                        "canRevert": false,
                        "createDate": 1730193765339
                    },
                    {
                        "tx": "0x02f86b0180843b9aca00852ecc889a0082520894c87037874aed04e51c29f582394217a0a2b89d808080c080a0a463985c616dd8ee17d7ef9112af4e6e06a27b071525b42182fe7b0b5c8b4925a00af5ca177ffef2ff28449292505d41be578bebb77110dfc09361d2fb56998260",
                        "canRevert": false,
                        "createDate": 1730193765339
                    }
                ],
                "uuid": "ab592371-84d6-459e-95e7-5edad485f282",
                "averageBidPrice": 1.2635975E-8
            },
            {
                "txs": [
                    {
                        "tx": "0x02f86b0180843b9aca00852ecc889a0082520894c87037874aed04e51c29f582394217a0a2b89d808080c080a0a463985c616dd8ee17d7ef9112af4e6e06a27b071525b42182fe7b0b5c8b4925a00af5ca177ffef2ff28449292505d41be578bebb77110dfc09361d2fb56998260",
                        "canRevert": false,
                        "createDate": 1730366973413
                    }
                ],
                "uuid": "45727106-d37e-4194-93bc-8650bc135c53fg",
                "averageBidPrice": 1.0E-11
            },
            {
                "txs": [
                    {
                        "tx": "0x02f86b0180843b9aca00852ecc889a0082520894c87037874aed04e51c29f582394217a0a2b89d808080c080a0a463985c616dd8ee17d7ef9112af4e6e06a27b071525b42182fe7b0b5c8b4925a00af5ca177ffef2ff28449292505d41be578bebb77110dfc09361d2fb56998260",
                        "canRevert": false,
                        "createDate": 1730366973440
                    }
                ],
                "uuid": "19780112-d37e-4194-93bc-8650bc135c53",
                "averageBidPrice": 1.0E-11
            }
        ]
}
```

**Response Body**

| Field | Type | Description |
|-------|------|-------------|
| slot | integer | Slot ID of the retrieved bundles. |
| bundles | array | List of bundles associated with the slot. |
| └ uuid | string | Unique identifier for the bundle |
| └ averageBidPrice | number | Average bid price for the bundle |
| └ isSold | boolean | 1: some preconf or wholeblock has been sold, 0: the entire block and preconf still belongs to the validator |
| └ feeReceipient | byte[] | address where the fees should be paid to, only display after market expired |
| └ txs | list | List of transactions |
| └└ trx | string | Signed Transaction |
| └└ canRevert | boolean | revertable: true, non-revertable : false |
| └└ status | integer | 0: ok, -1 : conflicted |
| └└ createDate | date | Date of submitting the transaction |

</details>

<!-- ### GET /api/v1/account/slot/bundles

<details>
<summary style={{listStyle: 'none'}}>Retrieve the bundles submitted for a given slot for your inclusion preconf account.</summary>
#### Code Example

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X GET /api/v1/slot/bundles?slot=123
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/account/slot/bundles"
params = {
    "slot": 1234,
    "accountId": "account-123"
}
headers = {
    "Authorization": "Bearer <your-auth-token>"
}

response = requests.get(url, headers=headers, params=params )
print(response.text)
```

</TabItem>
</Tabs>

**Request Parameters**

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| slot | Yes | integer | The slot number to query |
| accountId | Yes | string | The account ID to filter bundles |

**Response Example**

```json
{
{
    "slot": 123,
    "bundles": [
            {
                "txs": [
                    {
                        "tx": "0x02f86b0180843b9aca00852ecc889a0082520894c87037874aed04e51c29f582394217a0a2b89d808080c080a0a463985c616dd8ee17d7ef9112af4e6e06a27b071525b42182fe7b0b5c8b4925a00af5ca177ffef2ff28449292505d41be578bebb77110dfc09361d2fb56998260",
                        "canRevert": false,
                        "status": 0,
                        "createDate": 1730193765339
                    },
                    {
                        "tx": "0x02f86b0180843b9aca00852ecc889a0082520894c87037874aed04e51c29f582394217a0a2b89d808080c080a0a463985c616dd8ee17d7ef9112af4e6e06a27b071525b42182fe7b0b5c8b4925a00af5ca177ffef2ff28449292505d41be578bebb77110dfc09361d2fb56998260",
                        "canRevert": false,
                        "status": 0,
                        "createDate": 1730193765339
                    }
                ],
                "uuid": "ab592371-84d6-459e-95e7-5edad485f282",
                "averageBidPrice": 1.2635975E-8
            },
            {
                "txs": [
                    {
                        "tx": "0x02f86b0180843b9aca00852ecc889a0082520894c87037874aed04e51c29f582394217a0a2b89d808080c080a0a463985c616dd8ee17d7ef9112af4e6e06a27b071525b42182fe7b0b5c8b4925a00af5ca177ffef2ff28449292505d41be578bebb77110dfc09361d2fb56998260",
                        "canRevert": false,
                        "createDate": 1730366973413
                    }
                ],
                "uuid": "45727106-d37e-4194-93bc-8650bc135c53fg",
                "averageBidPrice": 1.0E-11
            },
            {
                "txs": [
                    {
                        "tx": "0x02f86b0180843b9aca00852ecc889a0082520894c87037874aed04e51c29f582394217a0a2b89d808080c080a0a463985c616dd8ee17d7ef9112af4e6e06a27b071525b42182fe7b0b5c8b4925a00af5ca177ffef2ff28449292505d41be578bebb77110dfc09361d2fb56998260",
                        "canRevert": false,
                        "status": 0,
                        "createDate": 1730366973440
                    }
                ],
                "uuid": "19780112-d37e-4194-93bc-8650bc135c53",
                "averageBidPrice": 1.0E-11
            }
        ]
}
```

**Response Body**

| Field | Type | Description |
|-------|------|-------------|
| slot | integer | Slot ID of the retrieved bundles. |
| bundles | array | List of bundles associated with the slot. |
| └ uuid | string | Unique identifier for the bundle |
| └ averageBidPrice | number | Average bid price for the bundle |
| └ isSold | boolean | 1: some preconf or wholeblock has been sold, 0: the entire block and preconf still belongs to the validator |
| └ feeReceipient | byte[] | address where the fees should be paid to, only display after market expired |
| └ txs | list | List of transactions |
| └└ trx | string | Signed Transaction |
| └└ canRevert | boolean | revertable: true, non-revertable : false |
| └└ status | integer | 0: ok, -1 : conflicted |
| └└ createDate | date | Date of submitting the transaction |

</details> -->

<!-- ### GET /api/v1/slot/forceEmptyBlockSpace

<details>
#### Code Example
<summary style={{listStyle: 'none'}}>Preconf owner set unused inclusion preconf gas to be empty for a given slot.</summary>

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
GET /api/v1/p/slot/forceEmptyBlockSpace?slot=123&enable=true
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/slot/forceEmptyBlockSpace

params = {
    'slot': 123,
    'enable': true
}

response = requests.get(url, params=params)

print(response.text)
```

</TabItem>
</Tabs>

**Request Parameters**

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| slot | Yes | integer | The slot number to force empty block space |
| enable | Yes | boolean | True to force empty gas space in the slot |

**Response Example**

```json
{
    "success": true,
    "data": { "success": false }
}
```

**Response Body**

| Field | Type | Description |
|-------|------|-------------|
| success | boolean | Success status of the request |
| data | object | Response data container |
| └ success | boolean | Whether the empty block space was successfully forced |

</details> -->

<!-- ### GET /api/v1/p/slot/txs/hash

<details>
#### Code Example

<summary style={{listStyle: 'none'}}>Retrieve transaction hash information for a specific slot</summary>

<Tabs>

<TabItem value="http" label="HTTP" default>

```bash
curl -X GET "https://mainnet.app.ethgas.com/api/v1/p/slot/txs/hash?slot=1234" \
  -H "Authorization: Bearer <your-auth-token>"
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/p/slot/txs/hash"

params = {
    'slot': 123
}

response = requests.get(url, params=params)

print(response.text)
```

</TabItem>
</Tabs>

**Request Parameters**

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| slot | Yes | integer | The slot number to query transaction hashes |

**Response Example**

```json
{
    "hash": "0xabc123def456..."
}
```

**Response Body**

| Field | Type | Description |
|-------|------|-------------|
| hash | string | Hash of the transactions for the slot |

</details> -->

<!-- ### Performance Requirements

- **Block building time**: Must complete within slot timeframe
- **Relay submission**: Must submit blocks to relay before deadline
- **Error handling**: Must handle failures gracefully
- **Monitoring**: Must provide status and health information

## Support and Resources

### Documentation

- **ETHGas Documentation**: Complete platform documentation
- **Builder API Reference**: Detailed API documentation
- **Registration Guide**: Registration process details

### Community Support

- **GitHub Issues**: Report issues in the builder scripts repository
- **Discord**: Join our builder community
- **Email**: Direct support for enterprise users

### Essential Links

- **ETHGas TestNet**: Test your integration
- **Builder Scripts Repository**: Complete setup code
- **Preconf Builder Repository**: Modified rbuilder
- **ETHGas Contracts**: Smart contract implementations

## Next Steps

1. **Complete Setup**: Follow the instructions above to set up your builder
2. **Test Integration**: Verify connection to ETHGas network
3. **Monitor Performance**: Set up monitoring and alerting
4. **Optimize Configuration**: Fine-tune based on performance metrics
5. **Join Community**: Connect with other builders for support

For additional assistance, contact our support team or join our community channels. -->