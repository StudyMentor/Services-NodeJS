const tutories = [
  {
    id: 1,
    duracion: 60,
    grabacion: { url: "http://example.com", fecha_creacion: "2023-09-31" },
    reunion: { url: "http://example.com", fecha_creacion: "2023-09-31" },
    documentos: [
      {
        formato: "pdf",
        nombre_documento: "Material de clase",
        autor: "Pablito",
      },
      {
        formato: "ppt",
        nombre_documento: "Campos matematicos",
        autor: "Pablito",
      },
    ],
    resenia: {
      mensaje: "La tutoria cumple con las expectativas",
      fecha_publicacion: "2023-10-01",
      calificacion: 3,
    },
  },
  {
    id: 2,
    duracion: 60,
    grabacion: { url: "http://example.com", fechaCreacion: "2023-09-31" },
    reunion: { url: "http://example.com", fecha_creacion: "2023-09-31" },
    documentos: [
      {
        formato: "pdf",
        nombre_documento: "Material de clase",
        autor: "Pablito",
      },
    ],
    resenia: {
      mensaje: "La tutoria cumple con las expectativas",
      fecha_publicacion: "2023-10-01",
      calificacion: 2,
    },
  },
  {
    id: 3,
    duracion: 60,
    grabacion: { url: "http://example.com", fecha_creacion: "2023-09-31" },
    reunion: { url: "http://example.com", fecha_creacion: "2023-09-31" },
    documentos: [
      {
        formato: "pdf",
        nombre_documento: "Material de clase",
        autor: "Pablito",
      },
    ],
    resenia: {
      mensaje: "La tutoria cumple con las expectativas",
      fecha_publicacion: "2023-10-01",
      calificacion: 8.7,
    },
  },
];

const users = [
  {
    id: 1,
    rol: "Estudiante",
    datos_personales: {
      doc_identidad: {
        tipo: "DNI",
        numero: Math.floor(Math.random() * 1_00_00_00_00) + 10_00_00_00,
      },
      nombre: "Marcelo",
      apellido: "Garro",
      edad: 20,
      correo_personal: "marcelogarro137@gmail.com",
      fecha_nacimiento: "2003-03-22",
      genero: "M",
      direccion: "Av. Avenidius 1200",
      nacionalidad: "Peruano",
    },
    datos_academicos: {
      codigo: Math.floor(Math.random() * 1_00_00_00_00) + 10_00_00_00,
      correo_institucional: "example@mail.com",
      universidad: "UPC",
      ciclo: Math.floor(Math.random() * 11),
      nivel: "Pregrado",
    },
  },
  {
    id: 2,
    rol: "Tutor",
    datos_personales: {
      doc_identidad: {
        tipo: "DNI",
        numero: Math.floor(Math.random() * 1_00_00_00_00) + 10_00_00_00,
      },
      nombre: "Felipe",
      apellido: "Martinez",
      edad: 24,
      correo_personal: "martinezjuegos@gmail.com",
      fecha_nacimiento: "1999-09-23",
      genero: "M",
      direccion: "Av. Jiron los jazminez 435",
      nacionalidad: "Peruano",
    },
    datos_academicos: {
      codigo: Math.floor(Math.random() * 1_00_00_00_00) + 10_00_00_00,
      correo_institucional: "example@mail.com",
      universidad: "UPC",
      ciclo: Math.floor(Math.random() * 11),
      nivel: "Pregrado",
    },
  },
  {
    id: 3,
    rol: "Tutor",
    datos_personales: {
      doc_identidad: {
        tipo: "DNI",
        numero: Math.floor(Math.random() * 1_00_00_00_00) + 10_00_00_00,
      },
      nombre: "Marta",
      apellido: "Diaz",
      edad: 22,
      correo_personal: "MartaD2001@gmail.com",
      fecha_nacimiento: "2001-09-23",
      genero: "F",
      direccion: "Av. Javier Prado 1102",
      nacionalidad: "Japones",
    },
    datos_academicos: {
      codigo: Math.floor(Math.random() * 1_00_00_00_00) + 10_00_00_00,
      correo_institucional: "example@mail.com",
      universidad: "UPC",
      ciclo: Math.floor(Math.random() * 11),
      nivel: "Pregrado",
    },
  },
  {
    id: 4,
    rol: "Estudiante",
    datos_personales: {
      doc_identidad: {
        tipo: "DNI",
        numero: Math.floor(Math.random() * 1_00_00_00_00) + 10_00_00_00,
      },
      nombre: "Jorge",
      apellido: "Luna",
      edad: 23,
      correo_personal: "jorge@gmail.com",
      fecha_nacimiento: "1993-09-23",
      genero: "M",
      direccion: "Av. illinois 1102",
      nacionalidad: "Peruano",
    },
    datos_academicos: {
      codigo: Math.floor(Math.random() * 1_00_00_00_00) + 10_00_00_00,
      correo_institucional: "example@mail.com",
      universidad: "UPC",
      ciclo: Math.floor(Math.random() * 11),
      nivel: "Pregrado",
    },
  },
  {
    id: 5,
    rol: "Estudiante",
    datos_personales: {
      doc_identidad: { tipo: "Pasaporte", numero: 98765432 },
      nombre: "Ana",
      apellido: "García",
      edad: 22,
      correo_personal: "anagarcia@example.com",
      fecha_nacimiento: "2001-05-10",
      genero: "F",
      direccion: "Calle 4, Avenida 5",
      nacionalidad: "Española",
    },
    datos_academicos: {
      codigo: Math.floor(Math.random() * 1_00_00_00_00) + 10_00_00_00,
      correo_institucional: "example@mail.com",
      universidad: "UPC",
      ciclo: Math.floor(Math.random() * 11),
      nivel: "Pregrado",
    },
  },
];

module.exports = { tutories, users };
