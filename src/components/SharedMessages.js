import React from "react";
import {
	Box,
	useTheme,
	Stack,
	Typography,
	IconButton,
	Tabs,
	Tab,
	Grid,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { UpdateSidebarType } from "../redux/slices/app";
import { CaretLeft, X } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { SHARED_LINKS } from "../data";
import { LinkMsg } from "./Conversation/MsgTypes";

const SharedMessages = () => {
	const theme = useTheme();

	const dispatch = useDispatch();

	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

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
						spacing={3}
					>
						<IconButton
							onClick={() => {
								dispatch(UpdateSidebarType("CONTACT"));
							}}
						>
							<CaretLeft />
						</IconButton>
						<Typography variant="subtitle2">Shared Messages</Typography>
					</Stack>
				</Box>

				<Tabs
					sx={{ px: 2, pt: 2 }}
					value={value}
					onChange={handleChange}
					centered
				>
					<Tab label="Media"></Tab>
					<Tab label="Links"></Tab>
					<Tab label="Docs"></Tab>
				</Tabs>

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
					{() => {
						switch (value) {
							case 0:
								//Media
								return (
									<Grid container spacing={2}>
										{[0, 1, 2, 3, 4, 5, 6].map((e) => {
											return (
												<Grid item xs={4}>
													<img
														src={faker.image.urlLoremFlickr({
															category: "cats",
														})}
														alt={faker.person.fullName()}
													/>
												</Grid>
											);
										})}
									</Grid>
								);
							case 1:
								//Links
								return SHARED_LINKS.map((e) => <LinkMsg e={e} />);
							case 2:
							//Docs
						}
					}}
				</Stack>
			</Stack>
		</Box>
	);
};

export default SharedMessages;
