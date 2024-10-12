export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="py-4 border-b">Menu</header>
      <div className="flex-1">{children}</div>
      <footer className="py-4 border-t">Footer</footer>
    </>
  );
}
