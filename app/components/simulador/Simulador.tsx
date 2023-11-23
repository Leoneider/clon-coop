"use client";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";
import "./simulador.scss";
import { NumericFormat } from "react-number-format";
import { IResult } from "./models/IResult";
import ResultadoSimulacion from "./components/ResultadoSimulacion";

interface FormState {
  cedula: string;
  celular: string;
  monto: number | null;
}

const formValidations = {
  cedula: [(value: string) => value.length >= 1, "La cedula es obligatoria."],
  celular: [
    (value: string) => value.length >= 1,
    "El número de cedula es obligatorio.",
  ],
  monto: [(value: string) => value?.length >= 1, "El nombre es obligatorio."],
};

const initialFormState: FormState = {
  cedula: "",
  celular: "",
  monto: null,
};

const calcularCuotasPrestamo = (
  monto: number,
  tasaEfectivaMensual: number,
  plazo = [12, 24, 36]
): IResult[] => {
  const ipDecimal = tasaEfectivaMensual / 100;
  return plazo.map((plazo) => {
    const factor =
      Math.pow(1 + ipDecimal, plazo) / (Math.pow(1 + ipDecimal, plazo) - 1);
    let valorCuota = monto * ipDecimal * factor;
    return {
      plazo,
      valorCuota: Math.ceil(valorCuota / 1000) * 1000,
      tasaEfectivaMensual,
      monto,
    };
  });
};

const animations = [
  "animate-fade-left",
  "animate-fade-left animate-delay-200",
  "animate-fade-left animate-delay-300",
];

function Simulador() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [hasSimulacion, setHasSimulacion] = useState(false);
  const [valorCuotas, setValorCuotas] = useState<IResult[]>([]);

  const { formState, onInputChange, formValidation, isFormValid } = useForm(
    initialFormState,
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

    console.log("monto --->", monto);

    let cuotas = calcularCuotasPrestamo(monto!, 1.5);

    setHasSimulacion(true);
    setValorCuotas(cuotas);

    // Redirect to element with ID "resultadoSimulacion"
    const element = document.getElementById("prueba");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  };

  return (
    <div className="container mx-auto 2xl:px-24 pb-12 sm:pt-12">
      <div className="grid grid-cols-1 sm:grid-cols-5">
        <div className="bg-gradient-to-r from-green-500 to-green-700 p-7 sm:p-14 text-gray-200 sm:rounded-ss-md sm:rounded-es-md sm:col-span-2 general-box relative ">
          <p className="text-2xl">¿Necesitas un crédito?</p>
          <small className="text-base font-light">
            Desde $250.000 hasta $100.000.000
          </small>
        </div>

        <div
          id="prueba"
          className="flex bg-white p-7 text-gray-600  sm:col-span-3 overflow-x-auto"
        >
          {!hasSimulacion && (
            <form onSubmit={onSubmit} className="animate-fade">
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
                      sizing="lg"
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
                      sizing="lg"
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
                      onValueChange={({ value }) => {
                        onInputChange({
                          target: { name: "monto", value: value },
                        });
                      }}
                      prefix={"$"}
                      customInput={TextInput}
                      name="monto"
                      placeholder="Ingresa el valor"
                      thousandSeparator="."
                      decimalSeparator=","
                      decimalScale={0}
                      color={!!montoValid && formSubmitted ? "failure" : ""}
                      sizing={"lg"}
                      helperText={
                        !!montoValid &&
                        formSubmitted && (
                          <>
                            <span className="font-medium">{montoValid}</span>
                          </>
                        )
                      }
                    />
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
            <div id="resultadoSimulacion" className="flex">
              {valorCuotas.map((valorCuota, idx) => (
                <ResultadoSimulacion
                  key={valorCuota.plazo}
                  {...valorCuota}
                  animation={animations[idx]}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Simulador;
