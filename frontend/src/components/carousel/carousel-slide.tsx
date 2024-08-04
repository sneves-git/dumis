import "./carousel-slide.css";

export type CarouselSlideProps = {
    img: string;
    alt: string;
    brightness: number;
    title: string;
    subtitle: string;
    buttonTitle: string;
}

// image with title and subtitle above it
export default function Component(props: CarouselSlideProps) {
    return (
        <div className="carousel-slide">
            <img
                src={props.img}
                alt={props.alt}
                style={{ filter: `brightness(${props.brightness}%)` }}
            />
            <div className="carousel-slide-content">
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
                <a href="#contactos"><button>{props.buttonTitle}</button></a>
            </div>
        </div>
    )
}