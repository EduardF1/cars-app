import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Bookingcard } from '../../components/bookingcard';
import { Marginer } from '../../components/marginer';
import { Navbar } from '../../components/navbar';
import { AboutUs } from './aboutUs';
import { BookingSteps } from './bookingSteps';
import { TopSection } from './topSection';

const PageContainer = styled.div`
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
            <Marginer direction={'vertical'} margin = {'4em'}/>
            <Bookingcard/>
            <Marginer direction={'vertical'} margin = {'8em'}/>
            <BookingSteps/>
            <Marginer direction={'vertical'} margin = {'5em'}/>
            <AboutUs/>
        </PageContainer>
    )
}