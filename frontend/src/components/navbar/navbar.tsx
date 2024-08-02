import "./navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-item-list">
                <li><a href="#">Início</a></li>
                <li><a href="#quem-somos">Quem Somos</a></li>
                <li><a href="#serviços-e-produtos">Serviços e Produtos</a></li>
                <li><a href="#contactos">Contactos</a></li>
            </ul>
        </nav>
    )
}