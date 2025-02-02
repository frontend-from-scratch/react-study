import { useState } from "react";
import { Button, TextField } from "@mui/material";

const SignupForm = () => {
    const [email, setEmail] = useState("");
    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // 에러 메세지 담을 공간
    const [error, setError] = useState({
        email: "",
        nickname: "",
        password: "",
        confirmPassword: ""
    });

    // 이메일에 @가 있는지 확인
    const validEmail = (value: string) => {
        return value.includes("@");
    };

    const validNickname = (value: string) => {
        // 몰라서 지피티 한테 물어봄
        return /^[a-z0-9]{2,10}$/.test(value);
    };

    const validPassword = (value: string) => {
        // 몰라서 지피티 한테 물어봄
        return /^[a-z0-9]{4,16}$/.test(value);
    };

    // 아니 e: React.ChangeEvent<HTMLInputElement> 이게 타입스크팁트겠지? event에 대한 타입을 정해준거겠지?
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);
        setError((prev) => ({ ...prev, email: validEmail(value) ? "" : "이메일 형식이 올바르지 않습니다." }));
    };

    // 먼저 닉네임 state를 업데이트
    // 그 다음 닉네임 유효성 검사
    // 만약 유효성 검사 통과하면 ""로 null값을 넣어줌, 초기값과 동일
    // 만약 유효성 검사 통과 못하면 에러메세지 넣어줌 그럼 에러메세지가 helperText에 뜨게됨
    const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setNickname(value);
        setError((prev) => ({ ...prev, nickname: validNickname(value) ? "" : "닉네임은 영문 소문자 및 숫자로 2~10자여야 합니다." }));
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPassword(value);
        setError((prev) => ({ ...prev, password: validPassword(value) ? "" : "비밀번호는 영문 소문자 및 숫자로 4~16자여야 합니다." }));
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setConfirmPassword(value);
        setError((prev) => ({ ...prev, confirmPassword: value === password ? "" : "비밀번호가 일치하지 않습니다." }));
    };

    // 이메일 닉네임 비밀번호 비밀번호 확인 state가 채워진지 확인
    // 그다음 에러에 안채워져있다면 통과
    const isFormValid =
        email && nickname && password && confirmPassword &&
        !error.email && !error.nickname && !error.password && !error.confirmPassword;

    // 회원가입 버튼을 누르면 입력한 정보를 서버로 전송합니다.
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px", margin: "20px auto" }}>
            <TextField label="이메일" type="email" value={email} onChange={handleEmailChange} error={!!error.email} helperText={error.email} />
            <TextField label="닉네임" value={nickname} onChange={handleNicknameChange} error={!!error.nickname} helperText={error.nickname} />
            <TextField label="비밀번호" type="password" value={password} onChange={handlePasswordChange} error={!!error.password} helperText={error.password} />
            <TextField label="비밀번호 확인" type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} error={!!error.confirmPassword} helperText={error.confirmPassword} />
            <Button variant="contained" color="primary" disabled={!isFormValid}>회원가입</Button>
        </div>
    );
    // !한번쓰면 불리언값으로 바꿔줌 지금 null값에서
    // !두번 쓰면 원래의 불리언값을 얻을 수 있다.
};

export default SignupForm;
