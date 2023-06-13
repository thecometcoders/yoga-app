import { Column, Container, FooterLink } from "./footer.styles";

import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import Newsletter from "../newsletter/newsletter.component";
import NewsletterMailchimp from "../newsletter-mailchimp/newsletter-mailchimp.components";

const Footer = () => {
  return (
    <Container>
      <Column>
        <img src={logo} width={"100%"} />
        <p>Yogis Companion App</p>
        <p>© 2023 YogiComet</p>
      </Column>
      <Column>
        <h2>Site Links</h2>
        <FooterLink to={"/"}>Home</FooterLink>
        <FooterLink to={"/audio-classes"}>Audio Classes</FooterLink>
        <FooterLink to={"/yoga-poses"}>Yoga Poses</FooterLink>
        <FooterLink to={"/sign-in"}>Sign In</FooterLink>
      </Column>
      <Column>
        <h2>Get in touch</h2>
        <p>Gabby Aguilar</p>
        <p>gabby@yogicomet.com</p>
        <p>IG: @gabby.aguilar</p>
      </Column>
      <Column>
        <h2>Stay up to date</h2>
        <NewsletterMailchimp />
      </Column>
    </Container>
  );
};

export default Footer;
