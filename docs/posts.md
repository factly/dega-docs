---
id: post
title: Posts
---

## Get posts

**<span style="background-color:green; color : white; font-size : 18px">`GET`</span>**  <span style="font-size : 18px">`/api/v1/posts`</span>

```js
{
    "data": [
        {
            "title": "What is the status of Forest fires in India?",
            "content": "content ...",
            "excerpt": "what is the status of forest fires in India? Here is a detailed analysis.",
            "featured": false,
            "sticky": false,
            "updates": "",
            "slug": "what-is-status-of-forest-fires-in-india",
            "tags": [
                {
                    "id" : "5c38f509569ed47e00c7004a",
                    "name" : "Forests",
                    "slug" : "forests",
                    "clientId" : "factly",
                    "createdDate" : "2019-01-11T19:56:57.619Z",
                    "lastUpdatedDate" : "2019-01-11T19:56:57.619Z",
                    "class" : "com.factly.dega.domain.Tag"
                }
            ],
            "categories": [
                {
                    "_id": "5d79818bbf1bce0001eda4e2",
                    "name": "India",
                    "description": "",
                    "slug": "india",
                    "parent": "",
                    "clientId": "factly",
                    "createdDate": "2019-09-11T23:21:47.651Z",
                    "lastUpdatedDate": "2019-09-11T23:21:47.651Z"
                },
                {
                    "_id": "5d798196bf1bce0001eda4e6",
                    "name": "Stories",
                    "description": "",
                    "slug": "stories",
                    "parent": "",
                    "clientId": "factly",
                    "createdDate": "2019-09-11T23:21:58.886Z",
                    "lastUpdatedDate": "2019-09-11T23:21:58.886Z"
                }
            ],
            "status": {
                "name": "Publish",
                "slug": "publish",
                "id": "5d791093e5c62900019d7856",
                "class": "com.factly.dega.domain.Status",
                "clientId": "default",
                "isDefault": true,
                "createdDate": "2019-09-11T15:19:47.348Z",
                "lastUpdatedDate": "2019-09-11T15:19:47.348Z"
            },
            "format": {
                "name": "Standard",
                "slug": "standard",
                "id": "5d791062e5c62900019d784d",
                "class": "com.factly.dega.domain.Format",
                "clientId": "default",
                "isDefault": true,
                "createdDate": "2019-09-11T15:18:58.839Z",
                "lastUpdatedDate": "2019-09-11T15:18:58.839Z"
            },
            "media": {
                "name": "https://storage.degacms.com/dega-content/factly.jpg",
                "type": "image/jpeg",
                "url": "https://storage.degacms.com/dega-content/factly.jpg",
                "title": "Forest-fires-in-India_Featured-Image",
                "slug": "forest-fires-in-india_featured-image",
                "id": "5d799417bf1bce0001eda53a",
                "class": "com.factly.dega.domain.Media",
                "fileSize": "82118",
                "altText": "Forest-fires-in-India_Featured-Image",
                "uploadedBy": "shashi@factly.in",
                "publishedDate": "2019-09-12T00:40:00.000Z",
                "lastUpdatedDate": "2019-09-12T00:41:00.106Z",
                "clientId": "factly",
                "createdDate": "2019-09-12T00:40:00.000Z",
                "relativeURL": "dega-content/factly/2019/9/1568248855198-forest-fires-in-india_featured-image.jpg",
                "sourceURL": "https://images.degacms.com/dega-content/factly.jpg"
            },
            "users": [
                {
                    "description": "Shashi was always intrigued ....",
                    "slug": "shashi-deshetti",
                    "enabled": true,
                    "email": "shashi@factly.in",
                    "id": "5d792589bf1bce0001eda484",
                    "class": "com.factly.dega.domain.DegaUser",
                    "firstName": "Shashi Kiran",
                    "lastName": "Deshetti",
                    "displayName": "Shashi Deshetti",
                    "facebookURL": null,
                    "twitterURL": null,
                    "instagramURL": null,
                    "linkedinURL": null,
                    "githubURL": null,
                    "profilePicture": null,
                    "emailVerified": true,
                    "createdDate": "2019-09-11T16:49:00.000Z",
                    "media": {
                        "name": "https://storage.degacms.com/dega-content/factly.jpg",
                        "type": "image/jpeg",
                        "url": "https://storage.degacms.com/dega-content/factly.jpg",
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
                        "relativeURL": "dega-content/factly.jpg",
                        "sourceURL": "https://images.degacms.com/dega-content/factly.jpg"
                    }
                }
            ],
            "id": "5d798341bf1bce0001eda510",
            "class": "com.factly.dega.domain.Post",
            "clientId": "factly",
            "publishedDate": "2019-09-28T13:30:29.834Z",
            "lastUpdatedDate": "2019-09-28T13:30:29.834Z",
            "subTitle": "",
            "createdDate": "2019-09-11T23:29:05.140Z"
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
### Query Parameters

**params**|**value**|**description**
-----|-----|-----
id | Object Id | To get post by object id
slug | string | To get post by slug
category | string | To get posts of a category 
tag | string | To get posts of a tag
user | string | To get posts of a particular user
limit | number | To limit number of posts
next | string |To get next posts
previous | string |To get previous posts
sortBy | string | To sort by field
sortAsc | boolean | To set sort by ascending
    
## Get post

**<span style="background-color:green; color : white; font-size : 18px">`GET`</span>**  <span style="font-size : 18px">`/api/v1/posts/:key`</span>

### Path parameters

**params**|**description**
-----|-----
key |  To get post by Object Id or slug

### Get a  by Object Id
**<span style="background-color:green; color : white; font-size : 18px">`GET`</span>**  <span style="font-size : 18px">`/api/v1/posts/$postId`</span>

```js
{
    "data" : {
        "title": "What is the status of Forest fires in India?",
        "content": "<p> content ...</p>",
        "excerpt": "Ever since the images & reports of Amazon forest fires came to light...",
        "featured": false,
        "sticky": false,
        "updates": "",
        "slug": "what-is-status-of-forest-fires-in-india",
        "tags": [],
        "categories": [
            {
                ...
            }
        ],
        "status": {
            ...
        },
        "format": {
            ...
        },
        "media": {
            ....
        },
        "users": [
            {
                ...
            }
        ],
        "id": "5d798341bf1bce0001eda510",
        "class": "com.factly.dega.domain.Post",
        "clientId": "factly",
        "publishedDate": "2019-09-28T13:30:29.834Z",
        "lastUpdatedDate": "2019-09-28T13:30:29.834Z",
        "subTitle": "",
        "createdDate": "2019-09-11T23:29:05.140Z"
    }
}
```

### Get a claim by slug
**<span style="background-color:green; color : white; font-size : 18px">`GET`</span>**  <span style="font-size : 18px">`/api/v1/posts/$postSlug` </span>

```js
{
    "data" : {
        "title": "What is the status of Forest fires in India?",
        "content": "<p> content ...</p>",
        "excerpt": "Ever since the images & reports of Amazon forest fires came to light...",
        "featured": false,
        "sticky": false,
        "updates": "",
        "slug": "what-is-status-of-forest-fires-in-india",
        "tags": [],
        "categories": [
            {
                ...
            }
        ],
        "status": {
            ...
        },
        "format": {
            ...
        },
        "media": {
            ....
        },
        "users": [
            {
                ...
            }
        ],
        "id": "5d798341bf1bce0001eda510",
        "class": "com.factly.dega.domain.Post",
        "clientId": "factly",
        "publishedDate": "2019-09-28T13:30:29.834Z",
        "lastUpdatedDate": "2019-09-28T13:30:29.834Z",
        "subTitle": "",
        "createdDate": "2019-09-11T23:29:05.140Z"
    }
}
```