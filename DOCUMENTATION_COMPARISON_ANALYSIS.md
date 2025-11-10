# Documentation Comparison Analysis
## Official Website vs Current Project Documentation

**Comparison Date:** Based on https://developers.ethgas.com/#change-log  
**Current Project Status:** Analysis of `/docs` directory

---

## Executive Summary

This document compares the official ETHGas documentation website with the current project documentation to identify gaps, missing content, and outdated information. The goal is to ensure the project documentation is fully up-to-date and comprehensive.

---

## 1. CHANGELOG COMPARISON

### ✅ Currently Documented (Project)
- 2025-07-08
- 2025-06-26
- 2025-06-18
- 2025-05-14
- 2025-05-06
- 2025-04-16
- 2025-04-02
- 2025-03-28
- 2025-03-25
- 2025-03-15
- 2025-02-21
- 2025-01-12
- 2024-12-01
- 2024-10-01

### ❌ Missing from Project (Official Website)

#### **2025-10-31** - **MISSING**
- Support Ethereum Fusaka upgrade

#### **2025-10-11** - **MISSING**
- Updated contract address for mainnet and hoodi

**Priority:** HIGH - These are recent updates that should be documented

---

## 2. API ENDPOINTS COMPARISON

### 2.1 Authentication Endpoints

#### ✅ Documented in Project
- `POST /api/v1/user/login`
- `POST /api/v1/user/login/verify`
- `POST /api/v1/user/login/refresh`
- `POST /api/v1/user/logout`

**Status:** ✅ Complete

---

### 2.2 User Endpoints

#### ✅ Documented in Project
- `POST /api/v1/user/update`
- `POST /api/v1/user/payoutAddress`
- `POST /api/v1/user/collateralPerSlot`
- `GET /api/v1/user/info`

**Status:** ✅ Complete

---

### 2.3 Account Endpoints

#### ✅ Documented in Project
- `GET /api/v1/user/accounts`
- `GET /api/v1/user/account/{accountId}`
- `GET /api/v1/user/account/{accountId}/txs`
- `GET /api/v1/user/account/txs`
- `POST /api/v1/user/account/transfer/token`

**Status:** ✅ Complete

---

### 2.4 Funding Endpoints

#### ✅ Documented in Project
- `GET /api/v1/p/funding/contractAddress`
- `GET /api/v1/user/funding/deposits`
- `POST /api/v1/user/funding/withdraw`
- `GET /api/v1/p/funding/withdraw/dailyWithdrawLimits`
- `GET /api/v1/user/funding/withdraw/status`
- `GET /api/v1/user/funding/withdraws`

**Status:** ✅ Complete

---

### 2.5 Network & Public Endpoints

#### ✅ Documented in Project
- `GET /api/v1/p/network`
- `GET /api/v1/p/tokens`
- `GET /api/v1/p/user/fees`

**Status:** ✅ Complete

---

### 2.6 Whole Block Markets (Public)

#### ✅ Documented in Project
- `GET /api/v1/p/wholeblock/markets`
- `GET /api/v1/p/wholeblock/positions`
- `GET /api/v1/p/wholeblock/orders`
- `GET /api/v1/p/wholeblock/trades`

**Status:** ✅ Complete

---

### 2.7 Inclusion Preconf Markets (Public)

#### ✅ Documented in Project
- `GET /api/v1/p/inclusion-preconf/markets`
- `GET /api/v1/p/inclusion-preconf/market`
- `GET /api/v1/p/inclusion-preconf/trades`
- `GET /api/v1/p/inclusion-preconf/top-sales`

**Status:** ✅ Complete

---

### 2.8 Whole Block Trading (Authenticated)

#### ✅ Documented in Project
- `POST /api/v1/wholeblock/order`
- `POST /api/v1/wholeblock/cancel-all-orders`
- `POST /api/v1/wholeblock/cancel-batch-orders`
- `POST /api/v1/wholeblock/cancel-order`
- `GET /api/v1/user/wholeblock/all-orders`
- `GET /api/v1/user/wholeblock/orders`
- `GET /api/v1/user/wholeblock/positions`
- `GET /api/v1/user/wholeblock/txs`

**Status:** ✅ Complete

