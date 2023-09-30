import { Typography, Stack } from "@mui/material";
import React from "react";

const Verify = () => {
	return (
		<>
			<Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
				<Typography>Please Verify OTP</Typography>
				<Stack direction={"row"} spacing={0.5}>
					<Typography variant="body2">Sent to email (dsfsdf)</Typography>
				</Stack>
			</Stack>
			{/* Verify Form */}
		</>
	);
};

export default Verify;
