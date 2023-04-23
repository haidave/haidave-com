import localFont from '@next/font/local'

const ppAgrandir = localFont({
  src: '../../../../public/fonts/PPAgrandir-Regular.woff2',
  weight: '400',
  variable: '--font-sans',
})

const iaWriterQuattro = localFont({
  src: '../../../../public/fonts/iAWriterQuattroS-Regular.woff2',
  weight: '400',
  variable: '--font-mono',
})

export { ppAgrandir, iaWriterQuattro }
