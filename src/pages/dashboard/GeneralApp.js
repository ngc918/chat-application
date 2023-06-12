import React, { Suspense, lazy } from "react";
import Chats from "./Chats";
import { Box, Stack, useTheme } from "@mui/material";
import Conversation from "../../components/Conversation";

//Dynamic import
const Dog = lazy(() => import("../../components/Dog"));

const GeneralApp = () => {
	const theme = useTheme();

	return (
		<Stack direction={"row"} sx={{ width: "100%" }}>
			{/*Chats*/}

			<Chats />
			{/*Conversation*/}
			<Box
				sx={{
					height: "100%",
					width: "calc(100vw - 420px)",
					backgroundColor:
						theme.palette.mode === "light"
							? "#F0F4FA"
							: theme.palette.background.paper,
				}}
			>
				{/*Conversation */}
				<Conversation />
			</Box>
		</Stack>
	);
};

export default GeneralApp;
