---
id: role
title: Roles
---
## Get roles

**<span style={{
     backgroundColor:'green', 
     color : 'white', 
     fontSize : '18px',
     fontFamily:'monospace',
     borderRadius: '3px',
     margin: 0,
     padding: '3.2px 6.4px'
     }}>GET</span>**  <span style={{fontSize:'18px'}}>`/api/v1/roles`</span>

```js
{
    "data": [
        {
            "name": "Subscriber",
            "slug": "subscriber",
            "id": "5daff00321935800013e15fa",
            "class": "com.factly.dega.domain.Role",
            "isDefault": true,
            "clientId": "default",
            "keyclockId": "a2fc805b-ef02-41c5-a45a-c9e9081857d4",
            "keyclockName": "ROLE_SUBSCRIBER",
            "createdDate": "2019-09-11T15:49:38.555Z",
            "lastUpdatedDate": "2019-09-11T15:49:38.555Z"
        },
        {
            ...
        },
        ...
    ],
    "paging": {
        "next": "eyIkdW5kZWZpbmVkIjp0cnVlfQ",
        "hasNext": false,
        "previous": "eyIkdW5kZWZpbmVkIjp0cnVlfQ",
        "hasPrevious": false
    } 
}
```

### Query parameters

**params**|**value**|**description**
-----|-----|-----
slug | string | To get role by slug
limit | number | To limit number of roles
next | string |To get next roles
previous | string |To get previous roles
sortBy | string | To sort by field
sortAsc | boolean | To set sort by ascending

## Get role

**<span style={{
     backgroundColor:'green', 
     color : 'white', 
     fontSize : '18px',
     fontFamily:'monospace',
     borderRadius: '3px',
     margin: 0,
     padding: '3.2px 6.4px'
     }}>GET</span>**  <span style={{fontSize:'18px'}}>`/api/v1/roles/:key`</span>

### Path parameters

**params**|**description**
-----|-----
key |  To get role by Object Id or slug

### Get a particular role by Object Id
**<span style={{
     backgroundColor:'green', 
     color : 'white', 
     fontSize : '18px',
     fontFamily:'monospace',
     borderRadius: '3px',
     margin: 0,
     padding: '3.2px 6.4px'
     }}>GET</span>**  <span style={{fontSize:'18px'}}>`/api/v1/roles/$roleId`</span>

```js
{
    "data" : {
        "name": "Subscriber",
        "slug": "subscriber",
        "id": "5daff00321935800013e15fa",
        "class": "com.factly.dega.domain.Role",
        "isDefault": true,
        "clientId": "default",
        "keyclockId": "a2fc805b-ef02-41c5-a45a-c9e9081857d4",
        "keyclockName": "ROLE_SUBSCRIBER",
        "createdDate": "2019-09-11T15:49:38.555Z",
        "lastUpdatedDate": "2019-09-11T15:49:38.555Z"
    }
}
```
### Get a particular role by slug
**<span style={{
     backgroundColor:'green', 
     color : 'white', 
     fontSize : '18px',
     fontFamily:'monospace',
     borderRadius: '3px',
     margin: 0,
     padding: '3.2px 6.4px'
     }}>GET</span>**  <span style={{fontSize:'18px'}}>`/api/v1/roles/$roleSlug` </span>
 
```js
{
    "data" : {
        "name": "Subscriber",
        "slug": "subscriber",
        "id": "5daff00321935800013e15fa",
        "class": "com.factly.dega.domain.Role",
        "isDefault": true,
        "clientId": "default",
        "keyclockId": "a2fc805b-ef02-41c5-a45a-c9e9081857d4",
        "keyclockName": "ROLE_SUBSCRIBER",
        "createdDate": "2019-09-11T15:49:38.555Z",
        "lastUpdatedDate": "2019-09-11T15:49:38.555Z"
    }
}