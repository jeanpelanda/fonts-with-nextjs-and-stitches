import { createStitches } from '@stitches/react'
import { MuseoModerno } from 'next/font/google' // google font
import localFont from 'next/font/local' // local font

const museo = MuseoModerno({ subsets: ['latin'], weight: '400' })
const montserrat = localFont({ src: '../assets/Montserrat-Regular.ttf', weight: '400' })

export const {
    getCssText,
    globalCss,
    styled,
    theme
} = createStitches({
    theme: {
        fonts: {
            museo: `${museo.style.fontFamily}, sans-serif`,
            montserrat: `${montserrat.style.fontFamily}, sans-serif`
        }
    }
})