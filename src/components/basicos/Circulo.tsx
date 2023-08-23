interface CirculoProps {
  text: string;
  quasePerfeito?: boolean;
}

export default function Circulo(props: CirculoProps) {
  console.log(props);

  return (
    <div
      className={`
      flex justify-center items-center
      h-64 w-64 bg-cyan-500 
      ${props.quasePerfeito ? "rounded-2xl" : "rounded-full"}
    `}
    >
      <h1
        className={`
      text-white
      `}
      >
        {props.text}
      </h1>
    </div>
  );
}
