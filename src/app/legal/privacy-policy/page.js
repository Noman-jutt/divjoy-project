'use client'
import LegalSection from '@/components/LegalSection'
import Meta from '@/components/Meta'
import { useRouter } from 'next/navigation';
import React from 'react'

const Page = () => {
  const router = useRouter();
  return (
    <>
      <Meta title="Legal" />
      <LegalSection
        bgColor="default"
        size="normal"
        bgImage=""
        bgImageOpacity={1}
        section={'privacy-policy'}
        key={router.query?.section}
      />
    </>
  )
}

export default Page