---
id: status
title: Statuses
---
## Get statuses

**<span style="background-color:green; color : white; font-size : 18px">`GET`</span>**  <span style="font-size : 18px">`/api/v1/statuses`</span>

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

**<span style="background-color:green; color : white; font-size : 18px">`GET`</span>**  <span style="font-size : 18px">`/api/v1/statuses/:key`</span>

### Path parameters

**params**|**description**
-----|-----
key |  To get status by Object Id or slug

### Get a particular status by Object Id
**<span style="background-color:green; color : white; font-size : 18px">`GET`</span>**  <span style="font-size : 18px">`/api/v1/statuses/$statusId`</span>

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
**<span style="background-color:green; color : white; font-size : 18px">`GET`</span>**  <span style="font-size : 18px">`/api/v1/statuses/$statusSlug` </span>

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