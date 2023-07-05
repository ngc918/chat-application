import React from "react";
import { Avatar, Box, Stack, Typography, useTheme } from "@mui/material";
import { faker } from "@faker-js/faker";
import StyledBadge from "./StyledBadge.js";
import { ArrowDownLeft } from "phosphor-react";

const CallLogElement = ({ online }) => {
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
						</Stack>
						<Stack>
							<ArrowDownLeft />
						</Stack>
					</Stack>
				</Stack>
			</Box>
		</>
	);
};

const CallElement = () => {};

export { CallElement, CallLogElement };
