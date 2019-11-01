---
id: format
title: Formats
---
## Get formats

**<span style="background-color:green; color : white; font-size : 18px">`GET`</span>**  <span style="font-size : 18px">`/api/v1/formats`</span>

```js
{
    data : [
        {
            "name": "Video",
            "slug": "video",
            "id": "5d790fe2e5c62900019d7831",
            "class": "com.factly.dega.domain.Format",
            "isDefault": true,
            "clientId": "default",
            "createdDate": "2019-09-11T15:16:50.531Z",
            "lastUpdatedDate": "2019-09-11T15:16:50.531Z"
        },
        {
            ...
        },
        ...
    ]
}
```

## Get format

**<span style="background-color:green; color : white; font-size : 18px">`GET`</span>**  <span style="font-size : 18px">`/api/v1/formats/:key`</span>

### Path parameters

**params**|**description**
-----|-----
key |  To get format by Object Id or slug

### Get a particular format by Object Id
**<span style="background-color:green; color : white; font-size : 18px">`GET`</span>**  <span style="font-size : 18px">`/api/v1/formats/$formatId`</span>

```js
{
    data : {
        "name": "Video",
        "slug": "video",
        "id": "5d790fe2e5c62900019d7831",
        "class": "com.factly.dega.domain.Format",
        "isDefault": true,
        "clientId": "default",
        "createdDate": "2019-09-11T15:16:50.531Z",
        "lastUpdatedDate": "2019-09-11T15:16:50.531Z"
    }
}
```

### Get a particular format by slug
**<span style="background-color:green; color : white; font-size : 18px">`GET`</span>**  <span style="font-size : 18px">`/api/v1/formats/$formatSlug` </span>

```js
{
    data : {
        "name": "Video",
        "slug": "video",
        "id": "5d790fe2e5c62900019d7831",
        "class": "com.factly.dega.domain.Format",
        "isDefault": true,
        "clientId": "default",
        "createdDate": "2019-09-11T15:16:50.531Z",
        "lastUpdatedDate": "2019-09-11T15:16:50.531Z"
    }
}
```