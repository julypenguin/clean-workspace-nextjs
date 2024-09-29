import { Platform, setLocale, useCommon } from '@model'
import * as React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from '@templates/views-demo/components/ui/dropdown-menu'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@templates/views-demo/components/ui/button'
import { memo } from 'react'

const DropdownThemeMenu = () => {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-20 w-20 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-20 w-20 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-120">
        <DropdownMenuRadioGroup value={theme}>
          <DropdownMenuRadioItem value="day" onClick={() => setTheme('day')}>
            Day
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="night" onClick={() => setTheme('night')}>
            Night
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const DropdownLocaleMenu = () => {
  const { locale } = useCommon()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {locale}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-120">
        <DropdownMenuRadioGroup value={locale}>
          {Platform.LOCALES.map((key) => (
            <DropdownMenuRadioItem key={key} value={key} onClick={() => setLocale(key)}>
              {key}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

/** Header */
const DemoHeader = memo(() => {
  const { push } = useCommon()

  return (
    <header data-sid="1857956043" className="sticky top-0 z-50 flex h-60 w-full transform-gpu items-center justify-between bg-card px-16 shadow">
      {/*logo*/}
      <div className="cursor-pointer text-20 font-black uppercase text-primary" onClick={() => push?.('/')}>
        {Platform.PLATFORM}
      </div>
      {/*button*/}
      <div className="hidden items-center space-x-16 md:flex">
        <DropdownLocaleMenu />
        <DropdownThemeMenu />
      </div>
    </header>
  )
})

DemoHeader.displayName = 'DemoHeader'

export default DemoHeader
