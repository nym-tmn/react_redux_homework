import { Outlet } from "react-router";
import { Footer, Header, Nav } from "@layouts";
import styled from "styled-components";

const MainContent = styled.div`
flex: 1 1 auto;
`

export function MainLayout() {
	return (
		<>
			<Header />
			<Nav />
			<MainContent>
				<Outlet />
			</MainContent>
			<Footer/>
		</>
	)
}