import React, { Suspense, lazy } from "react";
import Chats from "./Chats";

//Dynamic import
const Dog = lazy(() => import("../../components/Dog"));

const GeneralApp = () => {
	return (
		<>
			{/*Chats*/}
			<Chats />
		</>
	);
};

export default GeneralApp;
