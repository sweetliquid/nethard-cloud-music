import Progress from 'app/player/progress/Progress'
import Volume from 'app/player/volume/Volume'
import {
  MinimizeButton,
  MaximumButton,
  CloseButton,
} from 'components/window/WindowButton'
import Head from 'next/head'
import React, { FC, FormEvent, useCallback } from 'react'
import { BiCaretDown, BiSearch } from 'react-icons/bi'
import { FaRandom, FaRegUserCircle } from 'react-icons/fa'
import { RiTShirtLine, RiSettings3Line } from 'react-icons/ri'
import { VscMail } from 'react-icons/vsc'

const NavigationButton: FC<{
  direction: '<' | '>'
  className?: string
}> = ({
  direction,
  className = 'w-6 text-sm cursor-pointer hover:bg-red-700 hover:text-red-800 hover:border-red-90',
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
    }, [direction])}
  >
    {direction}
  </a>
)

const SearchBar: FC = () => {
  const handleSubmit = useCallback((e: FormEvent) => {
    // TODO
    e.preventDefault()
  }, [])

  return (
    <form className="flex-center-y" onSubmit={handleSubmit}>
      <input
        // TODO: placeholder active variants: opacity-0
        className="px-3 py-1 text-xs text-white placeholder-gray-300 bg-red-700 outline-none rounded-xl placeholder-opacity-60 hover:placeholder-opacity-0 w-60"
        type="text"
        placeholder="搜索音乐，歌手，歌词，用户"
      />
      <button>
        <BiSearch className="relative text-gray-300 -left-6 opacity-70 hover:text-white" />
      </button>
    </form>
  )
}

const Header: FC = () => (
  <Head>
    <title>Nethard Cloud Music</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
)

const Container: FC = ({ children }) => (
  <div className="flex flex-col full-screen">{children}</div>
)

const Navbar: FC = () => (
  <nav className="h-12 bg-red-600 flex-center-y">
    <div className="w-48 px-1 flex-center-y">
      <img
        className="w-10 h-10"
        src="/NetEase_Music-Logo.wine.svg"
        alt="logo"
      />
      <span className="text-white">网易云音乐</span>
    </div>

    <div className="flex font-bold text-center text-white border border-red-700 rounded">
      <NavigationButton direction="<" />
      <div className="border-l border-red-700" />
      <NavigationButton direction=">" />
    </div>

    <div className="ml-3">
      <SearchBar />
    </div>

    {/* TODO: Replace this icon with an avatar */}
    <FaRegUserCircle className="ml-auto text-xl text-white cursor-pointer" />
    <div className="flex border-r border-red-700">
      <div className="flex items-center gap-1 px-3 text-xs text-gray-300 cursor-pointer hover:text-white">
        <p className="">Sweet Liquid</p>
        <BiCaretDown className="inline" />
      </div>
      <div className="flex items-center gap-1 px-3 text-lg text-gray-300 cursor-pointer hover:text-white">
        <RiTShirtLine />
      </div>
      <div className="flex items-center gap-1 px-3 text-lg text-gray-300 cursor-pointer hover:text-white">
        <VscMail />
      </div>
      <div className="flex items-center gap-1 px-3 text-lg text-gray-300 cursor-pointer hover:text-white">
        <RiSettings3Line />
      </div>
    </div>
    <div className="flex px-3">
      <MinimizeButton />
      <MaximumButton />
      <CloseButton />
    </div>
  </nav>
)

const Content: FC = ({ children }) => (
  <main className="flex flex-auto">
    <div className="w-48 bg-gray-100"></div>
    <div className="flex-auto">{children}</div>
  </main>
)

const Player: FC = () => (
  <footer className="flex items-center h-12 bg-white border">
    <div className="flex items-center w-48 justify-evenly">
      <div className="w-8 h-8 bg-red-500 rounded-full"></div>
      <div className="bg-red-500 rounded-full w-9 h-9"></div>
      <div className="w-8 h-8 bg-red-500 rounded-full"></div>
    </div>

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

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        <Navbar />
        <Content>{children}</Content>
        <Player />
      </Container>
    </>
  )
}

export default Layout
