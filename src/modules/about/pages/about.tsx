import { ROUTES } from '~/config/routes'
import { Contact } from '~/modules/about/components/contact'
import { Link } from '~/modules/design-system/components/link'
import { PageTransitionContainer } from '~/modules/design-system/components/page-transition-container'
import { Section } from '~/modules/design-system/components/section'

const AboutPage = () => {
  return (
    <PageTransitionContainer>
      <Section.Root>
        <Section.Content>
          <div>
            <Section.Title>About</Section.Title>
            <Section.Description>
              Obsessed with building pixel-perfect and polished interfaces that are also accessible and intuitive.
              Currently working at{' '}
              <Link
                href="https://www.strv.com/"
                isExternal
                className='relative after:absolute after:right-[-5px] after:content-["."]'
              >
                STRV
              </Link>
            </Section.Description>
          </div>

          <div>
            <Section.Subtitle>Me</Section.Subtitle>
            <Section.Block>
              <div className="grid gap-4">
                <p>Hey, I&apos;m Dave, a Frontend Engineer based in Prague, Czech&nbsp;Republic.</p>
                <p>
                  My main focus is on creating interfaces that are both visually stunning and inclusive, yet simple and
                  functional.
                </p>
                <p>
                  I take pride in my attention to detail and my commitment to delivering the best possible experience to
                  the end user.
                </p>
                <p>
                  When I&apos;m not coding, I enjoy exploring new ideas and concepts related to health, productivity,
                  and self&#8209;development. Check out my <Link href={ROUTES.notes}>notes</Link> for more.
                </p>
              </div>
            </Section.Block>
          </div>

          <div>
            <Section.Subtitle>Career</Section.Subtitle>
            <Section.Block>
              <ul className="grid gap-4">
                <li className="flex items-baseline gap-4">
                  <span className="w-[5.625rem] shrink-0 text-sm text-secondary">2021-present</span>
                  <div className="grid gap-1">
                    <p className="max-[350px]:text-sm">
                      Frontend Engineer at{' '}
                      <Link href="https://www.strv.com/" isExternal>
                        STRV
                      </Link>
                    </p>
                    <p className="text-sm text-secondary">
                      Building next-level software solutions for clients from US, but also building our own successful
                      products.
                    </p>
                  </div>
                </li>
                <li className="flex items-baseline gap-4">
                  <span className="w-[5.625rem] shrink-0 text-sm text-secondary">2018-2021</span>
                  <div className="grid gap-1">
                    <p className="max-[350px]:text-sm">
                      Creative Coder at{' '}
                      <Link href="https://www.dentsucreative.com/location/prague" isExternal>
                        Dentsu&nbsp;Creative&nbsp;CZ
                      </Link>
                    </p>
                    <p className="text-sm text-secondary">
                      I was in charge of campaign assets such as dynamic banners and newsletters. Clients included ŠKODA
                      Auto, Sazka, Heineken, Sunar, Generali and more.
                    </p>
                  </div>
                </li>
              </ul>
            </Section.Block>
          </div>

          <div>
            <Section.Subtitle>Stack</Section.Subtitle>
            <Section.Block>
              <ul className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm text-secondary min-[400px]:grid-cols-3 sm:text-base">
                <li>React, Next.js</li>
                <li>Typescript</li>
                <li>Vercel</li>

                <li>React Native, Expo</li>
                <li>Firebase, Supabase</li>
                <li>NextAuth, Clerk</li>

                <li>styled-components, Tailwind CSS</li>
                <li>Framer Motion, Reanimated</li>
                <li>Storybook</li>
              </ul>
            </Section.Block>
          </div>

          <div>
            <Section.Subtitle>This Site</Section.Subtitle>
            <Section.Block>
              <div className="grid gap-4">
                <p>
                  This site represents me and my work and allows me to experiment with new technologies and design
                  trends, while staying up&#8209;to&#8209;date with the latest industry best practices.
                </p>
                <p>
                  One of the main purposes of this site is to serve as a personal accountability tool for me, as well as
                  a way to share my learnings, insights, resources, and tools with others.
                </p>
                <p>
                  Built with Next.js 13, deployed on Vercel and styled with Tailwind CSS. Framer Motion for animations
                  and accessible component from Radix UI powered by{' '}
                  <Link href="https://ui.shadcn.com/" isExternal>
                    shadcn/ui
                  </Link>
                  .
                </p>
                <p>
                  Inspired by{' '}
                  <Link href="https://rauno.me/" isExternal>
                    @raunofreiberg
                  </Link>{' '}
                  ,{' '}
                  <Link href="https://emilkowal.ski/" isExternal>
                    @emilkowalski_
                  </Link>{' '}
                  and{' '}
                  <Link href="https://www.sj.land/" isExternal>
                    @sjzhang_
                  </Link>
                  .
                </p>
              </div>
            </Section.Block>
          </div>

          <Contact />
        </Section.Content>
      </Section.Root>
    </PageTransitionContainer>
  )
}

export { AboutPage }
