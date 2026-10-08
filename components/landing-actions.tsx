import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { hasEnvVars } from "@/lib/utils";
import { LogoutButton } from "./logout-button";

// The two gray blocks from the Figma welcome screen.
// Block 1: the main action. Block 2: "Already have an account? Log In".
const block =
  "flex h-[77px] w-full items-center justify-center bg-clubcom-gray text-black transition-colors hover:bg-clubcom-gray-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black";

export function SignedOutActions() {
  return (
    <>
      <Link href="/auth/sign-up" className={`${block} text-lg font-medium`}>
        Create an account
      </Link>
      <div className="flex h-[77px] w-full items-center justify-center bg-clubcom-gray text-base text-black">
        <p>
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="font-semibold underline-offset-4 hover:underline"
          >
            Log In
          </Link>
        </p>
      </div>
    </>
  );
}

export async function LandingActions() {
  // Without Supabase keys (e.g. a fresh local copy) we can't check the
  // session, so just show the signed-out buttons.
  if (!hasEnvVars) return <SignedOutActions />;

  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  const user = data?.claims;

  if (!user) return <SignedOutActions />;

  return (
    <>
      <Link href="/protected" className={`${block} text-lg font-medium`}>
        Go to your account
      </Link>
      <div className="flex h-[77px] w-full items-center justify-between gap-4 bg-clubcom-gray px-6 text-base text-black">
        <p className="truncate">Signed in as {String(user.email)}</p>
        <LogoutButton />
      </div>
    </>
  );
}
