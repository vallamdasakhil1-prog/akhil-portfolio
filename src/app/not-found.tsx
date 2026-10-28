import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-page flex-col items-start justify-center px-5 sm:px-8">
      <h1 className="font-display text-5xl">Page not found</h1>
      <p className="mt-3 text-lg text-muted">That address does not exist on this site.</p>
      <Link href="/" className="btn btn-primary mt-8">Back to home</Link>
    </main>
  );
}
