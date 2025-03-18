import {React, forwardRef} from 'react'
import style from './css/Common.module.css'

const Header = forwardRef((props, ref) => {
    return (
        <header ref={ref} className={style.header1}>
            {props.children}
        </header>
    );
})

export default Header;
