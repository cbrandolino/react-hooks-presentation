// Import React
import React from 'react';

import useStateApiExample from './useStateApi.example';
import separateLogicExample from './separateLogic.example';
import handleChangeExample from './handleChange.example';
import testExample from './test.example';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('./code.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            React Hooks
          </Heading>
          <Heading size={3} lineHeight={1} textColor="secondary">
            new in React 16.8
          </Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={6} textColor="tertiary" caps>
            Why hooks?
          </Heading>
          <List textColor="primary">
            <Appear>
              <ListItem lineHeight={3} padding={10}>
                Fewer classes
                <List padding={10}>
                  <Appear>
                    <ListItem padding={5}>better hot loading</ListItem>
                  </Appear>
                  <Appear>
                    <ListItem padding={5}>more potential for precompilation</ListItem>
                  </Appear>
                </List>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem padding={10}>Sharing stateful logic among different components</ListItem>
            </Appear>
            <Appear>
              <ListItem padding={10}>Code that belongs together is kept together</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgColor="primary">

          <Heading size={1} caps lineHeight={1} textColor="tertiary">
            Case study
          </Heading>
          <Heading size={2} lineHeight={1} textColor="secondary">
            useCase()
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={6} textColor="tertiary" lineHeight={2} >
            useState: basic example
          </Heading>
          <CodePane lang="javascript" source={useStateApiExample} />
        </Slide>
        <Slide bgColor="primary">
          <Heading size={6} textColor="tertiary" lineHeight={2} >
            useState: separate / reuse logic
          </Heading>
          <CodePane lang="javascript" source={separateLogicExample} />
        </Slide>
        <Slide bgColor="primary">
          <Heading size={6} textColor="tertiary" lineHeight={2} >
            useState: handleChange / input field
          </Heading>
          <CodePane lang="javascript" source={handleChangeExample} />
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            What about testing?
          </Heading>
          <Appear>
            <Heading size={2} fit lineHeight={1} textColor="tertiary">
              react-testing-library to the rescue
            </Heading>
          </Appear>
        </Slide>
        <Slide>
          <Slide bgColor="primary">
            <Heading size={6} textColor="tertiary" lineHeight={2} >
              useState: testing
            </Heading>
            <CodePane lang="javascript" source={testExample} />
          </Slide>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={1}  caps lineHeight={1} textColor="tertiary">
            Thanks
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
