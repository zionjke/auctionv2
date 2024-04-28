import React, { type FC } from 'react'
import { classNames } from 'shared/lib/classNames'
import cls from './Header.module.scss'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'
import { UserMenu } from 'widgets/UserMenu'
import { userMenuConfig } from 'shared/config/userMenuConfig'

interface HeaderComponentProps {
  className?: string
}

export const HeaderComponent: FC<HeaderComponentProps> = ({ className }) => {
  return (
        <header className={classNames(cls.wrapper, {}, [className])}>
            <div className={cls.container}>
                <LanguageSwitcher className={cls.language_switcher}/>
                <UserMenu userMenuConfig={userMenuConfig}/>
            </div>
        </header>
  )
}
