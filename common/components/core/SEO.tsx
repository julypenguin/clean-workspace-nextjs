import { NextSeo, type NextSeoProps } from 'next-seo'
import React, { memo, useMemo } from 'react'
import { Platform, useCommon } from '@model'

/** SEO */
export const SEO = memo(({ seo }: { seo?: NextSeoProps }) => {
  const { t } = useCommon()
  const title = seo?.title ? t(seo.title) : Platform.PLATFORM
  const description = seo?.description ? t(seo.description) : Platform.PLATFORM

  const openGraph = useMemo(() => {
    if (!seo) return {}
    const title = t(seo?.openGraph?.title || seo?.title)
    const description = t(seo?.openGraph?.description || seo?.description)
    const siteName = seo?.openGraph?.siteName ? t(seo?.openGraph?.siteName) : ''
    return { ...seo?.openGraph, title, description, siteName }
  }, [t, seo])

  if (!seo) return null
  return <NextSeo {...seo} openGraph={openGraph} title={title} description={description} />
})

SEO.displayName = 'SEO'
