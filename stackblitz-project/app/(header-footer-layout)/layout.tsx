import Link from "next/link";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="py-4 border-b">
        <ul className="flex gap-2">
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/page-2'>Page 2</Link></li>
          <li><Link href='/page-2/depth-2'>Depth 2</Link></li>
          <li><Link href='/page-2/depth-2/depth-3'>Depth 3</Link></li>
          <li><Link href='/sign-in'>Sign In</Link></li>
        </ul>

      </header>
      <div className="flex-1">{children}</div>
      <footer className="py-4 border-t">Footer</footer>
    </>
  );
}
