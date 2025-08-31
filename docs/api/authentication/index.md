---
sidebar_position: 1
---

# Authentication

## POST /api/v1/user/login

Code sample:

```http
curl -X POST /api/v1/user/login?addr=0x8F02425B5f3c522b7EF8EA124162645F0397c478&name=username
```

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/login"

payload = {
    'addr': '0x5eF1B2c02f5E39C0fF667611C5d7EfFb0E7df305',
    'name': 'username'    
}

headers = {
  'Content-Type': 'application/json'
}

response = requests.post(url, headers=headers, params=payload)

print(response.text)
```

Example response:

```json
{
    "success": true,
    "data": {
        "status": "verify",
        "eip712Message": "{\"types\":{\"EIP712Domain\":[{\"name\":\"name\",\"type\":\"string\"},{\"name\":\"version\",\"type\":\"string\"},{\"name\":\"chainId\",\"type\":\"uint256\"},{\"name\":\"verifyingContract\",\"type\":\"address\"}],\"data\":[{\"name\":\"hash\",\"type\":\"string\"},{\"name\":\"message\",\"type\":\"string\"},{\"name\":\"domain\",\"type\":\"string\"}]},\"primaryType\":\"data\",\"message\":{\"hash\":\"52a90c73\",\"message\":\"Please sign this message to verify account ownership\",\"domain\":\"ethgas.com\"},\"domain\":{\"name\":\"ETHGas Login\",\"version\":\"1\",\"chainId\":32382,\"verifyingContract\":\"0x0000000000000000000000000000000000000000\"}}",
        "nonceHash": "52a90c73"
    }
}
```

Request

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| addr | YES | string | User's EOA account (account) address |
| name | NO | string | Display name |

Response Body

| Name | Type | Description |
| --- | --- | --- |
| status | string | Login status |
| eip712Message | object | EIP712 message |
| nonceHash | string | A unique four-byte nonce to identify this particular login request |

Usage

Get the response from /api/v1/user/login and sign the eip712Message and send the signed message through /api/v1/user/login/verify

## POST /api/v1/user/login/verify

Code sample:

```http
curl -X POST /api/v1/user/login/verify?addr=0xe61f536f031f77C854b21652aB0F4fBe7CF3196F&nonceHash=517d9272&signature=0xc046037ec795f4cfe7aca33a0c283c0152bae91008b3e14b84be50f91f0e2db714054dee85b840e3edf0e26480231a684447f48337de64ea6697a3552aa9351a1b
```

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/login/verify"

payload = {
    "addr": "0xe61f536f031f77C854b21652aB0F4fBe7CF3196F",
    "nonceHash": "517d9272",
    "signature": "0xc046037ec795f4cfe7aca33a0c283c0152bae91008b3e14b84be50f91f0e2db714054dee85b840e3edf0e26480231a684447f48337de64ea6697a3552aa9351a1b"  
}

headers = {
  'Content-Type': 'application/json'
}

response = requests.post(url, headers=headers, params=payload)

print(response.text)
```

Example response:

```json
{
    "success": true,
    "data": {
        "user": {
            "userId": 78,
            "address": "0xe61f536f031f77c854b21652ab0f4fbe7cf3196f",
            "status": 1,
            "userType": 1,
            "userClass": 1,
            "accounts": [
                {
                    "accountId": 242,
                    "userId": 78,
                    "type": 1,
                    "name": "Current",
                    "status": 1,
                    "updateDate": 1698127521000
                },
                {
                    "accountId": 243,
                    "userId": 78,
                    "type": 2,
                    "name": "Preconf",
                    "status": 1,
                    "updateDate": 1698127521000
                }
            ]
        },
        "accessToken": {
            "data": {
                "header": {
                    "alg": "ES256",
                    "typ": "JWT"
                },
                "payload": {
                    "user": {
                        "userId": 78,
                        "address": "0xe61f536f031f77c854b21652ab0f4fbe7cf3196f",
                        "roles": [
                            "ROLE_USER"
                        ]
                    },
                    "access_type": "access_token",
                    "iat": 1698633225,
                    "exp": 1698636825
                }
            },
            "token": "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6NzgsImFkZHJlc3MiOiIweGU2MWY1MzZmMDMxZjc3Yzg1NGIyMTY1MmFiMGY0ZmJlN2NmMzE5NmYiLCJyb2xlcyI6WyJST0xFX1VTRVIiXX0sImFjY2Vzc190eXBlIjoiYWNjZXNzX3Rva2VuIiwiaWF0IjoxNjk4NjMzMjI1LCJleHAiOjE2OTg2MzY4MjV9.E3aIKqqFsHVBYedAuqn6Jw6bymsWy6RQ6gf_lDXnYNorjngA05uFLaTM0A2ZrN4kJ8nTXEjlrdhLU8crisJcdA"
        }
    }
}
```

