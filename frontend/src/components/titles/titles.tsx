import "./titles.css";

export type TitleProps = {
    title: string,
    subtitle: string
}

export default function Component(props: TitleProps) {
    return (
        <header className="section-header">
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
        </header>
    )
}