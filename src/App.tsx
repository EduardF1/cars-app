import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import './App.css';
import { Homepage } from './app/containers/homepage';

const AppContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`
function App() {
    return (
        <Homepage/>
    );
}

export default App;
