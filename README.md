# CRUD de Usuarios - React + Vite

Este proyecto es una aplicación web que permite **Crear, Leer, Actualizar y Eliminar (CRUD)** peliculas consumiendo una API con Json. Fue desarrollado como parte de un reto técnico para Academlo.

## Tecnologías utilizadas

- React
- Vite
- Axios
- React Hook Form
- CSS Modules / SCSS
- Children
- Json server

## Funcionalidades principales

- Visualización de usuarios en tarjetas
- Crear nuevos usuarios desde un formulario controlado
- Editar usuarios con datos precargados en el formulario
- Eliminar usuarios con confirmación
- Componentes reutilizables usando la propiedad especial `children`
- Hooks personalizados para manejo de API

## 🔧 Custom Hook: `useUsersCrud.js`

Se creó un custom hook que encapsula las peticiones a la API:
db.json corriendo en el puerto 4000
// Ejemplo
const { users, getAllUsers, createUser, updateUser, deleteUser } = useUsersCrud();# movies-CRUD
