import { Box, IconButton, Stack, useTheme } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data";

const DashboardLayout = () => {
	const theme = useTheme();

	return (
		<>
			<Box
				p={2}
				sx={{
					backgroundColor: theme.palette.background.paper,
					boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
					height: "100vh",
					width: 100,
				}}
			>
				<Stack
					direction="column"
					alignItems={"center"}
					sx={{ width: "100%" }}
					spacing={3}
				>
					<Box
						sx={{
							backgroundColor: theme.palette.primary.main,
							height: 64,
							width: 64,
							borderRadius: 2.5,
						}}
					>
						<img src={Logo} alt="logo" />
					</Box>
					<Stack spacing={3}>
						{Nav_Buttons.map((e) => (
							<IconButton key={e.index}>{e.icon}</IconButton>
						))}
					</Stack>
					<Divider></Divider>
				</Stack>
			</Box>
			<Outlet />
		</>
	);
};

export default DashboardLayout;
