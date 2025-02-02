import "./MyButton.css"
import { useState } from "react";

const MyButton = () => {
    const [loading, setLoading] = useState(false);

    const handleLoading = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }

    return (
    <>
        <div className="buttonContainer">
            <button className="firstBtn">1번</button>
            <button className="secondBtn" disabled={true}>2번</button>
            <button className="thirdBtn" onClick={handleLoading} disabled={loading}>
                {loading ? "로딩 중" : "3번"}
            </button>
        </div>
        <div style={{width: "200px", margin: "10px auto"}}>
            <button className="fourthBtn">4번</button>
        </div>
    </>
    )
};

export default MyButton;