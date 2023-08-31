import React from "react";
import { object, string } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "../../components/hook-form/FormProvider";
import { Alert, Button, Stack } from "@mui/material";
import { RHFTextField } from "../../components/hook-form";
import { ForgotPassword } from "../../redux/slices/auth";
import { useDispatch } from "react-redux";

const ResetPasswordForm = () => {
	const dispatch = useDispatch();
	const ResetPasswordSchema = object({
		email: string()
			.required("Email is required")
			.email("Email must be a valid email address"),
	});

	const defaultValues = {
		email: "demo@test.com",
	};

	const methods = useForm({
		resolver: yupResolver(ResetPasswordSchema),
		defaultValues,
	});

	const {
		reset,
		setError,
		handleSubmit,
		formState: { errors, isSubmitting, isSubmitSuccessful },
	} = methods;

	const onSubmit = async (data) => {
		try {
			// submit data to backend
			dispatch(ForgotPassword(data));
		} catch (error) {
			console.log(error);
			reset();
			setError("afterSubmit", {
				...error,
				message: error.message,
			});
		}
	};

	return (
		<FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
			<Stack spacing={3}>
				{!!errors.afterSubmit && (
					<Alert severity="error">{errors.afterSubmit.message}</Alert>
				)}

				<RHFTextField name="email" label="Email Address" />

				<Button
					fullWidth
					color="inherit"
					size="large"
					type="submit"
					variant="contained"
					sx={{
						bgcolor: "text.primary",
						color: (theme) =>
							theme.palette.mode === "light" ? "common.white" : "grey.800",
						"&:hover": {
							bgcolor: "text.primary",
							color: (theme) =>
								theme.palette.mode === "light" ? "common.white" : "grey.800",
						},
					}}
				>
					Change Password
				</Button>
			</Stack>
		</FormProvider>
	);
};

export default ResetPasswordForm;
