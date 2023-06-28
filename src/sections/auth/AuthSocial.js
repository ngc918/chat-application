import React from "react";
import { Box, Divider, IconButton, Stack } from "@mui/material";
import { GitHub, Twitter } from "@mui/icons-material";
import GoogleIcon from "@mui/icons-material/Google";

const AuthSocial = () => {
	return (
		<Box>
			<Divider
				sx={{
					my: 2.5,
					typography: "overline",
					color: "text.disabled",
					"&::before, ::after": {
						borderTopStyle: "dashed",
					},
				}}
			>
				OR
			</Divider>
			<Stack direction={"row"} justifyContent={"center"} spacing={2}>
				<IconButton>
					<GoogleIcon />
				</IconButton>
				<IconButton>
					<GitHub />
				</IconButton>
				<IconButton>
					<Twitter />
				</IconButton>
			</Stack>
		</Box>
	);
};

export default AuthSocial;
