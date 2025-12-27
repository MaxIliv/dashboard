import { useAuthContext } from '@/app/providers/AuthProvider';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FieldError } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { AuthPayload } from '@/features/auth/types';
import { isAxiosError } from 'axios';
import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router';

export default function LoginPage() {
  const [form, setForm] = useState<AuthPayload>({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');

  function handleUsername(username: string) {
    setForm((form) => ({
      ...form,
      username,
    }));
  }
  function handlePassword(password: string) {
    setForm((form) => ({
      ...form,
      password,
    }));
  }

  const { login } = useAuthContext();
  const navigate = useNavigate();

  function handleLogin(e: FormEvent) {
    e.preventDefault();
    setError('');

    login(form)
      .then(() => navigate('/'))
      .catch((e: unknown) => {
        if (
          isAxiosError<{
            message: string;
            code?: string;
          }>(e)
        ) {
          const message = e.response?.data.message ?? 'Failed to login';
          setError(message);
        }
        console.error('Failed to Login');
      });
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your username below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="username">User Name</Label>
              <Input
                id="username"
                type="username"
                placeholder="Enter a username"
                value={form.username}
                onChange={(e) => {
                  handleUsername(e.target.value);
                }}
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="Enter password"
                value={form.password}
                onChange={(e) => {
                  handlePassword(e.target.value);
                }}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Login
            </Button>
            {error && <FieldError>{error}</FieldError>}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
