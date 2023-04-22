# Clan Meeting - React App Example
Add features like video meeting, audio calling, screen sharing and file sharing to your React applications with the most affordable video API [Clan Meeting](https://clanmeeting.com).
&nbsp;
## Installation
This is an example repo that uses https://www.npmjs.com/package/react-clan-meeting NPM package. If you want to add Clan Meeting to your existing app, please follow the usage instructions provided in the package page. In case you are creating a fresh React App, execute the following in your project directory.
```sh
$ git clone https://github.com/clanmeeting/react-example.git
$ cd react-example
$ npm install
```
&nbsp;
## Modify your App.js file as follows
All your meeting related customizations are to be included in this file. Please note the following:  

- (Mandatory Step) Add the domain, consumerId and the test JWT that has been shared with you in App.js file.
- Once you have tested the integrations successfully and before moving to production, you should generate your own short-lived tokens and replace this static test JWT shared with you.
- JWT is only needed for the hosts. If you pass a valid JWT in the optionalProperties, this user will become a host. Read more about [authentication](https://clanmeeting.com/docs/video-api/authentication/) and [host privileges](https://clanmeeting.com/docs/video-api/host-privileges/).
- Add the properties that you need to optionalProperties. [Click here](https://clanmeeting.com/docs/video-api-customization-and-controls/properties/) to see all available properties.
- Check Clan Meeting Video API [events](https://clanmeeting.com/docs/video-api-customization-and-controls/events) and [methods](https://clanmeeting.com/docs/video-api-customization-and-controls/methods) to control the other aspects of the meeting.
&nbsp;
## Start the development server
```sh
$ npm start
```