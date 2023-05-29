import React, { Suspense, lazy } from "react";

//Dynamic import
const Dog = lazy(() => import("../../components/Dog"));

const GeneralApp = () => {
	return (
		<>
			<Suspense fallback="Loading...">
				<Dog />
			</Suspense>
		</>
	);
};

export default GeneralApp;
