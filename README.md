
1)At the top level enzyme give us three additional capabillities to run our test .

Three general methods for creating instances of our component and writing expectation of our components .
Three ways to interact with enzyme .
1) Static - render the given component and return plain html

2) Shallow - render just the given component and none of its children 

3) Full DOM -  render the component and all of its children 

documentation airbnb.io/enzyme


2)Imports

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


3)beforeEach-

It means before every single test , we will do some common setup logic .

Any logic that we write inside of beforeEach function will be executed before the test cases .

It is helpful to write the common code which will be used in different test cases . 