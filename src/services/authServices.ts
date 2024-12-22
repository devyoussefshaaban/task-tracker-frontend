import { useDispatch, useSelector } from "react-redux";
import { User } from "../models/User";
import { AppDispatch, RootState } from "../context";
import {
  signInFormResolver,
  SignInFormValues,
  signUpFormResolver,
  SignUpFormValues,
} from "../validations/authValidation";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SignInRequestBody, SignUpRequestBody } from "../utils/api";
import {
  signIn,
  signUp,
  updateMyProfile,
} from "../context/actions/authActions";
import { ACCESS_TOKEN } from "../utils/constants";
import Cookies from "js-cookie";
import { SIGN_UP_FORM_TYPE } from "../components/auth/SignUpForm";

export const authServices = () => {
  const user: User = useSelector((state: RootState) => state.auth.user);

  const signInService = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<SignInFormValues>({ resolver: signInFormResolver });

    const dispatch: AppDispatch = useDispatch();

    const navigate = useNavigate();

    const submitHandler = handleSubmit((data: SignInRequestBody) => {
      dispatch(signIn(data));

      setTimeout(() => {
        if (Cookies.get(ACCESS_TOKEN) && Cookies.get(ACCESS_TOKEN) !== "")
          navigate("/home");
      }, 1000);
    });

    return {
      register,
      errors,
      submitHandler,
    };
  };

  const signUpService = (
    formType:
      | SIGN_UP_FORM_TYPE.REGISTER_USER
      | SIGN_UP_FORM_TYPE.UPDATE_PROFILE,
    switchForm: () => void
  ) => {
    const user = useSelector((state: RootState) => state.auth.user);
    const isRegisterForm = formType === SIGN_UP_FORM_TYPE.REGISTER_USER;

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<SignUpFormValues>({
      defaultValues: {
        username: isRegisterForm ? "" : user?.username,
      },
      resolver: signUpFormResolver,
    });

    const dispatch: AppDispatch = useDispatch();

    const signUpHandler = (data: SignUpRequestBody) => {
      dispatch(signUp(data));
      switchForm();
    };

    const submitHandler = handleSubmit((data: SignUpRequestBody) => {
      isRegisterForm ? signUpHandler(data) : dispatch(updateMyProfile(data));
    });

    return {
      user,
      register,
      errors,
      submitHandler,
      isRegisterForm,
    };
  };

  return {
    user,
    signInService,
    signUpService,
  };
};
