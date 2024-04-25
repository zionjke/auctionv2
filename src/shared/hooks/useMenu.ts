import React, {useCallback, useState} from "react";

interface IUseMenu {
    anchorEl: null | HTMLElement;
    handleOpenMenu: (event: React.MouseEvent<HTMLElement>) => void;
    handleCloseMenu: () => void;
}
export const useMenu = (): IUseMenu  => {
    const [anchorEl, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenMenu = useCallback((event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    }, []);

    const handleCloseMenu = useCallback(() => {
        setAnchorElUser(null);
    }, []);

    return {anchorEl, handleOpenMenu, handleCloseMenu};
};