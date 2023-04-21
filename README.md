# Clan Meeting - React App Example
Add features like video meeting, audio calling, screen sharing and file sharing to your React applications with the most affordable video API [Clan Meeting](https://clanmeeting.com).
&nbsp;
## Installation
This repo uses https://www.npmjs.com/package/react-clan-meeting npm package. Execute the following in your project directory.
```sh
$ git clone https://github.com/clanmeeting/react-example.git
$ cd react-example
$ npm install
$ npm start
```
&nbsp;
## Usage
#### Create a file called clanMeeting.js and paste the following
```javascript
import React, { useEffect } from "react";
import { clanMeeting } from "react-clan-meeting";

const VideoMeeting = ({
  domain,
  consumerId,
  optionalProperties,
  getInstance,
}) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://${domain}/external_api.js`;
    script.async = true;
    script.onload = () => scriptLoaded();
    document.body.appendChild(script);
  }, [domain, consumerId, optionalProperties.jwt]);

  const scriptLoaded = () => {
    const meeting = new clanMeeting(domain, consumerId, optionalProperties);
    meeting.start();
    getInstance(meeting);
  };

  return (
    <>
      <span
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        Loading. Please wait....
      </span>
    </>
  );
};

export default VideoMeeting;
```
&nbsp;
### Modify your App.js file as follows
All your meeting related customizations are to be included in this file. Please note the following:  

- Edit the file path for clanMeeting.js with respect to App.js while importing (see the line 3)
- Add the domain, consumerId and the test JWT that has been shared with you in the following code.
- JWT is only needed for the hosts. If you pass a valid JWT in the optionalProperties, this user will become a host. Read more about [authentication](https://clanmeeting.com/docs/video-api/authentication/) and [host privileges](https://clanmeeting.com/docs/video-api/host-privileges/).
- Add the properties that you need to optionalProperties. [Click here](https://clanmeeting.com/docs/video-api-customization-and-controls/properties/) to see all available properties.
- Check Clan Meeting Video API [events](https://clanmeeting.com/docs/video-api-customization-and-controls/events) and [methods](https://clanmeeting.com/docs/video-api-customization-and-controls/methods) to control the other aspects of the meeting.
```javascript
import "./App.css";
import React, { useState } from "react";
import VideoMeeting from "./components/clanMeeting";

function App() {
  const [meeting, setMeetingInstance] = useState(null);

  // Create instance
  const getInstance = (instance) => {
    setMeetingInstance(instance);
  };

  // Add domain and consumerId here
  const domain = "<domain>";
  const consumerId = "<consumerId>";

  // Add properties here
  const optionalProperties = {
    roomName: "test",
    displayName: "Host",
    // Pass jwt only for the host.
    // When generating your own JWT token, please fetch the token from your backend server
    // Visit https://clanmeeting.com/docs/video-api-token-generation/generate-jwt/
    jwt: "<jwt_token>",
    enableJoinMeetingPage: false,
  };

  // Add JavaScript events and methods inside the IF block
  if (meeting) {
    // Example event that triggers if a participant joins the meeting
    // The callback listener is triggered in case this event occurs within the meeting
    const someoneJoinedLsnr = () => {
      console.log("Trigger custom logic of what happens if a participant joins the meeting");
    };

    // Start listening for the someoneJoined event
    meeting.on("someoneJoined", someoneJoinedLsnr);
  }

  return (
    <div className="App">
      <VideoMeeting
        domain={domain}
        consumerId={consumerId}
        optionalProperties={optionalProperties}
        getInstance={(data) => getInstance(data)}
      />
    </div>
  );
}

export default App;
```
&nbsp;
### Finally paste the following into your index.html file in the <body> section
``` javascript
<div id="my-meeting" style="position: fixed; top: 0; left: 0; bottom: 0; right: 0; width: 100%; height: 100%; border: none; margin: 0; padding: 0; overflow: hidden; z-index: 99;"></div>
```
&nbsp;
### Ensure that strict mode is disabled in your src/index.js file
``` javascript
// change this
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// to below
root.render(
    <App />
);

```
