import React, { useState, useEffect } from "react"
import MyInput from "./MyTextField"
import MyButton from "./MyButton"

interface FormData {
  email: string
  nickname: string
  password: string
  passwordConfirm: string
}

interface FormErrors {
  email?: string
  nickname?: string
  password?: string
  passwordConfirm?: string
}

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    nickname: "",
    password: "",
    passwordConfirm: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isFormValid, setIsFormValid] = useState(false)

  // 이메일 유효성 검사
  const validateEmail = (email: string): string => {
    if (!email) return "이메일을 입력해주세요."
    if (!email.includes("@")) return "올바른 이메일 형식이 아닙니다."
    return ""
  }

  // 닉네임 유효성 검사
  const validateNickname = (nickname: string): string => {
    if (!nickname) return "닉네임을 입력해주세요."
    if (nickname.length < 2 || nickname.length > 10) {
      return "닉네임은 2~10자 사이여야 합니다."
    }
    if (!/^(?=.*[a-z])(?=.*\d).+$/.test(nickname)) {
      return "영문 소문자와 숫자를 각각 하나 이상 포함해야 합니다."
    }
    return ""
  }

  // 비밀번호 유효성 검사
  const validatePassword = (password: string): string => {
    if (!password) return "비밀번호를 입력해주세요."
    if (password.length < 4 || password.length > 16) {
      return "비밀번호는 4~16자 사이여야 합니다."
    }
    if (!/^(?=.*[a-z])(?=.*\d).+$/.test(password)) {
      return "영문 소문자와 숫자를 각각 하나 이상 포함해야 합니다."
    }
    return ""
  }

  // 비밀번호 확인 유효성 검사
  const validatePasswordConfirm = (passwordConfirm: string): string => {
    if (!passwordConfirm) return "비밀번호 확인을 입력해주세요."
    if (passwordConfirm !== formData.password) {
      return "비밀번호가 일치하지 않습니다."
    }
    return ""
  }

  // 입력값 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // 폼 제출 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isFormValid) {
      console.log("실제로는 여기에 API호출 하면 될까요~?")
    }
  }

  // 전체 폼 유효성 검사
  useEffect(() => {
    const newErrors: FormErrors = {
      email: validateEmail(formData.email),
      nickname: validateNickname(formData.nickname),
      password: validatePassword(formData.password),
      passwordConfirm: validatePasswordConfirm(formData.passwordConfirm),
    }

    setErrors(newErrors)

    // 모든 필드가 유효한지 확인
    const isValid = Object.values(newErrors).every((error) => error === "")
    setIsFormValid(isValid)
  }, [formData])

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}
    >
      <div style={{ marginBottom: "20px" }}>
        <MyInput
          label="이메일"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          required
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <MyInput
          label="닉네임"
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
          error={!!errors.nickname}
          helperText={errors.nickname}
          required
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <MyInput
          label="비밀번호"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password}
          required
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <MyInput
          label="비밀번호 확인"
          type="password"
          name="passwordConfirm"
          value={formData.passwordConfirm}
          onChange={handleChange}
          error={!!errors.passwordConfirm}
          helperText={errors.passwordConfirm}
          required
        />
      </div>

      <MyButton
        variant="contained"
        color="primary"
        fullWidth
        disabled={!isFormValid}
        loading
        loadingPosition="center"
      >
        회원가입
      </MyButton>
    </form>
  )
}

export default SignUpForm
