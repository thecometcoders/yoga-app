import { Container } from "./newsletter.styles";
import NewsletterMailchimp from "../newsletter-mailchimp/newsletter-mailchimp.components";

const Newsletter = () => {
  return (
    <Container>
      <h1>Subscribe to our Newsletter!</h1>
      <NewsletterMailchimp />
    </Container>
  );
};

export default Newsletter;
