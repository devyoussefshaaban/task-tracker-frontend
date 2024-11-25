import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../context";
import { SIGN_UP_FORM_TYPE } from "../../components/auth/SignUpForm";
import {
  signUpFormResolver,
  SignUpFormValues,
} from "../../validations/authValidation";
import { SignUpRequestBody } from "../../utils/api";
import { signUp, updateMyProfile } from "../../context/actions/authActions";
import { useForm } from "react-hook-form";

export const signUpService = (
  formType: SIGN_UP_FORM_TYPE.REGISTER_USER | SIGN_UP_FORM_TYPE.UPDATE_PROFILE,
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
    register,
    errors,
    submitHandler,
  };
};
