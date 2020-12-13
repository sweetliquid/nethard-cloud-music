import { useCallback } from 'react'
import { IconType } from 'react-icons/lib'
import {
  VscChromeClose,
  VscChromeMaximize,
  VscChromeMinimize,
} from 'react-icons/vsc'

export default function WindowButton({
  Icon,
  onClick,
}: {
  Icon: IconType
  onClick: () => void
}) {
  return (
    <Icon
      className="w-6 text-lg text-gray-300 cursor-pointer hover:text-white"
      onClick={onClick}
    />
  )
}

export function MaximumButton() {
  const handleClick = useCallback(() => {
    // TODO
  }, [])

  return <WindowButton Icon={VscChromeMaximize} onClick={handleClick} />
}

export function MinimizeButton() {
  const handleClick = useCallback(() => {
    // TODO
  }, [])

  return <WindowButton Icon={VscChromeMinimize} onClick={handleClick} />
}

export function CloseButton() {
  const handleClick = useCallback(() => {
    // TODO
  }, [])

  return <WindowButton Icon={VscChromeClose} onClick={handleClick} />
}
