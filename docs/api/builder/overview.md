import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<!-- ---
sidebar_position: 1
--- -->

# Builders & Sequencers

<!-- :::info Role scope
This page focuses on Builders. For Developers see `/docs/developers/overview`. 
For Validators see `/docs/validators/overview`. 
::: -->

ETHGas provides infrastructure for block builders and sequencers to participate in the gas trading ecosystem. This page summarizes roles and integration touchpoints.

## Block Building Package

Builders may use their own software or the ETHGas-modified rbuilder (preconf-builder) for ETHGas-specific flows:

- **Stream preconf transactions**
- **Build compliant blocks** (respect bundle positioning and commitments)
- **Fill remaining blockspace** with mempool transactions

### Resources

- **Preconf Builder (optional)**: `https://github.com/ethgas-developer/preconf-builder`
- **Builder Scripts**: `https://github.com/ethgas-developer/ethgas-builder-scripts`

## Who Builds the Blocks?

Block owners may self-build or delegate to specialist builders. ETHGas can act as a fallback builder when not delegated or if a submitted block is non‑conforming.

## Delegated Building

Block owners can delegate to multiple specialist builders who compete to deliver best value via auction mechanisms (tips/priority fees accrue to the block owner).

## Empty Block

If no trades should be included, block owners can indicate an empty block preference (a minimal self‑transfer may still be required by validators).

## Integration Requirements

- **Builder software** (own or preconf-builder)
- **Relay submission**
- **Commitment compliance** (include preconf bundles, bundle positioning, payout to block owner)
- **Slot timing performance**

## API Endpoints

### POST /api/v1/builder/register

**Purpose**: Register builder public keys with the ETHGas platform.

<details>
<summary style={{listStyle: 'none'}}>View Details</summary>
#### Code Sample

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X POST "https://mainnet.app.ethgas.com/api/v1/builder/register" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <your-auth-token>" \
  -d '{
    "publicKeys": "0x1234567890abcdef1234567890abcdef12345678,0xabcdef1234567890abcdef1234567890abcdef12345678",
    "signatures": "0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890,0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890"
  }'
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/builder/register"

payload = {
    'publicKeys': '0x123456789abcdef...,0x234134...',
    'signatures': '2asdfjghadg,xghlktdhj'
}

headers = {
    'Authorization': 'Bearer <your-auth-token>',
    'Content-Type': 'application/json'
}

response = requests.post(url, headers=headers, params=payload)

print(response.text)
```

</TabItem>
</Tabs>


#### Request Parameters

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| publicKeys | YES | string | Comma separated list of builder bls public key in hex |
| signatures | YES | string | Comma separated list of bls signatures in hex |

#### Response Example

```json
{
    "success": true,
    "data": {
        "results": [
            {
                "publicKey": "0xa25addc4fc16f72ca667177d7a5533d4287b3574f0127ffc227095e90b0b1fd0dd48c421e04e613d2298fe4dac83a2a5",
                "result": {
                    "result": 0,
                    "description": "Success"
                }
            },
            {
                "publicKey": "0xaea551245bd0512de5222834db5f3bc9cba1a04a2e8f5de0d4fea843c9fee1af31bb9373ba6b9da08a0820f695c6ab6e",
                "result": {
                    "result": 0,
                    "description": "Success"
                }
            }
        ]
    }
}
```

#### Response Body

| Field | Type | Description |
|-------|------|-------------|
| success | boolean | Success status of the request |
| data | object | Response data container |
| └ results | object[] | Results of builder public key registrations |
| └└ publicKey | string | Public key in the registration |
| └└ result | object | Builder Registration Result |
| └└└ result | integer | Builder Registration Result Code |
| └└└ description | string | Builder Registration Result Description |


:::info
 Note: Please refer to look up table to check the builder registration result enum
:::
</details>





### GET /api/v1/builder/signingMessage

**Purpose**: Retrieve the message that needs to be signed by the builder's private key for registration verification.
<details>
<summary style={{listStyle: 'none'}}>View Details</summary>

<Tabs>
<TabItem value="http" label="HTTP" default>


```bash
curl -X GET "https://mainnet.app.ethgas.com/api/v1/builder/signingMessage" \
  -H "Authorization: Bearer <your-auth-token>"
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/builder/signingMessage"

headers = {
    'Authorization': 'Bearer <your-auth-token>',
    'Content-Type': 'application/json'

}

