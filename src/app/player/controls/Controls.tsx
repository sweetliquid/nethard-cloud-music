import { State } from 'app/reducer'
import classNames from 'classnames'
import { FC, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { toggle } from '../playing/playingReducer'

const Control: FC<{ primary?: boolean; onClick?: () => void }> = ({
  primary = false,
  onClick,
  children,
}) => (
  <div
    className={classNames(
      'text-white bg-red-500 rounded-full',
      primary ? 'w-9 h-9' : 'w-7 h-7'
    )}
    onClick={onClick}
  >
    {children}
  </div>
)

export function Prev() {
  return <Control />
}

export function Next() {
  return <Control />
}

const Play = styled.div``
const Pause = styled.div``
export function PlayPause() {
  const dispatch = useDispatch()
  const isPlaying = useSelector<State, boolean>(state => state.player.playing)

  const handleClick = useCallback(() => {
    // TODO: toggle playing thunk
    dispatch(toggle())
  }, [dispatch])

  return (
    <Control primary onClick={handleClick}>
      {isPlaying ? <Pause /> : <Play />}
    </Control>
  )
}

export default function Controls() {
  return (
    <div className="flex items-center w-48 justify-evenly">
      <Prev />
      <PlayPause />
      <Next />
    </div>
  )
}