Request

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| addr | YES | string | User's EOA account (account) address |
| nonceHash | YES | string | Nonce Hash |
| signature | YES | string | Signature |

Response Body

| Name | Type | Description |
| --- | --- | --- |
| user | User | User details |
| accessToken | string | Access token |

## POST /api/v1/user/login/refresh

Code sample:

```http
curl -H "Authorization: Bearer {{access_token}}" -X POST /api/v1/user/login/refresh?refreshToken=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6MzEsImFkZHJlc3MiOiIweDVjODEyYzlhNjdlNjkwMGViMjBmM2YzMWQwZWNjZTUyM2Q2YTVjMDMiLCJyb2xlcyI6WyJST0xFX1VTRVIiXX0sImFjY2Vzc190eXBlIjoicmVmcmVzaF90b2tlbiIsImlhdCI6MTY5NzQyNDM0MCwiZXhwIjoxNjk4MDI5MTQwfQ.Y5dtx_VXGDZ4EDt4e6qtaVd811XumXjtDtVMiQeibNCai5zvV1PJJ3R8WCTSZb6NbbxAtFsTglYRD10aigDECA
```

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/login/refresh"

payload = {
    'refreshToken': 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6MzEsImFkZHJlc3MiOiIweDVjODEyYzlhNjdlNjkwMGViMjBmM2YzMWQwZWNjZTUyM2Q2YTVjMDMiLCJyb2xlcyI6WyJST0xFX1VTRVIiXX0sImFjY2Vzc190eXBlIjoicmVmcmVzaF90b2tlbiIsImlhdCI6MTY5NzQyNDM0MCwiZXhwIjoxNjk4MDI5MTQwfQ.Y5dtx_VXGDZ4EDt4e6qtaVd811XumXjtDtVMiQeibNCai5zvV1PJJ3R8WCTSZb6NbbxAtFsTglYRD10aigDECA'
}

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6MzEsImFkZHJlc3MiOiIweDVjODEyYzlhNjdlNjkwMGViMjBmM2YzMWQwZWNjZTUyM2Q2YTVjMDMiLCJyb2xlcyI6WyJST0xFX1VTRVIiXX0sImFjY2Vzc190eXBlIjoiYWNjZXNzX3Rva2VuIiwiaWF0IjoxNjk3NDQ1MjQyLCJleHAiOjE2OTc0NDg4NDJ9.iPUK1f8QWZLnKPt-fdo-dlrakxSPyo041J5xnIKVLtsOsBIR8gu2hEv8a7S18CtRfViRchT4xhSQfSJj-SxleQ'
}

response = requests.post(url, headers=headers, params=payload)

print(response.text)
```

Request

| Parameter | Required | Type | Description |
| --- | --- | --- | --- |
| refreshToken | YES | string | Refresh token |

Response Body

| Name | Type | Description |
| --- | --- | --- |
| user | User | User details |
| accessToken | object | Access token used for authentication:See Connecting to ETHGas section |

## POST /api/v1/user/logout

Code sample:

```http
curl -H "Authorization: Bearer {{access_token}}" -X POST /api/v1/user/logout
```

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/logout"

headers = {
  'Authorization': 'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6MzEsImFkZHJlc3MiOiIweDVjODEyYzlhNjdlNjkwMGViMjBmM2YzMWQwZWNjZTUyM2Q2YTVjMDMiLCJyb2xlcyI6WyJST0xFX1VTRVIiXX0sImFjY2Vzc190eXBlIjoiYWNjZXNzX3Rva2VuIiwiaWF0IjoxNjk3NDQ5MTM0LCJleHAiOjE2OTc0NTI3MzR9.reUyFbhlJ6ZXSUypWiWeikaPQdbcRB_ZgB2k4NxcKbJS1K9J1GZnfXl9GrYOmS67L19gC-wfKqSPN4-7T3Xk0w'
}

response = requests.post(url, headers=headers)

print(response.text)
```
