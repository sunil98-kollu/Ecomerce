import React from "react";

const CommonInput = ({
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
  name,
  label,
}) => {
  return (
    <fieldset
      style={{
        border: "1px solid #ccc",
        borderRadius: "6px",
        padding: "10px 15px 15px",
        margin: "20px auto",
        width: "420px",           
      }}
    >
      {label && (
        <legend
          style={{
            padding: "0 8px",
            fontWeight: "600",
            fontSize: "14px",
          }}
        >
          {label}
        </legend>
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
        name={name}
        id={name}
        style={{
          height: 15,
          width: "100%",         
           border: "none", 
             outline: "none",         
        }}
      />
    </fieldset>
  );
};

export default CommonInput;
