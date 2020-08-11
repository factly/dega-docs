---
id: status
title: Statuses
---
## Get statuses

**<span style={{
     backgroundColor:'green', 
     color : 'white', 
     fontSize : '18px',
     fontFamily:'monospace',
     borderRadius: '3px',
     margin: 0,
     padding: '3.2px 6.4px'
     }}>GET</span>**  <span style={{fontSize:'18px'}}>`/api/v1/statuses`</span>

```js
{
    "data": [
        {
            "name": "Publish",
            "slug": "publish",
            "id": "5daff00321935800013e15fa",
            "class": "com.factly.dega.domain.Status",
            "isDefault": true,
            "clientId": "default",
            "createdDate": "2019-09-11T15:19:47.348Z",
            "lastUpdatedDate": "2019-09-11T15:19:47.348Z"
        },
        {
            ...
        },
        ...
    ] 
}
```
## Get status

**<span style={{
     backgroundColor:'green', 
     color : 'white', 
     fontSize : '18px',
     fontFamily:'monospace',
     borderRadius: '3px',
     margin: 0,
     padding: '3.2px 6.4px'
     }}>GET</span>**  <span style={{fontSize:'18px'}}>`/api/v1/statuses/:key`</span>

### Path parameters

**params**|**description**
-----|-----
key |  To get status by Object Id or slug

### Get a particular status by Object Id
**<span style={{
     backgroundColor:'green', 
     color : 'white', 
     fontSize : '18px',
     fontFamily:'monospace',
     borderRadius: '3px',
     margin: 0,
     padding: '3.2px 6.4px'
     }}>GET</span>**  <span style={{fontSize:'18px'}}>`/api/v1/statuses/$statusId`</span>

```js
{
    "data" : {
        "name": "Publish",
        "slug": "publish",
        "id": "5daff00321935800013e15fa",
        "class": "com.factly.dega.domain.Status",
        "isDefault": true,
        "clientId": "default",
        "createdDate": "2019-09-11T15:19:47.348Z",
        "lastUpdatedDate": "2019-09-11T15:19:47.348Z"
    }
}
```

### Get a particular status by slug
**<span style={{
     backgroundColor:'green', 
     color : 'white', 
     fontSize : '18px',
     fontFamily:'monospace',
     borderRadius: '3px',
     margin: 0,
     padding: '3.2px 6.4px'
     }}>GET</span>**  <span style={{fontSize:'18px'}}>`/api/v1/statuses/$statusSlug` </span>

```js
{
    "data" : {
        "name": "Publish",
        "slug": "publish",
        "id": "5daff00321935800013e15fa",
        "class": "com.factly.dega.domain.Status",
        "isDefault": true,
        "clientId": "default",
        "createdDate": "2019-09-11T15:19:47.348Z",
        "lastUpdatedDate": "2019-09-11T15:19:47.348Z"
    }
}
```    