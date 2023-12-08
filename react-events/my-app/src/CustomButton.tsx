type Props = {
  text: string;
  color: string;
  onCustomClick: (text: string) => void;
};

export default function CustomButton({ text, color, onCustomClick }: Props) {
  function handleClick() {
    onCustomClick(text);
  }
  const buttonStyle = {
    backgroundColor: color,
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      {text}
    </button>
  );
}
