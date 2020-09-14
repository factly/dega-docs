---
id: claimant
title: Claimants
---
## Get claimants

**<span style={{
     backgroundColor:'green', 
     color : 'white', 
     fontSize : '18px',
     fontFamily:'monospace',
     borderRadius: '3px',
     margin: 0,
     padding: '3.2px 6.4px'
     }}>GET</span>**  <span style={{fontSize:'18px'}}>`/api/v1/claimants`</span>

### Query paramaters

```js
{
    "data": [
        {
            "name": "Government of India",
            "slug": "government-of-india",
            "media": {
                "name": "https://storage.degacms.com/factly.png",
                "type": "image/png",
                "url": "https://storage.degacms.com/factly.png",
                "title": "government-of-india",
                "slug": "government-of-india1",
                "id": "5d8f5ce993ace2000112a8c6",
                "class": "com.factly.dega.domain.Media",
                "fileSize": "112448",
                "altText": "government-of-india",
                "uploadedBy": "shashi@factly.in",
                "publishedDate": "2019-09-28T13:15:21.348Z",
                "lastUpdatedDate": "2019-09-28T13:15:21.348Z",
                "clientId": "factly",
                "createdDate": "2019-09-28T13:15:21.348Z",
                "relativeURL": "/factly.png",
                "sourceURL": "https://images.degacms.com/factly.png"
            },
            "id": "5d8f5c68f4f39f0001e419e9",
            "class": "com.factly.dega.domain.Claimant",
            "clientId": "factly",
            "createdDate": "2019-09-28T13:13:00.000Z",
            "lastUpdatedDate": "2019-09-28T13:15:28.083Z"
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

**params**|**value**|**description**
-----|-----|-----
limit | number | To limit number of claimants
next | string |To get next claimants
previous | string |To get previous claimants
sortBy | string | To sort by field
sortAsc | boolean | To set sort by ascending

## Get claimant

**<span style={{
     backgroundColor:'green', 
     color : 'white', 
     fontSize : '18px',
     fontFamily:'monospace',
     borderRadius: '3px',
     margin: 0,
     padding: '3.2px 6.4px'
     }}>GET</span>**  <span style={{fontSize:'18px'}}>`/api/v1/claimants/:key`</span>

### Path paramaters

**params**|**description**
-----|-----
key |  To get claimant by Object Id or slug

### Get a particular claimant by Object Id
**<span style={{
     backgroundColor:'green', 
     color : 'white', 
     fontSize : '18px',
     fontFamily:'monospace',
     borderRadius: '3px',
     margin: 0,
     padding: '3.2px 6.4px'
     }}>GET</span>**  <span style={{fontSize:'18px'}}>`/api/v1/claimants/$claimantId`</span>

```js
{
    "data" :{
        "name": "Government of India",
        "slug": "government-of-india",
        "media": {
            "name": "https://storage.degacms.com/factly.png",
            "type": "image/png",
            "url": "https://storage.degacms.com/factly.png",
            "title": "government-of-india",
            "slug": "government-of-india1",
            "id": "5d8f5ce993ace2000112a8c6",
            "class": "com.factly.dega.domain.Media",
            "fileSize": "112448",
            "altText": "government-of-india",
            "uploadedBy": "shashi@factly.in",
            "publishedDate": "2019-09-28T13:15:21.348Z",
            "lastUpdatedDate": "2019-09-28T13:15:21.348Z",
            "clientId": "factly",
            "createdDate": "2019-09-28T13:15:21.348Z",
            "relativeURL": "/factly.png",
            "sourceURL": "https://images.degacms.com/factly.png"
        },
        "id": "5d8f5c68f4f39f0001e419e9",
        "class": "com.factly.dega.domain.Claimant",
        "clientId": "factly",
        "createdDate": "2019-09-28T13:13:00.000Z",
        "lastUpdatedDate": "2019-09-28T13:15:28.083Z"
    }
}
```

### Get a particular claimant by slug
**<span style={{
     backgroundColor:'green', 
     color : 'white', 
     fontSize : '18px',
     fontFamily:'monospace',
     borderRadius: '3px',
     margin: 0,
     padding: '3.2px 6.4px'
     }}>GET</span>**  <span style={{fontSize:'18px'}}>`/api/v1/claimants/$claimantSlug` </span>

```js
{
    "data" :{
        "name": "Government of India",
        "slug": "government-of-india",
        "media": {
            "name": "https://storage.degacms.com/factly.png",
            "type": "image/png",
            "url": "https://storage.degacms.com/factly.png",
            "title": "government-of-india",
            "slug": "government-of-india1",
            "id": "5d8f5ce993ace2000112a8c6",
            "class": "com.factly.dega.domain.Media",
            "fileSize": "112448",
            "altText": "government-of-india",
            "uploadedBy": "shashi@factly.in",
            "publishedDate": "2019-09-28T13:15:21.348Z",
            "lastUpdatedDate": "2019-09-28T13:15:21.348Z",
            "clientId": "factly",
            "createdDate": "2019-09-28T13:15:21.348Z",
            "relativeURL": "/factly.png",
            "sourceURL": "https://images.degacms.com/factly.png"
        },
        "id": "5d8f5c68f4f39f0001e419e9",
        "class": "com.factly.dega.domain.Claimant",
        "clientId": "factly",
        "createdDate": "2019-09-28T13:13:00.000Z",
        "lastUpdatedDate": "2019-09-28T13:15:28.083Z"
    }
}
```