"use client";
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4 bg-black text-white">
      {!user ? (
        <button
          onClick={async () => await gitHubSignIn()}
          className="bg-blue-600 px-4 py-2 rounded"
        >
          Sign in with GitHub
        </button>
      ) : (
        <>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <div className="flex gap-4">
            <button
              onClick={async () => await firebaseSignOut()}
              className="bg-red-600 px-4 py-2 rounded"
            >
              Log Out
            </button>
            <Link href="/week-9/shopping-list" className="bg-green-600 px-4 py-2 rounded">
              Go to Shopping List
            </Link>
          </div>
        </>
      )}
    </main>
  );
}
