import React, { useState, useEffect } from 'react';
import {clanMeeting} from 'react-clan-meeting';
const VideoConferencing = ({ domain, consumerId, jwt }) => {
    const [wi, setWi] = useState(null);
    useEffect(() => {
        const script = document.createElement("script");
        script.src = `https://${domain}/external_api.js`;
        script.async = true;
        script.onload = () => scriptLoaded();

        document.body.appendChild(script);
    }, [domain, consumerId, jwt]);
    const scriptLoaded = () => {
        setWi(window);
    }

    useEffect(() => {
        const optionalProperties = {
            roomName: 'uniqueRoomName',
            displayName: 'Host',
            jwt: jwt,
            enableJoinMeetingPage: true,

        };
        const meeting = new clanMeeting(domain, consumerId, optionalProperties);
        meeting.generateRoomName().anonymizeDisplayName();
        meeting.start();
    }, [wi]);
    return (
        <>
            <span style={{
                display: 'flex',
                justifyContent: 'center'
            }}>please wait....</span>
        </>
    );
}


export default VideoConferencing;