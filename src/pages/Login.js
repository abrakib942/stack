import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useLoginUserMutation } from "../app/features/auth/authApi";
import { MdAlternateEmail } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please Enter a valid email address")
    .required("Email required"),
  password: yup
    .string()
    .required("Password required")
    .min(6, "Password is too short - should be 6 letters minimum."),
});

const defaultValues = {
  email: "",
  password: "",
};

const Login = () => {
  const [loginUser, { data: loginData, isLoading, isError, isSuccess }] =
    useLoginUserMutation();

  const navigate = useNavigate();

  const { handleSubmit, formState, control, reset } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  const onSubmit = (data) => {
    try {
      console.log(data);
      const payloadObj = {
        email: data?.email,
        password: data?.password,
      };
      loginUser(payloadObj);

      reset(defaultValues);
    } catch (error) {
      toast.error("Login Failed! No user found");
      console.log(error);
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error("Login failed! user not found");
    } else if (isSuccess) {
      toast.success("Login Successful");

      navigate("/");
    }
  }, [isSuccess, navigate, isError]);

  return (
    <div className="w-[500px] mx-auto">
      <div className="flex flex-col items-center justify-center p-16">
        <div className="text-[24px] font-bold">Sign In</div>
        <div className="text-[16px] text-[#8A94A6] my-2">
          Welcome back, you’ve been missed!
        </div>
        <div className="flex items-center gap-3 mt-5 mb-2">
          <button className="px-6 py-3 gap-3 flex item-center rounded-xl text-[#8A94A6] bg-[#F0F5FA] w-[200px]">
            <FcGoogle className="w-5 h-5" />{" "}
            <span className="text-xs font-semibold">Sign In with Google</span>
          </button>
          <button className="px-5 py-3 gap-2 flex item-center rounded-xl text-[#8A94A6] bg-[#F0F5FA] w-[200px]">
            <AiFillApple className="w-5 h-5 text-gray-400" />{" "}
            <span className="text-xs font-semibold">Sign In with Apple ID</span>
          </button>
        </div>
        <div className="divider">OR</div>

        <form
          name="loginForm"
          noValidate
          className="flex flex-col mt-3 gap-5 justify-center w-[400px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <label className="relative block">
                <span className="absolute top-[14px] left-0 flex items-center pl-3">
                  <MdAlternateEmail className="text-gray-400 h-5 w-5" />
                </span>

                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full pl-10"
                  {...field}
                  // error={!!errors.email}
                  // helperText={errors?.email?.message}
                  required
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </label>
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <label className="relative block">
                <span className="absolute top-[14px] left-0 flex items-center pl-3">
                  <AiFillLock className="text-gray-400 h-5 w-5" />
                </span>

                <input
                  type="text"
                  placeholder="Create Password"
                  className="input input-bordered w-full pl-10"
                  {...field}
                  // error={!!errors.password}
                  // helperText={errors?.password?.message}
                  required
                />
                {errors.password && (
                  <span className="text-red-500 text-sm">
                    {errors.password.message}
                  </span>
                )}
              </label>
            )}
          />
          <div className="flex item-center gap-3">
            <input type="checkbox" className="checkbox checkbox-info" />
            <div className="text-[#B0B7C3] text-[16px]">Remember Me</div>
          </div>
          <div className="mx-auto">
            <input
              className="btn w-[400px] mt-4 bg-[#377DFF]  text-white"
              type="submit"
              value="Sign In"
            />
          </div>
          <div className="mt-3 text-[#B0B7C3] text-[16px] text-center">
            Don't have an account yet?{" "}
            <Link to="/register">
              {" "}
              <span className="text-[#377DFF] font-bold">Sign Up</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
