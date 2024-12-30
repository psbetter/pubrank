import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Banner from "@/components/Banner";

export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const tabs = [
    { id: "1", name: '会议', href: '/ai_research_info/conference' },
    { id: "2", name: '期刊', href: '/ai_research_info/journal' },
    { id: "3", name: '订阅服务', href: '/ai_research_info/subscribe' },
  ]
  return (
    <div className="w-4/5 min-h-screen flex flex-col gap-y-2 bg-white text-gray-900 py-1">
        <Banner />
        <Header tabs={tabs}/>
        <div className="grow w-full">
            {children}
        </div>
        <Footer />
    </div>
  );
}
