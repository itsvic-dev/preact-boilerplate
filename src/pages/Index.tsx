import AikoArt from '@/assets/omamepreact.webp'

const Index = () => (
	<div class="flex p-4 h-screen items-center justify-center flex-col gap-4">
		<img src={AikoArt} alt="omame" />
		<p class="text-2xl">omame boilerplate 2: electric boogaloo</p>
		<p class="text-zinc-400">
			(art by{' '}
			<a class="text-zinc-50 hover:underline" href="https://aikoyori.xyz">
				Aikoyori
			</a>
			, he&apos;s wonderful!)
		</p>
	</div>
)

export default Index
