import React, { type FC, useState } from 'react';
import { type INavbarConfig } from 'shared/config/navbarConfig';
import { NavbarComponent } from './NavbarComponent';

interface NavbarContainerProps {
  className?: string
  navbarConfig: INavbarConfig
}
export const NavbarContainer: FC<NavbarContainerProps> = ({ className, navbarConfig }) => {
    const [selectedPath, setSelectedPath] = useState('');
    const toggleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        path: string,
    ) => {
        setSelectedPath(path);
    };

    return (
        <NavbarComponent
            navbarConfig={navbarConfig}
            selectedPath={selectedPath}
            onListItemClick={toggleListItemClick}
        />
    );
};
