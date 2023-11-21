import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/modules/design-system/components/accordion'
import { Checkbox } from '~/modules/design-system/components/checkbox'

import { CATEGORIES, SUBCATEGORIES } from '../../utils/const'

const ResourcesNavigation = () => {
  return (
    <div className="fixed -ml-72 w-56">
      <h2 className="text-xl font-bold">Filter</h2>
      <div className="mt-4">
        {CATEGORIES.map((category) => (
          <Accordion key={category} type="single" collapsible>
            <AccordionItem value={category}>
              <AccordionTrigger>{category}</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2">
                  {SUBCATEGORIES[category as keyof typeof SUBCATEGORIES].map((subcategory) => (
                    <div key={subcategory} className="flex items-center gap-2">
                      <Checkbox />
                      <label>{subcategory}</label>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  )
}

export { ResourcesNavigation }
