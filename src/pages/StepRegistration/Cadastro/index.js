import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Form from "../../components/Form";
import { Input } from "../../components/Input";
import { useData } from "../../DataContext";

// import { Container } from './styles';

function Cadastro() {
  // const [dataInputs, setDataInputs] = useState();
  const { setValues, data } = useData();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstname: data.firstname,
      lastname: data.lastname,
    },
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    setValues(data);
    console.log(`date`, data);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          name="firstname"
          required
          placeholder="digite o nome"
        />
        <Input
          ref={register}
          name="lastname"
          required
          placeholder="digite sobrenome"
        />

        <Input type="submit" />
      </Form>
    </>
  );
}

export default Cadastro;
