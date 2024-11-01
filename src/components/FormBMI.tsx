import { FC } from "react";

type FormBMIProps = {
  onSubmit: (bmi: number) => void;
};

// Este componente debe manejar el estado de los inputs y enviar el BMI al componente padre
const FormBMI: FC<FormBMIProps> = ({ onSubmit }) => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    //onSubmit()
  };

  return <form onSubmit={handleSubmit}>form</form>;
};

export default FormBMI;
