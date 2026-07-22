function Button({ children }) {
  return (
    <button
      className="
        w-full
        bg-slate-900
        text-white
        py-4
        rounded-2xl
        font-semibold
        transition
        hover:bg-slate-800
      "
    >
      {children}
    </button>
  );
}

export default Button;