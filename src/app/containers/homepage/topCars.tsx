import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import {Car} from '../../components/car';
import {cars} from '../../test-data/cars'
import Carousel, {Dots, slidesToShowPlugin} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import {useMediaQuery} from 'react-responsive';
import {SCREENS} from '../../components/responsive';
import carService from '../../services/car-service';

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

export function TopCars() {
    const [current, setCurrent] = useState(0);
    const isMobile = useMediaQuery({maxWidth: SCREENS.sm});
    const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3);
    const fetchTopCars = async () => {
      const cars = await carService.getCars().catch((err) => {
         console.error(err);
      });
      console.log('Cars:', cars);
    };
    useEffect(() => {
        fetchTopCars();
    }, []);

    return (
        <TopCarsContainer>
            <Title>Explore Our Top Deals</Title>
            <CarsContainer>
                <Carousel
                    value={current}
                    onChange={setCurrent}
                    slides={[
                        (<Car {...cars[0]}/>),
                        (<Car {...cars[1]}/>),
                        (<Car {...cars[2]}/>),
                        (<Car {...cars[3]}/>),
                        (<Car {...cars[4]}/>)
                    ]}
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
            </CarsContainer>
        </TopCarsContainer>
    )
}