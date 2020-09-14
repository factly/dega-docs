---
id: claim
title: Claims
---

## Get claims

**<span style={{
     backgroundColor:'green', 
     color : 'white', 
     fontSize : '18px',
     fontFamily:'monospace',
     borderRadius: '3px',
     margin: 0,
     padding: '3.2px 6.4px'
     }}>GET</span>**  <span style={{fontSize:'18px'}}>`/api/v1/claims`</span>

```js
{
    "data" : [
        {
            "claim": "There was a shortfall in government earnings in 2018-19.",
            "description": "<p>Description</p>",
            "slug": "there-was-a-shortfall-in-government-earnings-in-2018-19",
            "rating": {
                "name": "True",
                "slug": "true",
                "description": "This is the description fo True rating",
                "media": {
                    "name": "https://storage.degacms.com/factly.png",
                    "type": "image/png",
                    "url": "https://storage.degacms.com/factly.png",
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
                    "relativeURL": "/factly.png",
                    "sourceURL": "https://images.degacms.com/factly.png"
                },
                "id": "5d791140e10bf00001fad893",
                "class": "com.factly.dega.domain.Rating",
                "numericValue": 5,
                "isDefault": true,
                "clientId": "default",
                "createdDate": "2019-09-11T15:22:00.000Z",
                "lastUpdatedDate": "2019-09-12T04:38:43.403Z"
            },
            "claimant": {
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
            "id": "5d8f5d53f4f39f0001e419ec",
            "class": "com.factly.dega.domain.Claim",
            "clientId": "factly",
            "claimDate": "2019-09-19T00:00:00.000Z",
            "claimSource": "https://twitter.com/INCIndia/status/1175386695757230080",
            "checkedDate": "2019-09-27T00:00:00.000Z",
            "reviewSources": "https://www.indiabudget.gov.in/economicsurvey/",
            "review": "<p>Review</p>",
            "reviewTagLine": "",
            "createdDate": "2019-09-28T13:17:07.009Z",
            "lastUpdatedDate": "2019-09-28T14:54:44.449Z"
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
rating | string | To get claims of a particular rating
claimant | string | To get claims of a particular claimant
limit | number | To limit number of claims
next | string |To get next claims
previous | string |To get previous claims
sortBy | string | To sort by field
sortAsc | boolean | To sort by ascending   
 
## Get claim

**<span style={{
     backgroundColor:'green', 
     color : 'white', 
     fontSize : '18px',
     fontFamily:'monospace',
     borderRadius: '3px',
     margin: 0,
     padding: '3.2px 6.4px'
     }}>GET</span>**  <span style={{fontSize:'18px'}}>`/api/v1/claims/:key`</span>

### Path parameters

**params**|**description**
-----|-----
key |  To get claim by Object Id or slug

### Get a claim by Object Id
**<span style={{
     backgroundColor:'green', 
     color : 'white', 
     fontSize : '18px',
     fontFamily:'monospace',
     borderRadius: '3px',
     margin: 0,
     padding: '3.2px 6.4px'
     }}>GET</span>**  <span style={{fontSize:'18px'}}>`/api/v1/claims/$claimId`</span>

```js
{
    "data" : {
        "claim": "There was a shortfall in government earnings in 2018-19.",
        "description": "<p>Description</p>",
        "slug": "there-was-a-shortfall-in-government-earnings-in-2018-19",
        "rating": {
            ...
        },
        "claimant": {
            ...
        },
        "id": "5d8f5d53f4f39f0001e419ec",
        "class": "com.factly.dega.domain.Claim",
        "clientId": "factly",
        "claimDate": "2019-09-19T00:00:00.000Z",
        "claimSource": "https://twitter.com/INCIndia/status/1175386695757230080",
        "checkedDate": "2019-09-27T00:00:00.000Z",
        "reviewSources": "https://www.indiabudget.gov.in/economicsurvey/",
        "review": "<p>Review</p>",
        "reviewTagLine": "",
        "createdDate": "2019-09-28T13:17:07.009Z",
        "lastUpdatedDate": "2019-09-28T14:54:44.449Z"
    }
}
```

### Get a claim by slug
**<span style={{
     backgroundColor:'green', 
     color : 'white', 
     fontSize : '18px',
     fontFamily:'monospace',
     borderRadius: '3px',
     margin: 0,
     padding: '3.2px 6.4px'
     }}>GET</span>**  <span style={{fontSize:'18px'}}>`/api/v1/claims/$claimSlug` </span>

```js
{
    "data" : {
        "claim": "There was a shortfall in government earnings in 2018-19.",
        "description": "<p>Description</p>",
        "slug": "there-was-a-shortfall-in-government-earnings-in-2018-19",
        "rating": {
            ...
        },
        "claimant": {
            ...
        },
        "id": "5d8f5d53f4f39f0001e419ec",
        "class": "com.factly.dega.domain.Claim",
        "clientId": "factly",
        "claimDate": "2019-09-19T00:00:00.000Z",
        "claimSource": "https://twitter.com/INCIndia/status/1175386695757230080",
        "checkedDate": "2019-09-27T00:00:00.000Z",
        "reviewSources": "https://www.indiabudget.gov.in/economicsurvey/",
        "review": "<p>Review</p>",
        "reviewTagLine": "",
        "createdDate": "2019-09-28T13:17:07.009Z",
        "lastUpdatedDate": "2019-09-28T14:54:44.449Z"
    }
}
```