import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] w-full flex items-center justify-center bg-zinc-950">
      <div className="text-center px-4">
        <img
          src="/myride-logo-horiz.jpg"
          alt="My Ride Service Center"
          className="h-14 w-auto mx-auto mb-8 rounded-md"
        />
        <h1 className="text-2xl font-bold text-white mb-2">Page Not Found</h1>
        <p className="text-zinc-400 mb-6">
          The page you're looking for doesn't exist.
        </p>
        <Link href="/" className="text-primary underline text-sm">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
