import React, { useState } from 'react';
import styled from 'styled-components';
import { above, headingStyles } from '../utilities';
import { Button } from './Button';

const FormStyles = styled.form`
  padding: 2rem;
  background-color: var(--accent-bg);
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: var(--elevation-2);

  ${above.med`
    padding: 3rem;
  `}
`;

const Label = styled.label`
  display: block;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  margin-top: 0.5rem;
`;

const Select = ({ className, children, ...props }) => (
  <div className={className}>
    <select {...props}>{children}</select>
  </div>
);

const SelectStyles = styled(Select)`
  display: grid;
  grid-template-areas: 'select';
  align-items: center;
  margin-top: 0.5rem;

  &::after {
    content: '';
    width: 0.6em;
    height: 0.4em;
    margin-right: 0.5em;
    background-color: var(--gray-300);
    clip-path: polygon(100% 0%, 0% 0%, 50% 100%);
    grid-area: select;
    justify-self: end;
  }

  select {
    display: block;
    width: 100%;
    appearance: none;
    grid-area: select;
  }
`;

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  max-width: 100%;
  min-height: 140px;
  margin-top: 0.5rem;
`;

const SubmitButton = styled(Button)`
  margin-top: 2rem;
  align-self: center;
`;

const SuccessMessage = styled.p`
  font-size: var(--h4);
  ${headingStyles}
  text-align: center;
  color: var(--secondary);
`;

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: 'default',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);
  let errorMsg;

  const handleChange = (e) => {
    const newState = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...formData,
      }),
    })
      .then(() => {
        setFormSubmitted(true);
      })
      .catch((error) => {
        setHasError(true);
        errorMsg = `There was a problem submitting the contact form. Error Message: ${error}. Please try again.`;
      });
  };

  return !formSubmitted ? (
    <FormStyles
      name="contact"
      method="POST"
      data-netlify-honeypot="bot-field"
      data-netlify="true"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <Label>
        Your Name{' '}
        <Input
          placeholder="John Doe"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Label>
      <Label>
        Your Email{' '}
        <Input
          placeholder="youremail@example.com"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Label>
      <Label>
        Budget
        <SelectStyles
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          required
        >
          <option disabled value="default" hidden>
            -- Select your budget --
          </option>
          <option value="na">N/A</option>
          <option value="500-1000">$500-$1,000</option>
          <option value="1000-2500">$1,000-$2,500</option>
          <option value="2500-5000">$2,500-$5,000</option>
          <option value="5000-10000">$5,000-$10,000</option>
          <option value="10000+">$10,000+</option>
        </SelectStyles>
      </Label>
      <Label>
        Message{' '}
        <TextArea
          placeholder="Hi Tom, I've got a project for you. Here are the details..."
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </Label>
      <SubmitButton type="submit" size="lg">
        Hire me
      </SubmitButton>
    </FormStyles>
  ) : (
    <SuccessMessage>
      Success! Thanks for reaching out, I'll get back to you soon.
    </SuccessMessage>
  );
}

export default ContactForm;
