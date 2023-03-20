import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useRegisterUserMutation } from "../app/features/auth/authApi";
import { MdAlternateEmail } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";
import { RiUserSmileLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";

const schema = yup.object().shape({
  name: yup.string().required("Please input your name"),
  email: yup.string().email("invalid email").required("Email required"),
  password: yup
    .string()
    .required("Password required")
    .min(8, "Password is too short - should be 8 letters minimum."),
});

const defaultValues = {
  name: "",
  email: "",
  password: "",
};

const Register = () => {
  const [registerUser, { data: registerData, isLoading, isError, isSuccess }] =
    useRegisterUserMutation();

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
        name: data?.name,
        email: data?.email,
        password: data?.password,
      };
      registerUser(payloadObj);

      reset(defaultValues);
    } catch (error) {
      toast.error("Registration Failed! Please provide valid information");
      console.log(error);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Registration Successful");

      navigate("/");
    }
  }, [isSuccess, navigate]);

  return (
    <div className="w-[500px] mx-auto">
      <div className="flex flex-col items-center justify-center p-16">
        <div className="text-[24px] font-bold">Getting Started</div>
        <div className="text-[16px] text-[#8A94A6] my-2">
          Create an account to continue!
        </div>
        <div className="flex items-center gap-3 mt-5 mb-2">
          <button className="px-6 py-3 gap-3 flex item-center rounded-xl text-[#8A94A6] bg-[#F0F5FA] w-[200px]">
            <FcGoogle className="w-5 h-5" />{" "}
            <span className="text-xs font-semibold">Sign Up with Google</span>
          </button>
          <button className="px-5 py-3 gap-2 flex item-center rounded-xl text-[#8A94A6] bg-[#F0F5FA] w-[200px]">
            <AiFillApple className="w-5 h-5 text-gray-400" />{" "}
            <span className="text-xs font-semibold">Sign Up with Apple ID</span>
          </button>
        </div>
        <div className="divider">OR</div>

        <form
          name="registerForm"
          noValidate
          className="flex flex-col mt-3 gap-5 justify-center w-[400px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <label class="relative block">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                  <MdAlternateEmail className="text-gray-400 h-5 w-5" />
                </span>

                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full pl-10"
                  {...field}
                  error={!!errors.email}
                  helperText={errors?.email?.message}
                  required
                />
              </label>
            )}
          />
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <label class="relative block">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                  <RiUserSmileLine className="text-gray-400 h-5 w-5" />
                </span>

                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full pl-10"
                  {...field}
                  error={!!errors.name}
                  helperText={errors?.name?.message}
                  required
                />
              </label>
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <label class="relative block">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                  <AiFillLock className="text-gray-400 h-5 w-5" />
                </span>

                <input
                  type="text"
                  placeholder="Create Password"
                  className="input input-bordered w-full pl-10"
                  {...field}
                  error={!!errors.password}
                  helperText={errors?.password?.message}
                  required
                />
              </label>
            )}
          />
          <div className="flex item-center gap-3">
            <input type="checkbox" className="checkbox checkbox-info" />
            <div className="text-[#B0B7C3] text-[16px]">
              I agree to the Terms & Conditions
            </div>
          </div>
          <div className="mx-auto">
            <input
              className="btn w-[400px] mt-4 bg-[#377DFF]  text-white"
              type="submit"
              value="Sign Up"
            />
          </div>
          <div className="mt-3 text-[#B0B7C3] text-[16px] text-center">
            Already have an account?{" "}
            <Link to="/login">
              {" "}
              <span className="text-[#377DFF] font-bold">Sign In</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
