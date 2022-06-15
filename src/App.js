import './App.css';
import React, { useState } from "react";
import VideoConferencing from './components/video';

function App() {
  const [meetingInstance, setMeetingInstance] = useState(null);
  const domain = 'try.clanmeeting.com';
  const consumerId = 'test837';
  
  // Add config here
  const optionalProperties = {
    roomName: 'unique44545',
    displayName: 'Host',
    // Pass jwt only for the host.
    jwt: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InRlc3Q4MzcifQ.eyJzdWIiOiJ0ZXN0ODM3IiwiYXVkIjoiY2xhbm1lZXRpbmciLCJpc3MiOiJwcm9kdWN0aW9uIiwicm9vbSI6IioiLCJleHAiOjE2NTUzOTg4MDEsIm5iZiI6MTY1NTIyNjAwMSwiY29udGV4dCI6e30sImlhdCI6MTY1NTIyNjAwMX0.jmy0l-L4q6oqoDuLX5K8m-PKVnG8RAvLbtzUwSvw1JuzJoX8ExV9RGuMVnfpGN4NEjZaRCk20i-B9qx1Lt8WJJxgjNpR4AlfCOCbSagAesGbkwRBg3x4Orh0UTUu4jycTY5V0EKFhSnJAPR5VrkfJaMqUGKNJoroLdm6uR9b-we140uNo8rJbk39Bqmn4kD0AppVsM6SMKxB-l_P14TXq8C3qfHat4PPxwlz-7c-FufwbpKcyOSQ_Ah_YcPKQc2TWGYnMxjncjErrUS8HmLwAMHUdVkZcZ6vdx1n_AaAQJVUnA1KXXWthGJVm7UK37_m234kzllJpEREoTHm58Ss4xiDi__8D7xuF9ZJS6oiXI0jzOSgQhEyuMjhNE6u56sdrVfv7QxX1ct3RtIBr87u3e3jEXkhyxU0dz9r12GVVXY8mpCMPTSwvk7O2fTJFLEn14C-E_fd1btSMGUBAwNpSrooeAjZnkrm2NnwOYIdS0p0nPrAN2R-R12_7l48hTFz0shYdbTq_fJQFFmUW8Et-sXe2Fb9H9O2JWbpLevXnkapCUfQrjmkyDn7xxEY3dJWTj9_wpU7orCqaljbfwqfIDIVvejPrghaeyFBDysJadB4IlFJa8NDIq2gJ-xjudE6Dmo0sZ2C2fzaH6Z3xepxeRyIwrGtdIYEsjCJvldCYnM',
    enableJoinMeetingPage: false,
};

// Instance creation

const getInstance = (instance) => {
  setMeetingInstance(instance)
}

/* Event handling logic
 For more Events and Methods
 please check https://clanmeeting.com/docs/video-api-customization-and-controls/
*/

const handleEvent = () => {
  console.log('trigger logic from here')
}

// Events Invoking if instance present
if(meetingInstance) {
  meetingInstance.on('someoneJoined', handleEvent)
}

  return (
    <div className="App">
     <VideoConferencing 
      domain={domain}
      consumerId={consumerId}
      optionalProperties={optionalProperties}
      getInstance={(data) => getInstance(data)}
     />
    
    </div>
  );
}

export default App;
