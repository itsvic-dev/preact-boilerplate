import CustomStyles from '@/components/CustomStyles'
import Fallback from '@/components/Fallback'
import { lazy, Suspense } from 'react'
import { GlobalStyles } from 'twin.macro'
import '@fontsource/inter'

const Index = lazy(() => import('@/pages/Index'))

const App = () => (
	<>
		<GlobalStyles />
		<CustomStyles />
		<Suspense fallback={<Fallback />}>
			<Index />
		</Suspense>
	</>
)

export default App
