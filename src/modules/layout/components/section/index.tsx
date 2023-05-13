type SectionContainerProps = {
  children: React.ReactNode
}

const SectionContainer = ({ children }: SectionContainerProps) => {
  return <section className="mx-auto max-w-section px-6 py-24">{children}</section>
}

const SectionTitle = ({ children }: SectionContainerProps) => {
  return <h2 className="text-2xl font-bold">{children}</h2>
}

const SectionDescription = ({ children }: SectionContainerProps) => {
  return <p className="mt-2">{children}</p>
}

const Section = {
  Root: SectionContainer,
  Title: SectionTitle,
  Description: SectionDescription,
}

export { Section }
