import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import prisma from "@/lib/prisma";

export default async function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const tabs = [
    { id: "1", name: '会议', href: '/ai_research_info/conference' },
    { id: "2", name: '期刊', href: '/ai_research_info/journal' },
    // { id: "3", name: '订阅服务', href: '/ai_research_info/subscribe' },
  ]
  const banner = await prisma.banner.findFirst() as any;
  return (
    <div className="w-4/5 min-h-screen flex flex-col gap-y-2 bg-white text-gray-900 py-1">
        <Banner banner={banner}/>
        <Header tabs={tabs}/>
        <div className="grow w-full border rounded-lg">
            {children}
        </div>
        <Footer />
    </div>
  );
}
