import "./navbar.css";
import logo from "../../assets/images/logo_small.png";

export default function Navbar() {

    window.onload = function () {
        let aTags = document.querySelectorAll(".navbar-item-list a");
        (aTags[0] as HTMLElement).style.color = "#2185d5";
    }

    window.onscroll = function () {
        // when scrolling past half the window height, make the navbar fixed and white
        if (document.documentElement.scrollTop > window.innerHeight / 2) {
            (document.querySelector(".navbar") as HTMLElement).style.position = "fixed";
            (document.querySelector(".navbar") as HTMLElement).style.backgroundColor = "white";
            let aTags = document.querySelectorAll(".navbar-item-list a");
            for (let i = 0; i < aTags.length; i++) {
                (aTags[i] as HTMLElement).style.color = "gray";
            }
        } else {
            (document.querySelector(".navbar") as HTMLElement).style.position = "absolute";
            (document.querySelector(".navbar") as HTMLElement).style.backgroundColor = "transparent";
            let aTags = document.querySelectorAll(".navbar-item-list a");
            for (let i = 0; i < aTags.length; i++) {
                (aTags[i] as HTMLElement).style.color = "gray";
            }
        }

        // when scrolling past each section, highlight the corresponding link in the navbar, 
        // if non bound client rect is in view set the first link to red
        let sections = document.querySelectorAll("section");
        let aTags = document.querySelectorAll(".navbar-item-list a");
        let found = false;
        for (let i = 0; i < sections.length; i++) {
            if (sections[i].getBoundingClientRect().top < window.innerHeight / 2 && sections[i].getBoundingClientRect().bottom > window.innerHeight / 2) {
                (aTags[i] as HTMLElement).style.color = "#2185d5";
                found = true;
            } else {
                (aTags[i] as HTMLElement).style.color = "gray";
            }
        }
        if (!found) {
            (aTags[0] as HTMLElement).style.color = "#2185d5";
        }

        // if rect bound client is selected, set the ::after behavior to happen
        for (let i = 0; i < aTags.length; i++) {
            if ((aTags[i] as HTMLElement).style.color === "#2185d5") {
                (aTags[i] as HTMLElement).style.position = "relative";
                (aTags[i] as HTMLElement).style.display = "inline-block";
                (aTags[i] as HTMLElement).style.paddingBottom = "5px";
                (aTags[i] as HTMLElement).style.borderBottom = "2px solid #2185d5";
            } else {
                (aTags[i] as HTMLElement).style.borderBottom = "none";
            }
        }

    }

    return (
        <nav className="navbar">
            <ul className="navbar-item-list">
                <img src={logo} alt="Logótipo"></img>
                <li><a href="#">Início</a></li>
                <li><a href="#quem-somos">Quem Somos</a></li>
                <li><a href="#serviços-e-produtos">Serviços e Produtos</a></li>
                <li><a href="#contactos">Contactos</a></li>
            </ul>
        </nav>
    )
}

