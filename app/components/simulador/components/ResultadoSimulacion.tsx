import React from "react";
import { IResult } from "../models/IResult";
import Money from "@/components/utils/Money";

interface IResultadoSimulacionAnimation extends IResult {
  animation: string;
}

function ResultadoSimulacion({
  valorCuota,
  monto,
  animation,
}: IResultadoSimulacionAnimation) {
  return (
    <>
      <div
        className={`mx-auto text-center w-full text-slate-500 border border-slate-300 rounded p-3 ${animation}`}
      >
        <p className="text-2xl font-semibold mb-1">
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
      </div>
    </>
  );
}

export default ResultadoSimulacion;
