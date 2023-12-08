type Props = {
  text: string;
  color: string;
};

export default function CustomButton({ text, color }: Props) {
  const buttonStyle = {
    backgroundColor: color,
  };

  return <button style={buttonStyle}>{text}</button>;
}
