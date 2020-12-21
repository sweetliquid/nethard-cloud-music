import React, { FC } from 'react'
import { FaRandom } from 'react-icons/fa'
import Controls from './controls/Controls'
import Progress from './progress/Progress'
import Volume from './volume/Volume'

const Player: FC = () => (
  <footer className="flex items-center h-12 bg-white border">
    <Controls />

    <div className="flex-auto px-2">
      <Progress />
    </div>

    <div className="flex items-center gap-4 px-2 text-gray-500">
      <Volume />
      <div>
        <FaRandom />
      </div>
      <div className="flex items-center justify-center w-5 h-5 text-sm font-thin border ralight">
        词
      </div>
      <div>播放列表</div>
    </div>
  </footer>
)

export default Player
