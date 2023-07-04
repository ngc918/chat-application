import { styled, InputBase } from "@mui/material";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		paddingTop: theme.spacing(1),
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		width: "100%",
	},
}));

export default StyledInputBase;
