import useOnContinueListener from './useOnContinueListener'

export default (fn: () => void) => {
  const onContinueListener = useOnContinueListener()

  onContinueListener.value = fn
}
