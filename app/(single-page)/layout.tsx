import Button from "@/components/button";

export default function SinglePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="m-auto max-w-screen-lg px-4 py-12">
      <Button href="/" label="Go back" type="secondary" icon="left" />
      {children}
    </div>
  );
}
