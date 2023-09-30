import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const VerifyForm = () => {
	const VerifyCodeSchema = Yup.object().shape({
		code1: Yup.string().required("Code is required"),
		code2: Yup.string().required("Code is required"),
		code3: Yup.string().required("Code is required"),
		code4: Yup.string().required("Code is required"),
		code5: Yup.string().required("Code is required"),
		code6: Yup.string().required("Code is required"),
	});

	const defaultValues = {
		code1: "",
		code2: "",
		code3: "",
		code4: "",
		code5: "",
		code6: "",
	};

	const methods = useForm({
		mode: "onChange",
		resolve: yupResolver(VerifyCodeSchema),
		defaultValues,
	});
	return <></>;
};

export default VerifyForm;
