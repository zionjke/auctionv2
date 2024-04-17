import React, {FC} from 'react';
import {FooterComponent} from "./FooterComponent";
import {footerConfig} from "../config/footerConfig";

interface FooterContainerProps {
    className?: string;
}
export const FooterContainer:FC<FooterContainerProps> = ({className}) => {
    const currentYear = new Date().getFullYear();

    return (
       <FooterComponent footerConfig={footerConfig} currentYear={currentYear}/>
    );
};
