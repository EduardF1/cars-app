import {faEnvelope, faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import {Logo} from '../logo';

const FooterContainer = styled.div`
  background-color: #1D2124;
  ${tw`
    flex
    flex-col
    min-w-full
    pt-10
    md:pt-16
    pb-1
    items-center
    lg:justify-center
  `};
`;

const InnerContainer = styled.div`
  ${tw`
    flex
    w-full
    h-full
    max-w-screen-2xl
    flex-wrap
  `};
`;

const AboutContainer = styled.div`
  ${tw`
    flex
    flex-col
    mr-2
    md:mr-16
    pr-10
    pl-10
    md:pl-3
    md:pr-3
  `};
`;

const BottomContainer = styled.div`
  ${tw`
    w-full
    flex
    max-w-screen-2xl
    justify-center
    mt-7
    md:mt-1
  `};
`;

const CopyRightText = styled.span`
  font-size: 12px;
  ${tw`
    text-gray-300
  `};
`;

const AboutText = styled.p`
  ${tw`
    text-white
    text-sm
    font-normal
    max-w-xs
    leading-5
    mt-2
  `};
`;

const SectionContainer = styled.div`
  ${tw`
    w-full
    md:w-auto
    flex
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pl-3
    md:pr-3
    mt-6
    md:mt-0
  `};
`;
const LinksList = styled.ul`
  ${tw`
    outline-none
    list-none
    flex
    flex-col
  `};
`;

const ListItem = styled.li`
  ${tw`
    mb-3
  `};

  // target list children  
  & > a {
    ${tw`
      text-xs
      text-white
      hover:text-blue-500
      hover:underline
      transition-all
  `};
  }
`;

const HeaderTitle = styled.h3`
  ${tw`
    text-xl
    font-bold
    text-white
    mb-3
  `};
`;

const HorizontalContainer = styled.div`
  ${tw`
    flex
    items-center
  `};
`;

const RedIcon = styled.span`
  ${tw`
    w-10
    h-10
    rounded-full
    flex
    bg-red-500
    items-center
    justify-center
    text-white
    text-base
    mr-2
    hover:bg-green-500
  `};
`;

const SmallText = styled.h6`
  ${tw`
    text-sm
    text-white
  `};
`;

export function Footer() {
    return (
        <FooterContainer>
            <InnerContainer>
                <AboutContainer>
                    <Logo color={'white'} backgroundColor={'dark'}/>
                    <AboutText>Yourcar is a Car renting and selling company. It has offices around the entire world.</AboutText>
                </AboutContainer>
                <SectionContainer>
                    <HeaderTitle>Our Links</HeaderTitle>
                    <LinksList>
                        <ListItem><a href={'#'}>Home</a></ListItem>
                        <ListItem><a href={'#'}>About Us</a></ListItem>
                        <ListItem><a href={'#'}>Services</a></ListItem>
                        <ListItem><a href={'#'}>Models</a></ListItem>
                        <ListItem><a href={'#'}>Blog</a></ListItem>
                    </LinksList>
                </SectionContainer>
                <SectionContainer>
                    <HeaderTitle>Other Links</HeaderTitle>
                    <LinksList>
                        <ListItem><a href={'#'}>FAQ</a></ListItem>
                        <ListItem><a href={'#'}>Contact Us</a></ListItem>
                        <ListItem><a href={'#'}>Support</a></ListItem>
                        <ListItem><a href={'#'}>Privacy</a></ListItem>
                        <ListItem><a href={'#'}>Terms &amp; Conditions</a></ListItem>
                    </LinksList>
                </SectionContainer>
                <SectionContainer>
                    <HeaderTitle>Call now</HeaderTitle>
                    <HorizontalContainer>
                        <RedIcon>
                            <FontAwesomeIcon icon={faPhoneAlt}/>
                        </RedIcon>
                        <SmallText>INT/DK.: + 45 52 33 44 11</SmallText>
                    </HorizontalContainer>
                </SectionContainer>
                <SectionContainer>
                    <HeaderTitle>Mail</HeaderTitle>
                    <HorizontalContainer>
                        <RedIcon>
                            <FontAwesomeIcon icon={faEnvelope}/>
                        </RedIcon>
                        <SmallText>contact@yourcar.com</SmallText>
                    </HorizontalContainer>
                </SectionContainer>
            </InnerContainer>
            <BottomContainer>
                <CopyRightText>&#169; {new Date().getFullYear()} Yourcar. All rights reserverd</CopyRightText>
            </BottomContainer>
        </FooterContainer>
    )
}