---

### 2.9 Inclusion Preconf Trading (Authenticated)

#### ✅ Documented in Project
- `POST /api/v1/inclusion-preconf/cancel-all-orders`
- `POST /api/v1/inclusion-preconf/cancel-batch-orders`
- `POST /api/v1/inclusion-preconf/cancel-order`
- `POST /api/v1/inclusion-preconf/order`
- `GET /api/v1/user/inclusion-preconf/orders`
- `GET /api/v1/user/inclusion-preconf/all-orders`
- `GET /api/v1/user/inclusion-preconf/positions`
- `GET /api/v1/user/inclusion-preconf/txs`
- `POST /api/v1/user/inclusion-preconf/market/update`

**Status:** ✅ Complete

---

### 2.10 Bundle Submission

#### ✅ Documented in Project
- `POST /api/v1/user/bundle/send`

**Status:** ✅ Complete

---

### 2.11 Slot Bundles

#### ⚠️ Partially Documented

#### ✅ Documented in Project
- `GET /api/v1/slot/bundles`
- `GET /api/v1/account/slot/bundles` (Note: Official shows `/api/v1/slot/account/bundles`)
- `GET /api/v1/slot/forceEmptyBlockSpace`

#### ❓ Needs Verification
- Endpoint path discrepancy: Official shows `/api/v1/slot/account/bundles` but project has `/api/v1/account/slot/bundles`
- Need to verify which is correct

**Status:** ⚠️ Needs Verification

---

### 2.12 Builder Endpoints

#### ⚠️ Partially Documented

#### ✅ Documented in Project
- `POST /api/v1/builder/register`
- `GET /api/v1/builder/signingMessage`
- `POST /api/v1/builder/deregister`
- `GET /api/v1/p/builders`
- `GET /api/v1/user/builder`
- `POST /api/v1/user/delegate/builder`
- `GET /api/v1/user/delegate/builder`
- `GET /api/v1/p/builder/{slot}`
- `GET /api/v1/builder/delegation`
- `POST /api/v1/builder/update/ofac`

#### ❌ Missing from Project
- `POST /api/v1/builder/bundle/reject/{slot}`
- `GET /api/v1/p/builder/bundle/reject/{slot}/{builderAccountId}`

**Status:** ⚠️ Missing 2 endpoints

---

### 2.13 Pricer Endpoints

#### ✅ Documented in Project
- `POST /api/v1/user/delegate/pricer`
- `GET /api/v1/user/pricer`
- `GET /api/v1/pricer/account-tokens`
- `GET /api/v1/pricer/inclusion-preconf/orders`
- `GET /api/v1/pricer/inclusion-preconf/positions`
- `GET /api/v1/pricer/wholeblock/orders`
- `GET /api/v1/pricer/wholeblock/positions`
- `GET /api/v1/pricer/markets/active`

**Status:** ✅ Complete

---

### 2.14 Validator Endpoints

#### ⚠️ Partially Documented

#### ✅ Documented in Project
- `GET /api/v1/user/validators`
- `GET /api/v1/p/validators`
- `POST /api/v1/validator/register`

#### ❌ Missing from Project
- `POST /api/v1/validator/verify`
- `POST /api/v1/validator/settings`
- `POST /api/v1/validator/deregister`
- `GET /api/v1/validator/fees`
- `GET /api/v1/validator/onchain/payout`

**Status:** ❌ Missing 5 endpoints

**Priority:** HIGH - Validator functionality is important

---

### 2.15 SSV Validator Endpoints

#### ❌ Completely Missing

#### Missing from Project (All SSV Endpoints)
- `POST /api/v1/user/ssv/operator/register`
- `POST /api/v1/user/ssv/operator/deregister`
- `POST /api/v1/user/ssv/operator/verify`
- `GET /api/v1/user/ssv/operators`
- `POST /api/v1/user/ssv/operator/validator/register`
- `POST /api/v1/user/ssv/operator/validator/deregister`
- `GET /api/v1/user/ssv/operator/validators`
- `POST /api/v1/user/ssv/operator/validator/update/ofac`

**Status:** ❌ Complete section missing (8 endpoints)

**Priority:** HIGH - SSV is a major validator infrastructure

