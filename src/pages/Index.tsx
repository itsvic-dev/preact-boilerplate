import tw from 'twin.macro'
import AikoArt from '@/assets/omamepreact.webp'

const Index = () => (
	<div css={tw`flex p-4 h-screen items-center justify-center flex-col gap-4`}>
		<img src={AikoArt} />
		<p css={tw`text-2xl`}>omame boilerplate 2: electric boogaloo</p>
		<p css={tw`text-zinc-400`}>
			(art by{' '}
			<a css={tw`text-zinc-50 hover:underline`} href="https://aikoyori.xyz">
				Aikoyori
			</a>
			, he&apos;s wonderful!)
		</p>
	</div>
)

export default Index
