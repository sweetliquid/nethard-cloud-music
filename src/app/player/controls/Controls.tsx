import { State } from 'app/reducer'
import clsx from 'clsx'
import { FC, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggle } from '../playing/playingReducer'
import { IconType } from 'react-icons/lib'
import {
  IoPlaySharp,
  IoPauseSharp,
  IoPlayBackSharp,
  IoPlayForwardSharp,
} from 'react-icons/io5'

const Control: FC<{
  primary?: boolean
  onClick?: () => void
  Icon?: IconType
}> = ({ primary = false, onClick, Icon }) => (
  <div
    className={clsx(
      'flex items-center justify-center text-white bg-red-500 rounded-full cursor-pointer',
      primary ? 'wh-9' : 'wh-7'
    )}
    onClick={onClick}
  >
    {Icon && <Icon className={primary ? 'wh-5' : 'wh-4'} />}
  </div>
)

export function Prev() {
  return <Control Icon={IoPlayBackSharp} />
}

export function Next() {
  return <Control Icon={IoPlayForwardSharp} />
}

export function PlayPause() {
  const dispatch = useDispatch()
  const isPlaying = useSelector<State, boolean>(state => state.player.playing)

  const handleClick = useCallback(() => {
    // TODO: toggle playing thunk
    dispatch(toggle())
  }, [dispatch])

  return (
    <Control
      primary
      onClick={handleClick}
      Icon={isPlaying ? IoPauseSharp : IoPlaySharp}
    />
  )
}

export default function Controls() {
  return (
    <div className="justify-evenly flex items-center w-48">
      <Prev />
      <PlayPause />
      <Next />
    </div>
  )
}