response = requests.get(url, headers=headers)

print(response.text)
```

</TabItem>
</Tabs>


#### Response Example

```json
{
    "success": true,
    "data": {
        "message": {
            "eoaAddress": "0xd065335192d920ce2de4a88557f232943a901a9f"
        }
    }
}
```

#### Response Body

| Field | Type | Description |
|-------|------|-------------|
| success | boolean | Success status of the request |
| data | object | Response data container |
| └ message | object | Signing message |
| └└ eoaAddress | string | EOA address of current user |

</details>

### POST /api/v1/builder/deregister

**Purpose**: Deregister builder public keys.

<details>
<summary style={{listStyle: 'none'}}>View Details</summary>

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X POST "https://mainnet.app.ethgas.com/api/v1/builder/deregister" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <your-auth-token>" \
  -d '{
    "publicKeys": "0x123456789abcdef...,0x234134..."
  }'
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/builder/deregister"

payload = {
    'publicKeys': '0x123456789abcdef...,0x234134...'
}

headers = {
    'Authorization': 'Bearer <your-auth-token>',
    'Content-Type': 'application/json'
}

response = requests.post(url, headers=headers, params=payload)

print(response.text)
```

</TabItem>
</Tabs>


#### Request Parameters

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| publicKeys | YES | string | Comma separated list of builder bls public keys in hex |

#### Response Example

```json
{
    "success": true,
    "data": {
        "results": [
            {
                "publicKey": "0xa25addc4fc16f72ca667177d7a5533d4287b3574f0127ffc227095e90b0b1fd0dd48c421e04e613d2298fe4dac83a2a5",
                "result": {
                    "result": 0,
                    "description": "Success"
                }
            }
        ]
    }
}
```

#### Response Body

| Field | Type | Description |
|-------|------|-------------|
| success | boolean | Success status of the request |
| data | object | Response data container |
| └ results | object[] | Results of builder public key deregistrations |
| └└ publicKey | string | Public key in the deregistration |
| └└ result | object | Builder Registration Result |
| └└└ result | integer | Builder Registration Result Code |
| └└└ description | string | Builder Registration Result Description |

</details>

### GET /api/v1/p/builders

Get list of all registered builders.

<details>
<summary style={{listStyle: 'none'}}>View Details</summary>

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X GET "https://mainnet.app.ethgas.com/api/v1/p/builders" \
  -H "Authorization: Bearer <your-auth-token>"
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/p/builders"


response = requests.get(url, headers=headers)

print(response.text)
```

</TabItem>
</Tabs>

**Purpose**: Retrieve a list of all builders currently registered on the ETHGas platform.

#### Response Example

```json
{
    "success": true,
    "data": {
        "builders": [
            {
                "publicKey": "0xa25addc4fc16f72ca667177d7a5533d4287b3574f0127ffc227095e90b0b1fd0dd48c421e04e613d2298fe4dac83a2a5",
                "status": "active"
            }
        ]
    }
}
```

#### Response Body

| Field | Type | Description |
|-------|------|-------------|
| success | boolean | Success status of the request |
| data | object | Response data container |
| └ builders | array | Array of builder objects |
| └└ publicKey | string | Builder's BLS public key |
| └└ status | string | Builder status (active/inactive) |

</details>

### GET /api/v1/user/builder

Get current user's builder information.

<details>
<summary style={{listStyle: 'none'}}>View Details</summary>

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X GET "https://mainnet.app.ethgas.com/api/v1/user/builder" \
  -H "Authorization: Bearer <your-auth-token>"
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/builder"

headers = {
    'Authorization': 'Bearer <your-auth-token>'
}

response = requests.get(url, headers=headers)

print(response.text)
```

</TabItem>
</Tabs>

**Purpose**: Retrieve information about the current user's builder registration and status.

#### Response Example

```json
{
    "success": true,
    "data": {
        "publicKey": "0xa25addc4fc16f72ca667177d7a5533d4287b3574f0127ffc227095e90b0b1fd0dd48c421e04e613d2298fe4dac83a2a5",
        "status": "active"
    }
}
```

#### Response Body

| Field | Type | Description |
|-------|------|-------------|
| success | boolean | Success status of the request |
| data | object | Response data container |
| └ publicKey | string | User's builder public key |
| └ status | string | Builder status |

</details>

### POST /api/v1/user/delegate/builder

