import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames";
import cls from './Header.module.scss'
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import {Link} from "react-router-dom";
import AvatarImg from 'shared/assets/images/avatar.png';
import {Avatar, FormControlLabel, FormGroup, Switch} from "@mui/material";

interface HeaderComponentProps {
    className?: string;
    auth: boolean;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const HeaderComponent: FC<HeaderComponentProps> = ({auth, handleChange}) => {
    return (
        <div className={classNames(cls.wrapper, {}, [])}>
            <div className={cls.container}>
                <div className={cls.logo_section}>
                    <Link className={cls.logo_section__link} to={"/"}>
                        <AutoGraphIcon className={cls.logo_section__logo} color={"primary"}/>
                        <h3 className={cls.logo_section__title}>
                            XING.DE
                        </h3>
                    </Link>
                </div>
                <div className={cls.user_menu}>
                    <Avatar className={cls.user_menu__avatar} alt="Avatar" src={AvatarImg} />
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={auth}
                                    color={"default"}
                                    onChange={handleChange}
                                    aria-label="logout switch"
                                />
                            }
                            label={<span className={cls.user_menu_switch_label}>Logout</span>}
                        />
                    </FormGroup>
                </div>
            </div>
        </div>
    );
};