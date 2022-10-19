// Library
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

// Page Compontent
import IntroCompontentSection from "./introCompontent"
import BioCompontentSection from "./bioCompontent"
import PortfoloCompontentSection from "./portfoloCompontent"
import ContactmeCompontentSection from "./contactMeCompontent"

export const IntroCompontent = () => {
    return (<IntroCompontentSection/>)
}

export const BioCompontent = () => {
    return (<BioCompontentSection/>)
}

export const PortfoloCompontent = () => {
    return (<PortfoloCompontentSection/>)
}

export const ContactmeCompontent = () => {
    return (<ContactmeCompontentSection/>)
}