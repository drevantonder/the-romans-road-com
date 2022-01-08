import usePageConfig from './usePageConfig'

export default (newPageConfig) => {
  const pageConfig = usePageConfig()

  pageConfig.value = newPageConfig
}
