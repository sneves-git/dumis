import "./contacts.css";

import Title, { TitleProps } from "../../components/titles/titles";
import Contact, { ContactProps } from "../../components/contact/contact";

import Phone from "../../assets/icons/phone.svg?react";
import Billing from "../../assets/icons/billing.svg?react";
import Email from "../../assets/icons/email.svg?react";
import Calendar from "../../assets/icons/calendar.svg?react";
import Location from "../../assets/icons/location.svg?react";
import Facebook from "../../assets/icons/facebook.svg?react";


export default function Component() {
    const titleProps: TitleProps = {
        title: "CONTACTOS",
        subtitle: "Estamos sempre disponíveis para o ajudar."
    };


    return (
        <section id="contactos">
            <Title title={titleProps.title} subtitle={titleProps.subtitle} />
            <div className="contact-box">
                <Contact title="Telefone"
                    icon={<Phone style={{ width: "3rem", height: "3rem", color: "white", fill: "#2aaf67" }} />}
                    iconBackgroundColor="#2aaf67"
                    children={
                        <p>+351 123 456 789</p>
                    } />
                <Contact title="Faturação"
                    icon={<Billing style={{ width: "3rem", height: "3rem", color: "white", fill: "#00bff3" }} />}
                    iconBackgroundColor="#00bff3"
                    children={
                        <p>+351 123 456 789</p>
                    } />
                <Contact title="Email"
                    icon={<Email style={{ width: "3rem", height: "3rem", color: "white", fill: "#f26522" }} />}
                    iconBackgroundColor="#f26522"
                    children={
                        <p>+351 123 456 789</p>
                    } />
                <Contact title="Horário"
                    icon={<Calendar style={{ width: "3rem", height: "3rem", color: "white", fill: "#e52b50" }} />}
                    iconBackgroundColor="#e52b50"
                    children={
                        <p>+351 123 456 789</p>
                    } />
                <Contact title="Localização"
                    icon={<Location style={{ width: "3rem", height: "3rem", color: "white", fill: "#2fc5cc" }} />}
                    iconBackgroundColor="#2fc5cc"
                    children={
                        <p>+351 123 456 789</p>
                    } />
                <Contact title="Facebook"
                    icon={<Facebook style={{ width: "3rem", height: "3rem", color: "white", fill: "#6173f4" }} />}
                    iconBackgroundColor="#6173f4"
                    children={
                        <p>+351 123 456 789</p>
                    } />
            </div>
        </section>
    )
}