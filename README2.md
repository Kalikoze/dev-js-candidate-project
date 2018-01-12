![SpruceBot UI](https://media.giphy.com/media/xUNda19iCfA3neIgCI/giphy.gif)

# SpruceBot (SpruceLabs Code Challenge)

[Deployed App](https://sprucebot.herokuapp.com/)

## Synopsis
This is an application where the user can talk with a chatbot that specializes in telling jokes (specifically Chuck Norris jokes 😜).  This application was developed using ReactJS, ReduxJS, NextJS, Express, Watson Conversation, and the Internet Chuck Norris Database.

## Usage
This application works similarly to other chatting apps except you are actually speaking with the Watson Conversation API.  It is lighthearted and meant to make you laugh.  You can ask SpruceBot to tell you something funny, and he will get tell you a random joke.  If you prefer a joke that is more nerdy or mature, you can clarify that when asking him to tell you a joke.  If the user has trouble in understanding how the application works, the user can ask for help and SpruceBot will give different tips each time.  While chatting with SpruceBot, music plays in the background.  The user can choose to pause the music or switch to a different track.

## Setup

##### NPM install
  - ```npm install```

##### Start Server
  - ```node server.js```

##### Open in browser

## History
* Deploy application to Heroku
* Testing of actions, reducers, components, and containers
* Improve on background music by adding play controls to pause sound or switch tracks
* Implemented Redux to break out functionality further and have access to more props
* Created endpoints and functionality to send messages and receive messages from SpruceBot
* Connected Watson Conversation and brought in initial message
* Setup background music
* Support for messages to be sent on the frontend
* Use wireframe as inspiration to create the UI/UX of the application

## Future Iterations

* Add more functionality to SpruceBot so it can do more than just tell jokes
* Add a settings tab to set preferences on what kind of jokes the user prefers as well as information like name, where the user lives, etc. so it can be a more personal experience
* Add speech recognition and SpruceBot chat for better accessibility
* Connect Firebase for authorization via Google, Facebook, & etc.
* Create database of users so a user can create an account, login, and SpruceBot knows your preferences

## Built With
- [ReactJS](https://reactjs.org/)
- [ReduxJS](https://redux.js.org/)
- [NextJS](https://github.com/zeit/next.js/)
- [Express](https://expressjs.com/)
- [Watson Conversation](https://www.ibm.com/watson/services/conversation/)
- [Chuck Norris Database](http://www.icndb.com/api/)
- [Heroku](https://heroku.com)

## Resources Used

##### NextJS

- [Building Apps with NextJS Parts 1-3](https://medium.com/@diamondgfx/nextjs-lessons-learned-part-3-be3aeefd9be0)

##### Next Redux Wrapper

- [Next Redux Wrapper](https://github.com/kirill-konshin/next-redux-wrapper)

##### Watson conversation

- [Watson Tutorial](https://console.bluemix.net/docs/services/conversation/develop-app.html#building-a-client-application)
- [Watson API Reference](https://www.ibm.com/watson/developercloud/conversation/api/v1/?node#send_message)
- [Simple Conversation Sample](https://github.com/watson-developer-cloud/conversation-simple/blob/master/app.js)

##### Testing
- [Jest Snapshots](https://medium.com/styled-components/effective-testing-for-styled-components-67982eb7d42b)
- [Mocking Refs for Testing](https://reactjs.org/blog/2016/11/16/react-v15.4.0.html)

## Contributors
Travis Rollins
