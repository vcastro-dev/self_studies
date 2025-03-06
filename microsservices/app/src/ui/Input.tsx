export interface InputProps {
  placeholder: string;
  name: string;
  type: string;
}

export function Input(props: InputProps) {
  const { type, placeholder, name } = props;

  return (
    <input
      className="border border-gray-300 rounded-md p-2 focus:outline-none"
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
}
