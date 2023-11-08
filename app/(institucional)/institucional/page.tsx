import React from "react";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";

const asociadosFundadores = [
  "ANGARITA SALAZAR CARMELINA",
  "CARRASCAL TORO MANUEL SALVADOR",
  "CARRASCAL TORO DANIEL JESUS",
  "CARRASCAL VEGA DAGOBERTO",
  "MINORTA ISIDRO",
  "MONTEJO ANGARITA RAMON DEL CARMEN",
  "SANCHEZ CONTRERAS ISRAEL",
  "ORTEGA SANTIAGO ILBA ROSA",
  "ANGARITA PEREZ LUIS JOSE CONTRERAS",
  "PEINADO JOAQUIN PABLO",
  "ROJAS PEDROZA BERTINA",
  "CONTRERAS JESUS EMIRO",
  "PEDROZA BECERRA GUZMAN",
  "VELASQUEZ DIAZ ZORAIDA",
  "AMAYA MARIA IBIS",
  "QUINTERO ANTELIZ CLODOMIRO",
  "GARAY GARCIA ANIBAL",
  "PINEDA EVARISTO",
  "MONTEJO ANA CECILI",
  "A ORTIZ ANGEL MARIA",
  "GUERRERO VALENTIN REMOLINA",
  "EUSTAQUIO MONTEJO PEREZ LUIS JOSE",
  "RAMIREZ PEREZ DIONICIO JAVIER",
];

