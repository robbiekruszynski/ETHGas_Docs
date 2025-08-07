---
sidebar_position: 5
---

# Builder Fees

Understand fee structures and revenue distribution for block builders on ETHGas.

## Overview

Block builders earn revenue through various fee mechanisms including priority fees, MEV extraction, and platform rewards. This guide covers fee structures, calculations, and optimization strategies.

## Fee Types

### Priority Fees

Priority fees are paid by users to prioritize their transactions in blocks:

```json
{
  "feeType": "priority",
  "amount": "1000000000",
  "unit": "wei",
  "description": "User-paid priority fee"
}
```

### MEV Fees

MEV (Maximal Extractable Value) fees from arbitrage, liquidations, and other opportunities:

```json
{
  "feeType": "mev",
  "amount": "5000000000000000000",
  "unit": "wei",
  "description": "MEV extraction revenue"
}
```

### Platform Fees

ETHGas platform fees for successful block submissions:

```json
{
  "feeType": "platform",
  "amount": "100000000000000000",
  "unit": "wei",
  "description": "Platform reward"
}
```

## Fee Calculation

### Priority Fee Calculation

```javascript
function calculatePriorityFees(transactions) {
    return transactions.reduce((total, tx) => {
        const priorityFee = BigInt(tx.maxPriorityFeePerGas || 0);
        const gasUsed = BigInt(tx.gasUsed || 0);
        return total + (priorityFee * gasUsed);
    }, BigInt(0));
}

// Example
const transactions = [
    {
        maxPriorityFeePerGas: "1000000000",
        gasUsed: "21000"
    },
    {
        maxPriorityFeePerGas: "2000000000",
        gasUsed: "65000"
    }
];

const totalPriorityFees = calculatePriorityFees(transactions);
console.log(`Total priority fees: ${totalPriorityFees} wei`);
```

### MEV Fee Calculation

```javascript
function calculateMEVFees(blockData) {
    const { coinbase, transactions } = blockData;
    
    // Calculate total value transferred
    const totalValue = transactions.reduce((sum, tx) => {
        return sum + BigInt(tx.value || 0);
    }, BigInt(0));
    
    // Calculate MEV (simplified)
    const mevFee = totalValue * BigInt(5) / BigInt(100); // 5% MEV
    
    return mevFee;
}
```

### Total Block Revenue

```javascript
function calculateBlockRevenue(blockData) {
    const priorityFees = calculatePriorityFees(blockData.transactions);
    const mevFees = calculateMEVFees(blockData);
    const platformFees = BigInt("100000000000000000"); // Fixed platform fee
    
    return {
        priorityFees,
        mevFees,
        platformFees,
        total: priorityFees + mevFees + platformFees
    };
}
```

## Fee Distribution

### Builder Revenue Split

| Component | Percentage | Description |
|-----------|------------|-------------|
| Priority Fees | 100% | Full priority fees to builder |
| MEV Fees | 90% | 90% of MEV to builder, 10% to platform |
| Platform Fees | 100% | Full platform fees to builder |

### Revenue Calculation Example

```javascript
function calculateBuilderRevenue(blockData) {
    const { priorityFees, mevFees, platformFees } = calculateBlockRevenue(blockData);
    
    // Builder gets 100% of priority fees
    const builderPriorityFees = priorityFees;
    
    // Builder gets 90% of MEV fees
    const builderMEVFees = mevFees * BigInt(90) / BigInt(100);
    
    // Builder gets 100% of platform fees
    const builderPlatformFees = platformFees;
    
    const totalBuilderRevenue = builderPriorityFees + builderMEVFees + builderPlatformFees;
    
    return {
        priorityFees: builderPriorityFees,
        mevFees: builderMEVFees,
        platformFees: builderPlatformFees,
        total: totalBuilderRevenue,
        breakdown: {
            priorityPercentage: 100,
            mevPercentage: 90,
            platformPercentage: 100
        }
    };
}
```

