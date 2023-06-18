import React from "react";
import {
	Avatar,
	Box,
	IconButton,
	Stack,
	Typography,
	useTheme,
} from "@mui/material";
import { X } from "phosphor-react";
import { useDispatch } from "react-redux";
import { ToggleSideBar } from "../redux/slices/app";
import { faker } from "@faker-js/faker";

const Contact = () => {
	const theme = useTheme();
	const dispatch = useDispatch();
	return (
		<Box sx={{ width: 320, height: "100vh" }}>
			<Stack sx={{ height: "100%" }}>
				{/*Header*/}
				<Box
					sx={{
						boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
						width: "100%",
						backgroundColor:
							theme.palette.mode === "light"
								? "#F8FAFF"
								: theme.palette.background,
					}}
				>
					<Stack
						sx={{ height: "100%", p: 2 }}
						direction="row"
						alignItems={"center"}
						justifyContent={"space-between"}
						spacing={3}
					>
						<Typography variant="subtitle2">Contact Info</Typography>
						<IconButton
							onClick={() => {
								dispatch(ToggleSideBar());
							}}
						>
							<X />
						</IconButton>
					</Stack>
				</Box>
				{/*Body*/}
				<Stack
					sx={{
						height: "100%",
						position: "relative",
						flexGrow: 1,
						overflowY: "scroll",
					}}
					p={3}
					spacing={3}
				>
					<Stack alignItems={"center"} direction={"row"} spacing={2}>
						<Avatar
							src={faker.image.avatar()}
							alt={faker.name.firstName()}
							sx={{ height: 64, width: 64 }}
						/>
					</Stack>
				</Stack>
			</Stack>
		</Box>
	);
};

export default Contact;
