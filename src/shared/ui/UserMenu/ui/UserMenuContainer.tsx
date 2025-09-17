import React, { type FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useMenu } from 'shared/hooks/useMenu';
import { type IUserMenuItem } from 'shared/config/userMenuConfig';
import { useDispatch } from 'react-redux';
import { logoutService } from 'features/Authorization';
import { useNavigate } from 'react-router-dom';
import cls from './UserMenu.module.scss';
import { UserMenuComponent } from './UserMenuComponent';

interface UserMenuProps {
  className?: string
  userMenuConfig: IUserMenuItem[]
}
export const UserMenuContainer: FC<UserMenuProps> = memo(({ className, userMenuConfig }) => {
    const dispatch = useDispatch();
    const { anchorEl, handleOpenMenu, handleCloseMenu } = useMenu();
    const navigate = useNavigate();

    const handleLogout = useCallback(() => {
        dispatch(logoutService());
        navigate('/login');
    }, [dispatch, navigate]);

    return (
        <div className={classNames(cls.UserMenu, {}, [className])}>
            <UserMenuComponent
                userMenuConfig={userMenuConfig}
                anchorEl={anchorEl}
                handleOpenMenu={handleOpenMenu}
                handleCloseMenu={handleCloseMenu}
                handleLogout={handleLogout}
            />
        </div>
    );
});
