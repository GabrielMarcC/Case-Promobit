import { ButtonTypes } from "../../types/ButtonTypes";

export const Button = ({ label, value }: ButtonTypes) => {
  return (
    <div>
      <button>{label}</button>
    </div>
  );
};
