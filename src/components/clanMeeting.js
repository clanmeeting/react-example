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