import { State } from 'app/reducer'
import React from 'react'
import { HiVolumeUp } from 'react-icons/hi'
import { useSelector } from 'react-redux'

export default function Volume() {
  const volume = useSelector<State, number>(state => state.player.volume)

  return (
    <div className="flex items-center gap-1">
      <HiVolumeUp />
      {`${volume}%`}
    </div>
  )
}
