/* eslint-disable react/prop-types */

function Button({ children, type, className, onClick, disabled }) {
  const buttonType = type;

  const buttonClasses = `
    inline-block
    px-4
    py-2
    border-2
    border-transparent
    text-sm
    font-medium
    rounded-md
    shadow-md
    focus:outline-none
    focus:ring-2
    text-dark-100
   text-center
    disable:cursor-not-allowed
    
    ${buttonType === "primary" ? "bg-primary-300 text-white hover:bg-primary-300/90 focus:ring-0 shadow-primary-200 active:shadow-lg active:bg-primary-300/70 disabled:bg-primary-200" : ""}
    ${buttonType === "secondary" ? "focus:ring-primary-300 outline-primary-300 outline-1  bg-primary-100/50 text-primary-300 active:bg-primary-200/50" : ""}
    ${className} // Add custom classes
  `;

  return (
    <button
      type="submit"
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
