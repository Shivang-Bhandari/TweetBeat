# TweetBeat
A project which discusses the relevant details of building a twitter clone from scratch. It also has a demo TweetBox Front-End Element built with React and Material-UI.


1. What technologies would you use to build out this platform? Please tell us the
languages, databases, tools / servers you would use to build out the above platform. 

### Languages, Databases, Tools to be used : 
 #### Front-End : ES6 and React
 >ES6 is the latest update to the JavaScript and all the current browsers have full support to ES6. So it would be safe building
 things in ES6 instead of vanilla JS due to a list of highly effective and efficient features such as [Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), [String
 Interpolations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).
 
 >React is Declarative and is helpful with a UI which will can efficiently update and render just the right 
 components when the data changes hence reducing the overhead. It is component based and makes the perfect use of the principle
 of `Divide and Rule`. Not only does it help in easy management for all components but gives the ability to make complex UIs
 without any difficulty.
--------
 #### Database : NoSQL (MongoDB, Cassandra etc.)
 >The reason to use NoSQL would be due to it's NoSQL Implementation. It has an upper edge over the Relational DB systems such as MySQL. It is a much more suitable option for teams using agile sprints and is highly scalable. 
 It's advantages are :
 >* Object Oriented Programming
 >* Quick Schema Iterations
 >* Integrated Caching which can help with raw tweet data
 >* Highly Scalable
 >* Dynamic Schemas
 >* Object Oriented API's used for Data Manipulations 
-------
  #### Server : 
  >AWS/Heroku 
--------
 #### Tools : 
 >1. Docker : Container Platform to build and manage product
 >2. Grunt/Gulp : Automation of Front-End tasks such as Unit-Testing, Minification, Optimisations.
 >3. Bower : For Front-End Package Management
 >4. Content Delivery Network (CloudFlare/AWS etc.)
 >5. GraphQL : Data Query and Manipulation (offers freedom of defining the structure of the data required, and exactly the same structure of the data is returned from the server)
 >6. NodeJS : To support packages built over node (gulp etc.) and to run JS on server-side.  
 >7. ExpressJS : Compatible with MongoDB (NoSQL DB) and provides a minimal interface and many features to build the product.
 >8. SSL/TLS : Server Security
 >9. Firewalls : Server Security
 
--------
2. Write the schema of your database that is going to store the data. We want to see
this in detail to see where the all the different information will be stored

>The Schema is as mentioned below (The Description Column is to explain the Property, it isn't actually a part of the schema) : 

|USER|DESCRIPTION|
-----|:---------:|
|USER_ID| Unique User ID|
|PASSWORD| Hashed Password |
|USERNAME| Unique User Name|
|NAME| Name of the User|
|DATEOFBIRTH|Date of Birth of the User|
|LOCATION| Location of User|
|PROFILE_IMAGE| Display Picture URL|
|BIO| Description of User|
|FOLLOWERS| List of Followers|
|FOLLOWING| List of Following|
|TWEET_COUNT| Number of tweets Published|
|TWEET_LIST| List of tweets Published|
|TIMEZONE| TimeZone of User|
|DOES_EXIST| Bool Vale, true If user is registered|
|PROFILE_URL| URL to user's profile|


|TWEET|DESCRIPTION|
-----|:---------:|
|TWEET_ID| Unique Tweet ID|
|TEXT| Tweet content |
|USERNAME| Unique User Name of Publisher|
|USER_ID| ID of Publisher|
|DATE|Date of Publish|
|TIME|Time of Publish|
|LOCATION| Location while Publishing|
|IMAGE| Tweet Picture URL|
|MENTION_COUNT| Count of mentions in tweet|
|MENTION_LIST| List of mentioned users in tweet|
|RETWEET_COUNT| Count of Retweets|
|LIKES_COUNT| Count of Likes|
|COMMENTS_LIST| List of Comments|
|COMMENT_DATA| List of Comments Data|
|TWEET_URL| Public URL of Tweet|
|IMPRESSIONS| Count of impressions|
|ACTIONS| List of Count of actions|


|ACTIONS|DESCRIPTION|
-----|:---------:|
|TWEET_ID| Unique Tweet ID|
|PROFILE_VIEWS| Count of Profile Views |
|FOLLOWS| Count of New followers|
|RETWEET_COUNT| Count of Retweets|
|LIKES_COUNT| Count of Likes|


|FOLLOWERS|DESCRIPTION|
-----|:---------:|
|USERNAME| Unique User Name of User|
|USER_ID| ID of User|
|PROFILE_URL| URL to user's profile|
|NAME| Name|
|PROFILE_IMAGE| Display Picture URL|
|BIO| Description of User|
|LATEST_TWEET| Content of Latest Tweet by the user|


|FOLLOWERS|DESCRIPTION|
-----|:---------:|
|USERNAME| Unique User Name of User|
|USER_ID| ID of User|
|PROFILE_URL| URL to user's profile|
|NAME| Name|
|PROFILE_IMAGE| Display Picture URL|
|BIO| Description of User|
---------

3. Write a function/API that will return all the tweets to show on the dashboard of a
particular user. Please make sure to return the data in JSON.

### Code : 

 ```ES6
const api = "api.xyz.com" //API URL

let token="" // token to request data from API

// API headers 
const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

//function to fetch tweets
export const get = (user_id) =>
  fetch(`${api}/${user_id}/${user_tweets}`, { headers }) //dummy API URL
    .then(resultData => resultData.json()) //fetches and converts data to JSON
```
---------
4. How much can the system you have built scale up to? What are the limiting factors
of your system and when will it start failing? 

>The Front-End Stack is built with React and it is known to be one of the most influencing 
library to be developed. Not only does it increase Reusability, it makes good use of new features of ES6.
So, we have built an ecosystem of resolving UI-building challenges, using React.

>MongoDB can handle a huge 100,000+ Database read, writes per second, can store 1 billion+ documents in the database 
which is more than sufficient to handle huge a user base replicating that of twitter
provided that the servers are equipped to tackle DDOS Attacks and everything works under ideal conditions.

>Ideally, the stack should be able to handle all the product laod and not fail.
---------
5. write the frontend code for the text box where you can type your tweet and
the submit button that will send the request to publish this tweet.

>The code for the text box is written using ES6 and React. 
To run the code Locally :
>* Clone/Download This Repo.
>* Run `npm install` in the directory
>* Run `yarn start`
This will serve the app on localhost.

The repo is also hosted at : http://shivangbhandari.me/TweetBeat/ 