Delegate to a specific builder.

<details>
<summary style={{listStyle: 'none'}}>View Details</summary>

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X POST "https://mainnet.app.ethgas.com/api/v1/user/delegate/builder" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <your-auth-token>" \
  -d '{
    "builderPublicKey": "0x123456789abcdef..."
  }'
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/delegate/builder"

payload = {
    'builderPublicKey': '0x123456789abcdef...'
}

headers = {
    'Authorization': 'Bearer <your-auth-token>',
    'Content-Type': 'application/json'
}

response = requests.post(url, headers=headers, params=payload)

print(response.text)
```

</TabItem>
</Tabs>

**Purpose**: Delegate block building responsibilities to a specific registered builder.

#### Request Parameters

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| builderPublicKey | YES | string | Builder's BLS public key to delegate to |

#### Response Example

```json
{
    "success": true,
    "data": {
        "builderPublicKey": "0x123456789abcdef..."
    }
}
```

#### Response Body

| Field | Type | Description |
|-------|------|-------------|
| success | boolean | Success status of the request |
| data | object | Response data container |
| └ builderPublicKey | string | The delegated builder public key |

</details>

### GET /api/v1/user/delegate/builder

Get current user's builder delegation.

<details>
<summary style={{listStyle: 'none'}}>View Details</summary>

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X GET "https://mainnet.app.ethgas.com/api/v1/user/delegate/builder" \
  -H "Authorization: Bearer <your-auth-token>"
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/delegate/builder"

headers = {
    'Authorization': 'Bearer <your-auth-token>'
}

response = requests.get(url, headers=headers)

print(response.text)
```

</TabItem>
</Tabs>

**Purpose**: Retrieve information about the current user's builder delegation settings.

#### Response Example

```json
{
    "success": true,
    "data": {
        "builderPublicKey": "0x123456789abcdef..."
    }
}
```

#### Response Body

| Field | Type | Description |
|-------|------|-------------|
| success | boolean | Success status of the request |
| data | object | Response data container |
| └ builderPublicKey | string | The delegated builder public key |

</details>

### GET /api/v1/p/builder/\{slot\}

**Purpose**: Retrieve information about the builder assigned to a specific slot.

<details>
<summary style={{listStyle: 'none'}}>View Details</summary>

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X GET "https://mainnet.app.ethgas.com/api/v1/p/builder/12345" \
  -H "Authorization: Bearer <your-auth-token>"
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/p/builder/12345"

headers = {
    'Authorization': 'Bearer <your-auth-token>'
}

response = requests.get(url, headers=headers)

print(response.text)
```

</TabItem>
</Tabs>


#### Path Parameters

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| slot | YES | integer | The slot number to query |

#### Response Example

```json
{
    "success": true,
    "data": {
        "slot": 12345,
        "builderPublicKey": "0x123456789abcdef..."
    }
}
```

#### Response Body

| Field | Type | Description |
|-------|------|-------------|
| success | boolean | Success status of the request |
| data | object | Response data container |
| └ slot | integer | The slot number |
| └ builderPublicKey | string | Builder's public key for this slot |

</details>

### GET /api/v1/builder/delegation

**Purpose**: Retrieve comprehensive information about builder delegations and relationships.

<details>
<summary style={{listStyle: 'none'}}>View Details</summary>
#### Code Sample

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X GET "https://mainnet.app.ethgas.com/api/v1/builder/delegation" \
  -H "Authorization: Bearer <your-auth-token>"
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/builder/delegation"

headers = {
    'Authorization': 'Bearer <your-auth-token>'
}

response = requests.get(url, headers=headers)

print(response.text)
```

</TabItem>
</Tabs>

#### Response Example

```json
{
    "success": true,
    "data": {
        "builderDelegations": {
            "0xefefdffaddfeefef000...": ["0xabadba...", "0x2asdfadv..."],
            "0xdfg2345dfg0efefdffa...": ["0x58de13...", "0x2ab05ed1..."]
        }
    }
}
```

#### Response Body

| Field | Type | Description |
|-------|------|-------------|
| success | boolean | Success status of the request |
| data | object | Response data container |
| └ builderDelegation | object | Mapping of builder delegations from corresponding builder key registered by the user |
| └└  | string | Corresponding builder key registered by the user |
| └└└  | string[] | EOA address who delegated to the builder key |

</details> 