export default function Button({ text, color, children }) {
  return (
    <button style={{ color: color }}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
}

Button.defaultProps = {
  color: "black",
};
