import React from "react";
import {
	Avatar,
	Box,
	IconButton,
	Stack,
	Typography,
	useTheme,
} from "@mui/material";
import { faker } from "@faker-js/faker";
import StyledBadge from "./StyledBadge.js";
import {
	ArrowDownLeft,
	ArrowUpRight,
	VideoCamera,
	Phone,
} from "phosphor-react";

const CallLogElement = ({ img, name, incoming, missed, online, id }) => {
	const theme = useTheme();
	return (
		<>
			<Box
				sx={{
					width: "100%",
					borderRadius: 1,
					backgroundColor:
						theme.palette.mode === "#fff"
							? "#fff"
							: theme.palette.background.default,
				}}
				p={2}
			>
				<Stack
					direction={"row"}
					alignItems={"center"}
					justifyContent={"space-between"}
				>
					<Stack spacing={1.5} direction="row" alignItems={"center"}>
						{online ? (
							<StyledBadge
								overlap="circular"
								anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
								variant="dot"
							>
								<Avatar
									src={faker.image.avatar()}
									alt={faker.name.fullName()}
								/>
							</StyledBadge>
						) : (
							<Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
						)}
						<Stack spacing={0.3}>
							<Typography variant="subtitle2">
								{faker.name.fullName()}
							</Typography>
							{/* <Typography variant="caption">{msg}</Typography> */}
							<Stack direction={"row"} alignItems={"center"} spacing={1}>
								{incoming ? (
									<ArrowDownLeft color={missed ? "red" : "green"} />
								) : (
									<ArrowUpRight color={missed ? "red" : "green"} />
								)}
								<Typography variant="caption">Yesterday 21:24</Typography>
							</Stack>
						</Stack>
					</Stack>
					<IconButton>
						<Phone color="green" />
					</IconButton>
				</Stack>
			</Box>
		</>
	);
};

const CallElement = ({ online }) => {
	const theme = useTheme();
	return (
		<Box
			sx={{
				width: "100%",
				borderRadius: 1,
				backgroundColor:
					theme.palette.mode === "#fff"
						? "#fff"
						: theme.palette.background.default,
			}}
			p={2}
		>
			<Stack
				direction={"row"}
				alignItems={"center"}
				justifyContent={"space-between"}
			>
				<Stack spacing={1.5} direction="row" alignItems={"center"}>
					{online ? (
						<StyledBadge
							overlap="circular"
							anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
							variant="dot"
						>
							<Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
						</StyledBadge>
					) : (
						<Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
					)}
					<Stack spacing={0.3}>
						<Typography variant="subtitle2">{faker.name.fullName()}</Typography>
						{/* <Typography variant="caption">{msg}</Typography> */}
					</Stack>
				</Stack>
				<Stack direction={"row"} alignItems={"center"}>
					<IconButton>
						<Phone color="green" />
					</IconButton>
					<IconButton>
						<VideoCamera color="green" />
					</IconButton>
				</Stack>
			</Stack>
		</Box>
	);
};

export { CallElement, CallLogElement };
