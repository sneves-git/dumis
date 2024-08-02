import { Carousel } from 'antd';
import { CarouselSlideProps } from './carousel-slide';
import CarouselSlide from './carousel-slide';
import "./carousel.css";

import slide1 from '../../assets/images/slide_1.jpg';
import slide2 from '../../assets/images/slide_2.jpg';
import slide3 from '../../assets/images/slide_3.jpg';

const slides: CarouselSlideProps[] = [
    { img: slide1, alt: 'slide 1', brightness: 100, title: 'Instalações de gás', subtitle: 'Empresa credenciada na instalação de gás em clientes privados, empresas e em construção.', buttonTitle: 'Entre em contacto' },
    { img: slide2, alt: 'slide 2', brightness: 70, title: 'Reconversões de aparelhos a gás', subtitle: 'Adaptamos tecnicamente a sua rede e equipamentos de gás atualmente existentes, para suportar gás natural.', buttonTitle: 'Marque uma visita' },
    { img: slide3, alt: 'slide 3', brightness: 40, title: 'Reparações de aparelhos a gás', subtitle: 'Aposte na sua segurança e evite o mau funcionamento dos equipamentos a gás.', buttonTitle: 'Marque uma intervenção' },
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