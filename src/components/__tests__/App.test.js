import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

it('shows a comment box',()=>{
	const wrapped = shallow(<App />);
	expect(wrapped.find(CommentBox).length).toEqual(1);
	expect(wrapped.find(CommentList).length).toEqual(1);
});

/*
At the top level enzyme give us three additional capabillities to run our test .

Three general methods for creating instances of our component and writing expectation of our components .
Three ways to interact with enzyme .
1) Static - render the given component and return plain html

2) Shallow - render just the given component and none of its children 

3) Full DOM -  render the component and all of its children 

documentation airbnb.io/enzyme

*/