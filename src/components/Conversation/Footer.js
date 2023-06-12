import React from "react";
import {
	useTheme,
	Box,
	Stack,
	IconButton,
	InputAdornment,
	styled,
	TextField,
	Fab,
	Tooltip,
} from "@mui/material";
import {
	LinkSimple,
	PaperPlaneTilt,
	Smiley,
	Camera,
	File,
	Image,
	Sticker,
	User,
} from "phosphor-react";
import { faker } from "@faker-js/faker";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const StyledInput = styled(TextField)(({ theme }) => ({
	"& .MuiInputBase-input": {
		paddingTop: "12px",
		paddingBottom: "12px",
	},
}));

const Actions = [
	{
		color: "#4da5fe",
		icon: <Image size={24} />,
		y: 102,
		title: "Photo/Video",
	},
	{
		color: "#1b8cfe",
		icon: <Sticker size={24} />,
		y: 172,
		title: "Stickers",
	},
	{
		color: "#0172e4",
		icon: <Camera size={24} />,
		y: 242,
		title: "Image",
	},
	{
		color: "#0159b2",
		icon: <File size={24} />,
		y: 312,
		title: "Document",
	},
	{
		color: "#013f7f",
		icon: <User size={24} />,
		y: 382,
		title: "Contact",
	},
];

const ChatInput = ({ setOpenEmoji }) => {
	const [openActions, setOpenActions] = React.useState(false);
	return (
		<StyledInput
			fullWidth
			placeholder={`Send a message to ${faker.name.firstName()}`}
			variant="filled"
			InputProps={{
				disableUnderline: true,
				startAdornment: (
					<Stack sx={{ width: "max-content" }}>
						<Stack
							sx={{
								position: "relative",
								display: openActions ? "inline-block" : "none",
							}}
						>
							{Actions.map((e) => (
								<Tooltip title={e.title} placement="right">
									<Fab
										sx={{
											position: "absolute",
											top: -e.y,
											backgroundColor: e.color,
										}}
									>
										{e.icon}
									</Fab>
								</Tooltip>
							))}
						</Stack>
						<InputAdornment position="">
							<IconButton
								onClick={() => {
									setOpenActions((prev) => !prev);
								}}
							>
								<LinkSimple />
							</IconButton>
						</InputAdornment>
					</Stack>
				),
				endAdornment: (
					<InputAdornment position={""}>
						<IconButton
							onClick={() => {
								setOpenEmoji((prev) => !prev);
							}}
						>
							<Smiley />
						</IconButton>
					</InputAdornment>
				),
			}}
		/>
	);
};

const Footer = () => {
	const theme = useTheme();
	const [openEmoji, setOpenEmoji] = React.useState(false);
	return (
		<Box
			p={2}
			sx={{
				width: "100%",
				backgroundColor:
					theme.palette.mode === "light"
						? "#F8FAFF"
						: theme.palette.background.paper,
				boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
			}}
		>
			<Stack direction={"row"} alignItems={"center"} spacing={3}>
				<Stack sx={{ width: "100%" }}>
					{/*Chat Input*/}
					<Box
						sx={{
							display: openEmoji ? "inline" : "none",
							zIndex: 10,
							position: "fixed",
							bottom: 81,
							right: 100,
						}}
					>
						<Picker
							theme={theme.palette.mode}
							data={data}
							onEmojiSelect={console.log}
						/>
					</Box>
					<ChatInput setOpenEmoji={setOpenEmoji} />
				</Stack>
				<Box
					sx={{
						height: 48,
						width: 48,
						backgroundColor: theme.palette.primary.main,
						borderRadius: 1.5,
					}}
				>
					<Stack
						sx={{ height: "100%", width: "100%" }}
						alignItems={"center"}
						justifyContent={"center"}
					>
						<IconButton>
							<PaperPlaneTilt color="#fff" />
						</IconButton>
					</Stack>
				</Box>
			</Stack>
		</Box>
	);
};

export default Footer;
