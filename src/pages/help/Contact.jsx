import { Form, redirect, useActionData } from "react-router-dom";

export default function Contact() {
  const errors = useActionData();
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method="post" action="/help/contact">
        <div>
          <label>
            <span>Your email:</span>
            <input type="email" name="email" required />
            {errors?.email && <span>{errors.email}</span>}
          </label>
        </div>
        <div>
          <label>
            <span>Your message:</span>
            <textarea name="message" required></textarea>
            {errors?.message && <span>{errors.message}</span>}
          </label>
        </div>
        <button>Submit</button>
      </Form>
    </div>
  );
}
