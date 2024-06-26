import React, { type FC } from 'react';
import { HeaderComponent } from './HeaderComponent';

interface HeaderProps {
  className?: string
}
export const HeaderContainer: FC<HeaderProps> = ({ className }) => (
    <HeaderComponent />
);
