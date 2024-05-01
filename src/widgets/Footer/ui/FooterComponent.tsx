import React, { type FC } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import { type IFooterConfig } from '../config/footerConfig';
import cls from './Footer.module.scss';

interface FooterComponentProps {
  className?: string
  currentYear: number
  footerConfig: IFooterConfig
}
export const FooterComponent: FC<FooterComponentProps> = ({ footerConfig, currentYear, className }) => (
    <footer className={classNames(cls.footer, {}, [className])}>
        <div className={cls.top__container}>
            <div className={cls.top__container_text}>
                <span>
                    ©
                    {currentYear}
                    {' '}
                    Jooble. All rights reserved.
                </span>
            </div>
            <div className={cls.top__container_links}>
                {footerConfig.links.map(({ link, title }) => (
                    <Link key={title} className={cls.top__container_links_item} to={link}>{title}</Link>
                ))}
            </div>
        </div>
        {/* <div className={cls.bottom__container}> */}
        {/*    <div className={cls.bottom__container_links}> */}
        {/*        {footerConfig.socialLinks?.map(({icon, link}) => ( */}
        {/*            <Link key={link} className={cls.bottom__container_links_item} to={link}> */}
        {/*                {icon} */}
        {/*            </Link> */}
        {/*        ))} */}
        {/*    </div> */}
        {/* </div> */}
    </footer>
);
