import Link from "next/link";



export default function Home() {
  return (
    <div className="bg-black home-img bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
          <h1 className="text-4xl font-bold">Sir！</h1>

          <h2>Your PC done？</h2>

          <Link href='/login' className="hover:underline">
            <h3>I GOT YOU！</h3>
          </Link>
        </div>
      </main>
    </div>
  );
}
