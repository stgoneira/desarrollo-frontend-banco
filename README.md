# Proyecto Banco

Proyecto de un sitio web para un banco que incluirá una variedad de funcionalidades. Para comenzar, se desarrollará la página de inicio de sesión, la cual permitirá a los usuarios ingresar a su cuenta y acceder a la información relacionada con sus cuentas, así como también hacer transferencias y ver su historial de transacciones.

Además, se trabajará en la creación de dos simuladores: el primero, un simulador de inversiones de depósitos a plazo, el cual permitirá a los usuarios calcular los intereses y el rendimiento de sus inversiones, y el segundo, un simulador de crédito de consumo, el cual les permitirá a los usuarios calcular la tasa de interés y el plazo de su crédito. Asimismo, se desarrollarán las páginas públicas, tales como la página de inicio, la página de descripción de productos y servicios, así como también un formulario de contacto para que los usuarios puedan comunicarse con el banco en caso de necesitar asistencia.

## Guía Estilo

![Guía de Estilo](./assets/diseno-banco.png)

- Títulos (Roboto 300)
- Párrafos (Roboto normal)

## Inspiración 

https://alister-bank.cmsmasters.net/ 


## Fastify Server - API Reference

#### Setup

Se ejecuta sólo si no hay ningún usuario en la BD.
```http
GET /setup
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|  |  |  |

#### Login

```http
POST /usuario/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. Correo electrónico |
| `contrasena` | `string` | **Required**. Contraseña |


#### Guardar el contacto o consulta

```http
POST /contacto
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `nombre`    | `string` | **Required**. Nombre de quien contacta |
| `rut`       | `string` | **Required**. RUT de quien contacta |
| `telefono`  | `string` | **Required**. Teléfono de quien contacta |
| `email`     | `string` | **Required**. Correo electrónico de quien contacta |
| `motivo`    | `string` | **Required**. Motivo del contacto |
| `mensaje`   | `string` | **Required**. Mensaje o consulta |
| `direccion` | `string` | **Required**. Dirección de quien contacta |
| `comuna`    | `string` | **Required**. Comuna donde reside quien contacta |

#### Listar categorías de productos

```http
GET /categoria
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|       |  |  |

#### Crear categoría de productos

```http
POST /categoria
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `nombre`      | `string` | **Required**. Nombre de la categoría |
| `descripcion` | `string` | **Required**. Descripción de la categoría |
