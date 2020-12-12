import classNames from 'classnames'
import Head from 'next/head'
import { FC, useCallback } from 'react'

/**
 * I tried to write some shit code, hahhhhh.
 */
const NavigationButton: FC<{
  direction: '<' | '>'
  className?: string
}> = ({
  direction,
  className = classNames(
    'cursor-pointer w-6 text-sm',

    'hover:bg-red-700',
    'hover:text-red-800',
    'hover:border-red-900'
  ),
}) => (
  <a
    className={className}
    onClick={useCallback(() => {
      switch (direction) {
        case '<':
          // TODO: backward route
          break
        case '>':
          // TODO: forward route
          break
        default:
          break
      }
    }, [])}
  >
    {direction}
  </a>
)

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nethard Cloud Music</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="full-screen flex flex-col">
        <div className="bg-red-600 h-12 flex-center-y">
          <div className="flex-center-y w-48 px-1">
            <img
              className="w-10 h-10"
              src="/NetEase_Music-Logo.wine.svg"
              alt="logo"
            />
            <span className="text-white">网易云音乐</span>
          </div>

          <div
            className={classNames(
              'flex',
              'border border-red-700 rounded',
              'text-white text-center font-bold'
            )}
          >
            <NavigationButton direction="<" />
            <div className="border-l border-red-700" />
            <NavigationButton direction=">" />
          </div>

          <div className="flex-center-y ml-3">
            <input
              className={classNames(
                'rounded-xl py-1 px-2',
                'bg-red-700 outline-none',
                'text-xs text-white',
                // TODO: placeholder active variants: opacity-0
                'placeholder-gray-300 placeholder-opacity-60 hover:placeholder-opacity-0'
              )}
              type="text"
              placeholder="搜索音乐，歌手，歌词，用户"
            />
          </div>
        </div>
        <div className="flex-auto flex">
          <div className="w-48 bg-gray-100"></div>
          <div className="flex-auto"></div>
        </div>
        <div className="h-10"></div>
      </main>
    </div>
  )
}
