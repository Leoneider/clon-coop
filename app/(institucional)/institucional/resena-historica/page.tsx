import React from "react";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { Blockquote } from "flowbite-react";

const asociadosFundadores = [
  "Angarita Salazar Carmelina",
  "Carrascal Toro Manuel Salvador",
  "Carrascal Toro Daniel Jesus",
  "Carrascal Vega Dagoberto",
  "Minorta Isidro",
  "Montejo Angarita Ramon Del Carmen",
  "Sanchez Contreras Israel",
  "Ortega Santiago Ilba Rosa",
  "Angarita Perez Luis Jose Contreras",
  "Peinado Joaquin Pablo",
  "Rojas Pedroza Bertina",
  "Contreras Jesus Emiro",
  "Pedroza Becerra Guzman",
  "Velasquez Diaz Zoraida",
  "Amaya Maria Ibis",
  "Quintero Anteliz Clodomiro",
  "Garay Garcia Anibal",
  "Pineda Evaristo",
  "Montejo Ana Cecili",
  "Ortiz Angel Maria",
  "Guerrero Valentin",
  "Remolina Eustaquio",
  "Montejo Perez Luis Jose",
  "Ramirez Perez Dionicio Javier",
];

const fundadoresFallecidos = [
  "Ludy Amaya Portillo",
  "Edilma Eva Coronel",
  "Socorro Pineda",
  "Julian Madariaga",
  "Carlos Daniel Garay",
  "Acosta Teresa",
  "Minorta de Rodriguez",
];

const consejoAdministracionPrincipales = [
  "Ana Cecilia Montejo",
  "Jesús Emiro Contreras Jaime",
  "Cloromiro Quintero",
  "Eustaquio remolina Ochoa",
  "Israel Sánchez",
];

const consejoAdministracionSuplentes = [
  "Evaristo Pineda Flores",
  "Valentín Guerrero",
  "Joaquín Pablo Contreras",
  "Carlos Daniel Garay",
  "Guzmán Pedroza Becerra",
];

const mitadDeAsociados = Math.ceil(asociadosFundadores.length / 2);
const asociadosFundadores1 = asociadosFundadores.slice(0, mitadDeAsociados);
const asociadosFundadores2 = asociadosFundadores.slice(mitadDeAsociados);

