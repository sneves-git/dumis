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
            <div style={{ height: 25 }}></div>

            <div className="contact-box">
                <Contact title="Telefone"
                    icon={<Phone style={{ width: "3rem", height: "3rem", color: "white", fill: "#2aaf67" }} />}
                    iconBackgroundColor="#2aaf67"
                    children={
                        <p>(+351)
                            <br />
                            <b> 910 237 730 </b>
                        </p>
                    } />
                <Contact title="Faturação"
                    icon={<Billing style={{ width: "3rem", height: "3rem", color: "white", fill: "#00bff3" }} />}
                    iconBackgroundColor="#00bff3"
                    children={
                        <div>
                            <br />

                            <b>Rua da Figueira da Foz, Lote: 28, 4ºEsq <br /> 2415-520 Leiria </b>
                        </div>

                    } />
                <Contact title="Email"
                    icon={<Email style={{ width: "3rem", height: "3rem", color: "white", fill: "#f26522" }} />}
                    iconBackgroundColor="#f26522"
                    children={
                        <div>
                            <br />
                            <a href="mailto:geral@dumis.pt">geral@dumis.pt</a>
                        </div>
                    } />
                <Contact title="Horário"
                    icon={<Calendar style={{ width: "3rem", height: "3rem", color: "white", fill: "#e52b50" }} />}
                    iconBackgroundColor="#e52b50"
                    children={
                        <p><b>De segunda à sexta das 9h às 18h</b></p>
                    } />
                <Contact title="Localização"
                    icon={<Location style={{ width: "3rem", height: "3rem", color: "white", fill: "#2fc5cc" }} />}
                    iconBackgroundColor="#2fc5cc"
                    children={
                        <div>
                            <br />
                            <b>Rua Engº Alberto M. Zúquete, 76 Cave <br /> 2415-368 Leiria</b>
                            <br />
                            <br />
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d766.828511860298!2d-8.806747940220927!3d39.75505680741079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2273119c4b1f1d%3A0xeff6fb6e2423e288!2sR.%20Eng.%20Alberto%20Martins%20Zuquete%2076%2C%202415-368%20Leiria!5e0!3m2!1sen!2spt!4v1724765876602!5m2!1sen!2spt" width="250" height="200" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    } />
                <Contact title="Facebook"
                    icon={<Facebook style={{ width: "3rem", height: "3rem", color: "white", fill: "#6173f4" }} />}
                    iconBackgroundColor="#6173f4"
                    children={
                        <div>
                            <br />
                            <a href="https://www.facebook.com/dumisservicos/" >fb.com/dumisservicos/</a>
                        </div>
                    } />
            </div>
        </section >
    )
}