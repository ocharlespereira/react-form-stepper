import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Form from "../../components/Form";
import { Input } from "../../components/Input";

// import { Container } from './styles';

function Cadastro() {
  const [dataInputs, setDataInputs] = useState();
  const { register, handleSubmit } = useForm({
    defaultValues: { firtname: dataInputs?.firtName },
  });

  const onSubmit = (data) => {
    setDataInputs(data);
    console.log(data, dataInputs);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input ref={register} name="firtname" placeholder="digite o nome" />
        <Input ref={register} name="lastname" placeholder="digite sobrenome" />

        <Input type="submit" />
      </Form>
    </>
  );
}

export default Cadastro;
