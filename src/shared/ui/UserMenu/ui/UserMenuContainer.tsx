import React, { type FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useMenu } from 'shared/hooks/useMenu';
import { type IUserMenuItem } from 'shared/config/userMenuConfig';
import cls from './UserMenu.module.scss';
import { UserMenuComponent } from './UserMenuComponent';

interface UserMenuProps {
  className?: string
  userMenuConfig: IUserMenuItem[]
}
export const UserMenuContainer: FC<UserMenuProps> = ({ className, userMenuConfig }) => {
    const { anchorEl, handleOpenMenu, handleCloseMenu } = useMenu();

    return (
        <div className={classNames(cls.UserMenu, {}, [className])}>
            <UserMenuComponent
                userMenuConfig={userMenuConfig}
                anchorEl={anchorEl}
                handleOpenMenu={handleOpenMenu}
                handleCloseMenu={handleCloseMenu}
            />
        </div>
    );
};
