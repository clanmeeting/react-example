import './App.css';
import React from "react";
import VideoConferencing from './components/video';

function App() {
  const domain = 'try.clanmeeting.com';
  const consumerId = 'test837';
  // you can add properties here.
  const optionalProperties = {
    roomName: 'uniqueRoomName',
    displayName: 'Host',
    jwt: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InRlc3Q4MzcifQ.eyJzdWIiOiJ0ZXN0ODM3IiwiYXVkIjoiY2xhbm1lZXRpbmciLCJpc3MiOiJwcm9kdWN0aW9uIiwicm9vbSI6IioiLCJleHAiOjE2NTE0Nzk0OTcsIm5iZiI6MTY0ODQ1NTQ5NywiY29udGV4dCI6e30sImlhdCI6MTY0ODQ1NTQ5N30.q0z2cRrsQ6f-TV9mvwmrV2AkNeodOFYsoH80K51TrNXbA4jI3msKaKinO6s1cyxr3cODAijwKhkxvOSvUyREJ1hQtCwE93b1BG0tytJ07IJuqmjn-kM1Xrgkx5XjWzsgh4O1K6ZlpPd12-a55omDvYArWII8LFl1tuQ3mL9hcy0RWRWOr2oDKuVG3OKTcc2vpt1QiDvMJ61lQPwFrHM0iaYNYOYPXd17kGSwBlQ2u1T8CpiO98F-FqLnNBSrlly2JQcM-hsvZ3TPtQ9ol9i3ZLTWMSI8WR7r-V2Fq-_AGR067FI48czBjtDConW0n1VZkjqo1YZ92pUmLj1k-bvPe6Z6RpfIlpnIGlnAPfEq3a68wLH265zUBwM3mWvhWse-bYeQySFyukAYrh75dPW65VIXTYAVFwZV-ZL3WqFqx_TDSMCqDRKZFeEJ54eOTeCVzLa5_451Pkr-DzZhgPXL-vC_JxplvVGYy7kJikS0oR4vug8k8exFYGavnLpP2e9F4F_O1J7wErrNsl5NJqM-3lJ-DhjJUo4jVoG_6PW4lPaSB7JWYM_iQxMq3jHAYXeWZPoLN3qymoHP0Wm3wThh4MpV8t_Z_aKBleG9lj8yPIWto90lfcFMBvZYt3heJZlvH8_MLzXavLDt7mce1Qb6IEswp9jPrzagAI8lQvaGTro',
    enableJoinMeetingPage: false,
};
   
  return (
    <div className="App">
     <VideoConferencing 
      domain={domain}
      consumerId={consumerId}
      optionalProperties={optionalProperties}
     />
    
    </div>
  );
}

export default App;