function Page() {
  const mitadDeAsociados = Math.ceil(asociadosFundadores.length / 2);
  const asociadosFundadores1 = asociadosFundadores.slice(0, mitadDeAsociados);
  const asociadosFundadores2 = asociadosFundadores.slice(mitadDeAsociados);
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-3 px-7">
          <div className="text-xl text-gray-500 xl:col-span-2 font-light">
            <h1 className="text-4xl pb-7 font-semibold text-gray-700">
              Reseña Histórica
            </h1>

            <p className="justify-start mb-7">
              En 1.989 un visionario, piadoso y caritativo pastor de la iglesia
              católica, Monseñor{" "}
              <span className="text-primary">IGNACIO GÓMEZ ARISTIZABAL</span>,
              quien se desempeñaba como Obispo de la diócesis de Ocaña, en un
              claro y abierto desafío a las costumbres de la región y a la forma
              de pensar de la época; tal vez, volando más allá de lo real,
              decidió irradiar en el corazón de la gente de la provincia de
              Ocaña la semilla del cooperativismo.
            </p>
            <p className="justify-start mb-7">
              Esta inquietud de cambio difundida por Pastoral Social, se
              multiplicó en el alma de algunos teoramenses, que ven en esta
              actividad económica exenta del lucro, una fórmula esperanzadora
              tendiente a mitigar las angustias de la pobreza, mediante el fácil
              acceso al crédito con intereses justos y equitativos.
            </p>
            <p className="justify-start mb-7">
              Fue así, como el nueve de diciembre de 1.989 en un improvisado
              local, 31 asociados liderados por el gerente MANUEL SANCHEZ PEREZ,
              e inspirados en el ideal del Obispo{" "}
              <span className="text-primary">IGNACIO GOMEZ</span>, apoyados por
              el Presbítero{" "}
              <span className="text-primary">Martín Alsina Quintero</span> y el
              Señor{" "}
              <span className="text-primary">Carlos Alberto Rodríguez</span> que
              en la época era el director de pastoral social, daban vida a este
              proyecto cooperativo denominado COOPERATIVA INTEGRAL PARA EL
              DESARROLLO SOCIAL Y ECONOMICO DE TEORAMA LIMITADA “COOPINTEGRATE
              LTDA”.
            </p>
            <p>
              Hoy, con sentimiento de gratitud y aprecio queremos hacer un
              reconocimiento a los fundadores, personas humildes del municipio
              de Teorama.
            </p>

            <h2>Según acta de constitución larelación es la siguiente:</h2>

            <div className="grid grid-cols-2">
              <ul className="my-7">
                {asociadosFundadores1.map((asociado) => (
                  <li key={asociado}>
                    <SupervisedUserCircleIcon className="text-lime-600" />{" "}
                    {asociado}
                  </li>
                ))}
              </ul>
              <ul className="my-7">
                {asociadosFundadores2.map((asociado) => (
                  <li key={asociado}>
                    <SupervisedUserCircleIcon className="text-lime-600" />{" "}
                    {asociado}
                  </li>
                ))}
              </ul>
            </div>

            <p>
              DESDE AQUÍ TAMBIEN ELEVAMOS NUESTRAS PLEGARIAS A LOS FUNDADORES
              FALLECIDOS LUDY AMAYA PORTILLO EDILMA EVA CORONEL SOCORRO PINEDA
              JULIAN MADARIAGA CARLOS DANIEL GARAY ACOSTA TERESA MINORTA DE
              RODRIGUEZ Estas personas con su esfuerzo aportaron la suma de
              $156.000 y un crédito de $ 300.000,00 concedido por Pastoral
              Social para dar comienzo a las actividades diarias de esta empresa
              solidaria. Es importante recordar que entre los asociados
              fundadores se nombraron los primeros Administradores que darían
              fuerza, respaldo y apoyo con entrega desinteresada pensando
              únicamente en el servicio sin distingo de raza, ubicación,
              religión y política. Estas personas que entregaron todo su
              esfuerzo y dedicación desmedida sin mirar nada a cambio a nivel
              personal ni lucrativo; trabajaron incansablemente por cambiar la
              mentalidad de la comunidad de Teorama aplicando el pensamiento
              cooperativo, al lema universal “UNO PARA TODOS Y TODOS PARA UNO”
              Estos primeros administradores fueron: Consejo de Administración
              PINCIPALES SUPLENTES Ana Cecilia Montejo Evaristo Pineda Flores
              Jesús Emiro Contreras Jaime Valentín Guerrero Cloromiro Quintero
              Joaquín Pablo Contreras Eustaquio remolina Ochoa Carlos Daniel
              Garay Israel Sánchez Guzmán Pedroza Becerra Junta de Vigilancia
              PRINCIPALES Dagoberto Carrascal Veja Teresa Minorta Ramírez
              Carmelina Angarita Bertina Rojas Pedroza Ilba Rosa Ortega Santiago
              Ramón del Carmen Montejo El 12 de junio de 1990 mediante
              resolución 1913 es reconocida Jurídicamente como cooperativa, por
              el Departamento Administrativo Nacional de Cooperativas DANCOOP.
              Día a día la cooperativa sigue creciendo con el apoyo constante y
              decidido de sus fundadores y asociados que han venido ingresando
              con sentido de pertenencia a la entidad, esto ha hecho que se
              mantenga y posicione en la región con la misión y visión para la
              cual fue creada. En esta Reseña Histórica no puede pasar por alto
              la función desempeñada por el primer gerente Manuel Sánchez y sus
              sucesores Diosemel Meneses, Ana Cecilia Montejo, Luis Alberto
              Rodríguez, Ana Edilia Rodríguez y el excelente trabajo de la
              actual gerente Yaneth Madariaga Montejo, personas que han
              administrado con transparencia y acierto para sacar adelante la
              entidad. En Asamblea General Extraordinaria de Delegados el 26 de
              mayo del 2001, se decide el cambio de la razón social de
              Cooperativa Integral, por el de Cooperativa de Ahorro y Crédito,
              permitiendo gestionar ante la Supersolidaria la autorización para
              ejercer la actividad financiera de manera especializada, la cual
              fue concebida por este órgano de control según Resolución No.
              20072500615 del 29 de enero del 2007. Luego se tramitó la
              inscripción ante el Fondo de Garantías de Entidades Cooperativas
              FOGACOOP, la cual fue aprobada el 24 de agosto del 2007 mediante
              comunicación 2007005546 sin suscribir convenio de desempeño con el
              Fondo, gracias al positivo resultado de la evaluación de la
              situación técnico-financiera realizado por este órgano,
              permitiendo así tener acceso al seguro de depósitos y a los demás
              mecanismos de apoyo que pueda otorgar el Fondo. Esta autorización
              de la actividad financiera por la Supersolidaria y la inscripción
              al FOGACOOP permite un mayor respaldo, seguridad y confianza para
              los asociados. En la XXXIII Asamblea General Ordinaria de
              Delegados del 23 de marzo del 2012, se aprueba el cambio de la
              razón social de Cooperativa de Ahorro y Crédito para el desarrollo
              social y económico de Teorama limitada a COOPERATIVA ESPECIALIZADA
              DE AHORRO Y CREDITO DE TEORAMA LTDA, conforme a la autorización de
              Especialidad que le Otorga la SUPERSOLIDARIA. El día 2 de agosto
              del 2013 según acta número 417 el Consejo de administración,
              aprueba la apertura de la agencia de COOPINTEGRATE en el municipio
              de San Calixto, gracias al apoyo constante de su Gestor Presbítero
              Ramón Arturo Montejo Peinado y contando con la cofinanciación por
              parte del programa Banca de las Oportunidades, con el fin de
              beneficiar a más de 400 asociados y comunidad en general que
              quiera hacer parte de esta gran familia COOPINTEGRATE. Hoy en día,
              esta entidad se encuentra ubicada dentro de las cooperativas más
              grandes de la provincia, gracias a la confianza que inspira en sus
              asociados y comunidad en general, no solo producto del nuevo marco
              jurídico del cooperativismo sino también de la seriedad,
              responsabilidad y transparencia de cada uno de los asociados y
              administradores que contribuyen permanentemente al crecimiento y
              fortalecimiento de la misma.
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Page;