---

### 2.16 Obol Validator Endpoints

#### ❌ Completely Missing

#### Missing from Project (All Obol Endpoints)
- `POST /api/v1/user/obol/operator/register`
- `POST /api/v1/user/obol/operator/deregister`
- `POST /api/v1/user/obol/operator/verify`
- `POST /api/v1/user/obol/operator/refresh`
- `GET /api/v1/user/obol/operators`
- `GET /api/v1/user/obol/operator/validators`
- `POST /api/v1/user/obol/operator/validator/register`
- `POST /api/v1/user/obol/operator/validator/deregister`
- `POST /api/v1/user/obol/operator/validator/update/ofac`

**Status:** ❌ Complete section missing (9 endpoints)

**Priority:** HIGH - Obol is a major validator infrastructure

---

## 3. LOOKUP TABLES COMPARISON

### 3.1 Error Codes

#### ✅ Documented in Project
- General Error Codes (1, 2, 99, 1000, 1001, 1002, 9999, 10000, 10001, 10010, 10011, 10012)
- Order API Error Codes (102, 104, 107, 108, 109, 110, 111, 112, 113, 114, 115, 120, 122, 191, 192)
- Response Codes (200, 403, 500, 503)

**Status:** ✅ Complete

---

### 3.2 Market Status Codes

#### ✅ Documented in Project
- NOT_STARTED (0)
- ENABLE (1)
- EXPIRED (2)
- TRX_SUBMISSION_ENDED (3)
- FINALIED (4)

**Status:** ✅ Complete

---

### 3.3 Order Information

#### ✅ Documented in Project
- Order Sides (0 = Sell, 1 = Buy)
- Order Status Codes (0, 1, 10, 11, 12, 13, 14, 99)
- Order Types (1 = Market, 2 = Limit, 3 = Fill-Or-Kill)

**Status:** ✅ Complete

---

### 3.4 Token IDs

#### ✅ Documented in Project
- ETH (Token ID: 1, Quantity Step: 0.00001, Minimum Quantity: 0.001, Pricer Step: 0.0001)

**Status:** ✅ Complete

---

### 3.5 Transaction Types

#### ✅ Documented in Project
- All transaction types (1-15) are documented

**Status:** ✅ Complete

---

### 3.6 Market Types

#### ✅ Documented in Project
- Inclusion Preconf Market (1)
- Whole Block Market (2)

**Status:** ✅ Complete

---

### 3.7 Action Types

#### ✅ Documented in Project
- NewEpoch
- MarketExpiry
- Snapshot
- BlockBuilderChanged
- BundleSubmissionDeadline

**Status:** ✅ Complete

---

### 3.8 Builder Registration Result

#### ✅ Documented in Project
- OK (0)
- NOT_FOUND (1)
- SIGNATURE_INVALID (2)
- ALREADY_REGISTERED (3)

**Status:** ✅ Complete

---

## 4. WEB socket DOCUMENTATION

### 4.1 WebSocket Structure

#### ✅ Documented in Project
- Message structure
- Commands (subscribe, unsubscribe, query, login)
- Channels (Public and Private)
- Query types

**Status:** ✅ Complete (based on file structure)

**Note:** Need to verify completeness by reading WebSocket documentation files

---

## 5. DATA TYPES DOCUMENTATION

### ✅ Documented in Project
- User data types
- Account data types
- Market data types
- Order data types
- Token data types

**Status:** ✅ Complete (based on file structure)

---

## 6. SUMMARY OF FINDINGS

### 6.1 Critical Missing Content (HIGH PRIORITY)

1. **Changelog Entries (2 missing)**
   - 2025-10-31: Support Ethereum Fusaka upgrade
   - 2025-10-11: Updated contract address for mainnet and hoodi

2. **SSV Validator Section (COMPLETE SECTION MISSING)**
   - 8 endpoints completely missing
   - No documentation file exists
   - Should be a major section in the documentation

3. **Obol Validator Section (COMPLETE SECTION MISSING)**
   - 9 endpoints completely missing
   - No documentation file exists
   - Should be a major section in the documentation

