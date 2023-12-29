import { ThemeSwitcher } from '../theme-switcher'

const Frame = () => {
  return (
    <div className="fixed inset-10 border">
      <ThemeSwitcher />
    </div>
  )
}

export { Frame }
