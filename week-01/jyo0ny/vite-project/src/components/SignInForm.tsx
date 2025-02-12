import React, { useState } from "react";
import Button from "./Button";
import TextField from "./TextField";

const SignInForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    email: "",
    nickname: "",
    password: "",
    confirmPassword: "",
  });

  // 유효성검사할 때 validate어쩌구로 하는듯
  const validateEmail = (value: string) => {
    // 이메일주소 형식 가장 기보ㄴ 패턴
    return /\S+@\S+\.\S+/.test(value);
  };

  const validateNickname = (value: string) => {
    return /^[a-z0-9]{2,10}$/.test(value);
  };

  const validatePassword = (value: string) => {
    return /^[a-z0-9]{4,16}$/.test(value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // console.log(e.target.value);
    setEmail(value);
    setError((prev) => ({
      ...prev,
      email: validateEmail(value) ? "" : "이메일 형식에 맞게 입력하세요.",
    }));
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNickname(value);
    setError((prev) => ({
      ...prev,
      nickname: validateNickname(value)
        ? ""
        : "영문 소문자 및 숫자를 포함한 2~10자로 입력하세요.",
    }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setError((prev) => ({
      ...prev,
      password: validatePassword(value)
        ? ""
        : "영문 소문자 및 숫자를 포함한 4~16자로 입력하세요.",
    }));
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setError((prev) => ({
      ...prev,
      confirmPassword:
        value === password ? "" : "비밀번호가 일치하지 않습니다.",
    }));
  };

  const isFormValid =
    // 다 유효한지 검사함
    validateEmail(email) &&
    validateNickname(nickname) &&
    validatePassword(password) &&
    password === confirmPassword;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) return;
    setIsLoading(true);
    console.log("회원가입 성공", { email, nickname, password });
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="sign-in-form">
      <TextField
        label="이메일"
        type="email"
        value={email}
        onChange={handleEmailChange}
        required
        error={!!error.email}
        helperText={error.email}
      />

      <TextField
        label="닉네임"
        type="text"
        value={nickname}
        onChange={handleNicknameChange}
        required
        error={!!error.nickname}
        helperText={error.nickname}
      />

      <TextField
        label="비밀번호"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        required
        error={!!error.password}
        helperText={error.password}
      />

      <TextField
        label="비밀번호 확인"
        type="password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        required
        error={!!error.confirmPassword}
        helperText={error.confirmPassword}
      />

      <Button
        variant="outlined"
        color="secondary"
        fullWidth
        disabled={!isFormValid || isLoading}
        loading={isLoading}
        loadingPosition="center"
      >
        가입하기
      </Button>
    </form>
  );
};

export default SignInForm;
