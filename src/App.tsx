import Fallback from '@/components/Fallback'
import { lazy, Suspense } from 'preact/compat'
import '@fontsource/inter'
import '@/styles.scss'

const Index = lazy(() => import('@/pages/Index'))

const App = () => (
	<Suspense fallback={<Fallback />}>
		<Index />
	</Suspense>
)

export default App
