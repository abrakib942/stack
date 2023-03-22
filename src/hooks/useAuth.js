import { useSelector } from "react-redux";

export default function useAuth() {
  const auth = useSelector((state) => state.auth);

  console.log("auth", auth);

  if (auth?.accessToken) {
    return true;
  } else {
    return false;
  }
}