## Fee API

### Get Fee Information

```bash
curl -X GET "https://api.ethgas.com/api/v1/builder/fees" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

### Response

```json
{
  "code": 200,
  "message": "OK",
  "data": {
    "feeStructure": {
      "priorityFees": {
        "builderShare": 100,
        "platformShare": 0,
        "description": "Full priority fees to builder"
      },
      "mevFees": {
        "builderShare": 90,
        "platformShare": 10,
        "description": "90% MEV to builder, 10% to platform"
      },
      "platformFees": {
        "builderShare": 100,
        "platformShare": 0,
        "description": "Full platform fees to builder"
      }
    },
    "currentRates": {
      "averagePriorityFee": "1500000000",
      "averageMEVFee": "5000000000000000000",
      "platformFee": "100000000000000000"
    },
    "revenueStats": {
      "totalRevenue": "12500000000000000000",
      "blocksSubmitted": 1234,
      "averageRevenuePerBlock": "10129659611000000"
    }
  }
}
```

### Get Revenue History

```bash
curl -X GET "https://api.ethgas.com/api/v1/builder/fees/history" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -G \
  -d "startDate=1640995200" \
  -d "endDate=1641081600"
```

### Response

```json
{
  "code": 200,
  "message": "OK",
  "data": {
    "revenueHistory": [
      {
        "date": "2024-01-01",
        "blocksSubmitted": 45,
        "priorityFees": "67500000000000000",
        "mevFees": "2250000000000000000",
        "platformFees": "4500000000000000000",
        "totalRevenue": "6817500000000000000"
      },
      {
        "date": "2024-01-02",
        "blocksSubmitted": 52,
        "priorityFees": "78000000000000000",
        "mevFees": "2600000000000000000",
        "platformFees": "5200000000000000000",
        "totalRevenue": "7878000000000000000"
      }
    ],
    "summary": {
      "totalBlocks": 97,
      "totalRevenue": "14695500000000000000",
      "averageRevenuePerBlock": "151500000000000000"
    }
  }
}
```

## Fee Optimization

### Priority Fee Optimization

```javascript
function optimizePriorityFees(transactions) {
    // Sort transactions by priority fee per gas
    const sortedTransactions = transactions.sort((a, b) => {
        const feeA = BigInt(a.maxPriorityFeePerGas || 0);
        const feeB = BigInt(b.maxPriorityFeePerGas || 0);
        return feeB > feeA ? 1 : -1;
    });
    
    // Calculate optimal gas allocation
    const maxGasLimit = BigInt(30000000);
    let allocatedGas = BigInt(0);
    const selectedTransactions = [];
    
    for (const tx of sortedTransactions) {
        const gasUsed = BigInt(tx.gasUsed || 0);
        
        if (allocatedGas + gasUsed <= maxGasLimit) {
            selectedTransactions.push(tx);
            allocatedGas += gasUsed;
        }
    }
    
    return selectedTransactions;
}
```

### MEV Optimization

```javascript
function optimizeMEV(transactions) {
    // Identify MEV opportunities
    const mevOpportunities = transactions.filter(tx => {
        // Check for arbitrage, liquidations, etc.
        return tx.type === 'arbitrage' || tx.type === 'liquidation';
    });
    
    // Sort by potential MEV
    const sortedOpportunities = mevOpportunities.sort((a, b) => {
        return BigInt(b.potentialMEV || 0) - BigInt(a.potentialMEV || 0);
    });
    
    return sortedOpportunities;
}
```

## Fee Monitoring

### Real-time Fee Tracking

```javascript
class FeeMonitor {
    constructor() {
        this.feeHistory = [];
        this.currentFees = {
            priority: BigInt(0),
            mev: BigInt(0),
            platform: BigInt(0)
        };
    }
    
