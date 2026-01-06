import { isRouteErrorResponse, useRouteError } from 'react-router';

export default function RootErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </>
    );
  } else if (error instanceof Error) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl font-semibold">Something went wrong</h1>
          <p className="text-sm text-muted-foreground mb-8">
            Please refresh the page
          </p>
          <p>Error:</p>
          <p>{error.message}</p>
          <button
            onClick={() => {
              window.location.reload();
            }}
            className="mt-4 text-sm underline"
          >
            Reload
          </button>
        </div>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}
