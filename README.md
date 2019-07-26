# Forge Node.js Boilers

[![Node.js](https://img.shields.io/badge/Node.js-4.4.3-blue.svg)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-2.15.1-blue.svg)](https://www.npmjs.com/)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://opensource.org/licenses/MIT)

[![oAuth2](https://img.shields.io/badge/oAuth2-v1-green.svg)](http://developer.autodesk.com/)
[![Data-Management](https://img.shields.io/badge/Data%20Management-v1-green.svg)](http://developer.autodesk.com/)
[![OSS](https://img.shields.io/badge/OSS-v2-green.svg)](http://developer.autodesk.com/)
[![Model-Derivative](https://img.shields.io/badge/Model%20Derivative-v2-green.svg)](http://developer.autodesk.com/)

## Description
A collection of node.js-based boiler projects for the [Autodesk Forge Web Services APIs](http://forge.autodesk.com).

Those samples illustrates how to use the following Forge npm packages:

 * [forge.oauth2-js](https://github.com/Autodesk-Forge/forge.oauth2-js)
 * [forge.oss-js](https://github.com/Autodesk-Forge/forge.oss-js)
 * [forge.model.derivative-js](https://github.com/Autodesk-Forge/forge.model.derivative-js)
 * [forge.data.management-js](https://github.com/Autodesk-Forge/forge.data.management-js)

## Prerequisites

To run those samples, you need your own Forge API credentials:

 * Visit the [Forge Developer Portal](https://developer.autodesk.com), sign up for an account
 * [Create a new App](https://developer.autodesk.com/myapps/create)
 * For this new App, you can use <b>http://localhost:3000/api/forge/callback/oauth</b> as Callback URL.
 * Take note of the <b>Client ID</b> and <b>Client Secret</b>, those are your API keys that must remain hidden
 * Install the latest release of [NodeJS](https://nodejs.org)
 * Clone this or download this project. It's recommended to install a git client such as [GitHub desktop](https://desktop.github.com/) or [SourceTree](https://www.sourcetreeapp.com/)
 * To clone it via command line, use the following (<b>Terminal</b> on MacOSX/Linux, <b>Git Shell</b> on Windows):

    > git clone https://github.com/Autodesk-Forge/forge-boilers.nodejs


## Boilerplate Samples

Below are instructions to setup and run locally each boiler project, they may vary based on which project you want to run.

### viewer-barebone

This sample does not require you to implement a server, but it relies on hardcoded token and URN
in the JavaScript code, so it's for testing purposes only.

- You will need to generate a valid [2-legged OAuth token](https://developer.autodesk.com/en/docs/oauth/v2/tutorials/get-2-legged-token/)
and upload a model to your account, which you can do using this website for now: [https://models.autodesk.io](https://models.autodesk.io)
- Once you have the token and URN of your model, replace in the hardcoded fields in _viewer.html_:

```js
const token = '<Your access token>';
const urn = '<Your base64-encoded model URN>';
```

- Navigate to the _viewer-barebone_ folder and start serving the HTML file with
an HTTP server of your choice (we are using [http-server](https://www.npmjs.com/package/http-server)):

```
npm install -g http-server
cd viewer-barebone
http-server
```

## Project #3 - viewer+server
## Project #4 - viewer+server+oss
## Project #5 - viewer+server+oss+derivatives

The setup is similar for those 3 projects and they have to be run independently.

Those projects are using [Webpack](https://webpack.github.io), a module bundler and NPM packages to build and generate the frontend code, so an extra build step is required.

Navigate with a command shell or terminal to the project you want to run and type the following commands:

Mac OSX/Linux (Terminal)

    > npm install
    > export NODE_ENV=development
    > export FORGE_DEV_CLIENT_ID=<YOUR CLIENT ID FROM DEVELOPER PORTAL>
    > export FORGE_DEV_CLIENT_SECRET=<YOUR CLIENT SECRET>
    > npm start (builds the client dynamically in memory using webpack dev server)

Windows (use <b>Node.js command line</b> from Start menu)

    > npm install
    > set NODE_ENV=development
    > set FORGE_DEV_CLIENT_ID=<YOUR CLIENT ID FROM DEVELOPER PORTAL>
    > set FORGE_DEV_CLIENT_SECRET=<YOUR CLIENT SECRET>
    > npm start (builds the client dynamically in memory using webpack dev server)

Open your browser at:
[http://localhost:3000](http://localhost:3000)

To run a production build you can use build command:

    > npm run build

A production build code is minified and function names are mangled which make it much smaller and impractical for debugging or reverse engineering.


### Deploy Project #5 on Heroku

To deploy this project to Heroku, simply click on the button below, at the Heroku Create New App page:

 * Set your Client ID & Client Secret with your Forge API keys

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Autodesk-Forge/forge-boilers.nodejs/tree/project5)

The result will look like below: a treeview of the OSS storage that lets you upload designs and perform actions from the context menu.

To load a design in the viewer:

 * Right-click the root node to create a new bucket if you do not have any
 * Upload the design file to the bucket (supports file selection dialog or drag & drop)
 * Upon successful upload, the file appears in the bucket, right-click and select <b>Generate viewable</b>
 * Upon successful translation of the design, double-click the file and it will get loaded in the viewer

### Live Demo

[https://oss.autodesk.io](https://oss.autodesk.io)

 ![Project5](resources/img/Project5.png)

## Project #6 - viewer+server+data-mng+derivatives

Same setup than for projects #3, #4, #5 but you also need a valid callback url to achieve 3-legged oauth authentication.
I recommend you create 2 sets of Forge API keys, one for DEVELOPMENT and one for PRODUCTION because each set has a different callback url.

To run the project locally (using the DEV API keys):

 * Make sure the callback url for your DEV Forge API Keys is set to <b>http://localhost:3000/api/forge/callback/oauth</b>

![forge-dev](resources/img/forge-dev.png)

Run the following commands (mind the DEV!):

    > npm install
    > npm set NODE_ENV=development
    > set FORGE_DEV_CLIENT_ID=<YOUR DEV CLIENT ID FROM DEVELOPER PORTAL>
    > set FORGE_DEV_CLIENT_SECRET=<YOUR DEV CLIENT SECRET>
    > npm start (builds the client dynamically in memory using webpack dev server)


To run in production, the callback url defined in your Forge App needs to match the host url, so if you run your app from <b>https://mydomain.com</b>:

    > npm install
    > set HOST_URL=https://mydomain.com
    > npm set NODE_ENV=production
    > set FORGE_CLIENT_ID=<YOUR CLIENT ID FROM DEVELOPER PORTAL>
    > set FORGE_CLIENT_SECRET=<YOUR CLIENT SECRET>
    > npm start (builds the client dynamically on disk or use npm run build before)

### Deploy Project #6 on Heroku

To deploy this project to Heroku, simply click on the button below, at the Heroku Create New App page:

 * Set your Client ID & Client Secret with your Forge API keys
 * Specify HOST_URL env variable based on the name of your Heroku App:
 ex You used "MyApp" -> HOST_URL=https://MyApp.herokuapp.com
 * Your Forge App callback must be set to <b>https://MyApp.herokuapp.com/api/forge/callback/oauth</b>

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Autodesk-Forge/forge-boilers.nodejs/tree/project6)

The result will look like below: a treeview of your Autodesk Cloud storage that lets you upload designs and perform actions from the context menu.

To load a design in the viewer:

 * Right-click the nodes to get options from the context menu
 * Upload a design file to a folder (supports file selection dialog or drag & drop)
 * Upon successful upload, the file appears under the parent node in the tree, right-click and select <b>Generate viewable</b>
 * Upon successful translation of the design, double-click the file and it will get loaded in the viewer

### Live Demo

[https://dm.autodesk.io](https://dm.autodesk.io)

 ![Project6](resources/img/Project6.png)


## License

[MIT License](http://opensource.org/licenses/MIT)

## Written by 

Written by [Philippe Leefsma](http://twitter.com/F3lipek)

Forge Partner Development - [http://forge.autodesk.com](http://forge.autodesk.com)

