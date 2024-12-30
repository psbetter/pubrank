"use client"
import { useState } from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { classNames } from '@/utils/condition_class'

const frequencies = [
  { value: 'monthly', label: '包月', priceSuffix: '/月' },
  { value: 'annually', label: '包年', priceSuffix: '/年' },
]
const tiers = [
  {
    name: '个人',
    id: 'tier-freelancer',
    href: '#',
    price: { monthly: '￥15', annually: '￥144' },
    description: 'The essentials to provide your best work for clients.',
    features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
    mostPopular: false,
  },
  {
    name: '团队',
    id: 'tier-startup',
    href: '#',
    price: { monthly: '￥30', annually: '￥288' },
    description: 'A plan that scales with your rapidly growing business.',
    features: [
      '25 products',
      'Up to 10,000 subscribers',
      'Advanced analytics',
      '24-hour support response time',
      'Marketing automations',
    ],
    mostPopular: true,
  },
  {
    name: '企业',
    id: 'tier-enterprise',
    href: '#',
    price: { monthly: '￥60', annually: '￥576' },
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      '1-hour, dedicated support response time',
      'Marketing automations',
      'Custom reporting tools',
    ],
    mostPopular: false,
  },
]

export default function PricingPage() {
  const [frequency, setFrequency] = useState(frequencies[0])

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
            选择一个订阅服务
          </p>
        </div>
        <div className="mt-6 flex justify-center">
            <div className="flex">
                <div className="h-10 flex bg-gray-100 rounded-lg transition p-1">
                    <nav className="flex gap-x-1" aria-orientation="horizontal">
                        {frequencies.map((freq, freqIdx) => (
                            <button key={freqIdx}
                                type="button"
                                onClick={() => setFrequency(freq)}
                                className={classNames(
                                                'py-3 px-4 inline-flex items-center gap-x-2 text-sm text-gray-500 hover:text-white focus:outline-none focus:text-white font-medium rounded-lg',
                                                frequency.label === freq.label ? 'bg-sky-700 text-white' : 'bg-transparent hover:bg-sky-200'
                                    )}
                                >
                                {freq.label}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
        <div className="w-full isolate mx-auto mt-6 grid grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'ring-2 ring-sky-600' : 'ring-1 ring-gray-200',
                'w-full rounded-3xl p-4 xl:p-4'
              )}
            >
              <div className="flex items-center justify-between gap-x-2">
                <h3
                  id={tier.id}
                  className={classNames(
                    tier.mostPopular ? 'text-sky-600' : 'text-gray-900',
                    'text-lg font-semibold leading-8'
                  )}
                >
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-rose-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-rose-600">
                    最多订阅
                  </p>
                ) : null}
              </div>
              <p className="mt-2 text-sm leading-6 text-gray-600">{tier.description}</p>
              <p className="mt-2 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price[frequency.value]}</span>
                <span className="text-sm font-semibold leading-6 text-gray-600">{frequency.priceSuffix}</span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-sky-600 text-white shadow-sm hover:bg-sky-500'
                    : 'text-sky-600 ring-1 ring-inset ring-sky-200 hover:ring-sky-300',
                  'mt-2 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600'
                )}
              >
                订阅
              </a>
              <ul role="list" className="mt-4 space-y-2 text-sm leading-6 text-gray-600 xl:mt-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-2">
                    <CheckIcon className="h-6 w-5 flex-none text-sky-600" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
