1)Imports

 we will be creating a .env file so that we can use absolute imports in our project. Recently, Create React App has changed how this is supported.

Instead of creating the .env file, create a jsconfig.json file in the root of the project.

Then, add the following code to it, save and restart your server.

{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
See also the official docs:

https://facebook.github.io/create-react-app/docs/importing-a-component#absolute-imports

You can then refer back to the video at around 2:37 and complete the rest of the lecture.