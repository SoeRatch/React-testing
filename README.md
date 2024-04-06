# Testing Design

## App Component
- **a)** Shows the Comment Box inside of it.
- **b)** Shows the Comment List inside of it.

## CommentBox Component
- **a)** Shows a text area and a button.
- **b)** Users can enter input into the text area and submit it.
- **c)** When the input is submitted, the textarea should get emptied.

## CommentList Component
- **a)** Shows one "li" element per comment.
- **b)** Text from each component is visible.

## Comments Reducer
- **a)** Properly handles actions with a type of 'SAVE_COMMENT'.
- **b)** Doesn't throw an error if it gets an action with any other type.

## SaveComment Action
- **a)** Has a type of 'SAVE_COMMENT'.
- **b)** Produces an action that has a payload of the new comment's text.

# Additional Capabilities of Enzyme

At the top level, Enzyme gives us three additional capabilities to run our tests:

1. **Static Rendering:** Renders the given component and returns plain HTML.
2. **Shallow Rendering:** Renders just the given component and none of its children.
3. **Full DOM Rendering:** Renders the component and all of its children.

Documentation: [Airbnb Enzyme](https://airbnb.io/enzyme)

# Imports

We will be creating a `.env` file to enable absolute imports in our project. Instead of this file, create a `jsconfig.json` file in the root of the project with the following code:

```json
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
```

See also the official docs:

[Importing a Component - Absolute Imports](https://facebook.github.io/create-react-app/docs/importing-a-component#absolute-imports)





3) beforeEach

It means before every single test, we will do some common setup logic.

Any logic that we write inside of beforeEach function will be executed before the test cases.

It is helpful to write the common code which will be used in different test cases.

4) Full DOM rendering is ideal for use cases where you have components that may interact with DOM APIs or need to test components that are wrapped in higher order components.

Note: unlike shallow or static rendering, full rendering actually mounts the component in the DOM, which means that tests can affect each other if they are all using the same DOM. Keep that in mind while writing your tests and, if necessary, use .unmount() or something similar as cleanup.

So after every single test that we write, we are gonna make sure that we do a little bit of clean up.

We are gonna make sure that we take the component that we created and got mounted into that VIRTUAL DOM and we are gonna attempt to unmount it, so that the component that we created doesn't interfere with other components that were created.

5) afterEach is exact opposite to beforeEach.

afterEach will run a function or a little chunk of code that we pass it after every single test is executed.

6) CommentBox Component - 

b) Users can enter input into the text area and submit it.

Approach:

a) Find the text area element.

b) Simulate a change event.

c) Provide a fake event object.

d) Force the component to update.

e) Assert that the text area value has changed.

7) Simulate method helps in simulating an event tied to a DOM element.

When we simulate an event, we want to use the HTML name of the event not the React name.

Therefore, we use 'change' instead of 'onChange' in simulate method.

8) When we call setState, the component gets re-rendered, and it happens asynchronously.

It queues up a request for an update inside of React, and that update might be at some point in time in the future, not immediately after setState.

That's the reason we force the component to update in step 6d.

update() method forces a render.

9) prop(key) - this method returns the prop value for the node of the current wrapper with the provided key.

10) describe - describe function is used to group together some sets of tests that have common setup code.
