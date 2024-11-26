type PageProps = {
  title: string;
  children: React.ReactNode;
};

export default function Page({ title, children }: PageProps) {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
}
