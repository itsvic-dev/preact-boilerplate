import { createGlobalStyle } from 'styled-components'
import tw from 'twin.macro'

export default createGlobalStyle`
    body {
        ${tw`bg-zinc-900 text-zinc-50`}
    }
`
