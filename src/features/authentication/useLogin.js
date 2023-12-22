import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: loginApi,
    onSuccess: () => {
      navigate("/dashboard");
    },
    onError: () => {
      toast.error("Email or Password is incorrect");
    },
  });

  return { login, isLoading };
}
