import React from "react";
import style from "./button.module.scss";

class Button extends React.Component<{
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children?: React.ReactNode;
}> {
  render() {
    const { type = "button", onClick, children } = this.props;
    return (
      <button onClick={onClick} type={type} className={style.button}>
        {children}
      </button>
    );
  }
}

export default Button;
