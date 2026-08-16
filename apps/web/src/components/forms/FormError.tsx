export function FormError({ message }: { message: string }) {
  return (
    <p role="alert" className="rounded-lg bg-rose-50 px-4 py-2.5 text-sm text-rose-700">
      {message}
    </p>
  );
}
