---
id: user
title: Users
---
## Get users

**<span style="background-color:green; color : white; font-size : 18px">`GET`</span>**  <span style="font-size : 18px">`/api/v1/users`</span>

```js
{
    "data": [
        {
            "description": "Shashi was always intrigued ....",
            "slug": "shashi-deshetti",
            "email": "shashi@factly.in",
            "roleMappings": [
                {
                    "name": "Factly - Administrator",
                    "id": "5d792544bf1bce0001eda478",
                    "class": "com.factly.dega.domain.RoleMapping",
                    "role": {
                        "name": "Administrator",
                        "slug": "administrator",
                        "id": "5d79176abf1bce0001eda459",
                        "class": "com.factly.dega.domain.Role"
                    },
                    "organization": {
                        "name": "Factly",
                        "slug": "factly",
                        "id": "5d792544bf1bce0001eda477",
                        "class": "com.factly.dega.domain.Organization"
                    }
                }
            ],
            "media": {
                "name": "https://storage.degacms.com/factly.jpg",
                "type": "image/jpeg",
                "url": "https://storage.degacms.com/factly.jpg",
                "title": "shashi-deshetti",
                "slug": "shashi-deshetti1",
                "id": "5d93ebd993ace2000112a94d",
                "class": "com.factly.dega.domain.Media",
                "fileSize": "235088",
                "altText": "shashi-deshetti",
                "uploadedBy": "shashi@factly.in",
                "publishedDate": "2019-10-02T00:14:17.711Z",
                "lastUpdatedDate": "2019-10-02T00:14:17.711Z",
                "clientId": "factly",
                "createdDate": "2019-10-02T00:14:17.711Z",
                "relativeURL": "/factly.jpg",
                "sourceURL": "https://images.degacms.com/factly.jpg"
            },
            "id": "5daff00321935800013e15fa",
            "class": "com.factly.dega.domain.DegaUser",
            "firstName": "Shashi Kiran",
            "lastName": "Deshetti",
            "displayName": "Shashi Deshetti",
            "createdDate": "2019-09-11T16:49:00.000Z"
        },
        {
            ...
        },
        ....
    ]     
}
```

### Query parameters

**params**|**value**|**description**
-----|-----|-----
role | string | To get users by role
limit | number | To limit number of users
next | string |To get next users
previous | string |To get previous users
sortBy | string | To sort by field
sortAsc | boolean | To set sort by ascending

## Get user

**<span style="background-color:green; color : white; font-size : 18px">`GET`</span>**  <span style="font-size : 18px">`/api/v1/users/:key`</span>

### Path parameters

**params**|**description**
-----|-----
key |  To get category by Object Id or slug

### Get a particular user by Object Id
**<span style="background-color:green; color : white; font-size : 18px">`GET`</span>**  <span style="font-size : 18px">`/api/v1/users/$userId`</span>

```js
{
    "data" : {
        "description": "Shashi was always intrigued ....",
        "slug": "shashi-deshetti",
        "email": "shashi@factly.in",
        "roleMappings": [
            {
                ...
            }
        ],
        "media": {
            ...
        },
        "id": "5daff00321935800013e15fa",
        "class": "com.factly.dega.domain.DegaUser",
        "firstName": "Shashi Kiran",
        "lastName": "Deshetti",
        "displayName": "Shashi Deshetti",
        "createdDate": "2019-09-11T16:49:00.000Z"
    } 
}
```

### Get a particular user by slug
**<span style="background-color:green; color : white; font-size : 18px">`GET`</span>**  <span style="font-size : 18px">`/api/v1/users/$userSlug` </span>

```js
{
    "data" : {
        "description": "Shashi was always intrigued ...",
        "slug": "shashi-deshetti",
        "email": "shashi@factly.in",
        "roleMappings": [
            {
                ...
            }
        ],
        "media": {
            ...
        },
        "id": "5daff00321935800013e15fa",
        "class": "com.factly.dega.domain.DegaUser",
        "firstName": "Shashi Kiran",
        "lastName": "Deshetti",
        "displayName": "Shashi Deshetti",
        "createdDate": "2019-09-11T16:49:00.000Z"
    }
}
```