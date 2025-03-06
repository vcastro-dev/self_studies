export interface InputProps {
  type: string;
  placeholder: string;
}

export function Input(props: InputProps) {
  const { type, placeholder } = props;

  return (
    <input
      className="border border-gray-300 rounded-md p-2 focus:outline-none"
      type={type}
      placeholder={placeholder}
    />
  );
}
