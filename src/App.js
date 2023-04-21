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