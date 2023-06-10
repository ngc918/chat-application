import React from "react";
import { Divider, Stack, Typography, useTheme, Box } from "@mui/material";

const TextMsg = ({ e }) => {
	const theme = useTheme();
	return (
		<Stack direction={"row"} justifyContent={e.incoming ? "start" : "end"}>
			<Box
				p={1.5}
				sx={{
					backgroundColor: e.incoming
						? theme.palette.default
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

export { Timeline, TextMsg };
