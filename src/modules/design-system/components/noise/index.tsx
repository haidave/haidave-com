const Noise = () => {
  return (
    <svg className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-25 brightness-[70%] contrast-[30%]">
      <filter id="noise">
        <feTurbulence type="fractalNoise" base-frequency=".8" num-octaves="4" stitch-tiles="stitch"></feTurbulence>
        <feColorMatrix type="saturate" values="0"></feColorMatrix>
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)"></rect>
    </svg>
  )
}

export { Noise }
