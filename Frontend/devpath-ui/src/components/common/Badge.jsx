function Badge({ children }) {
  return (
    <span
      className="
        inline-flex
        items-center
        rounded-full
        bg-indigo-100
        text-indigo-700
        px-3
        py-1
        text-sm
        font-medium
      "
    >
      {children}
    </span>
  );
}

export default Badge;