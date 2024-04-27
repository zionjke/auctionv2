import React, { type FC, useState } from 'react'
import { navbarConfig } from '../config/navbarConfig'
import { NavbarComponent } from './NavbarComponent'

interface NavbarContainerProps {
  className?: string
}
export const NavbarContainer: FC<NavbarContainerProps> = ({ className }) => {
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
