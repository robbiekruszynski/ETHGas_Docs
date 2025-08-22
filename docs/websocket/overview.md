---
sidebar_position: 1
---

# WebSocket

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

<div className="row" style={{ marginBottom: '2rem' }}>
  <div className="col col--6">
    <div className="feature-card" style={{ height: '100%', padding: '1.5rem', border: '1px solid rgba(0, 162, 199, 0.2)', background: 'rgba(0, 162, 199, 0.02)' }}>
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <h3 style={{ color: 'var(--ifm-color-primary)', marginBottom: '0.5rem', fontSize: '1.25rem', fontWeight: '600' }}>Public Channels</h3>
        <p style={{ margin: '0', color: 'var(--ifm-color-emphasis-600)', fontSize: '0.9rem', lineHeight: '1.4' }}>Real-time market data available to all users</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem', borderRadius: '6px', transition: 'background-color 0.2s ease' }}>
          <span style={{ color: 'var(--ifm-color-primary)', fontSize: '1rem', fontWeight: '600' }}>→</span>
          <span style={{ color: 'var(--ifm-color-emphasis-700)', fontSize: '0.95rem' }}>Preconf Market Update</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem', borderRadius: '6px', transition: 'background-color 0.2s ease' }}>
          <span style={{ color: 'var(--ifm-color-primary)', fontSize: '1rem', fontWeight: '600' }}>→</span>
          <span style={{ color: 'var(--ifm-color-emphasis-700)', fontSize: '0.95rem' }}>Candlestick Update</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem', borderRadius: '6px', transition: 'background-color 0.2s ease' }}>
          <span style={{ color: 'var(--ifm-color-primary)', fontSize: '1rem', fontWeight: '600' }}>→</span>
          <span style={{ color: 'var(--ifm-color-emphasis-700)', fontSize: '0.95rem' }}>Recent Trades Update</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem', borderRadius: '6px', transition: 'background-color 0.2s ease' }}>
          <span style={{ color: 'var(--ifm-color-primary)', fontSize: '1rem', fontWeight: '600' }}>→</span>
          <span style={{ color: 'var(--ifm-color-emphasis-700)', fontSize: '0.95rem' }}>Order Book Update</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem', borderRadius: '6px', transition: 'background-color 0.2s ease' }}>
          <span style={{ color: 'var(--ifm-color-primary)', fontSize: '1rem', fontWeight: '600' }}>→</span>
          <span style={{ color: 'var(--ifm-color-emphasis-700)', fontSize: '0.95rem' }}>Ticker Update</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem', borderRadius: '6px', transition: 'background-color 0.2s ease' }}>
          <span style={{ color: 'var(--ifm-color-primary)', fontSize: '1rem', fontWeight: '600' }}>→</span>
          <span style={{ color: 'var(--ifm-color-emphasis-700)', fontSize: '0.95rem' }}>Inclusion Preconf Top Sales</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem', borderRadius: '6px', transition: 'background-color 0.2s ease' }}>
          <span style={{ color: 'var(--ifm-color-primary)', fontSize: '1rem', fontWeight: '600' }}>→</span>
          <span style={{ color: 'var(--ifm-color-emphasis-700)', fontSize: '0.95rem' }}>Block Builder Update</span>
        </div>
      </div>
    </div>
  </div>
  <div className="col col--6">
    <div className="feature-card" style={{ height: '100%', padding: '1.5rem', border: '1px solid rgba(239, 68, 68, 0.2)', background: 'rgba(239, 68, 68, 0.02)' }}>
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <h3 style={{ color: '#ef4444', marginBottom: '0.5rem', fontSize: '1.25rem', fontWeight: '600' }}>Private Channels</h3>
        <p style={{ margin: '0', color: 'var(--ifm-color-emphasis-600)', fontSize: '0.9rem', lineHeight: '1.4' }}>User-specific data requiring authentication</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem', borderRadius: '6px', transition: 'background-color 0.2s ease' }}>
          <span style={{ color: '#ef4444', fontSize: '1rem', fontWeight: '600' }}>→</span>
          <span style={{ color: 'var(--ifm-color-emphasis-700)', fontSize: '0.95rem' }}>Account Order Update</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem', borderRadius: '6px', transition: 'background-color 0.2s ease' }}>
          <span style={{ color: '#ef4444', fontSize: '1rem', fontWeight: '600' }}>→</span>
          <span style={{ color: 'var(--ifm-color-emphasis-700)', fontSize: '0.95rem' }}>Account Transaction Update</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem', borderRadius: '6px', transition: 'background-color 0.2s ease' }}>
          <span style={{ color: '#ef4444', fontSize: '1rem', fontWeight: '600' }}>→</span>
          <span style={{ color: 'var(--ifm-color-emphasis-700)', fontSize: '0.95rem' }}>Account Position Update</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem', borderRadius: '6px', transition: 'background-color 0.2s ease' }}>
          <span style={{ color: '#ef4444', fontSize: '1rem', fontWeight: '600' }}>→</span>
          <span style={{ color: 'var(--ifm-color-emphasis-700)', fontSize: '0.95rem' }}>Preconf Bundle Update</span>
        </div>
      </div>
    </div>
  </div>
</div>

## Error Handling {#error-handling}

| Error Code | Description |
|------------|-------------|
| 1001 | Authentication failed |
| 1002 | Invalid channel |
| 1003 | Rate limit exceeded |
| 1004 | Connection timeout |

<!-- ## References

- WebSocket section: This documentation  -->