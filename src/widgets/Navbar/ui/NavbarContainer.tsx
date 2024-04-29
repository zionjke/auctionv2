import React, { type FC, useState } from 'react'
import { NavbarComponent } from './NavbarComponent'
import { type INavbarConfig } from 'shared/config/navbarConfig'

interface NavbarContainerProps {
  className?: string
  navbarConfig: INavbarConfig
}
export const NavbarContainer: FC<NavbarContainerProps> = ({ className, navbarConfig }) => {
  const [selectedPath, setSelectedPath] = useState('')
  const toggleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    path: string
  ) => {
    setSelectedPath(path)
  }

  return (
        <NavbarComponent navbarConfig={navbarConfig}
                         selectedPath={selectedPath}
                         onListItemClick={toggleListItemClick}/>
  )
}
