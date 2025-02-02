import React from "react";
import ButtonShowcase, { Button } from "../components/button";

const ButtonPage: React.FC = () => {
  return (
    <div>
      <h1>버튼 페이지</h1>
      <Button variant="contained" color="primary">클릭하세요</Button>
      <ButtonShowcase/>
    </div>
  );
};

export default ButtonPage;
