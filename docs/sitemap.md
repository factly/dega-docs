---
id: sitemap
title: Sitemaps
---
## Get sitemaps

**<span style="background-color:green; color : white; font-size : 18px">`GET`</span>**  <span style="font-size : 18px">`/api/v1/sitemaps`</span>

```js
{
    "data": {
        "categories": [
            {
                "slug": "india",
                "id": "5d79818bbf1bce0001eda4e2",
                "createdDate": "2019-09-11T23:21:47.651Z",
                "lastUpdatedDate": "2019-09-11T23:21:47.651Z"
            },
            ...
        ],
        "users": [
            {
                "slug": "shashi-deshetti",
                "id": "5d790fd4e5c62900019d782a",
                "createdDate": "2019-09-11T15:16:35.916Z",
                "lastUpdatedDate": "2019-09-11T15:16:35.916Z"
            },
            ... 
        ],
        "formats": [
            {
                "slug": "audio",
                "id": "5d790fd4e5c62900019d782d",
                "createdDate": "2019-09-11T15:16:35.916Z",
                "lastUpdatedDate": "2019-09-11T15:16:35.916Z"
            },
            ...                             
        ],
        "posts": [
            {
                "slug": "what-is-status-of-forest-fires-in-india",
                "id": "5d798341bf1bce0001eda510",
                "createdDate": "2019-09-11T23:29:05.140Z",
                "lastUpdatedDate": "2019-09-28T13:30:29.834Z"
            },
            ...
        ],
        "statuses": [
            {
                "slug": "publish",
                "id": "5d791093e5c62900019d7856",
                "createdDate": "2019-09-11T15:19:47.348Z",
                "lastUpdatedDate": "2019-09-11T15:19:47.348Z"
            },
            ...
        ],
        "tags": [
            {
                "id" : "5c38f509569ed47e00c7004a",
                "name" : "Black Money",
                "slug" : "black-money",
                "clientId" : "factly",
                "createdDate" : "2019-01-11T19:56:57.619Z",
                "lastUpdatedDate" : "2019-01-11T19:56:57.619Z",
                "class" : "com.factly.dega.domain.Tag"
            }
        ],
        "claims": [
            {
                "slug": "there-was-a-shortfall-in-government-earnings-in-201819-to-the-tune-of-rs17-lakh-crores-and-the-shortfall-was-compensated-by-taking-money-from-rbi",
                "id": "5d8f5d53f4f39f0001e419ec",
                "createdDate": "2019-09-28T13:17:07.009Z",
                "lastUpdatedDate": "2019-09-28T14:54:44.449Z"
            },
            ...
        ],
        "claimants": [
            {
                "slug": "government-of-india",
                "id": "5d8f5c68f4f39f0001e419e9",
                "createdDate": "2019-09-28T13:13:00.000Z",
                "lastUpdatedDate": "2019-09-28T13:15:28.083Z"
            }
        ],
        "ratings": [
            {
                "slug": "true",
                "id": "5d791140e10bf00001fad893",
                "createdDate": "2019-09-11T15:22:00.000Z",
                "lastUpdatedDate": "2019-09-12T04:38:43.403Z"
            },
            ....
        ],
        "factchecks": [
            {
                "slug": "factcheck-how-true-is-congress-party-claim-regarding-shortfall-in-government-earnings?",
                "id": "5d8f5e38f4f39f0001e419f0",
                "createdDate": "2019-09-28T13:20:56.676Z",
                "lastUpdatedDate": "2019-10-14T10:43:31.594Z"
            }
        ]
    }
}
```

