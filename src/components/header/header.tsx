import React from 'react';
import Logo from '../../assets/logo.svg';
import headerStyle from './header.scss';
import layoutStyle from '~/common-styles/layout.scss';
import {useWindowDimensions} from '~/hooks/use-window-dimensions';
import {isMobile} from '~/utils/is-mobile';
import {LOGO_SIZE, LOGO_SIZE_MOBILE} from '~/constants/logo';

export const Header = (): JSX.Element => {
    const windowSize = useWindowDimensions();
    const logoSize = isMobile(windowSize.width) ? LOGO_SIZE_MOBILE : LOGO_SIZE;

    return (
        <>
            <div className={headerStyle.container}>
                <div className={`${headerStyle.header} ${layoutStyle.px30}`}>
                    <div className={`${headerStyle.subLeft}`}>
                        <img alt="" className={`${headerStyle.logo}`} width={logoSize} height={logoSize} src={Logo} />
                        <div>
                            <div className={`${headerStyle.label}`}>REQUESTUM</div>
                            <div className={`${headerStyle.subLabel}`}>web development company</div>
                        </div>
                    </div>

                    <div className={`${headerStyle.subRight}`}>
                        <div className={`${headerStyle.subLabelRight}`}>Github users search app</div>
                    </div>
                </div>
            </div>
            <div className={layoutStyle.mx30}>
                <div className={`${headerStyle.separator}`} />
            </div>
        </>
    );
};
