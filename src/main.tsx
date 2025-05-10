import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyles } from '@assets/styles/globalStyles.ts'

createRoot(document.getElementById('root')!).render(
	<>
		<GlobalStyles/>
		<App />
	</>
)
