"use client"
import { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'

export default function Banner() {
  const [isVisible, setIsVisible] = useState(true)

  const handleDismiss = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-x-6 bg-blue-100 px-6 py-2.5 rounded-lg sm:py-3 sm:pl-4 sm:pr-3.5">
        <p className="flex items-center text-sm leading-6 text-blue-800">
          <a href="https://cvpr.thecvf.com/Conferences/2025/CallForPapers">
            <strong className="font-semibold">CVPR 2025</strong>
            <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
              <circle cx={1} cy={1} r={1} />
            </svg>
            会议时间：2025年6月10日-2025年6月17日&nbsp;<span aria-hidden="true">去看看&rarr;</span>
          </a>
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
