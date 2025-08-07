---
sidebar_position: 5
---

# Validator Monitoring

Monitor your validator performance and health on the ETHGas platform.

## Overview

Validator monitoring provides real-time insights into your validator's performance, including attestation rates, block proposals, rewards, and system health.

## Monitoring Dashboard

### Key Metrics

| Metric | Description | Target |
|--------|-------------|--------|
| Attestation Rate | Percentage of successful attestations | >99% |
| Block Proposals | Number of blocks proposed | Varies |
| Rewards | ETH earned from validation | Track daily |
| Uptime | Validator online time | >99.9% |
| Network Participation | Participation in consensus | >99% |

### Performance Indicators

#### Attestation Performance
- **Attestation Rate**: Percentage of successful attestations
- **Attestation Delay**: Time between slot and attestation
- **Missed Attestations**: Number of failed attestations

#### Block Proposal Performance
- **Proposal Rate**: Percentage of successful proposals
- **Block Rewards**: ETH earned from block proposals
- **MEV Rewards**: Additional rewards from MEV extraction

#### Network Health
- **Peer Count**: Number of connected peers
- **Sync Status**: Synchronization with network
- **Network Latency**: Response time to network

## Monitoring Tools

### ETHGas Dashboard

Access your validator metrics through the ETHGas dashboard:

1. **Login** to your ETHGas account
2. **Navigate** to the Validator section
3. **View** real-time performance metrics
4. **Set up** alerts for critical events

### API Monitoring

Monitor your validator programmatically:

```bash
# Get validator status
curl -X GET "https://api.ethgas.com/api/v1/validator/status" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"

# Get performance metrics
curl -X GET "https://api.ethgas.com/api/v1/validator/metrics" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

### WebSocket Updates

Receive real-time updates via WebSocket:

```javascript
const ws = new WebSocket('wss://ws.ethgas.com');

ws.onopen = function() {
  // Subscribe to validator updates
  ws.send(JSON.stringify({
    cmd: 'subscribe',
    channel: 'validator_updates',
    validatorId: 'your_validator_id'
  }));
};

ws.onmessage = function(event) {
  const data = JSON.parse(event.data);
  console.log('Validator update:', data);
};
```

## Alert Configuration

### Critical Alerts

| Alert | Condition | Action |
|-------|-----------|--------|
| Validator Offline | Uptime < 95% | Immediate notification |
| Low Attestation Rate | Rate < 95% | Check within 1 hour |
| High Latency | Delay > 2 seconds | Investigate immediately |
| Sync Issues | Not synced for > 5 minutes | Restart if needed |

### Warning Alerts

| Alert | Condition | Action |
|-------|-----------|--------|
| Performance Degradation | Attestation rate < 99% | Monitor closely |
| Network Issues | Peer count < 50 | Check connectivity |
| High Resource Usage | CPU/Memory > 80% | Optimize configuration |

## Performance Optimization

### Attestation Optimization

1. **Reduce Latency**
   - Use low-latency internet connection
   - Optimize network routing
   - Consider colocation services

2. **Improve Reliability**
   - Use redundant internet connections
   - Implement automatic failover
   - Monitor system resources

3. **Maximize Rewards**
   - Participate in MEV opportunities
   - Optimize fee recipient settings
   - Monitor gas price trends

### Block Proposal Optimization

1. **MEV Extraction**
   - Configure MEV-boost
   - Monitor block rewards
   - Optimize builder selection

2. **Gas Optimization**
   - Set appropriate gas limits
   - Monitor gas price trends
   - Optimize transaction ordering

## Troubleshooting

### Common Issues

#### Validator Offline
1. Check internet connectivity
2. Verify client is running
3. Check system resources
4. Review error logs

#### Low Attestation Rate
1. Check network latency
2. Verify client configuration
3. Monitor system performance
4. Check for network issues

#### Sync Problems
1. Verify peer connections
2. Check disk space
3. Review client logs
4. Consider resync if needed

### Diagnostic Commands

```bash
# Check validator status
curl -X GET "https://api.ethgas.com/api/v1/validator/status"

# Get detailed metrics
curl -X GET "https://api.ethgas.com/api/v1/validator/metrics/detailed"

# Check network health
curl -X GET "https://api.ethgas.com/api/v1/validator/network/health"
```

## Best Practices

1. **Monitor Continuously** - Set up 24/7 monitoring
2. **Set Alerts** - Configure appropriate alert thresholds
3. **Document Issues** - Keep logs of problems and solutions
4. **Test Regularly** - Verify monitoring systems work
5. **Plan for Failures** - Have backup procedures ready

## Related Documentation

- [Validator Setup](/docs/validators/setup) - Initial configuration
- [Validator Registration](/docs/validators/registration) - Registration process
- [Validator Deposits](/docs/validators/deposits) - Deposit management 