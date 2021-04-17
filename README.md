# Realtime Apps with Server-Side Events in React

This repo contains the code for the program used for [React Bangalore](https://www.meetup.com/ReactJS-Bangalore/events/276655326/) Meetup using Flask and ReactJS.

![demo](https://i.imgur.com/QhurVvR.gif)

Slides can be found [here](https://docs.google.com/presentation/d/1KlBgtPvNqskJBEAF0RWfiN3_7zdsIAHKBOXV-AcUBjk/edit?usp=sharing).
Stream can be found [here](https://www.youtube.com/watch?v=46dn0Lm81is)

## Running this Project

### Get the Code using a Terminal Window

```bash
$ git clone https://github.com/balub/react-blr-sse-demo.git
$ cd react-blr-sse-demo
```

### Start the Server in a Terminal Window

```bash
$ cd server
$ pip install -r requirements.txt
$ flask run 
```

### Start the Client in another Terminal Window

```bash
$ npm install
$ npm start
```

Then point a browser at `http://localhost:3000/`.

## Reference Materials

* [MDN Server Sent Events Guide](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events)
* [A Look at Server Sent Events](https://simonprickett.dev/a-look-at-server-sent-events/)