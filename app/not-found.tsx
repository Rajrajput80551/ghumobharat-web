import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#081423] px-6 text-center text-white">

      <h1 className="text-8xl font-black text-orange-500">
        404
      </h1>

      <h2 className="mt-6 text-4xl font-bold">
        Page Not Found
      </h2>

      <p className="mt-5 max-w-xl text-lg text-gray-300">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-10 rounded-full bg-orange-500 px-8 py-4 font-semibold hover:bg-orange-600 transition"
      >
        Back to Home
      </Link>

    </main>
  );
}