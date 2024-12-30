import SiderBar from "@/components/SideBar";
import { AcademicCapIcon, Cog6ToothIcon, CurrencyYenIcon, BeakerIcon } from '@heroicons/react/24/outline'

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const tabs = [
    { id: "1", name: '会议', href: '/admin/conference', icon: <AcademicCapIcon className="h-6 w-6"/>},
    { id: "2", name: '期刊', href: '/admin/journal', icon: <BeakerIcon className="h-6 w-6"/>},
    { id: "3", name: '订阅服务', href: '/admin/subscribe', icon: <CurrencyYenIcon className="h-6 w-6"/>},
    { id: "4", name: '系统设置', href: '/admin/settings', icon: <Cog6ToothIcon className="h-6 w-6"/>},
  ]
  return (
    <div className="min-h-screen w-full flex flex-raw gap-y-2 bg-white">
        <div className="absolute w-full h-full pointer-events-none fixed inset-y-0 left-0 z-30">
            <SiderBar tabs={tabs}/>
        </div>
        <div className="h-full w-full m-4">
            {children}
        </div>
    </div>
  );
}
