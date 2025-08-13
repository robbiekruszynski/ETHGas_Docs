---
sidebar_position: 1
---

# WebSocket API Overview

The ETHGas WebSocket API provides real-time data streaming for market and account updates. Use the command/message structure described in the official API.

## Quick Navigation

<div className="quick-nav">

<div className="row" style={{ marginBottom: '1rem' }}>
  <div className="col col--4">
    <div className="feature-card text--center" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <h3>Connection</h3>
        <p>WebSocket URLs and connection basics.</p>
      </div>
      <div style={{ marginTop: '1.5rem' }}>
        <a href="#connection-information" className="button button--outline button--sm">
          View Connection Info →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="feature-card text--center" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <h3>Channels</h3>
        <p>Public and private channels.</p>
      </div>
      <div style={{ marginTop: '1.5rem' }}>
        <a href="#channel-types" className="button button--outline button--sm">
          View Channels →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="feature-card text--center" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <h3>Messages</h3>
        <p>Message structure and commands.</p>
      </div>
      <div style={{ marginTop: '1.5rem' }}>
        <a href="#message-structure" className="button button--outline button--sm">
          View Message Format →
        </a>
      </div>
    </div>
  </div>
</div>

</div>

## Connection Information {#connection-information}

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="testnet" label="TestNet" default>

**WebSocket URL**: `wss://testnet-ws.ethgas.com`

</TabItem>
<TabItem value="mainnet" label="MainNet">

**WebSocket URL**: `wss://ws.ethgas.com`

</TabItem>
</Tabs>

### Connection Requirements

- **Protocol**: WebSocket (WSS)
- **Authentication**: Required for private channels
- **Rate Limiting**: Applied to prevent abuse

## Message Structure {#message-structure}

### Request

```json
{
  "op": "command_name",
  "args": {
    
  }
}
```

### Response (generic)

```json
{
  
}
```

### Error (generic)

```json
{
  "error": {
    "code": 1001,
    "message": "..."
  }
}
```

## Commands

### Authentication

- `login`
- `logout`

### Subscription

- `subscribe`
- `unsubscribe`

### Query

- `query`

## Channel Types {#channel-types}

### Public Channels

- Preconf Market Update
- Candlestick Update
- Recent Trades Update
- Order Book Update
- Ticker Update
- Inclusion Preconf Top Sales
- Block Builder Update

### Private Channels

- Account Order Update
- Account Transaction Update
- Account Position Update
- Preconf Bundle Update

## Error Handling {#error-handling}

| Error Code | Description |
|------------|-------------|
| 1001 | Authentication failed |
| 1002 | Invalid channel |
| 1003 | Rate limit exceeded |
| 1004 | Connection timeout |

<!-- ## References

- WebSocket section: This documentation  -->