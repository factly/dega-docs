---
id: tag
title: Tags
---
## Get tags

**<span style="background-color:green; color : white; font-size : 18px">`GET`</span>**  <span style="font-size : 18px">`/api/v1/tags`</span>

```js
{
    "data" : [
        {
            "id" : "5c38f509569ed47e00c7004a",
            "name" : "Black Money",
            "slug" : "black-money",
            "clientId" : "factly",
            "createdDate" : "2019-01-11T19:56:57.619Z",
            "lastUpdatedDate" : "2019-01-11T19:56:57.619Z",
            "class" : "com.factly.dega.domain.Tag"
        },
        {
            ...
        },
        ....
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
slug | string | To get format by slug
limit | number | To limit number of tags
next | string |To get next tags
previous | string |To get previous tags
sortBy | string | To sort by field
sortAsc | boolean | To set sort by ascending

## Get tag

**<span style="background-color:green; color : white; font-size : 18px">`GET`</span>**  <span style="font-size : 18px">`/api/v1/tags/:key`</span>

### Path parameters

**params**|**description**
-----|-----
key |  To get tag by Object Id or slug

### Get a particular tag by Object Id
**<span style="background-color:green; color : white; font-size : 18px">`GET`</span>**  <span style="font-size : 18px">`/api/v1/tags/$tagId`</span>

```js
{
    "data" : {
        "id" : "5c38f509569ed47e00c7004a",
        "name" : "Black Money",
        "slug" : "black-money",
        "clientId" : "factly",
        "createdDate" : "2019-01-11T19:56:57.619Z",
        "lastUpdatedDate" : "2019-01-11T19:56:57.619Z",
        "class" : "com.factly.dega.domain.Tag"
    }
}
```

### Get a particular tag by slug
**<span style="background-color:green; color : white; font-size : 18px">`GET`</span>**  <span style="font-size : 18px">`/api/v1/tags/$tagSlug` </span>

```js
{
    "data" : {
        "id" : "5c38f509569ed47e00c7004a",
        "name" : "Black Money",
        "slug" : "black-money",
        "clientId" : "factly",
        "createdDate" : "2019-01-11T19:56:57.619Z",
        "lastUpdatedDate" : "2019-01-11T19:56:57.619Z",
        "class" : "com.factly.dega.domain.Tag"
    }
}
```