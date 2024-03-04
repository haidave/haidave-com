import { IBM_Plex_Mono } from 'next/font/google'
import localFont from 'next/font/local'

const ppTelegraf = localFont({
  src: [
    {
      path: '../../../../public/fonts/PPTelegraf-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../../public/fonts/PPTelegraf-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-sans',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-mono',
})

export { ppTelegraf, ibmPlexMono }
