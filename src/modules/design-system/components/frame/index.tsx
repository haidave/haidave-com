const Frame = () => {
  return (
    <div className="fixed inset-10 border">
      <ul className="absolute -left-4 bottom-0 flex origin-left -rotate-90 gap-4 font-mono font-light uppercase">
        <li className="flex items-center gap-1">
          <div className="aspect-square w-[11px] border-[0.5px] border-white" />
          Light
        </li>
        <li className="flex items-center gap-1">
          <div className="aspect-square w-[11px] border-[0.5px] border-white bg-white" />
          Dark
        </li>
      </ul>
    </div>
  )
}

export { Frame }
