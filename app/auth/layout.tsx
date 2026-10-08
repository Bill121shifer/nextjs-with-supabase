import Link from "next/link";

// Puts the login / sign-up / password pages on the same blue
// background as the Figma welcome screen.
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-svh bg-clubcom-blue">
      <Link
        href="/"
        className="absolute left-8 top-6 text-xl font-bold tracking-tight text-black"
      >
        ClubCom
      </Link>
      {children}
    </div>
  );
}
