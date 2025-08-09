---
sidebar_position: 1
---

# Builders & Sequencers

:::info Role scope
This page focuses on Builders. For Developers see `/docs/developers/overview`. For Validators see `/docs/validators/overview`. For copy/paste‑ready code, use `https://developers.ethgas.com`.
:::

ETHGas provides infrastructure for block builders and sequencers to participate in the gas trading ecosystem. This page summarizes roles and integration touchpoints. Refer to the official API for all builder endpoints.

## Block Building Package

Builders may use their own software or the ETHGas-modified rbuilder (preconf-builder) for ETHGas-specific flows:

- **Stream preconf transactions**
- **Build compliant blocks** (respect bundle positioning and commitments)
- **Fill remaining blockspace** with mempool transactions

### Resources

- **Preconf Builder (optional)**: `https://github.com/ethgas-developer/preconf-builder`
- **Builder Scripts**: `https://github.com/ethgas-developer/ethgas-builder-scripts`

## Who Builds the Blocks?

Block owners may self-build or delegate to specialist builders. ETHGas can act as a fallback builder when not delegated or if a submitted block is non‑conforming.

## Delegated Building

Block owners can delegate to multiple specialist builders who compete to deliver best value via auction mechanisms (tips/priority fees accrue to the block owner).

## Empty Block

If no trades should be included, block owners can indicate an empty block preference (a minimal self‑transfer may still be required by validators).

## Integration Requirements

- **Builder software** (own or preconf-builder)
- **Relay submission**
- **Commitment compliance** (include preconf bundles, bundle positioning, payout to block owner)
- **Slot timing performance**

## API (from developers.ethgas.com)

Builder-related endpoints include:

- **POST** `/api/v1/builder/register`
- **GET** `/api/v1/builder/signingMessage`
- **POST** `/api/v1/builder/deregister`
- **GET** `/api/v1/p/builders`
- **GET** `/api/v1/user/builder`
- **POST** `/api/v1/user/delegate/builder`
- **GET** `/api/v1/user/delegate/builder`
- **GET** `/api/v1/p/builder/{slot}`
- **GET** `/api/v1/builder/delegation`

For current schemas and examples, see `https://developers.ethgas.com`. 