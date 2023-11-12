import {
  Button,
  Checkbox,
  FloatingLabel,
  Label,
  TextInput,
} from "flowbite-react";
import React from "react";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";

import "./simulador.scss";

function Simulador() {
  return (
    <div className="container mx-auto xl:px-56 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-5">
        <div className="bg-gradient-to-r from-green-500 to-green-700 p-14 text-gray-200 rounded-ss-md rounded-es-md sm:col-span-2 general-box relative">
          <p className="text-2xl">¿Necesitas un crédito?</p>
          <small className="text-base font-light">
            Desde $250.000 hasta $100.000.000
          </small>
        </div>

        <div className="bg-white p-7 text-gray-600  border border-gray-200 rounded-se-md rounded-ee-md  sm:col-span-3">
          <div className="flex gap-4">
            <div className="max-w-sm">
              <div className="flex gap-4 mb-4">
                <div>
                  <p className="mb-4 text-primary">Tu cedula</p>
                  <TextInput
                    id="cedula"
                    type="text"
                    placeholder="Número de cedula"
                    required
                  />
                </div>
                <div>
                  <p className="mb-4 text-primary">Celular</p>
                  <TextInput
                    id="celular"
                    type="text"
                    placeholder="Celular"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
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

            <div>
              <p className="mb-4 text-primary">¿Cuánto necesitas?</p>
              <TextInput
                id="cedula"
                type="number"
                placeholder="Ingresa el valor"
                icon={LiaMoneyCheckAltSolid}
                required
                className="mb-4"
              />
              <Button disabled gradientMonochrome="success">
                Simular
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Simulador;