    updateFees(blockData) {
        const fees = calculateBlockRevenue(blockData);
        
        this.currentFees = {
            priority: fees.priorityFees,
            mev: fees.mevFees,
            platform: fees.platformFees
        };
        
        this.feeHistory.push({
            timestamp: Date.now(),
            ...fees
        });
        
        // Keep only last 1000 entries
        if (this.feeHistory.length > 1000) {
            this.feeHistory.shift();
        }
    }
    
    getAverageFees(duration = 3600000) { // 1 hour default
        const now = Date.now();
        const recentFees = this.feeHistory.filter(entry => 
            now - entry.timestamp < duration
        );
        
        if (recentFees.length === 0) return null;
        
        const totalPriority = recentFees.reduce((sum, entry) => 
            sum + entry.priorityFees, BigInt(0)
        );
        const totalMEV = recentFees.reduce((sum, entry) => 
            sum + entry.mevFees, BigInt(0)
        );
        const totalPlatform = recentFees.reduce((sum, entry) => 
            sum + entry.platformFees, BigInt(0)
        );
        
        return {
            averagePriority: totalPriority / BigInt(recentFees.length),
            averageMEV: totalMEV / BigInt(recentFees.length),
            averagePlatform: totalPlatform / BigInt(recentFees.length),
            totalBlocks: recentFees.length
        };
    }
}

// Usage
const feeMonitor = new FeeMonitor();

// Update fees when block is submitted
feeMonitor.updateFees(blockData);

// Get average fees for last hour
const averageFees = feeMonitor.getAverageFees();
console.log('Average fees:', averageFees);
```

## Fee Reporting

### Daily Revenue Report

```javascript
async function generateDailyReport(date) {
    const response = await fetch(`https://api.ethgas.com/api/v1/builder/fees/report?date=${date}`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    });
    
    const report = await response.json();
    
    console.log('Daily Revenue Report:');
    console.log(`Date: ${report.date}`);
    console.log(`Blocks Submitted: ${report.blocksSubmitted}`);
    console.log(`Total Revenue: ${report.totalRevenue} wei`);
    console.log(`Priority Fees: ${report.priorityFees} wei`);
    console.log(`MEV Fees: ${report.mevFees} wei`);
    console.log(`Platform Fees: ${report.platformFees} wei`);
    
    return report;
}
```

### Monthly Summary

```javascript
async function generateMonthlySummary(year, month) {
    const response = await fetch(`https://api.ethgas.com/api/v1/builder/fees/summary?year=${year}&month=${month}`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    });
    
    const summary = await response.json();
    
    console.log('Monthly Summary:');
    console.log(`Period: ${summary.year}-${summary.month}`);
    console.log(`Total Blocks: ${summary.totalBlocks}`);
    console.log(`Total Revenue: ${summary.totalRevenue} wei`);
    console.log(`Average Revenue per Block: ${summary.averageRevenuePerBlock} wei`);
    console.log(`Best Day: ${summary.bestDay} (${summary.bestDayRevenue} wei)`);
    
    return summary;
}
```

## Best Practices

### Fee Optimization
1. **Monitor Gas Prices** - Track gas price trends
2. **Optimize Transaction Ordering** - Maximize priority fees
3. **Identify MEV Opportunities** - Focus on high-value transactions
4. **Balance Speed vs Revenue** - Optimize for both

### Revenue Tracking
1. **Real-time Monitoring** - Track fees as they come in
2. **Historical Analysis** - Analyze trends over time
3. **Performance Metrics** - Track revenue per block
4. **Comparative Analysis** - Compare with other builders

### Tax Considerations
1. **Track All Revenue** - Document all fee income
2. **Separate Fee Types** - Categorize different fee types
3. **Consult Tax Professional** - Get professional tax advice
4. **Maintain Records** - Keep detailed financial records

## Related Documentation

- [Builder Setup](/docs/api/builder/setup) - Builder configuration
- [Builder Registration](/docs/api/builder/registration) - Registration process
- [Builder Building](/docs/api/builder/building) - Block building
- [Builder Relay](/docs/api/builder/relay) - Relay configuration 