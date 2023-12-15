import { useForm } from "react-hook-form";
import {
  FormContainer,
  InputContainer,
  SubmitButton,
  ThirdPartyAuth,
} from "../../../assets/wrappers/FormWrapper";
import { useEffect } from "react";
import { toast } from "react-toastify";

import { useGoogleAuth, useRegisterWithEmail } from "../../../api/user.tsx";

interface InputProps {
  email: string;
  password: string;
}

const Form: React.FC<InputProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const googleAuth = useGoogleAuth();
  const emailRegister = useRegisterWithEmail();

  const handleGoogleLogin = async () => {
    googleAuth.mutate();
  };
  const onSubmit = async (data) => {
    emailRegister.mutate(data);
  };

  useEffect(() => {
    if (errors.email) {
      toast.error(errors?.email?.message || "error");
    }
    if (errors.password) {
      toast.error(errors?.password?.message || "error");
    }
  }, [errors.email, errors.password]);

  console.log(import.meta.env.VITE_DEFAULT_AVATAR);

  return (
    <>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <label htmlFor="email">Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className={`${errors.email ? "error" : ""}`}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Password</label>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className={`${errors.password ? "error" : ""}`}
          />
        </InputContainer>
        <SubmitButton type="normal">
          Sign Up with Email and Password
        </SubmitButton>
      </FormContainer>
      <ThirdPartyAuth>
        <SubmitButton type="google" onClick={handleGoogleLogin}>
          Sign In with google
        </SubmitButton>
        <SubmitButton type="facebook">Sign In with facebook</SubmitButton>
      </ThirdPartyAuth>
    </>
  );
};

export default Form;
