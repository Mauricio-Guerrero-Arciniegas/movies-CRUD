# 👤 CRUD de Usuarios - React + Vite

Este proyecto es una aplicación web que permite **Crear, Leer, Actualizar y Eliminar (CRUD)** usuarios consumiendo una API externa. Fue desarrollado como parte de un reto técnico para Academlo.

## 🚀 Tecnologías utilizadas

- React
- Vite
- Axios
- React Hook Form
- CSS Modules / SCSS
- SweetAlert2 (opcional para modales de confirmación)

## 🎯 Funcionalidades principales

- Visualización de usuarios en tarjetas
- Crear nuevos usuarios desde un formulario controlado
- Editar usuarios con datos precargados en el formulario
- Eliminar usuarios con confirmación
- Componentes reutilizables usando la propiedad especial `children`
- Hooks personalizados para manejo de API

## 🔧 Custom Hook: `useUsersCrud.js`

Se creó un custom hook que encapsula las peticiones a la API:
```js
// Ejemplo
const { users, getAllUsers, createUser, updateUser, deleteUser } = useUsersCrud();# movies-CRUD
