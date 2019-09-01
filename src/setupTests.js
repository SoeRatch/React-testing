//here the name of the file should be exactly setupTests.js 
// so when test is run enzyme first like for this file and executes this before running code in any other file

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });