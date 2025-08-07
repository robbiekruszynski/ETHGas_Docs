---
sidebar_position: 1
---

# WebSocket API Overview

The ETHGas WebSocket API provides real-time data streaming for market updates, order changes, and account information. This enables you to build responsive applications that react to market changes instantly.

## Quick Navigation

<div className="row" style={{ marginBottom: '2rem' }}>
  <div className="col col--4">
    <div className="feature-card text--center" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <h3>Connection</h3>
        <p>Learn about WebSocket URLs, authentication requirements, and connection management.</p>
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
        <p>Explore public and private channels for real-time market data and account updates.</p>
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
        <h3>Authentication</h3>
        <p>Understand the login process and authentication flow for private channels.</p>
      </div>
      <div style={{ marginTop: '1.5rem' }}>
        <a href="#authentication" className="button button--outline button--sm">
          View Auth Guide →
        </a>
      </div>
    </div>
  </div>
</div>

<div className="row" style={{ marginBottom: '2rem' }}>
  <div className="col col--4">
    <div className="feature-card text--center" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <h3>Messages</h3>
        <p>Learn about message structure, commands, and data formats for WebSocket communication.</p>
      </div>
      <div style={{ marginTop: '1.5rem' }}>
        <a href="#message-structure" className="button button--outline button--sm">
          View Message Format →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="feature-card text--center" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <h3>Best Practices</h3>
        <p>Discover connection management, error handling, and performance optimization tips.</p>
      </div>
      <div style={{ marginTop: '1.5rem' }}>
        <a href="#best-practices" className="button button--outline button--sm">
          View Best Practices →
        </a>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="feature-card text--center" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <h3>Error Handling</h3>
        <p>Understand common errors, rate limiting, and troubleshooting strategies.</p>
      </div>
      <div style={{ marginTop: '1.5rem' }}>
        <a href="#error-handling" className="button button--outline button--sm">
          View Error Guide →
        </a>
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

Use TestNet WebSocket for development and testing:

- **Purpose**: Development and testing
- **Data**: Simulated market data
- **Authentication**: Test credentials
- **Rate Limits**: Higher limits for testing

### TestNet Connection Example

```javascript
const ws = new WebSocket('wss://testnet-ws.ethgas.com');

ws.onopen = function() {
  console.log('Connected to ETHGas TestNet WebSocket');
  
  // Authenticate
  ws.send(JSON.stringify({
    cmd: 'login',
    data: {
      accessToken: 'your_testnet_access_token'
    }
  }));
};
```

</TabItem>
<TabItem value="mainnet" label="MainNet">

**WebSocket URL**: `wss://ws.ethgas.com`

Use MainNet WebSocket for production applications:

- **Purpose**: Production trading
- **Data**: Real market data
- **Authentication**: Production credentials
- **Rate Limits**: Production limits apply

### MainNet Connection Example

```javascript
const ws = new WebSocket('wss://ws.ethgas.com');

ws.onopen = function() {
  console.log('Connected to ETHGas MainNet WebSocket');
  
  // Authenticate
  ws.send(JSON.stringify({
    cmd: 'login',
    data: {
      accessToken: 'your_mainnet_access_token'
    }
  }));
};
```

</TabItem>
</Tabs>

### Connection Requirements

- **Protocol**: WebSocket (WSS)
- **Authentication**: Required for private channels
- **Rate Limiting**: Applied to prevent abuse
- **Reconnection**: Implement automatic reconnection logic

## Message Structure {#message-structure}

All WebSocket messages follow a consistent JSON format:

### Request Format

```json
{
  "cmd": "command_name",
  "args": {
    // Command-specific arguments
  }
}
```

### Response Format

```json
{
  "cmd": "response_command",
  "data": {
    // Response data
  }
}
```

### Error Format

```json
{
  "cmd": "error",
  "error": {
    "code": 1001,
    "message": "Error description"
  }
}
```

## Available Commands

### Authentication Commands

| Command | Description |
|---------|-------------|
| `login` | Authenticate with access token |
| `logout` | Logout and close connection |

### Subscription Commands

| Command | Description |
|---------|-------------|
| `subscribe` | Subscribe to a channel |
| `unsubscribe` | Unsubscribe from a channel |

### Query Commands

| Command | Description |
|---------|-------------|
| `query` | Query current data |
| `ping` | Test connection health |
| `pong` | Respond to ping request |

## Channel Types {#channel-types}

### Public Channels

Public channels provide market data and updates that are available to all users:

- **Preconf Market Updates**: Real-time inclusion preconf market data
- **Candlestick Updates**: Price chart data updates
- **Recent Trades**: Latest trade information
- **Order Book Updates**: Real-time order book changes
- **Ticker Updates**: Market summary information
- **Inclusion Preconf Top Sales**: Top sales data
- **Block Builder Updates**: Builder information changes

### Private Channels

Private channels require authentication and provide user-specific data:

- **Account Order Updates**: Your order status changes
- **Account Transaction Updates**: Your transaction history
- **Account Position Updates**: Your position changes
- **Preconf Bundle Updates**: Your bundle submission status

## Authentication {#authentication}

### Login Process

1. **Connect**: Establish WebSocket connection
2. **Authenticate**: Send login command with access token
3. **Verify**: Check for successful authentication response
4. **Subscribe**: Subscribe to desired channels

### Login Example

```json
{
  "cmd": "login",
  "args": {
    "accessToken": "your_access_token_here"
  }
}
```

### Authentication Response

```json
{
  "cmd": "login",
  "data": {
    "status": "success",
    "userId": "user_123"
  }
}
```

## Subscription Management

### Subscribe to Channel

```json
{
  "cmd": "subscribe",
  "args": {
    "channel": "preconfMarketUpdate",
    "marketId": 12345
  }
}
```

