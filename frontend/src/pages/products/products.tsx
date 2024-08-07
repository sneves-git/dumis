import "./products.css";
import Title, { TitleProps } from "../../components/titles/titles";
import Product, { ProductProps } from "../../components/product/product";
import img_7 from "../../assets/images/img_7.jpg";
import img_8 from "../../assets/images/img_8.jpg";
import img_9 from "../../assets/images/img_9.jpg";
import img_10 from "../../assets/images/img_10.jpg";
import img_11 from "../../assets/images/img_11.jpg";
import img_12 from "../../assets/images/img_12.jpg";
import img_13 from "../../assets/images/img_13.jpg";



export default function Component() {
    const titleProps: TitleProps = {
        title: "SERVIÇOS E PRODUTOS",
        subtitle: "Desde 1997 a servir os nossos clientes com celeridade e qualidade."
    };

    const productProps: ProductProps[] = [
        { title: "Instalações de Gás", description: "Empresa credenciada na instalação de gás em clientes privados, empresas, em contrução e projetos.", buttonText: "Peça um orçamento", image: img_7, imageAlt: "Instalações de Gás" },
        { title: "Reconversões de Aparelhos a Gás", description: "Adaptamos tecnicamente a sua rede e equipamentos de gás atualmente existentes para suportar gás natural.", buttonText: "Entre em contacto", image: img_8, imageAlt: "Reconversões de Aparelhos a Gás" },
        { title: "Venda de Equipamentos", description: "Caso necessite, disponibilizamos para venda equipamentos a gás.", buttonText: "Veja os produtos", image: img_9, imageAlt: "Venda de equipamentos" },
        { title: "Reparação de Aparelhos a Gás", description: "Aposte na sua segurança e evite o mau funcionamento dos equipamentos a gás. Efetuamos reparações e manutenções de equipamentos.", buttonText: "Marque uma intervenção", image: img_10, imageAlt: "Venda de Aparelhos a Gás" },
        { title: "Inspeções Obrigatórias", description: "Efetuamos as necessárias inspeções obrigatórias para a sua segurança.", buttonText: "Solicitar inspeção", image: img_11, imageAlt: "Inspeções Obrigatórias" },
        { title: "Projetos", description: "Projetos de instalação de gás para edifícios novos ou existentes.", buttonText: "Requerer orçamento", image: img_12, imageAlt: "Projetos" },
        { title: "Aquecimento Central", description: "Procedemos à instalação de sistemas de aquecimento central para melhorar o conforto do seu lar.", buttonText: "Saiba como", image: img_13, imageAlt: "Aquecimento Central" }
    ];

    return (
        <section id="serviços-e-produtos">
            <Title title={titleProps.title} subtitle={titleProps.subtitle} />
            <div className="product-box">
                {productProps.map((product) => (
                    <Product {...product} key={product.title} />
                ))}
            </div>
            <div style={{ height: "1000px" }}></div>

        </section>
    )
}