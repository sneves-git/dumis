import "./about.css";
import Title, { TitleProps } from '../../components/titles/titles';


import team from "../../assets/images/img_1.jpg";
import { useEffect, useRef } from "react";

export default function About() {
    const titleProps: TitleProps = {
        title: "QUEM SOMOS",
        subtitle: "Dumis Serviços, Lda. Entidade Montadora nº 1035, Entidade Instaladora nº 1885, Alvará nº 66683 - Pub. - NIF: 503940909"
    };


    // Ensure that the margin-left class has the height of the img container
    // so that the button is always at the bottom of the container
    const imgContainerRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (imgContainerRef.current) {
            const imgContainerHeight = imgContainerRef.current.offsetHeight;
            (document.querySelector('#quem-somos .row .margin-left') as HTMLElement).style.height = `${imgContainerHeight}px`;
        }
    }, []);


    return (
        <section id="quem-somos">
            <Title title={titleProps.title} subtitle={titleProps.subtitle} />
            <div className="about-row">
                <img src={team} alt="equipa" ></img>
                <div className="about-column">
                    <h2>Somos Pioneiros</h2>
                    <h3>
                        Somos uma empresa ao vosso serviço desde 1997, pioneiros em Leiria de Instalações de Gás Natural
                        para que esse possa chegar da CCG até aos vossos lares, comercio e industrias. Fazemos
                        canalizações instalações de Gás, ligações e reconversões de aparelho a Gás, reparações de
                        aparelhos a Gás. Pode ainda usufruir das nossas parcerias com entidades inspetoras, para realizar
                        inspeção obrigatória. Parcerias para aquisição de Eletrodomésticos e caldeiras a Gás.
                    </h3>
                    <a href="#contactos"><button>Solicite-nos um orçamento</button></a>
                </div>
            </div>
        </section>
    )
}