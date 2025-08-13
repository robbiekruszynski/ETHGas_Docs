import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<!-- ---
sidebar_position: 2
--- -->

# Builders & Sequencers

<!-- :::info Role scope
This page focuses on Builders. For Developers see [Developer Overview](/docs/developers/overview). 
For Validators see [Validator Overview](/docs/validators/overview). 
::: -->

ETHGas provides infrastructure for block builders and sequencers to participate in the gas trading ecosystem. This page summarizes roles and integration touchpoints.

## Building Architecture

<div className="row">
  <div className="col col--4">
    <div className="feature-card">
      <h3>Who Builds the Blocks?</h3>
      <p>Block owners may self-build or delegate to specialist builders. ETHGas can act as a fallback builder when not delegated or if a submitted block is non‑conforming.</p>
    </div>
  </div>
  <div className="col col--4">
    <div className="feature-card">
      <h3>Delegated Building</h3>
      <p>Block owners can delegate to multiple specialist builders who compete to deliver best value via auction mechanisms (tips/priority fees accrue to the block owner).</p>
    </div>
  </div>
  <div className="col col--4">
    <div className="feature-card">
      <h3>Empty Block</h3>
      <p>If no trades should be included, block owners can indicate an empty block preference (a minimal self‑transfer may still be required by validators).</p>
    </div>
  </div>
</div>


## Block Building Package

<div className="feature-card">
  <h3>Builder Software Options</h3>
  <p>Builders may use their own software or the ETHGas-modified rbuilder (preconf-builder) for ETHGas-specific flows:</p>
  
  - [x] **Stream preconf transactions** - Handle preconfirmation transaction streams
  - [x] **Build compliant blocks** - Respect bundle positioning and commitments
  - [x] **Fill remaining blockspace** - Add mempool transactions to complete blocks
</div>

<!-- ### Resources

- **Preconf Builder (optional)**: <a href="https://github.com/ethgas-developer/preconf-builder" target="_blank" rel="noopener noreferrer">https://github.com/ethgas-developer/preconf-builder</a>
- **Builder Scripts**: <a href="https://github.com/ethgas-developer/ethgas-builder-scripts" target="_blank" rel="noopener noreferrer">https://github.com/ethgas-developer/ethgas-builder-scripts</a> -->


## Integration Requirements

<div className="feature-card">
  <h3>Essential Requirements</h3>
  
  - [x] **Builder software** - Own implementation or ETHGas preconf-builder
  - [x] **Relay submission** - Submit blocks to relay infrastructure
  - [x] **Commitment compliance** - Include preconf bundles, respect positioning, payout to block owner
  - [x] **Slot timing performance** - Meet strict slot timing requirements
</div>

## API Endpoints

<div className="api-endpoints-grid">

### POST /api/v1/builder/register

<details>
<summary style={{listStyle: 'none'}}>Register builder public keys with the ETHGas platform</summary>
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
| publicKeys | Yes | string | Comma separated list of builder bls public key in hex |
| signatures | Yes | string | Comma separated list of bls signatures in hex |

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
 Note: Please refer to [lookup table](/docs/reference/lookup-tables) to check the builder registration result enum
:::
</details>





### GET /api/v1/builder/signingMessage

<details>
<summary style={{listStyle: 'none'}}>Retrieve the message that needs to be signed by the builder's private key for registration verification</summary>

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

<details>
<summary style={{listStyle: 'none'}}>Builder deregistering their public keys</summary>

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
| publicKeys | Yes | string | List of builder bls public keys in hex |

#### Response Example

```json
{
    "success": true
}
```

#### Response Body

| Field | Type | Description |
|-------|------|-------------|
| success | boolean | Success status of the request |
<!-- | data | object | Response data container |
| └ results | object[] | Results of builder public key deregistrations |
| └└ publicKey | string | Public key in the deregistration |
| └└ result | object | Builder Registration Result |
| └└└ result | integer | Builder Registration Result Code |
| └└└ description | string | Builder Registration Result Description | -->

</details>

### GET /api/v1/p/builders

<details>
<summary style={{listStyle: 'none'}}>Retrieve a list of builder public keys submitted by a user</summary>

<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -X GET "https://mainnet.app.ethgas.com/api/v1/p/builders" \
  -H "Authorization: Bearer <your-auth-token>"
