---
sidebar_position: 1
---

# Builders & Sequencers

ETHGas provides infrastructure for block builders and sequencers to participate in the gas trading ecosystem. This section covers the different types of builders, their roles, and integration requirements.

## Block Building Package

To simplify the integration process for builders to support and fulfill the proposer's commitments, ETHGas provides a modified version of rbuilder, a blazingly fast MEV-Boost Rust-based block builder developed by Flashbots. Our changes achieve several key goals:

- **Stream preconf transactions**: Receive the latest preconf transactions from the ETHGas exchange
- **Build compliant blocks**: Include all preconf transactions for specific slots
- **Position management**: Ensure correct positions of top and bottom bundles submitted by whole block buyers
- **Mempool integration**: Fill remaining blockspace with mempool transactions when below gas limit

### Essential Resources

- **Modified rbuilder**: [https://github.com/ethgas-developer/preconf-builder](https://github.com/ethgas-developer/preconf-builder)
- **Builder Registration Scripts**: [https://github.com/ethgas-developer/ethgas-builder-scripts](https://github.com/ethgas-developer/ethgas-builder-scripts)
- **Builder Setup Guide**: [Builder Setup](/docs/api/builder/setup) - Complete setup instructions

## Who Builds the Blocks?

Traders who own whole blocks may choose to build/sequence the block themselves, or delegate this responsibility to:

- **Self Building**: The block owner acts as the builder/sequencer
- **Specialist Builders**: Third-party dedicated builders
- **Fallback Builder**: ETHGas as the default builder

They may also elect for the block to include no trades (empty block).

## Self Building: Whole Block Owners as Sequencer/Builders

Traders who own the whole block are entitled to sequencing rights, conditional upon including the previously confirmed constraints/commitments.

### Process

1. **Pre-slot preparation**: Before the start of the slot (T < 0 sec), traders build the block including their trades
2. **Sequencing**: Sequence all trades according to commitments
3. **Submission**: Send the block via ETHGas Relay
4. **PBS flow**: Follow the standard Proposer-Builder Separation flow

### Requirements

- Must include all preconf transactions for the slot
- Must respect bundle positioning requirements
- Must submit via ETHGas Relay infrastructure

## Delegated Building

Unlike Self Building where the Block Owner is also the Builder, traders may elect to delegate the building to a third party. This third party may be either a Specialist Builder or the Fallback Builder.

### Pre-delegation Requirements

Prior to delegation, traders must submit their transactions via API (subject to the amount of blockspace they own) so that the Builders know which trades to include accordingly.

### Specialist Builders

Traders may delegate Building to a third-party Specialist or Dedicated Builder. Specialist Builders may or may not pass on priority fees or any other economics back to the Trader. This is at the Specialist Builder's discretion.

#### Key Considerations

- **Fee distribution**: Traders should negotiate with third-party Builders about fee distribution via other channels
- **Economics**: Priority fees and MEV may be shared or retained by the builder
- **Performance**: Specialist builders may offer optimized block building services

### Fallback Builder - ETHGas

ETHGas performs the role as a Fallback Builder and sequences the block accordingly when:

- The Block has not been Self Built, or
- The Block has not been delegated to a third-party Specialist Builder, or
- The Block built by the Builder does not conform to the commitment requirements

#### Economics

Any priority fees from trades included in the block will pass back to the Block owner. More details on the fallback sequencing algorithm will be provided in due course.

## Empty Block

The Fallback Builder flow assumes that Traders will always want a block to be built with any residual value (i.e., remaining Tips/Priority fees from mempool transactions) being passed back to the Trader.

### Empty Block Scenarios

There may be cases, albeit rare, where the Trader has sold no commitments and elects for no trades to be included. In these cases:

1. **API request**: Traders must send an API request to indicate empty block preference
2. **Block submission**: An empty block will be submitted to the relay and then proposed by the validators
3. **Minimum transaction**: A completely empty block cannot be proposed by validators, so a 0-value self-transfer transaction will be included

## Builder Registration

### Prerequisites

Before registering as a builder, you need:

- **BLS Key Pair**: Your BLS public and secret keys for builder identification
- **EOA Account**: A registered account on ETHGas Exchange for authentication
- **Docker Environment**: For running the builder registration scripts
- **Technical Infrastructure**: Capable of building blocks within slot timeframes

### Quick Registration

1. **Clone the repository**: [https://github.com/ethgas-developer/ethgas-builder-scripts](https://github.com/ethgas-developer/ethgas-builder-scripts)
2. **Configure environment**: Copy `.env.example.mainnet` or `.env.example.hoodi` to `.env`
3. **Set your keys**: Configure BLS_PUBKEY, BLS_SECRET_KEY, and EOA_SIGNING_KEY
4. **Build and deploy**: Run `./scripts/build.sh` and `docker-compose up`

For detailed setup instructions, see the [Builder Setup Guide](/docs/api/builder/setup).

## Integration Requirements

### API Integration

Builders must integrate with ETHGas APIs to:

- Receive preconf transaction data
- Submit built blocks
- Handle commitment requirements
- Manage fee distribution

### Technical Requirements

- **Modified rbuilder**: Use the ETHGas-modified version of rbuilder
- **Relay integration**: Submit blocks through ETHGas Relay
- **Compliance**: Ensure blocks meet commitment requirements
- **Performance**: Meet slot timing requirements

### Key Management

- **BLS Key Pair**: Essential for builder identification and block signing
- **EOA Signing Key**: Used for authentication and fee collection
- **Security**: Keep all private keys secure and never commit to version control

## Repository Structure

The [ETHGas Builder Scripts](https://github.com/ethgas-developer/ethgas-builder-scripts) repository contains:

- **Environment templates**: `.env.example.mainnet` and `.env.example.hoodi`
- **Docker configuration**: `Dockerfile.builder_register` and `docker-compose.yml`
- **Build scripts**: `./scripts/build.sh` for easy deployment
- **Rust implementation**: Builder registration logic in Rust

## Support and Resources

### Documentation

- [Builder Setup](/docs/api/builder/setup) - Complete setup guide with repository instructions
- [Builder Registration](/docs/api/builder/registration) - Detailed registration process
- [Block Building API](/docs/api/builder/building) - API endpoints for block building

### Community Support

- **ETHGas X/Twitter**: [@ETHGas](https://twitter.com/ETHGas) for updates and announcements
- **Discord**: Join the ETHGas Discord for community support
- **GitHub Issues**: Report issues in the [builder scripts repository](https://github.com/ethgas-developer/ethgas-builder-scripts)

### Essential Links

- **Builder Scripts**: [https://github.com/ethgas-developer/ethgas-builder-scripts](https://github.com/ethgas-developer/ethgas-builder-scripts)
- **Modified rbuilder**: [https://github.com/ethgas-developer/preconf-builder](https://github.com/ethgas-developer/preconf-builder)
- **ETHGas Documentation**: [https://docs.ethgas.com](https://docs.ethgas.com)

## Related Documentation

- [Builder Setup](/docs/api/builder/setup) - Step-by-step setup guide
- [Builder Registration](/docs/api/builder/registration) - How to register as a builder
- [Block Building API](/docs/api/builder/building) - API endpoints for block building 