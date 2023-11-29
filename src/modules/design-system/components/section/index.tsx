type SectionContainerProps = {
  children: React.ReactNode
}

const SectionContainer = ({ children }: SectionContainerProps) => {
  return <section className="relative mx-auto max-w-section px-6 pb-32 pt-16 sm:pt-24">{children}</section>
}

const SectionContent = ({ children }: SectionContainerProps) => {
  return <div className="grid gap-10 sm:gap-12">{children}</div>
}

const SectionTitle = ({ children }: SectionContainerProps) => {
  return <h1 className="text-3xl font-bold sm:text-4xl">{children}</h1>
}

const SectionSubtitle = ({ children }: SectionContainerProps) => {
  return <h2 className="text-xl font-bold sm:text-2xl">{children}</h2>
}

const SectionDescription = ({ children }: SectionContainerProps) => {
  return <p className="mt-2 text-base sm:text-lg">{children}</p>
}

const SectionBlock = ({ children }: SectionContainerProps) => {
  return <div className="mt-2">{children}</div>
}

const Section = {
  Root: SectionContainer,
  Content: SectionContent,
  Title: SectionTitle,
  Description: SectionDescription,
  Subtitle: SectionSubtitle,
  Block: SectionBlock,
}

export { Section }
