import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col h-full w-full justify-center text-center">
        <p className="text-base font-semibold text-sky-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">页面不存在</h1>
        <p className="mt-6 text-base leading-7 text-gray-600">抱歉，页面资源未找到！</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            <Link href="/">返回首页</Link>
          </button>
        </div>
    </div>
  )
}