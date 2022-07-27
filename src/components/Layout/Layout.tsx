import React, {FC} from 'react';
import {LayoutVariants} from "../../types/types";

interface LayoutProps { //todo: fix props types
    layoutType: LayoutVariants,
    children: any,
}
const Layout: FC<LayoutProps> = ({layoutType, children}) => {
    return (
        <div className={[layoutType === LayoutVariants.horizontal ? 'horizontal' : 'vertical', 'App'].join(' ')}>
            {children}
        </div>
    );
};

export default Layout;