function Page() {
  return (
    <>
      <div>
        <h1 className="text-3xl pb-7 font-semibold text-gray-700">
          Reseña Histórica
        </h1>

        <p className="justify-start mb-7">
          En 1.989 un visionario, piadoso y caritativo pastor de la iglesia
          católica, Monseñor{" "}
          <b className="text-primary">Ignacio Gómez Aristizabal</b>, quien se
          desempeñaba como Obispo de la diócesis de Ocaña, en un claro y abierto
          desafío a las costumbres de la región y a la forma de pensar de la
          época; tal vez, volando más allá de lo real, decidió irradiar en el
          corazón de la gente de la provincia de Ocaña la semilla del
          cooperativismo.
        </p>

        <p className="justify-start mb-7">
          Esta inquietud de cambio difundida por Pastoral Social, se multiplicó
          en el alma de algunos teoramenses, que ven en esta actividad económica
          exenta del lucro, una fórmula esperanzadora tendiente a mitigar las
          angustias de la pobreza, mediante el fácil acceso al crédito con
          intereses justos y equitativos.
        </p>

        <p className="justify-start mb-7">
          Fue así, como el nueve de diciembre de 1.989 en un improvisado local,
          31 asociados liderados por el gerente MANUEL SANCHEZ PEREZ, e
          inspirados en el ideal del Obispo{" "}
          <b className="text-primary">Ignacio Gomez</b>, apoyados por el
          Presbítero <b className="text-primary">Martín Alsina Quintero</b> y el
          Señor <b className="text-primary">Carlos Alberto Rodríguez</b> que en
          la época era el director de pastoral social, daban vida a este
          proyecto cooperativo denominado COOPERATIVA INTEGRAL PARA EL
          DESARROLLO SOCIAL Y ECONOMICO DE TEORAMA LIMITADA “COOPINTEGRATE
          LTDA”.
        </p>
        <p>
          Hoy, con sentimiento de gratitud y aprecio queremos hacer un
          reconocimiento a los fundadores, personas humildes del municipio de
          Teorama.
        </p>

        <h2>Según acta de constitución la relación es la siguiente:</h2>

        <div className="grid grid-cols-2">
          <ul className="my-7">
            {asociadosFundadores1.map((asociado) => (
              <li key={asociado}>
                <SupervisedUserCircleIcon className="text-green-300 mr-1" />
                {asociado}
              </li>
            ))}
          </ul>
          <ul className="my-7">
            {asociadosFundadores2.map((asociado) => (
              <li key={asociado}>
                <SupervisedUserCircleIcon className="text-green-300 mr-1" />
                {asociado}
              </li>
            ))}
          </ul>
        </div>

        <h2 className="font-normal">
          Desde aquí también elevamos nuestras plegarias a los fundadores
          fallecidos
        </h2>

        <ul className="my-7">
          {fundadoresFallecidos.map((asociado) => (
            <li key={asociado}>
              <SupervisedUserCircleIcon className="text-gray-300 mr-1" />
              {asociado}
            </li>
          ))}
        </ul>

        <p className="justify-start mb-7">
          Estas personas con su esfuerzo aportaron la suma de
          <b>$156.000</b> y un crédito de <b>$ 300.000</b> concedido por
          Pastoral Social para dar comienzo a las actividades diarias de esta
          empresa solidaria.
        </p>

        <p className="justify-start mb-7">
          {" "}
          Es importante recordar que entre los asociados fundadores se nombraron
          los primeros Administradores que darían fuerza, respaldo y apoyo con
          entrega desinteresada pensando únicamente en el servicio sin distingo
          de raza, ubicación, religión y política. Estas personas que entregaron
          todo su esfuerzo y dedicación desmedida sin mirar nada a cambio a
          nivel personal ni lucrativo; trabajaron incansablemente por cambiar la
          mentalidad de la comunidad de Teorama aplicando el pensamiento
          cooperativo, al lema universal
        </p>

        <Blockquote className="mb-7 text-center text-green-400">
          <svg
            className="mb-2 mx-auto h-8 w-8 text-gray-300 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          &ldquo;UNO PARA TODOS Y TODOS PARA UNO&rdquo;
        </Blockquote>

        <h2 className="mb-7">Estos primeros administradores fueron:</h2>

        <h3 className="font-medium mb-3"> Consejo de Administración</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 mb-7">
          <div>
            <h4 className="text-green-400 font-normal">Principales</h4>

            {consejoAdministracionPrincipales.map((principal) => (
              <p key={principal}>{principal}</p>
            ))}
          </div>
          <div>
            <h4 className="text-green-400 font-normal">Suplentes</h4>

            {consejoAdministracionSuplentes.map((principal) => (
              <p key={principal}>{principal}</p>
            ))}
          </div>
        </div>

        <h3 className="font-medium mb-3">Junta de Vigilancia</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 mb-7">
          <div>
            <h4 className="text-green-400 font-normal">Principales</h4>

            {[
              "Dagoberto Carrascal Veja",
              "Carmelina Angarita",
              "Ilba Rosa Ortega Santiago",
            ].map((principal) => (
              <p key={principal}>{principal}</p>
            ))}
          </div>
        </div>

        <p className="justify-start mb-7">
          El 12 de junio de 1990 mediante resolución 1913 es reconocida
          Jurídicamente como cooperativa, por el Departamento Administrativo
          Nacional de Cooperativas DANCOOP.
        </p>

        <p className="justify-start mb-7">
          Día a día la cooperativa sigue creciendo con el apoyo constante y
          decidido de sus fundadores y asociados que han venido ingresando con
          sentido de pertenencia a la entidad, esto ha hecho que se mantenga y
          posicione en la región con la misión y visión para la cual fue creada.
        </p>

        <p className="justify-start mb-7">
          En esta Reseña Histórica no puede pasar por alto la función
          desempeñada por el primer gerente Manuel Sánchez y sus sucesores
          Diosemel Meneses, Ana Cecilia Montejo, Luis Alberto Rodríguez, Ana
          Edilia Rodríguez y el excelente trabajo de la actual gerente Yaneth
          Madariaga Montejo, personas que han administrado con transparencia y
          acierto para sacar adelante la entidad.
        </p>

        <p className="justify-start mb-7">
          En Asamblea General Extraordinaria de Delegados el 26 de mayo del
          2001, se decide el cambio de la razón social de Cooperativa Integral,
          por el de Cooperativa de Ahorro y Crédito, permitiendo gestionar ante
          la Supersolidaria la autorización para ejercer la actividad financiera
          de manera especializada, la cual fue concebida por este órgano de
          control según Resolución No. 20072500615 del 29 de enero del 2007.
        </p>

        <p className="justify-start mb-7">
          Luego se tramitó la inscripción ante el Fondo de Garantías de
          Entidades Cooperativas FOGACOOP, la cual fue aprobada el 24 de agosto
          del 2007 mediante comunicación 2007005546 sin suscribir convenio de
          desempeño con el Fondo, gracias al positivo resultado de la evaluación
          de la situación técnico-financiera realizado por este órgano,
          permitiendo así tener acceso al seguro de depósitos y a los demás
          mecanismos de apoyo que pueda otorgar el Fondo.
        </p>

        <p className="justify-start mb-7">
          Esta autorización de la actividad financiera por la Supersolidaria y
          la inscripción al FOGACOOP permite un mayor respaldo, seguridad y
          confianza para los asociados.
        </p>

        <p className="justify-start mb-7">
          En la XXXIII Asamblea General Ordinaria de Delegados del 23 de marzo
          del 2012, se aprueba el cambio de la razón social de Cooperativa de
          Ahorro y Crédito para el desarrollo social y económico de Teorama
          limitada a COOPERATIVA ESPECIALIZADA DE AHORRO Y CREDITO DE TEORAMA
          LTDA, conforme a la autorización de Especialidad que le Otorga la
          SUPERSOLIDARIA.
        </p>

        <p className="justify-start mb-7">
          El día 2 de agosto del 2013 según acta número 417 el Consejo de
          administración, aprueba la apertura de la agencia de COOPINTEGRATE en
          el municipio de San Calixto, gracias al apoyo constante de su Gestor
          Presbítero Ramón Arturo Montejo Peinado y contando con la
          cofinanciación por parte del programa Banca de las Oportunidades, con
          el fin de beneficiar a más de 400 asociados y comunidad en general que
          quiera hacer parte de esta gran familia COOPINTEGRATE.
        </p>

        <p className="justify-start mb-7">
          {" "}
          Hoy en día, esta entidad se encuentra ubicada dentro de las
          cooperativas más grandes de la provincia, gracias a la confianza que
          inspira en sus asociados y comunidad en general, no solo producto del
          nuevo marco jurídico del cooperativismo sino también de la seriedad,
          responsabilidad y transparencia de cada uno de los asociados y
          administradores que contribuyen permanentemente al crecimiento y
          fortalecimiento de la misma.
        </p>
      </div>
    </>
  );
}

export default Page;
