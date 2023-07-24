"use client";
import { Button } from "flowbite-react";

function Footer() {
  return (
    <div className="bg-teal-100">
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h1 className="font-bold text-xl">Contáctenos</h1>
            <p>Línea atención (607) 569 44 44</p>
            <p>Carrera 12 Nº 10-00 Centro Ocaña, Norte de Santander</p>
            <p>notificaciones@crediservir.com</p>
          </div>
          <div>
            <h1 className="font-bold text-xl">Corporativo</h1>
            <p>Quiénes somos</p>
            <p>Informes de Gestión</p>
            <p>Gestión de Riesgos</p>
            <p>Gestión Ambiental</p>
            <p>Pensamiento Cooperativo</p>
          </div>
          <div>
            <h1 className="font-bold text-xl">Enlaces de Interés</h1>
            <p>Tasas Efectivas Anuales</p>
            <p> Tarifas Productos y Servicios</p>
            <p> Sistema Gestión de Calidad</p>
            <p> Reconocimientos</p>
            <p> Reconocimientos Fundación Crediservir</p>
            <p> Documentos Institucionales</p>
          </div>
          <div>
            <h1 className="font-bold text-xl">Servicio al Asociado</h1>
            <p> Información legal</p>
            <p>Protección de Datos</p>
            <p>S.A.C.</p>
            <p>Actualización de datos</p>
          </div>
        </div>
        <Button>Click me</Button>
      </div>
    </div>
  );
}
export default Footer;
