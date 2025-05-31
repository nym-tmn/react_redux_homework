import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { getLocations } from "@api";
import type { LocationsType } from "@types";
import { LocationItem } from "./Location/LocationItem";
import { ContentTitle, CustomImage, Flex, Pagination, SectionStyles } from "@components";
import failedImage from '@assets/images/failed_Image.webp';
import loadingImage from '@assets/images/loading.webp';

export const LocationsPage = () => {

	const [locations, setLocations] = useState<LocationsType | null>(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [pages, setPages] = useState(0);
	const [portionCount, setPortionCount] = useState(1);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const getAxiosLocations = useCallback(async () => {
		try {
			setIsLoading(prevIsLoading => !prevIsLoading);
			const { info, results } = await getLocations(currentPage);
			setLocations(results);
			setPages(prevPages => prevPages !== info.pages ? info.pages : prevPages);
			setIsLoading(prevIsLoading => !prevIsLoading);
		} catch (error) {
			setIsLoading(prevIsLoading => !prevIsLoading);
			if (axios.isAxiosError(error)) {
				if (error.response?.status === 404) {
					setError("Failed to load locations.");
				}
			} else if (error instanceof Error) {
				console.error(error.message);
				setError("An unexpected error occurred");
			} else {
				console.error('Unknown error:', error);
				setError("Something went wrong");
			}
		}
	}, [currentPage])

	useEffect(() => {
		getAxiosLocations();
	}, [getAxiosLocations])

	return (
		<>
			<ContentTitle $fontSize="28px" $marginBottom="20px" $maxWidth="200px">
				Locations
			</ContentTitle>

				{isLoading ? (
					<SectionStyles $display="flex">
						<Flex $direction="column" $justify="center" $align="center">
							<ContentTitle as={'h3'} $marginBottom="40px" $fontSize="22px">Loading...</ContentTitle>
							<CustomImage>
								<img src={loadingImage} alt="Loading image" />
							</CustomImage>
						</Flex>
					</SectionStyles>
				) : error ? (
					<SectionStyles $display="flex">
						<Flex $direction="column" $justify="center" $align="center">
							<ContentTitle as={'h3'} $fontSize="32px">{error}</ContentTitle>
							<CustomImage>
								<img src={failedImage} alt="Unsuccessful request" />
							</CustomImage>
						</Flex>
					</SectionStyles>
				) : (
					<>
						<SectionStyles>
							<Flex $justify="center" $wrap="wrap" $gap="20px" $margin="0 0 20px 0">
								{locations && locations
									.map(location =>
										<LocationItem key={location.id} name={location.name} dimension={location.dimension} type={location.type} />)}
							</Flex>
						</SectionStyles>
						<Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} portionCount={portionCount} setPortionCount={setPortionCount} />
					</>
				)}
		</>
	);
};