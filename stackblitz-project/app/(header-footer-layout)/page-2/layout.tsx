type Props = {
  children: React.ReactNode;
};

export default async function Layout({ children }: Props) {
  return (
    <div className="flex w-full">
      <aside className="w-[160px]">ASide</aside>
      <div className="flex-1">{children}</div>
    </div>
  );
}