4. **Validator Endpoints (5 missing)**
   - `POST /api/v1/validator/verify`
   - `POST /api/v1/validator/settings`
   - `POST /api/v1/validator/deregister`
   - `GET /api/v1/validator/fees`
   - `GET /api/v1/validator/onchain/payout`

5. **Builder Endpoints (2 missing)**
   - `POST /api/v1/builder/bundle/reject/{slot}`
   - `GET /api/v1/p/builder/bundle/reject/{slot}/{builderAccountId}`

### 6.2 Needs Verification (MEDIUM PRIORITY)

1. **Slot Bundles Endpoint Path**
   - Project has: `/api/v1/account/slot/bundles`
   - Official shows: `/api/v1/slot/account/bundles`
   - Need to verify which is correct

2. **Contract Addresses**
   - Changelog mentions updated contract addresses (2025-10-11)
   - Need to verify if contract addresses in documentation are up-to-date

### 6.3 Complete Sections (LOW PRIORITY - Verification Only)

1. **WebSocket Documentation**
   - Appears complete but needs thorough review
   - Verify all channels and query types are documented

2. **Data Types**
   - Appears complete but needs verification
   - Check if all response structures match official documentation

---

## 7. RECOMMENDATIONS

### Priority 1: Add Missing Changelog Entries
- Add 2025-10-31 entry (Ethereum Fusaka upgrade)
- Add 2025-10-11 entry (Contract address updates)

### Priority 2: Create SSV Validator Documentation
- Create new documentation file: `docs/api/validator/ssv/index.md`
- Document all 8 SSV operator and validator endpoints
- Add to sidebar navigation
- Include code examples (HTTP and Python)

### Priority 3: Create Obol Validator Documentation
- Create new documentation file: `docs/api/validator/obol/index.md`
- Document all 9 Obol operator and validator endpoints
- Add to sidebar navigation
- Include code examples (HTTP and Python)

### Priority 4: Complete Validator Endpoints
- Add missing 5 validator endpoints to existing validator documentation
- Verify all validator endpoints are properly documented

### Priority 5: Complete Builder Endpoints
- Add missing 2 builder bundle reject endpoints
- Verify endpoint paths and parameters

### Priority 6: Verify and Update
- Verify slot bundle endpoint paths
- Update contract addresses if needed (mainnet and hoodi)
- Review WebSocket documentation for completeness
- Verify all data types match official documentation

---

## 8. FILE STRUCTURE RECOMMENDATIONS

### Suggested New Files

```
docs/
  api/
    validator/
      index.md (update with missing endpoints)
      ssv/
        index.md (NEW - SSV Validator documentation)
      obol/
        index.md (NEW - Obol Validator documentation)
    builder/
      registration.mdx (update with bundle reject endpoints)
  changelog/
    index.md (add missing entries)
```

### Sidebar Updates Needed

Update `sidebars.ts` to include:
- SSV Validator section
- Obol Validator section
- Ensure all new endpoints are accessible

---

## 9. DETAILED ENDPOINT COMPARISON

### Endpoints on Official Website: ~90 endpoints
### Endpoints in Project: ~73 endpoints
### Missing Endpoints: ~17 endpoints

**Missing Endpoint Breakdown:**
- SSV Validator: 8 endpoints
- Obol Validator: 9 endpoints
- Validator: 5 endpoints
- Builder: 2 endpoints
- Slot Bundles: 1 endpoint (path verification needed)

---

## 10. NEXT STEPS

1. **Review this analysis** with the team
2. **Prioritize** which missing content to add first
3. **Create implementation plan** for adding missing documentation
4. **Verify** endpoint paths and contract addresses with official API
5. **Update** documentation systematically
6. **Test** all code examples to ensure they work
7. **Review** for consistency and accuracy

---

## 11. NOTES

- The official website structure shows SSV and Obol as separate major sections
- These should be prominent in the documentation, not hidden
- Validator infrastructure (SSV, Obol) is a key feature of ETHGas
- Missing these sections could lead to incomplete user experience
- Contract address updates are critical for mainnet usage

---

**End of Analysis**

*This comparison is based on the official ETHGas documentation website as of the comparison date. Some endpoints or details may have changed since this analysis was created. Always verify with the official API documentation when making updates.*

