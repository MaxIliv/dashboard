import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import LoginForm from './LoginForm';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

export default function LoginPage() {
  return (
    <>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your username below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
      <HoverCard>
        <HoverCardTrigger>
          <p className="cursor-pointer text-sm underline text-gray-300">hint</p>
        </HoverCardTrigger>
        <HoverCardContent>
          <p className="text-sm">emilys emilyspass</p>
        </HoverCardContent>
      </HoverCard>
    </>
  );
}
