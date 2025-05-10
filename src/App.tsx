import { Route, Routes } from "react-router"
import { EmptyLayout, MainLayout } from "@layouts"
import { CharactersPage, EpisodesPage, HomePage, LocationsPage } from "@pages"

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<HomePage />} />
					<Route path="/characters" element={<CharactersPage />} />
					<Route path="/locations" element={<LocationsPage />} />
					<Route path="/episodes" element={<EpisodesPage />} />
				</Route>
				<Route path="*" element={<EmptyLayout/>}></Route>
			</Routes>
		</>
	)
}

export default App
