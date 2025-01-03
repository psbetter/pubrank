"use client"
import { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'

export interface bannerContent {
  id: string; 
  content: string;
  show: boolean;
}

interface BannerProps {
  banner: bannerContent
}

const Banner: React.FC<BannerProps> = ({banner}) =>  {
  
  const [isVisible, setIsVisible] = useState(banner.show)

  const handleDismiss = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-x-6 bg-blue-100 px-6 py-2.5 rounded-lg sm:py-3 sm:pl-4 sm:pr-3.5">
        <p className="flex items-center text-sm leading-6 text-blue-800">
          {banner.content}
        </p>
        <button
          type="button"
          className="-m-3 flex-none p-3 focus-visible:outline-offset-[-4px]"
          onClick={handleDismiss}
        >
          <span className="sr-only">Dismiss</span>
          <XMarkIcon className="h-5 w-5 text-blue-800 hover:bg-blue-200 rounded-lg" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}

export default Banner;