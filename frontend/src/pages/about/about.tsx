import "./about.css";
import Title, { TitleProps } from '../../components/titles/titles';


export default function About() {
    const titleProps: TitleProps = {
        title: "QUEM SOMOS",
        subtitle: "Dumis Serviços, Lda. Entidade Montadora nº 1035, Entidade Instaladora nº 1885, Alvará nº 66683 - Pub. - NIF: 503940909"
    };

    return (
        <section id="quem-somos">
            <Title title={titleProps.title} subtitle={titleProps.subtitle} />
            <div style={{ height: "1000px" }}>sas</div>

        </section>
    )
}