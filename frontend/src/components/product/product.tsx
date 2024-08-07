import "./product.css"

export type ProductProps = {
    title: string,
    description: string,
    buttonText: string,
    image: string
    imageAlt: string
}

export default function Product(props: ProductProps) {
    return (
        <div className="product-row">
            <div className="product-column">
                <h2>{props.title}</h2>
                <h3>{props.description}</h3>
                <a href="#contactos"><button>{props.buttonText}</button></a>
            </div>
            <img src={props.image} alt={props.imageAlt}></img>
        </div>
    )
}