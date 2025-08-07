---
sidebar_position: 4
---

# Builder Relay

Configure and manage relay connections for block building on ETHGas.

## Overview

Relay connections are essential for block builders to receive transaction bundles and submit block proposals. This guide covers relay configuration, management, and optimization.

## Relay Configuration

### Supported Relays

ETHGas supports multiple relay providers for optimal block building:

| Relay | URL | Region | Features |
|-------|-----|--------|----------|
| ETHGas Relay | `https://relay.ethgas.com` | Global | Primary relay |
| Flashbots Relay | `https://0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c020fac0aa6978b2fd3cc4bf5a76cf2d4d9542a38f6c204@0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c020fac0aa6978b2fd3cc4bf5a76cf2d4d9542a38f6c204` | Global | MEV-boost compatible |
| BloXroute Relay | `https://0xa15b52576bcbf1072f4a011b0f9854d4dd0f084fecd7c9a3b45f85c7e8d03b8b@0xa15b52576bcbf1072f4a011b0f9854d4dd0f084fecd7c9a3b45f85c7e8d03b8b` | Global | High performance |

### Relay Selection

Configure relay selection in your builder setup:

```yaml
# config.toml
[relay]
  # Primary relay
  primary = "https://relay.ethgas.com"
  
  # Backup relays
  backup = [
    "https://0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c020fac0aa6978b2fd3cc4bf5a76cf2d4d9542a38f6c204@0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c020fac0aa6978b2fd3cc4bf5a76cf2d4d9542a38f6c204",
    "https://0xa15b52576bcbf1072f4a011b0f9854d4dd0f084fecd7c9a3b45f85c7e8d03b8b@0xa15b52576bcbf1072f4a011b0f9854d4dd0f084fecd7c9a3b45f85c7e8d03b8b"
  ]
  
  # Selection strategy
  strategy = "round_robin" # or "priority", "random"
  
  # Timeout settings
  timeout = "2s"
  retry_attempts = 3
```

## Relay API

### Get Relay Status

```bash
curl -X GET "https://api.ethgas.com/api/v1/builder/relay/status" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

### Response

```json
{
  "code": 200,
  "message": "OK",
  "data": {
    "relays": [
      {
        "url": "https://relay.ethgas.com",
        "status": "active",
        "latency": 45,
        "successRate": 99.8,
        "lastSeen": 1640995200
      },
      {
        "url": "https://0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c020fac0aa6978b2fd3cc4bf5a76cf2d4d9542a38f6c204@0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c020fac0aa6978b2fd3cc4bf5a76cf2d4d9542a38f6c204",
        "status": "active",
        "latency": 52,
        "successRate": 99.5,
        "lastSeen": 1640995200
      }
    ],
    "activeRelay": "https://relay.ethgas.com",
    "totalRelays": 2,
    "healthyRelays": 2
  }
}
```

### Configure Relay Preferences

```bash
curl -X POST "https://api.ethgas.com/api/v1/builder/relay/configure" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "primaryRelay": "https://relay.ethgas.com",
    "backupRelays": [
      "https://0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c020fac0aa6978b2fd3cc4bf5a76cf2d4d9542a38f6c204@0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c020fac0aa6978b2fd3cc4bf5a76cf2d4d9542a38f6c204"
    ],
    "selectionStrategy": "round_robin",
    "timeout": 2000,
    "retryAttempts": 3
  }'
```

## Relay Integration

### MEV-Boost Configuration

Configure MEV-boost to use ETHGas relays:

```yaml
# mev-boost config
relay-urls:
  - https://relay.ethgas.com
  - https://0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c020fac0aa6978b2fd3cc4bf5a76cf2d4d9542a38f6c204@0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c020fac0aa6978b2fd3cc4bf5a76cf2d4d9542a38f6c204

relay-timeout: 2s
relay-retries: 3
```

### Builder Integration

Integrate relays with your block builder:

```javascript
class ETHGasBuilder {
    constructor(relayUrls) {
        this.relayUrls = relayUrls;
        this.currentRelayIndex = 0;
    }
    
