import React, { type FC } from 'react'
import { classNames } from 'shared/lib/classNames'
import cls from './LanguageSwitcher.module.scss'
import { LanguageSwitcherComponent } from './LanguageSwitcherComponent'
import { useMenu } from 'shared/hooks/useMenu'

interface LanguageSwitcherContainerProps {
  className?: string
}

export const LanguageSwitcherContainer: FC<LanguageSwitcherContainerProps> = ({ className }) => {
  const { anchorEl, handleOpenMenu, handleCloseMenu } = useMenu()

  return (
        <div className={classNames(cls.LanguageSwitcherContainer, {}, [className])}>
            <LanguageSwitcherComponent
                anchorEl={anchorEl}
                handleCloseMenu={handleCloseMenu}
                handleOpenMenu={handleOpenMenu}/>
        </div>
  )
}
