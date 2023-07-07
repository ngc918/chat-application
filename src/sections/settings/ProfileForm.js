import React, { useCallback, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { object, string } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "../../components/hook-form/FormProvider";
import { Alert, Button, Stack } from "@mui/material";
import { RHFTextField } from "../../components/hook-form";

const ProfileForm = () => {
	const ProfileSchema = object({
		name: string().required("Name is required"),
		about: string().required("Description is required"),
		avatarUrl: string().required("Profile picture is required").nullable(true),
	});

	const defaultValues = {
		name: "",
		about: "",
	};

	const methods = useForm({
		resolver: yupResolver(ProfileSchema),
		defaultValues,
	});

	const {
		reset,
		watch,
		control,
		setError,
		setValue,
		handleSubmit,
		formState: { errors, isSubmitting, isSubmitSuccessful },
	} = methods;

	const values = watch();

	const handleDrop = useCallback(
		(acceptedFiles) => {
			const file = acceptedFiles[0];

			const newFile = Object.assign(file, {
				preview: URL.createObjectURL(file),
			});

			if (file) {
				setValue("avatarUrl", newFile, { shouldValidate: true });
			}
		},
		[setValue]
	);

	const onSubmit = async (data) => {
		try {
			// submit data to backend
			console.log("Data", data);
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
				<Stack spacing={3}>
					{!!errors.afterSubmit && (
						<Alert severity="error">{errors.afterSubmit.message}</Alert>
					)}

					<RHFTextField
						name="name"
						label="Name"
						helperText={"This name is visible to your contacts"}
					/>
					<RHFTextField
						multiline
						rows={4}
						maxRows={5}
						name={"About"}
						label="About"
					/>
				</Stack>
				<Stack direction={"row"} justifyContent={"end"}>
					<Button color="primary" size="large" type="submit" variant="outlined">
						Save
					</Button>
				</Stack>
			</Stack>
		</FormProvider>
	);
};

export default ProfileForm;
