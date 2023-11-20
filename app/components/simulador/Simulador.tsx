"use client";
import {
  Button,
  Checkbox,
  FloatingLabel,
  Label,
  TextInput,
} from "flowbite-react";
import React, { useState } from "react";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { useForm } from "../../hooks/useForm";

import "./simulador.scss";

const calcularCredito = (formStarte: any) => {
  console.log("calcular credito", JSON.stringify(formStarte));
};

interface FormState {
  cedula: string;
  celular: string;
  monto: string;
}

const formValidations = {
  cedula: [(value: string) => value.length >= 1, "La cedula es obligatoria."],
  celular: [
    (value: string) => value.length >= 1,
    "El número de cedula es obligatorio.",
  ],
  monto: [(value: string) => value.length >= 1, "El nombre es obligatorio."],
};

function Simulador() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { formState, onInputChange, formValidation, isFormValid } = useForm(
    {
      cedula: "",
      celular: "",
      monto: "",
    },
    formValidations
  );

  const { cedula, celular, monto } = formState as FormState;
  const { cedulaValid, celularValid, montoValid } = formValidation as {
    cedulaValid: string;
    celularValid: string;
    montoValid: string;
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;

    console.log("formState", formState);
  };

  return (
    <div className="container mx-auto xl:px-56 pb-12 sm:pt-12">
      <div className="grid grid-cols-1 sm:grid-cols-5">
        <div className="bg-gradient-to-r from-green-500 to-green-700 p-7 sm:p-14 text-gray-200 sm:rounded-ss-md sm:rounded-es-md sm:col-span-2 general-box relative">
          <p className="text-2xl">¿Necesitas un crédito?</p>
          <small className="text-base font-light">
            Desde $250.000 hasta $100.000.000
          </small>
        </div>

        <div className="bg-white p-7 text-gray-600  border border-gray-200 rounded-se-md rounded-ee-md  sm:col-span-3">
          <form onSubmit={onSubmit}>
            <div className="flex justify-center gap-4">
              <div className="max-w-sm">
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <div>
                    <p className="mb-4 text-primary">Tu cedula</p>
                    <TextInput
                      id="cedula"
                      type="text"
                      placeholder="Número de cedula"
                      name="cedula"
                      value={cedula}
                      onChange={onInputChange}
                      color={!!cedulaValid && formSubmitted ? "failure" : ""}
                      helperText={
                        !!cedulaValid &&
                        formSubmitted && (
                          <>
                            <span className="font-normal">{cedulaValid}</span>
                          </>
                        )
                      }
                    />
                  </div>
                  <div>
                    <p className="mb-4 text-primary">Celular</p>
                    <TextInput
                      id="celular"
                      type="text"
                      placeholder="Celular"
                      name="celular"
                      value={celular}
                      onChange={onInputChange}
                      color={!!celularValid && formSubmitted ? "failure" : ""}
                      helperText={
                        !!celularValid &&
                        formSubmitted && (
                          <>
                            <span className="font-medium">{celularValid}</span>
                          </>
                        )
                      }
                    />
                  </div>
                  <div className="grid sm:hidden">
                    <p className="mb-4 text-primary">¿Cuánto necesitas?</p>
                    <TextInput
                      id="monto"
                      type="number"
                      placeholder="Ingresa el valor"
                      icon={LiaMoneyCheckAltSolid}
                      className="mb-4"
                      name="monto"
                      value={monto}
                      onChange={onInputChange}
                      color={!!montoValid && formSubmitted ? "failure" : ""}
                      helperText={
                        !!montoValid &&
                        formSubmitted && (
                          <>
                            <span className="font-medium">{montoValid}</span>
                          </>
                        )
                      }
                    />
                    <div className="flex items-center mb-4">
                      <Checkbox id="promotion" />
                      <Label
                        className="text-xs pl-2 text-gray-600 font-normal"
                        htmlFor="promotion"
                      >
                        Acepto que Crediservir utilice mis datos para crear una
                        experiencia personalizada de mi solicitud.
                      </Label>
                    </div>

                    <Button gradientMonochrome="success" type="submit">
                      Simular
                    </Button>
                  </div>
                </div>

                <div className="items-center gap-2 hidden sm:flex">
                  <Checkbox id="promotion" />
                  <Label
                    className="text-xs text-gray-600 font-normal"
                    htmlFor="promotion"
                  >
                    Acepto que Crediservir utilice mis datos para crear una
                    experiencia personalizada de mi solicitud.
                  </Label>
                </div>
              </div>

              <div className="hidden sm:block">
                <p className="mb-4 text-primary">¿Cuánto necesitas?</p>
                <TextInput
                  id="monto"
                  type="number"
                  placeholder="Ingresa el valor"
                  icon={LiaMoneyCheckAltSolid}
                  className="mb-4"
                  name="monto"
                  value={monto}
                  onChange={onInputChange}
                  color={!!montoValid && formSubmitted ? "failure" : ""}
                  helperText={
                    !!montoValid &&
                    formSubmitted && (
                      <>
                        <span className="font-medium">{montoValid}</span>
                      </>
                    )
                  }
                />
                <Button gradientMonochrome="success" type="submit">
                  Simular
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Simulador;
