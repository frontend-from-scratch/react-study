import { TextField } from "@mui/material";

const MyTextField = () => {
    return (
        <div style={{display: "flex", flexDirection: "column", gap: "10px", width: "200px", margin: "10px auto"}}>        
            <TextField label="로그인" type="email"></TextField>
            <TextField label="비밀번호" type="password"></TextField>
            <TextField value={"Hello"} size="small"></TextField>
            <TextField disabled={true} placeholder="disabled"></TextField>
            <TextField error={true} helperText="error"></TextField>
            <TextField fullWidth={true} label="Full Width"></TextField>
            <TextField variant="filled" label="Filled"></TextField>
            <TextField variant="outlined" label="Outlined"></TextField>
            <TextField variant="standard" label="Standard"></TextField>
        </div>
    );
}

export default MyTextField;
