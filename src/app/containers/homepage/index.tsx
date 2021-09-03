import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Bookingcard } from '../../components/bookingcard';
import { Navbar } from '../../components/navbar';
import { TopSection } from './topSection';

const PageContainer = styled.div`
  overflow: hidden;
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`;

export function Homepage() {
    return (
        <PageContainer>
            <Navbar/>
            <TopSection/>
            <Bookingcard/>
        </PageContainer>
    )
}