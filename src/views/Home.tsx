import React, { useState } from "react";
import { Form, Segment } from "semantic-ui-react";

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];

type formInput = {
  firstName: string;
  lastName: string;
  gender: "Male" | "Female" | "Other";
  size: "sm" | "md" | "lg";
};

export default function Home() {
  const [formInput, setFormInput] = useState<formInput>({
    firstName: "",
    lastName: "",
    gender: "Male",
    size: "sm",
  });

  const handleChange = (event: React.FormEvent<HTMLElement>) => {
    // {name, value} = event.target
    // setFormInput({ [event.target.name]: value });
  };

  return (
    <Segment>
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            name="firstName"
            value={formInput.firstName}
            fluid
            label="First name"
            placeholder="First name"
          />
          <Form.Input fluid label="Last name" placeholder="Last name" />
          <Form.Select
            fluid
            label="Gender"
            options={options}
            placeholder="Gender"
          />
        </Form.Group>
        <Form.Group inline>
          <label>Size</label>
          <Form.Radio
            label="Small"
            value="sm"
            checked={formInput.size === "sm"}
            onChange={handleChange}
          />
          <Form.Radio
            label="Medium"
            value="md"
            checked={formInput.size === "md"}
            onChange={handleChange}
          />
          <Form.Radio
            label="Large"
            value="lg"
            checked={formInput.size === "lg"}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.TextArea label="About" placeholder="Tell us more about you..." />
        <Form.Checkbox label="I agree to the Terms and Conditions" />
        <Form.Button>Submit</Form.Button>
      </Form>
    </Segment>
  );
}
