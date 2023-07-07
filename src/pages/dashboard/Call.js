import React, { useState } from "react";
import {
	Box,
	Divider,
	IconButton,
	Stack,
	Typography,
	Link,
	useTheme,
	style,
} from "@mui/material";
import {
	Search,
	SearchIconWrapper,
	StyledInputBase,
} from "../../components/Search";
import { MagnifyingGlass, Phone, Plus } from "phosphor-react";
import { CallLogElement } from "../../components/CallElement";
import { CallList } from "../../data";
import StartCall from "../../sections/main/StartCall";

const Call = () => {
	const theme = useTheme();
	const [openDialog, setOpenDialog] = useState(false);

	const handleCloseDialog = () => {
		setOpenDialog(false);
	};

	return (
		<>
			<Stack direction="row" sx={{ width: "100%" }}>
				{/* Left */}
				<Box
					sx={{
						height: "100vh",
						backgroundColor: (theme) =>
							theme.palette.mode === "light"
								? "#F8FAFF"
								: theme.palette.background,
						width: 320,
						boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
					}}
				>
					<Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
						{/* Content goes here...*/}
						<Stack>
							<Typography variant="h5">Call Logs</Typography>
						</Stack>
						<Stack sx={{ width: "100%" }}>
							<Search>
								<SearchIconWrapper>
									<MagnifyingGlass color="#709CE6" />
								</SearchIconWrapper>
								<StyledInputBase
									placeholder="Search..."
									inputProps={{ "aria-label": "search" }}
								/>
							</Search>
						</Stack>
						<Stack
							direction={"row"}
							justifyContent={"space-between"}
							alignItems={"center"}
						>
							<Typography variant="subtitle2" component={Link}>
								Start New Conversation
							</Typography>
							<IconButton
								onClick={() => {
									setOpenDialog(true);
								}}
							>
								<Plus style={{ color: theme.palette.primary.main }} />
							</IconButton>
						</Stack>
						<Divider />

						<Stack
							spacing={3}
							sx={{ flexGrow: 1, height: "100%" }}
							className="scrollbar"
							style={{ overflowY: "auto" }}
						>
							<Stack spacing={2.5}>
								{/* */}

								{/* Call Logs */}
								{CallList.map((e) => (
									<CallLogElement {...e} />
								))}
								<CallLogElement online={true} />
							</Stack>
						</Stack>
					</Stack>
				</Box>
				{/* Right */}
				{/* TODO: Reuse Conversation Components */}
			</Stack>
			{openDialog && (
				<StartCall open={openDialog} handleClose={handleCloseDialog} />
			)}
		</>
	);
};

export default Call;
