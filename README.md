# *The Hub*

**The Hub** is a full stack web app project. While there are many features we hope to bring to life the core feature currently planned is the **Computer Science Study API** which will be a public API that allows users to request Computer Science study question data in the form of JSON. We anticipate users to be able to also help us grow our repository of questions by submitting their own. We hope that our project  

Time spent: **10** hours spent in total

## User Stories

The following **required** functionality is completed:

- [x] User can **compose and post a new tweet**
  - [x] User can click a “Compose” icon in the Action Bar on the top right
  - [x] User can then enter a new tweet and post this to twitter
  - [x] User is taken back to home timeline with **new tweet visible** in timeline
  - [x] Newly created tweet should be manually inserted into the timeline and not rely on a full refresh
  - [x] User can **see a counter with total number of characters left for tweet** on compose tweet page

The following **optional** features are implemented:

- [x] User is using **"Twitter branded" colors and styles**
- [x] User can click links in tweets launch the web browser 
- [x] Use Parcelable instead of Serializable using the popular [Parceler library](http://guides.codepath.org/android/Using-Parceler).
- [x] User can **open the twitter app offline and see last loaded tweets**. Persisted in SQLite tweets are refreshed on every application launch. While "live data" is displayed when app can get it from Twitter API, it is also saved for use in offline mode. 

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='Twitter2.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with [LiceCap](http://www.cockos.com/licecap/).

## Notes

Describe any challenges encountered while building the app.

## Open-source libraries used

- [Android Async HTTP](https://github.com/codepath/CPAsyncHttpClient) - Simple asynchronous HTTP requests with JSON parsing
- [Glide](https://github.com/bumptech/glide) - Image loading and caching library for Android

## License

    Copyright [2021] [Brandon Muller]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language go

# Project 2 - SimpleTweet

SimpleTweet is an android app that allows a user to view his Twitter timeline. The app utilizes [Twitter REST API](https://dev.twitter.com/rest/public).

Time spent: 12 hours spent in total

## User Stories

The following **required** functionality is completed:

- [x] User can **sign in to Twitter** using OAuth login
- [x]	User can **view tweets from their home timeline**
  - [x] User is displayed the username, name, and body for each tweet
  - [x] User is displayed the [relative timestamp](https://gist.github.com/nesquena/f786232f5ef72f6e10a7) for each tweet "8m", "7h"
- [x] User can refresh tweets timeline by pulling down to refresh

The following **optional** features are implemented:

- [x] User can view more tweets as they scroll with infinite pagination
- [x] Improve the user interface and theme the app to feel "twitter branded"
- [x] Links in tweets are clickable and will launch the web browser
- [x] User can tap a tweet to display a "detailed" view of that tweet

The following **additional** features are implemented:

- [x] implemented a toolbar for max customization of the actionbar area

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='SimpleTweet.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with [LiceCap](http://www.cockos.com/licecap/).

## Notes

Visually customizing the app was the most challenging part for me

## Open-source libraries used

- [Android Async HTTP](https://github.com/codepath/CPAsyncHttpClient) - Simple asynchronous HTTP requests with JSON parsing
- [Glide](https://github.com/bumptech/glide) - Image loading and caching library for Android


Current Path: 

csAPI V1 (MVP):
	- home
		○ improve UI/UX 
		○ add example JSON data
	- Getting Started
		○ API Documentation (possibly swagger) or homeade
		○ API URL Generator
	- Contact Page
		○ basic contact page that sends to an email or something
	- Back-end
		○ create mongoose models for data
		○ set up database
		○ set up docker
		○ set up k8
	- create or figure out how to generate test data (possibly openAI)

csAPI V2:
	- question submission page
		○ set up DB to recieve question submission
	- Set up users accounts with email verification
		○ user login/signup/account pages
	- possible link to a forum like this

csAPI V3:
	- flash cards
		○ link API to some flash card software to generate flash cards from
		○ have downloadable flash cards on our site
	- OpenAI
		○ Utilize openAI for something like generating questions or something 
