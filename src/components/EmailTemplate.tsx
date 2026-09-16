// components/email-template.jsx
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from "react-email";

type email = {
  firstName: string;
  message: string;
  email: string;
};

export const EmailTemplate = ({ firstName, message, email }: email) => (
  <Html>
    <Container style={{ padding: "20px" }}>
      <Heading>Mensagem de {firstName}!</Heading>
      <Text>Oficina Bará:</Text>
      <Text
        style={{
          backgroundColor: "#f4f4f4",
          padding: "15px",
          borderRadius: "5px",
        }}
      >
        {message}
      </Text>
    </Container>
  </Html>
);
