import React, { useEffect } from "react";
import { clanMeeting } from "react-clan-meeting";

const VideoConferencing = ({ domain, consumerId, optionalProperties }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://${domain}/external_api.js`;
    script.async = true;
    script.onload = () => scriptLoaded();

    document.body.appendChild(script);
  }, [domain, consumerId, optionalProperties.jwt]);
  const scriptLoaded = () => {
    const meeting = new clanMeeting(domain, consumerId, optionalProperties);
    meeting.generateRoomName().anonymizeDisplayName();
    meeting.start();
  };

  return (
    <>
      <span
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        please wait....
      </span>
    </>
  );
};

export default VideoConferencing;
