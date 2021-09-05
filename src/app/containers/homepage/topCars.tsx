import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import {Car} from '../../components/car';
import Carousel, {Dots, slidesToShowPlugin} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import {useMediaQuery} from 'react-responsive';
import {SCREENS} from '../../components/responsive';
import carService from '../../services/car-service';
import {Dispatch} from '@reduxjs/toolkit';
import {GetCars_cars} from '../../services/car-service/__generated__/GetCars';
import {setTopCars} from './slice';
import {useDispatch, useSelector} from 'react-redux';
import {createSelector} from 'reselect';
import {makeSelectTopCars} from './selectors';
import {MoonLoader} from 'react-spinners';

const TopCarsContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
  `};
`;

const Title = styled.h2`
  ${tw`
    text-xl
    lg:text-4xl
    text-black
    font-extrabold
  `};
`;

const CarsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
  `};
`;

const EmptyCars = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    items-center
    text-sm
    text-gray-500
  `};
`;

const LoadingContainer = styled.div`
  ${tw`
    w-full
    flex
    mt-9
    justify-center
    items-center
    text-base
    text-black
  `};
`;

// state change
const actionDispatch = (dispatch: Dispatch) => ({
    setTopCars: (cars: GetCars_cars[]) => dispatch(setTopCars(cars)),
});

const stateSelector = createSelector(makeSelectTopCars, (topCars) => ({
    topCars
}));

const wait = (timeout: number) => new Promise((resolve => setTimeout(resolve, timeout)));

export function TopCars() {
    const [current, setCurrent] = useState(0);
    const [isLoading, setLoading] = useState(false);
    const isMobile = useMediaQuery({maxWidth: SCREENS.sm});
    const {topCars} = useSelector(stateSelector);
    const {setTopCars} = actionDispatch(useDispatch());
    const fetchTopCars = async () => {
        setLoading(true);
        const cars = await carService.getCars().catch((err) => {
            console.error(err);
        });

        //await wait(5000); // spinner test
        console.log('Cars:', cars);
        if (cars) setTopCars(cars);
        setLoading(false);
    };
    useEffect(() => {
        fetchTopCars();
    }, []);

    const isEmptyTopCars = !topCars || topCars.length === 0;
    const cars = !isEmptyTopCars && topCars.map((car) => <Car {...car} thumbnailSrc={car.thumbnailUrl}/>) || [];
    const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3);

    return (
        <TopCarsContainer>
            <Title>Explore Our Top Deals</Title>
            {isLoading && <LoadingContainer>
                <MoonLoader loading size={20}/>
            </LoadingContainer>}
            {isEmptyTopCars && !isLoading && <EmptyCars>No Cars Available.</EmptyCars>}
            {!isEmptyTopCars && !isLoading && <CarsContainer>
                <Carousel
                    value={current}
                    onChange={setCurrent}
                    slides={cars}
                    plugins={[
                        'clickToChange',
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                                numberOfSlides: 3,
                            },
                        },
                    ]}
                    breakpoints={{
                        640: {
                            plugins: [
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 1,
                                    },
                                }
                            ]
                        },
                        900: {
                            plugins: [
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 2,
                                    },
                                }
                            ]
                        }
                    }}
                />
                <Dots value={current} onChange={setCurrent} number={numberOfDots}/>
            </CarsContainer>}
        </TopCarsContainer>
    )
}