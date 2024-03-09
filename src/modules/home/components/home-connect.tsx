const HomeConnect = () => {
  return (
    <section className="mt-20 flex h-screen flex-col justify-end md:mt-32">
      <div className="relative grid h-full w-full place-items-center rounded-[2.5rem] border">
        <div className="text-center">
          <p className="text-xl uppercase">Got a project in mind?</p>
          <p className="mt-6 text-9xl font-medium uppercase leading-none">Let&apos;s connect</p>
          <button className="mt-10 aspect-square rounded-full border-2 p-5">
            <span className="text-sm uppercase">Drop a</span>
            <span className="block text-sm uppercase">message</span>
          </button>
        </div>
      </div>

      <footer className="mb-4 mt-6 md:mb-6">
        <div className="flex flex-col justify-between gap-2 md:flex-row">
          <p className="hidden text-sm uppercase md:block">&copy;2024 All rights reserved</p>
          <ul className="flex justify-between gap-12 text-sm uppercase">
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Linkedin</li>
          </ul>
        </div>
      </footer>
    </section>
  )
}

export { HomeConnect }
