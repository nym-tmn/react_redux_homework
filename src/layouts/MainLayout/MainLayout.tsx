import { Outlet } from "react-router";
import { Footer, Header, Nav } from "@layouts";

export function MainLayout() {
	return (
		<>
			<Header />
			<Nav />
			<Outlet />
			<Footer/>
		</>
	)
}