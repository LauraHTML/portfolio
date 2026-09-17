// components/email-template.jsx
import { Container, Heading, Html, Text } from "react-email";

type email = {
  firstName: string;
  message: string;
  email: string;
};

export const EmailTemplate = ({ firstName, message, email }: email) => (
  <Html>
    <Container style={{ padding: "20px" }}>
      <Heading>
        Mensagem de {email}: {firstName}!
      </Heading>
      <Text>Entrando em contato:</Text>
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
