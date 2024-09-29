import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Variable 格式轉 <style>:root {...}</style> */
export const cssVariablesToStyleString = (variables?: TailwindVariable): string => {
  const cssVariables: Record<string, Record<string, string>> = { root: {} }
  let cssString: string[] = []

  /** 過濾響應設定 */
  Object.keys(variables || {})
    .filter((key) => key !== 'responsive')
    .forEach((key) => Object.assign(cssVariables, { [key]: variables?.[key as keyof typeof variables] }))

  /** 拼裝其他 theme key */
  for (let key in cssVariables) {
    cssString.push(`.${key} {`.replace(/^\.root/, ':root'))
    const sets = cssVariables[key]
    Object.keys(sets).forEach((row) => {
      cssString.push(`${row}: ${sets[row]};`)
    })
    cssString.push('}')
  }
  return cssString.join('')
}

/** Tailwind CSS key 合併過濾 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
