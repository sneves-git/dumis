import "./navbar.css";
import logo from "../../assets/images/logo_small.png";
import { useEffect } from "react";

export default function Navbar() {

    useEffect(() => {
        let aTags = document.querySelectorAll(".navbar-item-list a");
        (aTags[0] as HTMLElement).style.color = "white";
        (aTags[0] as HTMLElement).style.position = "relative";
        (aTags[0] as HTMLElement).style.display = "block";
        (aTags[0] as HTMLElement).style.paddingBottom = "5px";
        (aTags[0] as HTMLElement).style.borderBottom = "2px solid rgb(33, 133, 213)";
        (aTags[0] as HTMLElement).style.height = "2px;";

    }, []);

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
                (aTags[i] as HTMLElement).style.color = "rgba(255, 255, 255, 0.50)";
            }
        }

        // when scrolling past each section, highlight the corresponding link in the navbar, 
        // if non bound client rect is in view set the first link to #2185d5
        let sections = document.querySelectorAll("section");
        let aTags = document.querySelectorAll(".navbar-item-list a");
        for (let i = 0; i < sections.length; i++) {
            if (sections[i].getBoundingClientRect().top < window.innerHeight / 2 && sections[i].getBoundingClientRect().bottom > window.innerHeight / 2) {
                if (i == 0) {
                    (aTags[i] as HTMLElement).style.color = "white";
                } else {
                    (aTags[i] as HTMLElement).style.color = "rgb(33, 133, 213)";
                }
            }
        }


        // if rect bound client is selected, set the ::after behavior to happen
        for (let i = 0; i < aTags.length; i++) {
            if ((aTags[i] as HTMLElement).style.color === "rgb(33, 133, 213)" || (aTags[i] as HTMLElement).style.color === "white") {
                (aTags[i] as HTMLElement).style.position = "relative";
                (aTags[i] as HTMLElement).style.display = "block";
                (aTags[i] as HTMLElement).style.paddingBottom = "5px";
                (aTags[i] as HTMLElement).style.borderBottom = "2px solid rgb(33, 133, 213)";
                (aTags[i] as HTMLElement).style.height = "2px;";
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

