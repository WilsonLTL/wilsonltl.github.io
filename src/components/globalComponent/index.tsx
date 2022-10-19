// Library
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

// Page Compontent
import Headercompontent from "./header"
import FooterCompontent from "./footer";
import NavCompontentSection from "./navCompontent"
import LoadingCompontentSection from "./loadingCompontent"

export const Header = () => {
  return <Headercompontent />
}

export const Footer = () => {
  return <FooterCompontent />;
};

export const NavCompontent = () => {
  return <NavCompontentSection />
}

export const LoadingCompontent = () => {
  return <LoadingCompontentSection />
}