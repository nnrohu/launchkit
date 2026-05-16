import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface WelcomeEmailProps {
  name: string;
  loginUrl: string;
}

export function WelcomeEmail({ name, loginUrl }: WelcomeEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to LaunchKit!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Welcome to LaunchKit!</Heading>
          <Text style={text}>Hi {name},</Text>
          <Text style={text}>
            Thanks for signing up! You&apos;re now ready to start building your
            SaaS application with LaunchKit.
          </Text>
          <Section style={buttonContainer}>
            <Link href={loginUrl} style={button}>
              Go to Dashboard
            </Link>
          </Section>
          <Text style={text}>
            If you have any questions, just reply to this email. We&apos;re here
            to help!
          </Text>
          <Text style={footer}>
            — The LaunchKit Team
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "40px 20px",
  maxWidth: "560px",
  borderRadius: "8px",
};

const h1 = {
  color: "#1a1a1a",
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "1.25",
  margin: "0 0 20px",
};

const text = {
  color: "#4a5568",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0 0 16px",
};

const buttonContainer = {
  margin: "32px 0",
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#000000",
  color: "#ffffff",
  padding: "12px 32px",
  borderRadius: "6px",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "600",
};

const footer = {
  color: "#718096",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: "32px 0 0",
};
