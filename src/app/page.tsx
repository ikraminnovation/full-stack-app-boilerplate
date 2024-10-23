import Link from "next/link";
import { Button } from "~/components/ui/button";
import { getServerAuthSession } from "~/server/auth";

export default async function HomePage() {
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-svh items-center justify-center">
      {session ? (
        <Link href={"/signout"}>
          <Button>Sign Out</Button>
        </Link>
      ) : (
        <Link href={"/login"}>
          <Button>Login</Button>
        </Link>
      )}
    </main>
  );
}
