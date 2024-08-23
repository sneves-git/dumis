import React from "react";
import "./contact.css";

export type ContactProps = {
    icon: React.ReactNode;
    iconBackgroundColor: string;
    title: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Component({ icon, iconBackgroundColor, title, ...props }: ContactProps) {

    return (
        <div className="container">
            <div className="icon" style={{ backgroundColor: iconBackgroundColor }}>
                {icon}
            </div>
            <div className="title">
                {title}
            </div>
            {props.children}
        </div>
    )
}