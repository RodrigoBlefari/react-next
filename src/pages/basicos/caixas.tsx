import Caixa from "@/components/basicos/Caixa";

export default function PaginaCaixa() {
  return (
    <div
      className={`
        flex gap-7 p-7
    `}
    >
      <Caixa>Teste</Caixa>
      <Caixa>olá</Caixa>
      <Caixa>
        <ul className="list-disc">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </Caixa>
      <Caixa />
      <Caixa />
    </div>
  );
}
