"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { IAuthFormData } from "@/types";
import style from "./AuthForm.module.scss";

interface AuthFormProps {
  isLogin: boolean;
}

export const AuthForm: React.FC<AuthFormProps> = ({ isLogin }) => {
  const { register, handleSubmit, reset } = useForm<IAuthFormData>();

  const router = useRouter();

  return <div>AuthForm</div>;
};