### Unsubscribe from Channel

```json
{
  "cmd": "unsubscribe",
  "args": {
    "channel": "preconfMarketUpdate",
    "marketId": 12345
  }
}
```

## Data Queries

### Query Current Data

```json
{
  "cmd": "query",
  "args": {
    "queryType": "preconfMarkets"
  }
}
```

### Query with Parameters

```json
{
  "cmd": "query",
  "args": {
    "queryType": "orderBooks",
    "marketId": 12345
  }
}
```

## Connection Management

### Connection Lifecycle

1. **Establish Connection**: Connect to WebSocket URL
2. **Authenticate**: Send login command
3. **Subscribe**: Subscribe to desired channels
4. **Receive Updates**: Process incoming messages
5. **Handle Disconnection**: Implement reconnection logic

### Reconnection Strategy

```javascript
class ETHGasWebSocket {
    constructor(url, accessToken) {
        this.url = url;
        this.accessToken = accessToken;
        this.reconnectAttempts = 0;
        this.maxReconnectAttempts = 5;
        this.reconnectDelay = 1000;
    }

    connect() {
        this.ws = new WebSocket(this.url);
        
        this.ws.onopen = () => {
            console.log('Connected to ETHGas WebSocket');
            this.authenticate();
        };

        this.ws.onclose = () => {
            console.log('WebSocket connection closed');
            this.handleReconnection();
        };

        this.ws.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        this.ws.onmessage = (event) => {
            this.handleMessage(JSON.parse(event.data));
        };
    }

    authenticate() {
        this.send({
            cmd: 'login',
            args: {
                accessToken: this.accessToken
            }
        });
    }

    handleReconnection() {
        if (this.reconnectAttempts < this.maxReconnectAttempts) {
            this.reconnectAttempts++;
            const delay = this.reconnectDelay * Math.pow(2, this.reconnectAttempts - 1);
            
            setTimeout(() => {
                console.log(`Reconnecting... Attempt ${this.reconnectAttempts}`);
                this.connect();
            }, delay);
        } else {
            console.error('Max reconnection attempts reached');
        }
    }

    send(message) {
        if (this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify(message));
        }
    }

    handleMessage(message) {
        switch (message.cmd) {
            case 'login':
                if (message.data.status === 'success') {
                    console.log('Authentication successful');
                    this.reconnectAttempts = 0;
                }
                break;
            case 'preconfMarketUpdate':
                this.handleMarketUpdate(message.data);
                break;
            case 'error':
                console.error('WebSocket error:', message.error);
                break;
            default:
                console.log('Received message:', message);
        }
    }

    handleMarketUpdate(data) {
        // Process market update data
        console.log('Market update:', data);
    }
}
```

## Message Handling

### Market Updates

```javascript
function handleMarketUpdate(data) {
    const { marketId, price, volume, change } = data;
    
    // Update UI with new market data
    updateMarketDisplay(marketId, price, volume, change);
    
    // Trigger alerts if needed
    if (Math.abs(change) > 0.05) {
        triggerPriceAlert(marketId, change);
    }
}
```

### Order Updates

```javascript
function handleOrderUpdate(data) {
    const { orderId, status, filledQuantity, remainingQuantity } = data;
    
    // Update order status in UI
    updateOrderStatus(orderId, status);
    
    // Handle order completion
    if (status === 'STATUS_DONE') {
        handleOrderCompletion(orderId, filledQuantity);
    }
}
```

### Position Updates

```javascript
function handlePositionUpdate(data) {
    const { marketId, quantity, averagePrice, unrealizedPnl } = data;
    
    // Update position display
    updatePositionDisplay(marketId, quantity, averagePrice, unrealizedPnl);
    
    // Check for margin calls
    if (unrealizedPnl < -threshold) {
        triggerMarginCall();
    }
}
```

## Best Practices {#best-practices}

### Connection Management

1. **Implement Reconnection**: Handle disconnections gracefully
2. **Exponential Backoff**: Use exponential backoff for reconnection attempts
3. **Connection Monitoring**: Monitor connection health
4. **Graceful Shutdown**: Properly close connections

### Message Processing

1. **Error Handling**: Handle all error messages
2. **Message Validation**: Validate incoming message structure
3. **Rate Limiting**: Respect rate limits
4. **Memory Management**: Avoid memory leaks in long-running connections

### Performance Optimization

1. **Selective Subscriptions**: Only subscribe to needed channels
2. **Message Batching**: Batch updates when possible
3. **Connection Pooling**: Reuse connections when appropriate
4. **Data Caching**: Cache frequently accessed data

## Error Handling {#error-handling}

### Common Errors

| Error Code | Description | Solution |
|------------|-------------|----------|
| 1001 | Authentication failed | Check access token validity |
| 1002 | Invalid channel | Verify channel name |
| 1003 | Rate limit exceeded | Implement rate limiting |
| 1004 | Connection timeout | Implement reconnection |

### Error Response Example

```json
{
  "cmd": "error",
  "error": {
    "code": 1001,
    "message": "Authentication failed - invalid token"
  }
}
```

## Rate Limiting

### Limits

- **Connection Rate**: 10 connections per minute per IP
- **Message Rate**: 100 messages per minute per connection
- **Subscription Rate**: 50 subscriptions per minute per connection

### Rate Limit Response

```json
{
  "cmd": "error",
  "error": {
    "code": 1003,
    "message": "Rate limit exceeded - try again later"
  }
}
```

## Related Documentation

- [Authentication](/docs/websocket/authentication) - WebSocket authentication details
- [Public Channels](/docs/websocket/public/preconf-market-update) - Public data channels
- [Private Channels](/docs/websocket/private/account-order-update) - Private user channels
- [Queries](/docs/websocket/queries/public/preconf-markets) - Data query methods 