---
sidebar_position: 2
---

# Validator Setup Guide

This guide provides step-by-step instructions for setting up validators with ETHGas.

## Repository Overview

Official module for validator integration:
- https://github.com/ethgas-developer/ethgas-preconf-commit-boost-module

Related:
- Builder Scripts: https://github.com/ethgas-developer/ethgas-builder-scripts
- Preconf Builder: https://github.com/ethgas-developer/preconf-builder
- Contracts (AVS for audit): https://github.com/ethgas-developer/ethgas-contracts-avs-for-audit

## Quick Start

```bash
git clone https://github.com/ethgas-developer/ethgas-preconf-commit-boost-module
cd ethgas-preconf-commit-boost-module
cp .env.example .env
# Edit .env
Docker compose up -d
```

## Choose Your Consensus Client

- Lighthouse
- Prysm
- Teku

Refer to client docs for installation and configuration.

## Monitoring

Use the official API docs for supported endpoints and examples:
- See API endpoints below

## Essential Links

- ETHGas: https://www.ethgas.com/
- TestNet: https://testnet.ethgas.com/
- Technical Integration: https://docs.ethgas.com/technical-integration
- API Reference: This documentation 