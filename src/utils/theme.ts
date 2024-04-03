export const getTheme = (): 'dark' | 'light' | null => {
  const theme = localStorage.getItem('theme')
  return (theme as 'dark' | 'light') || null
}

export const saveThemeToLocalStorage = (them: 'dark' | 'light') => {
  localStorage.setItem('theme', them)
}
