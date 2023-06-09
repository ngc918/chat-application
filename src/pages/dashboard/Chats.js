import {
	Box,
	IconButton,
	Stack,
	Typography,
	Button,
	Divider,
	useTheme,
} from "@mui/material";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import React from "react";
import { ChatList } from "../../data";
import { SimpleBarStyle } from "../../components/Scrollbar";
import {
	Search,
	SearchIconWrapper,
	StyledInputBase,
} from "../../components/Search";
import ChatElement from "../../components/ChatElement";
import "../../global.css";

const Chats = () => {
	const theme = useTheme();
	return (
		<Box
			sx={{
				position: "relative",
				width: 320,
				backgroundColor:
					theme.palette.mode === "light"
						? "#F8FAFF"
						: theme.palette.background.paper,
				boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
			}}
		>
			<Stack p={3} spacing={2} sx={{ height: "100vh" }} className="scrollbar">
				<Stack
					direction="row"
					alignItems={"center"}
					justifyContent={"space-between"}
				>
					<Typography variant="h5">Chats</Typography>
					<IconButton>
						<CircleDashed />
					</IconButton>
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
				<Stack spacing={1}>
					<Stack direction="row" alignItems={"center"} spacing={1.5}>
						<ArchiveBox size={24} />
						<Button>Archive</Button>
					</Stack>
					<Divider />
				</Stack>

				<Stack className="scrollbar" style={{ overflowY: "auto" }}>
					<Stack direction={"column"}>
						<Stack spacing={2.4}>
							<Typography variant="subtitle2" sx={{ color: "#676767" }}>
								Pinned
							</Typography>
							{ChatList.filter((e) => e.pinned).map((e) => {
								return <ChatElement {...e} />;
							})}
						</Stack>
						<Stack spacing={2.4}>
							<Typography variant="subtitle2" sx={{ color: "#676767" }}>
								All Chats
							</Typography>
							{ChatList.filter((e) => !e.pinned).map((e) => {
								return <ChatElement {...e} />;
							})}
						</Stack>
					</Stack>
				</Stack>
			</Stack>
		</Box>
	);
};

export default Chats;
