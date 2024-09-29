/** CSS Root Variable */
const root = {
  '--background': 'hsl(0 0% 100%)',
  '--foreground': 'hsl(222.2 84% 4.9%)',
  '--card': 'hsl(0 0% 100%)',
  '--card-foreground': 'hsl(222.2 84% 4.9%)',
  '--popover': 'hsl(0 0% 100%)',
  '--popover-foreground': 'hsl(222.2 84% 4.9%)',
  '--primary': 'hsl(222.2 47.4% 11.2%)',
  '--primary-foreground': 'hsl(210 40% 98%)',
  '--secondary': 'hsl(210 40% 96.1%)',
  '--secondary-foreground': 'hsl(222.2 47.4% 11.2%)',
  '--muted': 'hsl(210 40% 96.1%)',
  '--muted-foreground': 'hsl(215.4 16.3% 46.9%)',
  '--accent': 'hsl(210 40% 96.1%)',
  '--accent-foreground': 'hsl(222.2 47.4% 11.2%)',
  '--destructive': 'hsl(0 84.2% 60.2%)',
  '--destructive-foreground': 'hsl(210 40% 98%)',
  '--border': 'hsl(214.3 31.8% 91.4%)',
  '--input': 'hsl(214.3 31.8% 91.4%)',
  '--ring': 'hsl(0 0% 0%)',
  '--radius': '8rem',
}

/** Dark Mode Variable */
const night: typeof root = {
  '--background': 'hsl(222.2 84% 4.9%)',
  '--foreground': 'hsl(210 40% 98%)',
  '--card': 'hsl(222.2 84% 4.9%)',
  '--card-foreground': 'hsl(210 40% 98%)',
  '--popover': 'hsl(222.2 84% 4.9%)',
  '--popover-foreground': 'hsl(210 40% 98%)',
  '--primary': 'hsl(210 40% 98%)',
  '--primary-foreground': 'hsl(222.2 47.4% 11.2%)',
  '--secondary': 'hsl(217.2 32.6% 17.5%)',
  '--secondary-foreground': 'hsl(210 40% 98%)',
  '--muted': 'hsl(217.2 32.6% 17.5%)',
  '--muted-foreground': 'hsl(215 20.2% 65.1%)',
  '--accent': 'hsl(217.2 32.6% 17.5%)',
  '--accent-foreground': 'hsl(210 40% 98%)',
  '--destructive': 'hsl(0 62.8% 30.6%)',
  '--destructive-foreground': 'hsl(210 40% 98%)',
  '--border': 'hsl(217.2 32.6% 17.5%)',
  '--input': 'hsl(217.2 32.6% 17.5%)',
  '--ring': 'hsl(0 0% 0%)',
  '--radius': '8rem',
}

/** 客製參數範例，自動掛在 spacing */
const responsive = {
  /**
   * 相當於 var(--header)
   * 結合 Tailwind 用法等於 h-header pt-header mt-header
   */
  // header: {
  //   sm: '40rem',
  //   md: '60rem',
  //   lg: '80rem',
  // },
}

export default {
  root,
  night,
  responsive,
} satisfies TailwindVariable
