import React from "react";
import {
	Divider,
	Stack,
	Typography,
	useTheme,
	Box,
	Link,
	IconButton,
	Menu,
	MenuItem,
} from "@mui/material";
import {
	DotsThree,
	DotsThreeVertical,
	DownloadSimple,
	Image,
} from "phosphor-react";
import { Message_options } from "../../data";

const DocMsg = ({ e, menu }) => {
	const theme = useTheme();
	return (
		<Stack direction="row" justifyContent={e.incoming ? "start" : "end"}>
			<Box
				p={1.5}
				sx={{
					backgroundColor: e.incoming
						? theme.palette.background.default
						: theme.palette.primary.main,
					borderRadius: 1.5,
					width: "max-content",
				}}
			>
				<Stack spacing={2}>
					<Stack
						p={2}
						direction={"row"}
						spacing={3}
						alignItems={"center"}
						sx={{
							backgroundColor: theme.palette.background.paper,
							borderRadius: 1,
						}}
					>
						<Image size={48} />
						<Typography variant="caption">Abstract.png</Typography>
						<IconButton>
							<DownloadSimple />
						</IconButton>
					</Stack>
					<Typography
						variant="body2"
						sx={{ color: e.incoming ? theme.palette.text : "#fff" }}
					>
						{e.message}
					</Typography>
				</Stack>
			</Box>
			{menu && <MessageOptions />}
		</Stack>
	);
};

const LinkMsg = ({ e, menu }) => {
	const theme = useTheme();
	return (
		<Stack direction="row" justifyContent={e.incoming ? "start" : "end"}>
			<Box
				p={1.5}
				sx={{
					backgroundColor: e.incoming
						? theme.palette.background.default
						: theme.palette.primary.main,
					borderRadius: 1.5,
					width: "max-content",
				}}
			>
				<Stack spacing={2}>
					<Stack
						p={2}
						spacing={3}
						alignItems={"center"}
						direction={"column"}
						sx={{
							backgroundColor: theme.palette.background.paper,
							borderRadius: 1,
						}}
					>
						<img
							src={e.preview}
							alt={e.message}
							style={{ maxHeight: 210, borderRadius: "10px" }}
						/>
						<Stack spacing={2}>
							<Typography variant="subtitle2">Creating Chat App</Typography>
							<Typography
								variant="subtitle2"
								sx={{ color: theme.palette.primary.main }}
								component={Link}
								to="/https://www.youtube.com/"
							>
								www.youtube.com
							</Typography>
						</Stack>
						<Typography
							variant="body2"
							color={e.incoming ? theme.palette.text : "#fff"}
						>
							{e.message}
						</Typography>
					</Stack>
				</Stack>
			</Box>
			{menu && <MessageOptions />}
		</Stack>
	);
};

const ReplyMsg = ({ e, menu }) => {
	const theme = useTheme();
	return (
		<Stack direction="row" justifyContent={e.incoming ? "start" : "end"}>
			<Box
				p={1.5}
				sx={{
					backgroundColor: e.incoming
						? theme.palette.background.default
						: theme.palette.primary.main,
					borderRadius: 1.5,
					width: "max-content",
				}}
			>
				<Stack spacing={1}>
					<Stack
						p={2}
						direction={"column"}
						spacing={3}
						alignItems={"center"}
						sx={{
							backgroundColor: theme.palette.background.paper,
							borderRadius: 1,
						}}
					>
						<Typography variant="body2" color={theme.palette.text}>
							{e.message}
						</Typography>
					</Stack>
					<Typography
						variant="body2"
						color={e.incoming ? theme.palette.text : "#fff"}
					>
						{e.reply}
					</Typography>
				</Stack>
			</Box>
			{menu && <MessageOptions />}
		</Stack>
	);
};

const MediaMsg = ({ e, menu }) => {
	const theme = useTheme();
	return (
		<Stack direction="row" justifyContent={e.incoming ? "start" : "end"}>
			<Box
				p={1.5}
				sx={{
					backgroundColor: e.incoming
						? theme.palette.background.default
						: theme.palette.primary.main,
					borderRadius: 1.5,
					width: "max-content",
				}}
			>
				<Stack spacing={1}>
					<img
						src={e.img}
						alt={e.message}
						style={{ maxHeight: 210, borderRadius: "10px" }}
					/>
					<Typography
						variant="body2"
						color={e.incoming ? theme.palette.text : "#fff"}
					>
						{e.message}
					</Typography>
				</Stack>
			</Box>
			{menu && <MessageOptions />}
		</Stack>
	);
};

const TextMsg = ({ e, menu }) => {
	const theme = useTheme();
	return (
		<Stack direction={"row"} justifyContent={e.incoming ? "start" : "end"}>
			<Box
				p={1.5}
				sx={{
					backgroundColor: e.incoming
						? theme.palette.background.default
						: theme.palette.primary.main,
					borderRadius: 1.5,
					width: "max-content",
				}}
			>
				<Typography
					variant="body2"
					color={e.incoming ? theme.palette.text : "#fff"}
				>
					{e.message}
				</Typography>
			</Box>
			{menu && <MessageOptions />}
		</Stack>
	);
};

const Timeline = ({ e }) => {
	const theme = useTheme();
	return (
		<Stack
			direction={"row"}
			alignItems={"center"}
			justifyContent={"space-between"}
		>
			<Divider width="46%" />
			<Typography variant="caption" sx={{ color: theme.palette.text }}>
				{e.text}
			</Typography>
			<Divider width="46%" />
		</Stack>
	);
};

const MessageOptions = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<>
			<DotsThreeVertical
				id="basic-button"
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
				size={20}
			/>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{ "aria-labelledby": "basic-button" }}
			>
				<Stack spacing={1} px={1}>
					{Message_options.map((e) => (
						<MenuItem onClick={() => {}}>{e.title}</MenuItem>
					))}
				</Stack>
			</Menu>
		</>
	);
};

export { Timeline, DocMsg, LinkMsg, TextMsg, MediaMsg, ReplyMsg };
