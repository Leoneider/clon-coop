"use client";
import {
  Button,
  Checkbox,
  FloatingLabel,
  Label,
  TextInput,
} from "flowbite-react";
import React, { useState } from "react";
import { LiaMoneyCheckAltSolid, LiaWindowClose } from "react-icons/lia";
import { useForm } from "../../hooks/useForm";

import "./simulador.scss";
import Money from "../utils/Money";
import {
  NumericFormat,
  numericFormatter,
  removeNumericFormat,
} from "react-number-format";

interface FormState {
  cedula: string;
  celular: string;
  monto: number;
}

const formValidations = {
  cedula: [(value: string) => value.length >= 1, "La cedula es obligatoria."],
  celular: [
    (value: string) => value.length >= 1,
    "El número de cedula es obligatorio.",
  ],
  monto: [(value: string) => value.length >= 1, "El nombre es obligatorio."],
};

const calcularCuotaPrestamo = (
  monto: number,
  tasaEfectivaMensual: number,
  plazo: number
) => {
  const ipDecimal = tasaEfectivaMensual / 100;
  const factor =
    Math.pow(1 + ipDecimal, plazo) / (Math.pow(1 + ipDecimal, plazo) - 1);
  let valorCuota = monto * ipDecimal * factor;

  valorCuota = Math.ceil(valorCuota / 1000) * 1000;

  return valorCuota;
};

function Simulador() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [hasSimulacion, setHasSimulacion] = useState(false);
  const [valorCuota, setValorCuota] = useState(0);

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

    let montoString = monto.toString();

    setHasSimulacion(true);
    setValorCuota(
      calcularCuotaPrestamo(
        Number(montoString.split(".").join("").split("$").join("")),
        1.5,
        12
      )
    );
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

        <div className="flex bg-white p-7 text-gray-600  border border-gray-200 rounded-se-md rounded-ee-md  sm:col-span-3">
          {!hasSimulacion && (
            <form onSubmit={onSubmit}>
              <div className="flex flex-col justify-center">
                <div className="flex flex-col lg:flex-row gap-4 mb-4">
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
                  <div>
                    <p className="mb-4 text-primary w-52 min-w-min">
                      ¿Cuánto necesitas?
                    </p>

                    <NumericFormat
                      id="monto"
                      value={monto}
                      onChange={(values) => onInputChange(values)}
                      prefix={"$"}
                      customInput={TextInput}
                      name="monto"
                      placeholder="Ingresa el valor"
                      thousandSeparator="."
                      decimalSeparator=","
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

                    {/* <TextInput
                      id="monto"
                      type="string"
                      placeholder="Ingresa el valor"
                      icon={LiaMoneyCheckAltSolid}
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
                    /> */}
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row">
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
                  <div className="flex justify-center ">
                    <Button
                      gradientMonochrome="success"
                      type="submit"
                      className="h-10 w-32 min-w-max"
                    >
                      Simular
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          )}
          {hasSimulacion && (
            <div className="mx-auto text-center text-slate-500 border border-slate-300 rounded p-3">
              <p className="text-2xl font-semibold mb-1">
                {" "}
                <span>24</span> cuotas de
              </p>
              <div className="border-2 py-2 border-green-300  rounded-tl-[70px] rounded-tr-[100px] rounded-br-[100px]">
                <p className="text-4xl px-3 font-bold bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text">
                  {Money(valorCuota)}
                </p>
              </div>

              <hr className="mt-4" />

              <div className="flex justify-between text-left mt-4 whitespace-nowrap">
                <div className="flex-1 mr-7">
                  <p className="text-xs font-semibold">Valor del crédito</p>
                  <p className="text-xs font-semibold">Tasa de interés</p>
                  <p className="text-xs font-semibold">Plazo</p>
                </div>
                <div className="flex-1 text-right">
                  <p className="text-xs font-semibold">{Money(monto)}</p>
                  <p className="text-xs font-semibold">1.5%</p>
                  <p className="text-xs font-semibold">24 meses</p>
                </div>
              </div>

              <Button
                className="mt-7"
                fullSized
                onClick={() => {
                  setHasSimulacion(!hasSimulacion);
                }}
              >
                Volver a calcular
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Simulador;
