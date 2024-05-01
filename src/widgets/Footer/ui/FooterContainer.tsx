import React, { type FC } from 'react';
import { footerConfig } from '../config/footerConfig';
import { FooterComponent } from './FooterComponent';

interface FooterContainerProps {
  className?: string
}
export const FooterContainer: FC<FooterContainerProps> = ({ className }) => {
    const currentYear = new Date().getFullYear();

    return (
        <FooterComponent footerConfig={footerConfig} currentYear={currentYear} />
    );
};
