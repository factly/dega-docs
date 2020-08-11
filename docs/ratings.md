---
id: rating
title: Ratings
---
## Get ratings

**<span style={{
     backgroundColor:'green', 
     color : 'white', 
     fontSize : '18px',
     fontFamily:'monospace',
     borderRadius: '3px',
     margin: 0,
     padding: '3.2px 6.4px'
     }}>GET</span>**  <span style={{fontSize:'18px'}}>`/api/v1/ratings`</span>

```js
{
    "data": [
        {
            "name": "True",
            "slug": "true",
            "description": "This is the description fo True rating",
            "media": {
                "name": "https://storage.degacms.com/dega-content/factly/2019/9/1568222996045-true.png",
                "type": "image/png",
                "url": "https://storage.degacms.com/dega-content/factly/2019/9/1568222996045-true.png",
                "title": "true",
                "slug": "true",
                "id": "5d792f14bf1bce0001eda499",
                "class": "com.factly.dega.domain.Media",
                "fileSize": "14323",
                "altText": "true",
                "uploadedBy": "shashi@factly.in",
                "publishedDate": "2019-09-11T17:29:00.000Z",
                "lastUpdatedDate": "2019-09-11T17:30:18.924Z",
                "clientId": "factly",
                "createdDate": "2019-09-11T17:29:00.000Z",
                "relativeURL": "dega-content/factly/2019/9/1568222996045-true.png",
                "sourceURL": "https://images.degacms.com/dega-content/factly/2019/9/1568222996045-true.png"
            },
            "id": "5daff00321935800013e15fa",
            "class": "com.factly.dega.domain.Rating",
            "numericValue": 5,
            "isDefault": true,
            "clientId": "default",
            "createdDate": "2019-09-11T15:22:00.000Z",
            "lastUpdatedDate": "2019-09-12T04:38:43.403Z"
        },
        {
            ...
        },
        ...
    ] 
}
```

## Get rating

**<span style={{
     backgroundColor:'green', 
     color : 'white', 
     fontSize : '18px',
     fontFamily:'monospace',
     borderRadius: '3px',
     margin: 0,
     padding: '3.2px 6.4px'
     }}>GET</span>**  <span style={{fontSize:'18px'}}>`/api/v1/ratings/:key`</span>

### Path parameters

**params**|**description**
-----|-----
key |  To get rating by Object Id or slug

### Get a particular rating by Object Id
**<span style={{
     backgroundColor:'green', 
     color : 'white', 
     fontSize : '18px',
     fontFamily:'monospace',
     borderRadius: '3px',
     margin: 0,
     padding: '3.2px 6.4px'
     }}>GET</span>**  <span style={{fontSize:'18px'}}>`/api/v1/ratings/$ratingId`</span>

```js
{
    "data" : {
        "name": "True",
        "slug": "true",
        "description": "This is the description fo True rating",
        "media": {
            ....
        },
        "id": "5daff00321935800013e15fa",
        "class": "com.factly.dega.domain.Rating",
        "numericValue": 5,
        "isDefault": true,
        "clientId": "default",
        "createdDate": "2019-09-11T15:22:00.000Z",
        "lastUpdatedDate": "2019-09-12T04:38:43.403Z"
    }
}
```

### Get a particular rating by slug
**<span style={{
     backgroundColor:'green', 
     color : 'white', 
     fontSize : '18px',
     fontFamily:'monospace',
     borderRadius: '3px',
     margin: 0,
     padding: '3.2px 6.4px'
     }}>GET</span>**  <span style={{fontSize:'18px'}}>`/api/v1/ratings/$ratingSlug` </span>

```js
{
    "data" : {
        "name": "True",
        "slug": "true",
        "description": "This is the description fo True rating",
        "media": {
            ....
        },
        "id": "5daff00321935800013e15fa",
        "class": "com.factly.dega.domain.Rating",
        "numericValue": 5,
        "isDefault": true,
        "clientId": "default",
        "createdDate": "2019-09-11T15:22:00.000Z",
        "lastUpdatedDate": "2019-09-12T04:38:43.403Z"
    }
}
```