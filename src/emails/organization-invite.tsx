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

interface OrganizationInviteEmailProps {
  inviterName: string;
  organizationName: string;
  inviteUrl: string;
}

export function OrganizationInviteEmail({
  inviterName,
  organizationName,
  inviteUrl,
}: OrganizationInviteEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>You&apos;ve been invited to {organizationName}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>You&apos;re invited!</Heading>
          <Text style={text}>
            {inviterName} has invited you to join{" "}
            <strong>{organizationName}</strong> on LaunchKit.
          </Text>
          <Section style={buttonContainer}>
            <Link href={inviteUrl} style={button}>
              Accept Invitation
            </Link>
          </Section>
          <Text style={text}>
            This invitation expires in 7 days. If you don&apos;t have a LaunchKit
            account, one will be created when you accept.
          </Text>
          <Text style={footer}>— The LaunchKit Team</Text>
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
