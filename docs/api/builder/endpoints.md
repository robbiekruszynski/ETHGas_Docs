---
sidebar_position: 2
---

# Builder Endpoints

## POST /v1/builder/register

Code sample:

```http
curl -H "Authorization: Bearer {{access_token}}" -X POST /v1/builder/register?publicKeys=0x12345...,0x234134...&signatures=2asdfjghadg,xghlktdhj
```

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

## POST /v1/builder/signingMessage

Code sample:

```http
curl -H "Authorization: Bearer {{access_token}}" -X POST /v1/builder/signingMessage
```

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/builder/signingMessage"

headers = {
    'Authorization': 'Bearer <your-auth-token>',
    'Content-Type': 'application/json'
}

response = requests.post(url, headers=headers)

print(response.text)
```

## POST /v1/validator/deregister

Code sample:

```http
curl -H "Authorization: Bearer {{access_token}}" -X POST /v1/validator/deregister?publicKey=0x123423qtdgasdg...
```

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/validator/deregister"


payload = {
    'publicKey': '0x12342330def...,0x4a93d70def...'
}

headers = {
    'Authorization': 'Bearer <your-auth-token>',
    'Content-Type': 'application/json'
}

response = requests.post(url, headers=headers, params=payload)

print(response.text)
```

## GET /v1/p/builders

Code sample:

```http
GET /v1/p/builders
```

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/p/builders"


response = requests.get(url, headers=headers)

print(response.text)
```

## GET /v1/user/builder

Code sample:

```http
GET /v1/user/builder
```

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/user/builder"


response = requests.get(url, headers=headers)

print(response.text)
```

## POST /v1/user/delegate/builder

Code sample:

```http
curl -H "Authorization: Bearer {{access_token}}" -X POST /v1/user/delegate/builder?publicKeys=0x12345...,0x2df345...&enable=true
```

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

## GET /v1/user/delegate/builder

Code sample:

```http
curl -H "Authorization: Bearer {{access_token}}" -X GET /v1/user/delegate/builder
```

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

## GET /v1/p/builder/\{slot\}

Code sample:

```http
GET /v1/p/builder/123
```

```python
import requests

url = "https://mainnet.app.ethgas.com/api/v1/p/builder/123"

response = requests.get(url, headers=headers)

print(response.text)
```