    async submitBlock(blockData) {
        const relayUrl = this.getNextRelay();
        
        try {
            const response = await fetch(`${relayUrl}/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(blockData)
            });
            
            if (response.ok) {
                return await response.json();
            } else {
                // Try backup relay
                return await this.submitToBackupRelay(blockData);
            }
        } catch (error) {
            console.error('Relay submission failed:', error);
            return await this.submitToBackupRelay(blockData);
        }
    }
    
    getNextRelay() {
        const relay = this.relayUrls[this.currentRelayIndex];
        this.currentRelayIndex = (this.currentRelayIndex + 1) % this.relayUrls.length;
        return relay;
    }
    
    async submitToBackupRelay(blockData) {
        // Implementation for backup relay submission
        for (let i = 0; i < this.relayUrls.length; i++) {
            if (i === this.currentRelayIndex) continue;
            
            try {
                const response = await fetch(`${this.relayUrls[i]}/submit`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(blockData)
                });
                
                if (response.ok) {
                    return await response.json();
                }
            } catch (error) {
                console.error(`Backup relay ${i} failed:`, error);
            }
        }
        
        throw new Error('All relays failed');
    }
}

// Usage
const builder = new ETHGasBuilder([
    'https://relay.ethgas.com',
    'https://0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c020fac0aa6978b2fd3cc4bf5a76cf2d4d9542a38f6c204@0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c020fac0aa6978b2fd3cc4bf5a76cf2d4d9542a38f6c204'
]);

const blockData = {
    slot: 12345678,
    parentHash: "0x...",
    timestamp: 1640995200,
    transactions: ["0x...", "0x..."]
};

builder.submitBlock(blockData)
    .then(result => console.log('Block submitted:', result))
    .catch(error => console.error('Submission failed:', error));
```

## Relay Monitoring

### Health Checks

```bash
# Check relay health
curl -X GET "https://api.ethgas.com/api/v1/builder/relay/health"

# Check specific relay
curl -X GET "https://relay.ethgas.com/health"
```

### Performance Metrics

Monitor relay performance:

```json
{
  "relay": "https://relay.ethgas.com",
  "metrics": {
    "uptime": 99.9,
    "averageLatency": 45,
    "successRate": 99.8,
    "blocksSubmitted": 1234,
    "revenueGenerated": "12.5",
    "lastBlockTime": 1640995200
  }
}
```

## Relay Selection Strategies

### Round Robin

```javascript
function roundRobinRelay(relays, currentIndex) {
    return relays[currentIndex % relays.length];
}
```

### Priority Based

```javascript
function priorityRelay(relays) {
    // Sort by performance metrics
    return relays.sort((a, b) => b.successRate - a.successRate)[0];
}
```

### Latency Based

```javascript
function latencyRelay(relays) {
    return relays.reduce((best, current) => 
        current.latency < best.latency ? current : best
    );
}
```

## Error Handling

### Relay Failures

```javascript
async function handleRelayFailure(relayUrl, error) {
    console.error(`Relay ${relayUrl} failed:`, error);
    
    // Switch to backup relay
    const backupRelay = getBackupRelay();
    
    // Retry with backup
    try {
        return await submitToRelay(backupRelay, blockData);
    } catch (backupError) {
        console.error('Backup relay also failed:', backupError);
        throw new Error('All relays unavailable');
    }
}
```

### Timeout Handling

```javascript
async function submitWithTimeout(relayUrl, blockData, timeout = 2000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    
    try {
        const response = await fetch(`${relayUrl}/submit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blockData),
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        return await response.json();
    } catch (error) {
        clearTimeout(timeoutId);
        if (error.name === 'AbortError') {
            throw new Error('Relay timeout');
        }
        throw error;
    }
}
```

## Best Practices

### Relay Management
1. **Use Multiple Relays** - Always have backup relays
2. **Monitor Performance** - Track latency and success rates
3. **Implement Failover** - Automatic switching on failures
4. **Optimize Selection** - Choose relays based on performance

### Configuration
1. **Set Timeouts** - Configure appropriate timeouts
2. **Retry Logic** - Implement retry mechanisms
3. **Load Balancing** - Distribute load across relays
4. **Health Monitoring** - Regular health checks

### Security
1. **Validate Responses** - Verify relay responses
2. **Secure Connections** - Use HTTPS for all connections
3. **Rate Limiting** - Respect relay rate limits
4. **Error Logging** - Log all relay interactions

## Related Documentation

- [Builder Setup](/docs/api/builder/setup) - Builder configuration
- [Builder Registration](/docs/api/builder/registration) - Registration process
- [Builder Building](/docs/api/builder/building) - Block building
- [Builder Fees](/docs/api/builder/fees) - Fee management 