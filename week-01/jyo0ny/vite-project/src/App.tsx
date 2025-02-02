import React, { useState } from "react";
import Button from "./components/Button";
import TextField from "./components/TextField";
import SignInForm from "./components/SignInForm";

function App() {
  const [text, setText] = useState(""); // 상태 추가

  return (
    <div>
      <Button
        variant="outlined"
        size="small"
        color="warning"
        loading={false} // 로딩 상태일 때 true로 변경하면 로딩 인디케이터가 표시됩니다.
      >
        버튼
      </Button>
      ---------------------------------------------------
      <TextField
        label="text : "
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="텍스트를 입력하시오"
        helperText="텍스트는 10자 이내로 입력하시오"
        error={text.length > 10}
        required
      />
      <SignInForm />
    </div>
  );
}

export default App;
