export default () =>
  useState<{ nextPage?: string; previousPage?: string }>(
    'pageConfig',
    () => ({})
  )
