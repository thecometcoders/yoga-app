import MailchimpSubscribe from "react-mailchimp-subscribe";

import { useState } from "react";
import { Form, Input, Submit, Success } from "./newsletter-mailchimp.styles";

const NewsletterMailchimpForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    console.log("fdsafdsa");
    console.log(status);
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      {/*{status === "sending" && <div>sending...</div>}*/}

      {/*{status === "error" && (*/}
      {/*  <div dangerouslySetInnerHTML={{ __html: message }} />*/}
      {/*)}*/}

      {status === "success" && (
        <Success dangerouslySetInnerHTML={{ __html: message }} />
      )}

      {status !== ("success" || "sending") ? (
        <>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            value={email}
            placeholder="Jane"
            required
          />

          <Submit
            label="subscribe"
            type="submit"
            formValues={[email]}
            value="Subscribe"
          />
        </>
      ) : null}
    </Form>
  );
};

const NewsletterMailchimp = (props) => {
  const url = `https://cometcode.us21.list-manage.com/subscribe/post?u=1f390789d80d63206674557aa&id=551028e122`;
  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <NewsletterMailchimpForm
          status={status}
          message={message}
          onValidated={(formData) => subscribe(formData)}
        />
      )}
    />
  );
};

export default NewsletterMailchimp;
