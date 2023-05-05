import { ROUTES } from '~/config/routes'
import { DockItem } from './parts/dock-item'

const Dock = () => {
  return (
    <footer className="fixed bottom-8 left-1/2 -translate-x-1/2 rounded-full border">
      <ul className="flex gap-2">
        <DockItem href={ROUTES.home} shortcut="1" />
        <DockItem href={ROUTES.about} shortcut="2" />
        <DockItem href={ROUTES.resources} shortcut="3" />
        <DockItem href={ROUTES.notes} shortcut="4" />
      </ul>
    </footer>
  )
}

export { Dock }
