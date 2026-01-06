import { useAuthContext } from '@/app/providers/AuthProvider';
import { Button } from '@/components/ui/button';
import { FieldError } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router';
import { Controller, useForm } from 'react-hook-form';
import { schema, type LoginFormSchema } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { isAxiosError } from 'axios';
import { LoaderIcon } from 'lucide-react';

export default function LoginForm() {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormSchema>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: zodResolver(schema),
  });

  const { login } = useAuthContext();
  const navigate = useNavigate();

  async function handleLogin(data: LoginFormSchema) {
    try {
      await login(data);
      await navigate('/');
    } catch (err) {
      if (isAxiosError<{ message: string }>(err)) {
        const message =
          err.response?.data.message ?? 'Wrong username or password';

        setError('root', { message });
      } else {
        setError('root', { message: 'Failed to login' });
      }
    }
  }

  const onSubmit = handleSubmit(handleLogin);
  return (
    <form onSubmit={(e) => void onSubmit(e)}>
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Controller
            name="username"
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState }) => (
              <>
                <Label htmlFor="username">User Name</Label>
                <Input
                  id="username"
                  type="username"
                  placeholder="Enter a username"
                  value={field.value}
                  onChange={(e) => {
                    field.onChange(e.target.value);
                  }}
                  required
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </>
            )}
          />
        </div>
        <div className="grid gap-2">
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState }) => (
              <>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  value={field.value}
                  autoComplete="new-password"
                  onChange={(e) => {
                    field.onChange(e.target.value);
                  }}
                  required
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </>
            )}
          />
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting && <LoaderIcon />}
          Login
        </Button>

        {errors.root?.message && <FieldError>{errors.root.message}</FieldError>}
      </div>
    </form>
  );
}
