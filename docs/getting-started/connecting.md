---
sidebar_position: 3
---

# Connecting to ETHGas

This guide helps you establish connections to the ETHGas platform. For copy/paste‑ready code examples (HTTP and Python), see the API endpoints below.

## Prerequisites

- **API Credentials**
- **Environment Selection** (TestNet or MainNet)
- **Network Access** to ETHGas endpoints

## Authentication Overview

ETHGas uses Bearer token authentication.

## Basic Connection Setup

### Step 1: Choose Your Environment

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="mainnet" label="MainNet" default>

<strong>API Endpoints:</strong>
<ul>
<li><strong>REST API:</strong> <code>https://api.ethgas.com</code></li>
<li><strong>WebSocket:</strong> <code>wss://ws.ethgas.com</code></li>
</ul>

  </TabItem>
  <TabItem value="testnet" label="TestNet">

<strong>API Endpoints:</strong>
<ul>
<li><strong>REST API:</strong> <code>https://testnet-api.ethgas.com</code></li>
<li><strong>WebSocket:</strong> <code>wss://testnet-ws.ethgas.com</code></li>
</ul>

  </TabItem>
</Tabs>

### Step 2: Authenticate

Use the Authentication endpoints described in the official reference.

- **POST** `/api/v1/user/login`
- **POST** `/api/v1/user/login/verify`
- **POST** `/api/v1/user/login/refresh`
- **POST** `/api/v1/user/logout`

See copy/paste examples in the API endpoints below.

## WebSocket Connection

For real-time data, establish a WebSocket connection and send commands using the message structure in the official reference.

<Tabs>
  <TabItem value="mainnet-ws" label="MainNet WebSocket" default>

**Connection URL:**
```
wss://ws.ethgas.com
```

  </TabItem>
  <TabItem value="testnet-ws" label="TestNet WebSocket">

**Connection URL:**
```
wss://testnet-ws.ethgas.com
```

  </TabItem>
</Tabs>

## Message Structure (WebSocket)

Requests follow the format below:

```json
{
  "cmd": "command_name",
  "args": {
    
  }
}
```

Examples of commands (see full list in the official docs): `login`, `subscribe`, `unsubscribe`, `query`.

## Next Steps

- **API Reference (copy/paste code)**: This documentation
- **REST API Overview**: `/docs/api/overview`
- **WebSocket Overview**: `/docs/websocket/overview` 