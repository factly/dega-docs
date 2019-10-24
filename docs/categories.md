---
id: category
title: Categories
---
## Get categories
**<span style="background-color:green; color : white; font-size : 18px">`GET`</span>**  <span style="font-size : 18px">`/api/v1/categories`</span>

```js
{
    "data" : [
        {
            "name": "Elections",
            "description": "",
            "slug": "elections",
            "parent": "",
            "id": "5d7981c6bf1bce0001eda4f2",
            "class": "com.factly.dega.domain.Category",
            "clientId": "factly",
            "createdDate": "2019-09-11T23:22:46.627Z",
            "lastUpdatedDate": "2019-09-11T23:22:46.627Z"
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

### Query paramaters

**params**|**value**|**description**
-----|-----|-----
limit | number | To limit number of categories
next | string |To get next categories
previous | string |To get previous categories
sortBy | string | To sort by field
sortAsc | boolean | To sort by ascending


## Get category

**<span style="background-color:green; color : white; font-size : 18px">`GET`</span>**  <span style="font-size : 18px">`/api/v1/categories/:key`</span>

### Path parameters

**params**|**description**
-----|-----
key |  To get category by Object Id or slug

### Get a particular category by Object Id
**<span style="background-color:green; color : white; font-size : 18px">`GET`</span>**  <span style="font-size : 18px">`/api/v1/categories/$categoryId`</span>

```js
{
    "data" : {
        "name": "Elections",
        "description": "",
        "slug": "elections",
        "parent": "",
        "id": "5d7981c6bf1bce0001eda4f2",
        "class": "com.factly.dega.domain.Category",
        "clientId": "factly",
        "createdDate": "2019-09-11T23:22:46.627Z",
        "lastUpdatedDate": "2019-09-11T23:22:46.627Z"
    }
}
```

### Get a particular category by slug
**<span style="background-color:green; color : white; font-size : 18px">`GET`</span>**  <span style="font-size : 18px">`/api/v1/categories/$categorySlug` </span>

```js
{
    "data" : {
        "name": "Elections",
        "description": "",
        "slug": "elections",
        "parent": "",
        "id": "5d7981c6bf1bce0001eda4f2",
        "class": "com.factly.dega.domain.Category",
        "clientId": "factly",
        "createdDate": "2019-09-11T23:22:46.627Z",
        "lastUpdatedDate": "2019-09-11T23:22:46.627Z"
    }
}
```