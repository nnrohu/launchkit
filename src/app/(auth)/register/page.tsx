import { AuthForm } from "@/components/auth/auth-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function RegisterPage() {
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Create an account</CardTitle>
        <CardDescription>
          Enter your details to get started with LaunchKit
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AuthForm mode="register" />
      </CardContent>
    </Card>
  );
}
