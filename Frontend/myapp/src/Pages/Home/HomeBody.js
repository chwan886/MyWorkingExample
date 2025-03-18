import {React} from "react";
import style from './css/Home.module.css'
import Footer from "../Common/Footer";
import Banner from "../Common/Banner";

const HomeBody = () => {

    return (
        <div className={style.homeBody}>
            <Banner/>
            <div className={style.homeContentContainer}>

                <div className={style.homeContent}>This is Home Body!</div>

            </div>
            <Footer/>
        </div>
    )
}

export default HomeBody
