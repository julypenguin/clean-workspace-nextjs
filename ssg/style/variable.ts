import ShadcnVariable from '@app/common/style/shadcn-variable'

const root = {
  ...ShadcnVariable.root,
  '--background': 'hsl(60 70% 95%)',
  '--foreground': 'hsl(20 14.3% 4.1%)',
  '--card': 'hsl(0 0% 100%)',
  '--card-foreground': 'hsl(20 14.3% 4.1%)',
  '--popover': 'hsl(0 0% 100%)',
  '--popover-foreground': 'hsl(20 14.3% 4.1%)',
  '--primary': 'hsl(47.9 95.8% 53.1%)',
  '--primary-foreground': 'hsl(26 83.3% 14.1%)',
  '--secondary': 'hsl(60 4.8% 95.9%)',
  '--secondary-foreground': 'hsl(24 9.8% 10%)',
  '--muted': 'hsl(60 4.8% 95.9%)',
  '--muted-foreground': 'hsl(25 5.3% 44.7%)',
  '--accent': 'hsl(60 4.8% 95.9%)',
  '--accent-foreground': 'hsl(24 9.8% 10%)',
  '--destructive': 'hsl(0 84.2% 60.2%)',
  '--destructive-foreground': 'hsl(60 9.1% 97.8%)',
  '--border': 'hsl(20 5.9% 90%)',
  '--input': 'hsl(20 5.9% 90%)',
  '--ring': 'hsl(0 0% 0%)',
  '--radius': '8rem',
}

const night = {
  ...ShadcnVariable.night,
  '--background': 'hsl(0 0% 3.9%)',
  '--foreground': 'hsl(0 0% 98%)',
  '--card': 'hsl(0 0% 3.9%)',
  '--card-foreground': 'hsl(0 0% 98%)',
  '--popover': 'hsl(0 0% 3.9%)',
  '--popover-foreground': 'hsl(0 0% 98%)',
  '--primary': 'hsl(0 72.2% 50.6%)',
  '--primary-foreground': 'hsl(0 85.7% 97.3%)',
  '--secondary': 'hsl(0 0% 14.9%)',
  '--secondary-foreground': 'hsl(0 0% 98%)',
  '--muted': 'hsl(0 0% 14.9%)',
  '--muted-foreground': 'hsl(0 0% 63.9%)',
  '--accent': 'hsl(0 0% 14.9%)',
  '--accent-foreground': 'hsl(0 0% 98%)',
  '--destructive': 'hsl(0 62.8% 30.6%)',
  '--destructive-foreground': 'hsl(0 0% 98%)',
  '--border': 'hsl(0 0% 14.9%)',
  '--input': 'hsl(0 0% 14.9%)',
  '--ring': 'hsl(0 0% 0%)',
}

export default {
  ...ShadcnVariable,
  root,
  night,
}
