---
sidebar_position: 3
---

# Validator Deposits

Manage your ETH collateral deposits to secure preconfirmation commitments and participate in the ETHGas ecosystem.

## Deposit Overview

Validators must deposit ETH as collateral to participate in preconfirmation commitments. This collateral:

- **Secures commitments** - Ensures validators fulfill their preconfirmation obligations
- **Enables participation** - Required to register and earn rewards
- **Provides protection** - Protects traders from validator misbehavior
- **Generates returns** - Earn rewards through gas trading opportunities

## Collateral Requirements

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="mainnet" label="MainNet" default>

### MainNet Collateral

**Contract Address**: `0x41c95AB9DBAC21B3992963Adf0e90F6478364b88`

**Requirements**:
- **Minimum**: 1 ETH per validator
- **Recommended**: 2-5 ETH per validator for optimal participation
- **Maximum**: No upper limit (based on your risk tolerance)

**Deposit Method**: 
- **Primary**: [ETHGas Website](https://ethgas.com) (recommended)
- **Direct**: Smart contract interaction

</TabItem>
<TabItem value="testnet" label="TestNet">

### TestNet Collateral

**Contract Address**: `0xe8bfB84b14c383b94365a895fc8bfA36dE236dc8`

**Requirements**:
- **Minimum**: 0.1 ETH per validator (testnet)
- **Recommended**: 0.5-1 ETH per validator for testing
- **Maximum**: No upper limit for testing purposes

**Deposit Method**:
- **Primary**: [ETHGas TestNet](https://testnet.ethgas.com) (recommended)
- **Direct**: Smart contract interaction

</TabItem>
</Tabs>

## Deposit Process

### Step 1: Choose Your Environment

Select the appropriate network for your deposit:

- **MainNet**: For production validators with real ETH
- **TestNet**: For development and testing with test ETH

### Step 2: Prepare Your Deposit

Ensure you have sufficient ETH for your deposit:

```bash
# Check your ETH balance
curl -X GET "https://api.ethgas.com/api/v1/user/balance" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"

# Response
{
  "code": 200,
  "message": "OK",
  "data": {
    "ethBalance": "5.5",
    "collateralDeposited": "2.0",
    "availableForDeposit": "3.5"
  }
}
```

### Step 3: Make Your Deposit

<Tabs>
<TabItem value="website-deposit" label="Website Deposit" default>

**Recommended Method**: Use the ETHGas website

1. **Visit the platform**:
   - MainNet: [ethgas.com](https://ethgas.com)
   - TestNet: [testnet.ethgas.com](https://testnet.ethgas.com)

2. **Connect your wallet** and navigate to the deposits section

3. **Enter deposit amount** and confirm the transaction

4. **Wait for confirmation** (usually 1-2 block confirmations)

</TabItem>
<TabItem value="contract-deposit" label="Direct Contract">

**Advanced Method**: Direct smart contract interaction

```solidity
// Example contract interaction
interface IEthgasPool {
    function deposit() external payable;
    function withdraw(uint256 amount) external;
}

// Deposit function
function depositCollateral() external payable {
    IEthgasPool pool = IEthgasPool(0x41c95AB9DBAC21B3992963Adf0e90F6478364b88);
    pool.deposit{value: msg.value}();
}
```

</TabItem>
</Tabs>

### Step 4: Verify Your Deposit

Check your deposit status:

```bash
# Verify deposit
curl -X GET "https://api.ethgas.com/api/v1/validator/collateral" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"

# Response
{
  "code": 200,
  "message": "OK",
  "data": {
    "totalDeposited": "2.0",
    "availableForCommitments": "1.8",
    "lockedInCommitments": "0.2",
    "validatorCount": 3,
    "averagePerValidator": "0.67"
  }
}
```

## Collateral Management

### Monitoring Your Deposits

Track your collateral status and performance:

```bash
# Get detailed collateral information
curl -X GET "https://api.ethgas.com/api/v1/validator/collateral/detailed" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"

# Response
{
  "code": 200,
  "message": "OK",
  "data": {
    "deposits": [
      {
        "validatorId": "validator_123",
        "amount": "1.0",
        "depositTime": "2024-01-15T10:30:00Z",
        "status": "active",
        "earnings": "0.05"
      }
    ],
    "totalEarnings": "0.15",
    "apy": "8.5"
  }
}
```

### Withdrawing Collateral

Withdraw your collateral when needed:

<Tabs>
<TabItem value="website-withdraw" label="Website Withdrawal" default>

**Recommended Method**: Use the ETHGas website

1. Navigate to the withdrawals section
2. Enter the amount to withdraw
3. Confirm the transaction
4. Wait for processing (may take several blocks)

</TabItem>
<TabItem value="api-withdraw" label="API Withdrawal">

**Programmatic Method**: Use the API

```bash
# Initiate withdrawal
curl -X POST "https://api.ethgas.com/api/v1/validator/collateral/withdraw" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "amount": "1.0",
    "validatorId": "validator_123"
  }'
```

</TabItem>
</Tabs>

## Risk Management

### Understanding Risks

**Commitment Risk**: If you fail to fulfill preconfirmation commitments, your collateral may be slashed.

**Market Risk**: Collateral value can fluctuate with ETH price movements.

**Technical Risk**: Smart contract risks and potential bugs.

### Best Practices

1. **Start Small**: Begin with minimum deposits and increase gradually
2. **Monitor Performance**: Regularly check your validator performance
3. **Maintain Reserves**: Keep additional ETH for unexpected commitments
4. **Diversify**: Consider spreading deposits across multiple validators
5. **Stay Updated**: Monitor platform updates and security announcements

## Earnings and Rewards

### Revenue Sources

- **Preconfirmation Fees**: Earn from traders seeking guaranteed inclusion
- **Priority Fees**: Collect fees from high-value transactions
- **MEV Opportunities**: Extract value from transaction ordering
- **Platform Rewards**: Additional incentives for active participation

### Performance Tracking

Monitor your earnings and performance:

```bash
# Get earnings summary
curl -X GET "https://api.ethgas.com/api/v1/validator/earnings" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"

# Response
{
  "code": 200,
  "message": "OK",
  "data": {
    "totalEarnings": "0.25",
    "periodEarnings": "0.05",
    "apy": "12.5",
    "breakdown": {
      "preconfFees": "0.15",
      "priorityFees": "0.08",
      "mevRewards": "0.02"
    }
  }
}
```

## Troubleshooting

### Common Issues

**Deposit Failed**
- Verify sufficient ETH balance
- Check gas fees and network congestion
- Ensure correct contract address for your network

**Withdrawal Issues**
- Verify no active commitments are using the collateral
- Check withdrawal timeframes and cooldown periods
- Ensure proper authorization and permissions

**Performance Issues**
- Monitor validator uptime and connectivity
- Check relay endpoint connectivity
- Verify configuration settings

### Support Resources

- **[ETHGas Community](https://discord.gg/ethgas)** - Get help from the community
- **[GitHub Issues](https://github.com/ethgas-developer/ethgas-preconf-commit-boost-module)** - Report technical issues
- **[Platform Status](https://status.ethgas.com)** - Check system status and updates

## Next Steps

After setting up your deposits:

1. **[Registration Guide](/docs/validators/registration)** - Complete your validator registration
2. **[Setup Guide](/docs/validators/setup)** - Configure your validator environment
3. **[Monitoring Guide](/docs/validators/monitoring)** - Track your performance and earnings 