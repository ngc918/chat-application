import React, { useState } from "react";
import {
	Box,
	IconButton,
	Stack,
	Divider,
	Avatar,
	useTheme,
} from "@mui/material";
import { Gear } from "phosphor-react";

import AntSwitch from "../../components/AntSwitch";
import { Nav_Buttons } from "../../data";
import useSettings from "../../hooks/useSettings";
import { faker } from "@faker-js/faker";
import Logo from "../../assets/Images/logo.ico";

const SideBar = () => {
	const theme = useTheme();
	const [selected, setSelected] = useState(0);
	const { onToggleMode } = useSettings();

	return (
		<Box
			p={2}
			sx={{
				backgroundColor: theme.palette.background.paper,
				boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
				height: "100vh",
				width: 100,
			}}
		>
			<Stack
				direction="column"
				alignItems={"center"}
				justifyContent="space-between"
				sx={{ height: "100%" }}
				spacing={3}
			>
				<Stack alignItems={"center"} spacing={4}>
					<Box
						sx={{
							backgroundColor: theme.palette.primary.main,
							height: 64,
							width: 64,
							borderRadius: 1.5,
						}}
					>
						<img src={Logo} alt="logo" />
					</Box>
					<Stack
						sx={{ width: "max-content" }}
						direction="column"
						alignItems="center"
						spacing={3}
					>
						{Nav_Buttons.map((e) =>
							e.index === selected ? (
								<Box
									sx={{
										backgroundColor: theme.palette.primary.main,
										borderRadius: 1.5,
									}}
								>
									<IconButton
										sx={{ width: "max-content", color: "#fff" }}
										key={e.index}
									>
										{e.icon}
									</IconButton>
								</Box>
							) : (
								<IconButton
									onClick={() => {
										setSelected(e.index);
									}}
									sx={{
										width: "max-content",
										color:
											theme.palette.mode === "light"
												? "#000"
												: theme.palette.text.primary,
									}}
									key={e.index}
								>
									{e.icon}
								</IconButton>
							)
						)}
						<Divider sx={{ width: "48px" }} />
						{selected === 3 ? (
							<Box
								sx={{
									backgroundColor: theme.palette.primary.main,
									borderRadius: 1.5,
								}}
							>
								<IconButton sx={{ width: "max-content", color: "#fff" }}>
									<Gear />
								</IconButton>
							</Box>
						) : (
							<IconButton
								onClick={() => {
									setSelected(3);
								}}
								sx={{
									width: "max-content",
									color:
										theme.palette.mode === "light"
											? "#000"
											: theme.palette.text.primary,
								}}
							>
								<Gear />
							</IconButton>
						)}
					</Stack>
				</Stack>
				<Stack spacing={4} alignItems="center">
					{/* Switch */}
					<AntSwitch
						onChange={() => {
							onToggleMode();
						}}
						defaultChecked
					/>
					<Avatar src={faker.image.avatar()} />
				</Stack>
			</Stack>
		</Box>
	);
};

export default SideBar;
