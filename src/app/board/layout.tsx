import NavBar from "@/components/navbar";

export const metadata = {
  title: "Dahboard",
  description: "See your analytics here",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full w-full flex flex-row pt-6 pr-6 bg-[#DDD]">
      <div className="w-1/3 flex pb-6 px-10">
        <NavBar />
      </div>
      {children}
    </div>
  );
}
