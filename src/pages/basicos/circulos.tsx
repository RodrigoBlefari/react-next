import Circulo from "@/components/basicos/Circulo";

export default function paginaCirculos() {
  return (
    <div
      className={`
      items-center
      flex justify-around
      h-screen
    `}
    >
      <Circulo text={"Circulo #1"} />
      <Circulo text={"Circulo #2"} quasePerfeito={true} />
      <Circulo text={"Circulo #3"} />
    </div>
  );
}
