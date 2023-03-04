import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { logIn } from "../../../redux/auth/operations";
import { Register } from "../../../redux/auth/operations";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { NavLink } from '../../NavLink/NavLink';
import { Btn } from '../../Buttons/Btn';
import { Typography } from "@mui/material";
import {
  Input,
  Label,
  BtnsWrapper,
  FormWrapper,
  InputWrapper,
  Form,
  InputsWrapper,
  Hint,
  HintLeft,
  ErrorText,
  GoogleLoginLink,
  PasswordBtn,
  PasswordIcon,
} from './FormUser.styled';
// import HowToRegIcon from 'npm i @mui/material/HowToReg';

export const FormUser = ({
  formTitle,
  btnText,
  navLinkText,
  navLinkAdress,
  MainText,
}) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      nameTechniques: "",
      modelTechniques: "",
      serialNumber: "",
      completeSet: "",
      malfunction: "",
      name: "",
      adress: "",
      phone: ""
    },
  });

  const onSubmit = (dataUser) => {
    dispatch(Register(dataUser));
    reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        "& > :not(style)": { mb: 2, width: "100%" },
        width: 600,
        height: 900,
        margin: "20px auto",
        borderRadius: 10,
        boxShadow: "0px 0px 15px 1px rgba(143, 144, 139, 0.6)",
        padding: "20px",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      <p>{errors?.number?.message}</p>

      <Typography sx={{ fontSize: 35, textAlign: "center" }}>
        {formTitle}
      </Typography>
      <Typography sx={{ fontSize: 14, textAlign: "center" }}>
        {MainText}
      </Typography>
      <TextField
        {...register("nameTechniques", {
          required: "This field is required",
        })}
        color="secondary"
        label="назваТехніки"
        error={errors?.email?.message ? true : false}
        helperText={errors?.email?.message}
      />
     
     <TextField
        {...register("modelTechniques", {
          required: "This field is required",
        })}
        color="secondary"
        label="модельТехніки"
        error={errors?.email?.message ? true : false}
        helperText={errors?.email?.message}
      />
      <TextField
        {...register("serialNumber", {
          required: "This field is required",
        })}
        color="secondary"
        label="серійнийНомер"
        error={errors?.email?.message ? true : false}
        helperText={errors?.email?.message}
      />
      <TextField
        {...register("completeSet")}
        color="secondary"
        label="комплектація"
        error={errors?.email?.message ? true : false}
        helperText={errors?.email?.message}
      />
      <TextField
        {...register("malfunction", {
          required: "This field is required",
        })}
        color="secondary"
        label="несправність"
        error={errors?.email?.message ? true : false}
        helperText={errors?.email?.message}
      />
       <TextField
        {...register("name", {
          required: "This field is required",
        })}
        color="secondary"
        label="ФІО"
        error={errors?.email?.message ? true : false}
        helperText={errors?.email?.message}
      />
      <TextField
        {...register("adress", {
          required: "This field is required",
        })}
        color="secondary"
        label="адреса"
        error={errors?.email?.message ? true : false}
        helperText={errors?.email?.message}
      />
      <TextField
        {...register("phone", {
          required: "This field is required",
        })}
        color="secondary"
        label="телефон"
        error={errors?.email?.message ? true : false}
        helperText={errors?.email?.message}
      />
      <BtnsWrapper>
          <Btn type="submit" text={btnText} />
          <NavLink text={navLinkText} to={navLinkAdress} />
        </BtnsWrapper>
        </Box>
  );
};