```

#### Response Example

```json
{
    "success": true,
    "data": {
        "builders": {
            "whitelistedBuilders": {
                "btcs": [
                    "0x123456789abcdef...",
                    "0xfb3456789abcdef..."
                ]
            },
            "unnamedBuilders": [
                "0x123456789abcdef...",
                "0xfb3456789abcdef..."
            ],
            "fallbackBuilder": "0xlhadunabcdef..."
        }
    }
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/p/builders"

headers = {
    'Authorization': 'Bearer <your-auth-token>'
}

response = requests.get(url, headers=headers)

print(response.text)
```

#### Response Example

```json
{
    "success": true,
    "data": {
        "builders": {
            "whitelistedBuilders": {
                "btcs": [
                    "0x123456789abcdef...",
                    "0xfb3456789abcdef..."
                ]
            },
            "unnamedBuilders": [
                "0x123456789abcdef...",
                "0xfb3456789abcdef..."
            ],
            "fallbackBuilder": "0xlhadunabcdef..."
        }
    }
}
```

</TabItem>
</Tabs>

#### Response Body

| Field | Type | Description |
|-------|------|-------------|
| success | boolean | Success status of the request|
| data | object | Response data container |
| └ whitelistedBuilders | object | Array of builder objects |
| └└ unnamedBuilders | list | List of public key of unnamed builder in hex|
| └└ fallbackBuilder | string | Public key of the ETHGAS fallback builder in hex|

</details>

### GET /api/v1/user/builder

<details>
<summary style={{listStyle: 'none'}}>Retrieve a list of builder public keys submitted by a user</summary>
#### Code Sample
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
        "builders": [
            "0xa25addc4fc16f72ca667177d7a5533d4287b3574f0127ffc227095e90b0b1fd0dd48c421e04e613d2298fe4dac83a2a5",
            "0xa6745dd64a0a393497d5a7d4904b613aa386f47eb2e3617cf791f059291f2812683305a4bd562d63ec15990b67795e2a",
            "0xaea551245bd0512de5222834db5f3bc9cba1a04a2e8f5de0d4fea843c9fee1af31bb9373ba6b9da08a0820f695c6ab6e"
        ]
    }
}
```

#### Response Body

| Field | Type | Description |
|-------|------|-------------|
| success | boolean | Success status of the request |
| data | object | Response data container |
| └ builders | string[] | List of builder bls keys.
 |

</details>

### POST /api/v1/user/delegate/builder

<details>
<summary style={{listStyle: 'none'}}>Delegate or revoke delegation of builder keys by supplying either a comma-separated list of BLS public keys or a builder name (which applies to all keys under that builder)</summary>
#### Code Sample
<Tabs>
<TabItem value="http" label="HTTP" default>

```bash
curl -H "Authorization: Bearer {{access_token}}" -X POST /api/v1/user/delegate/builder?publicKeys=0x12345...,0x2df345...&enable=true
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/delegate/builder"

payload = {
    'publicKeys': '0x123456789abcdef...,0x2df345...',
    'enable': true
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
| publicKeys | No | string | Builder's BLS public key to delegate to |
| builderName| No | string | Builder name |
| enable | Yes | boolean | Delegate or revoke builder delegation.| 

#### Response Example

```json
{
    "success": true,
}
```

#### Response Body

| Field | Type | Description |
|-------|------|-------------|
| success | boolean | Success status of the request |
| data | object | Response data container |
| └ delegatedBuilders | string | The delegated builder public key |

:::note
Note: User needs to delegate a new builder 2 seconds before the market close in order to be effective in that epoch.
:::

</details>

### GET /api/v1/user/delegate/builder

<details>
<summary style={{listStyle: 'none'}}>Retrieve information about the current user's builder delegation settings</summary>

<Tabs>
<TabItem value="http" label="HTTP" default>
#### Code Sample
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
        "delegatedBuilders": [
            "0x123456789abcdef...",
            "0xfb3456789abcdef..."
        ]
    }
}
```

#### Response Body

| Field | Type | Description |
|-------|------|-------------|
| success | boolean | Success status of the request |
| data | object | Response data container |
| └ delegatedBuilders | string[] | The delegated builder public key |

</details>

### GET /api/v1/p/builder/\{slot\}

<details>
<summary style={{listStyle: 'none'}}>Retrieve information about the builder assigned to a specific slot</summary>
#### Code Sample
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


response = requests.get(url, headers=headers)

print(response.text)
```

</TabItem>
</Tabs>


#### Path Parameters

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| slot | YES | integer | The Slot ID to query the builder |

#### Response Example

```json
{
    "success" : true,
    "data": {
        "slot": 123,
        "builders": [
            "0x123456789abcdef...",
            "0x156256789ad4fef..."
        ],
        "fallbackBuilder": "0xdsfa56789abcdef..."
    }
}
```

#### Response Body

| Field | Type | Description |
|-------|------|-------------|
| success | boolean | Success status of the request |
| data | object | Response data container |
| └ slot | integer | The slot number |
| └ builders | string[] | List of available builder keys for the queried slot |
| └ fallbackBuilder | string | Public key of the fallback builder in hexadecimal format|


</details>

### GET /api/v1/builder/delegation

<details>
<summary style={{listStyle: 'none'}}>Retrieve comprehensive information about builder delegations and relationships</summary>
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

</div> 