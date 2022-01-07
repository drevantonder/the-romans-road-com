import useOnContinueListener from './useOnContinueListener'

export default () => {
  const onContinueListener = useOnContinueListener()

  return () => onContinueListener.value && onContinueListener.value()
}
