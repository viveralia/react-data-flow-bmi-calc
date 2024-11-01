import { FC } from "react";

type ResultsProps = {
  bmi: number | undefined;
};

// Este componente debe mostrar el resultado del BMI
const Results: FC<ResultsProps> = ({ bmi }) => {
  if (!bmi) {
    return <p>Ingresa tus datos</p>;
  }

  return <p>results</p>;
};

export default Results;
