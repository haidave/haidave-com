import Link from 'next/link'

// import { Navigation } from '../navigation'

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-10 mx-auto flex w-full max-w-[120rem] items-center justify-between px-12 py-6 mix-blend-difference">
      {/* logo */}
      <Link href="/">
        <span className="text-xl font-medium uppercase">Dave Nguyen</span>
      </Link>

      {/* <Navigation /> */}

      <button className="rounded-lg border px-4 py-1 text-sm uppercase">AVAILABLE FOR WORK</button>
    </header>
  )
}

export { Header }
