const iconModules = import.meta.glob(
  '/node_modules/@meteocons/svg/fill/*.svg',
  {
    eager: true,
    query: '?url',
    import: 'default',
  },
) as Record<string, string>

export const iconUrlByName: Record<string, string> = {}
for (const path in iconModules) {
  const fileName = path.split('/').pop()?.replace('.svg', '') ?? ''
  iconUrlByName[fileName] = iconModules[path]
}
