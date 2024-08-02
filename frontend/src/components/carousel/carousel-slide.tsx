import "./carousel-slide.css";

export type CarouselSlideProps = {
    img: string;
    alt: string;
    title: string;
    subtitle: string;
}

// image with title and subtitle above it
export default function Component(props: CarouselSlideProps) {
    return (
        <div className="carousel-slide">
            <img src={props.img} alt={props.alt} />
            <div className="carousel-slide-content">
                <h3>{props.title}</h3>
                <p>{props.subtitle}</p>
            </div>
        </div>
    )
}