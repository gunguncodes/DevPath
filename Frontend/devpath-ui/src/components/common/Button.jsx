function Button({ children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="
        w-full
        rounded-2xl
        bg-slate-900
        py-4
        font-semibold
        text-white
        transition
        hover:bg-slate-800
      "
    >
      {children}
    </button>
  );
}

export default Button;