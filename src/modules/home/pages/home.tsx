import { Corners } from '~/modules/design-system/components/corners'

const HomePage = () => {
  return (
    <div className="grid h-full place-items-center">
      <div className="">
        <h1 className="font-mono text-[200px] font-light italic tracking-tighter">dave</h1>
      </div>

      {/* <div className="flex justify-between">
        <div className="grid gap-0.5 font-mono font-light italic">
          <div className="flex items-baseline gap-2">
            <div className="h-0.5 w-[76px] skew-x-[-45deg] bg-black dark:bg-white" />
            <h1 className="text-5xl tracking-tighter">dave</h1>
          </div>
          <h2>Frontend Engineer</h2>
        </div>

        <div className="max-w-[460px]">
          <p className="text-right text-lg font-light leading-6">
            Crafting polished web experiences with <em>React</em>&nbsp;<em>&</em>&nbsp;<em>Next</em>.<em>js</em> and
            simultaneously expanding into mobile development using <em>React</em> <em>Native</em>&nbsp;<em>&</em>&nbsp;
            <em>Expo</em>.
          </p>
        </div>
      </div> */}

      {/* <div className="mt-[200px] flex justify-between">
        <Corners>
          <div className="p-10">
            <h3>Everyday Essentials</h3>
          </div>
        </Corners>

        <Corners>
          <div className="p-10">
            <h3>Everyday Essentials</h3>
          </div>
        </Corners>
      </div> */}
    </div>
  )
}

export { HomePage }
