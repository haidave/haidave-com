import { Corner } from './parts/corner'

const Corners = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="group relative">
      {/* Top left corner */}
      <Corner className="left-0 top-0 group-hover:translate-x-1 group-hover:translate-y-1" />
      {/* Bottom left corner */}
      <Corner className="bottom-0 left-0 -rotate-90 group-hover:-translate-y-1 group-hover:translate-x-1" />

      {children}

      {/* Top right corner */}
      <Corner className="right-0 top-0 rotate-90 group-hover:-translate-x-1 group-hover:translate-y-1" />
      {/* Bottom right corner */}
      <Corner className="bottom-0 right-0 -rotate-180 group-hover:-translate-x-1 group-hover:-translate-y-1" />
    </div>
  )
}

export { Corners }
