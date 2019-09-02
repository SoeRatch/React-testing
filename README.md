Testing Design =>

App component -

a)shows the Comment Box inside of it 

b)shows the Comment List inside of it 


CommentBox Component - 

a)shows a text area and a button 

b)Users can enter input into the text area and submit it .

c)When the input is submitted , textarea should get emptied. 


CommentList Component

a) Shows one "li" element per comment

b) Text from each component is visible .


Comments Reducer

a) Properly hands actions with a type of 'SAVE_COMMENT'

b) Doesn't throw an error if it gets an action with any other type.


SaveComment Action

a) Has a type of 'SAVE_COMMENT'

b) Produces an action that has a payload of the new comment's text 







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

4) Full DOM rendering is ideal for use cases where you have components that may interact with DOM APIs or need to test components that are wrapped in higher order components.

Note: unlike shallow or static rendering, full rendering actually mounts the component in the DOM, which means that tests can affect each other if they are all using the same DOM. Keep that in mind while writing your tests and, if necessary, use .unmount() or something similar as cleanup.

so after every single test that we write we are gonna make sure that we do little bit of clean up .

we are gonna make sure that we gonna take the component that we created and got mounted into that VIRTUAL DOM and we are gonna attempt to unmount it . so that the component that we created doesn't interfere with other component that was created .

5)afterEach is exact opposite to beforeEach .
afterEach will run a function or a little chunk of code that we pass it after every single test is executed .

6) 

CommentBox Component - 

b)Users can enter input into the text area and submit it .

approach =>

a) find the text area element .
b) simulate a change event .
c) provide a fake event object .
d) force the component to update .
e) assert that the text area value has changed .



7) simulate method helps in simulating an event tied to a dom element .
when we simulate an event we want to use the html name of the event not the react name .

therefore we use 'change' instead of 'onChange' in simulate method .

