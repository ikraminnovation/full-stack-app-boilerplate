"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardFooter } from "~/components/ui/card";
import { toast } from "sonner";

export default function SignOutPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignOut = async () => {
    setIsLoading(true);
    try {
      await signOut({ redirect: false });
      toast.success("You've been successfully signed out.");
      router.push("/login");
    } catch {
      toast.error("An error occurred while signing out.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardContent className="pt-6">
          <p className="text-center text-lg font-medium">
            Are you sure you want to sign out?
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={handleSignOut} disabled={isLoading}>
            {isLoading ? "Signing out..." : "Sign Out"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
