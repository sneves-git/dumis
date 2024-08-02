import { Carousel } from 'antd';
import { CarouselSlideProps } from './carousel-slide';
import CarouselSlide from './carousel-slide';
import "./carousel.css";

import slide1 from '../../assets/images/slide_1.jpg';
import slide2 from '../../assets/images/slide_2.jpg';
import slide3 from '../../assets/images/slide_3.jpg';

const slides: CarouselSlideProps[] = [
    { img: slide1, alt: 'slide 1', title: 'Água', subtitle: 'Instalação de água' },
    { img: slide2, alt: 'slide 2', title: 'Água', subtitle: 'Instalação de água' },
    { img: slide3, alt: 'slide 3', title: 'Água', subtitle: 'Instalação de água' },
]

export default function Component() {
    return (
        <Carousel arrows infinite={true} effect="fade" autoplay autoplaySpeed={3000} draggable>
            {slides.map((slide) => (
                <CarouselSlide {...slide} key={slide.img} />
            ))}
        </Carousel>
    )
}