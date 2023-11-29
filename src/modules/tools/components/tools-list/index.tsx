import { tools } from '../../data'
import { ToolListItem } from './parts/tools-list-item'

export default function ToolsList() {
  const orderedTools = tools.sort((a, b) => a.name.localeCompare(b.name))

  return (
    <ul className="mt-2">
      {orderedTools.map((tool, index) => (
        <ToolListItem key={tool.name} tool={tool} index={index} />
      ))}
    </ul>
  )
}
