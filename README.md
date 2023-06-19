# SegundoParcial-React
Este repositorio contiene una aplicación de administración de tareas con una interfaz de usuario (UI) implementada en React. A continuación se describen los archivos y componentes principales de la aplicación:

Archivos y Componentes
SearchAppBar.jsx
Este archivo define un componente de barra de búsqueda de la interfaz de usuario (UI). Utiliza componentes de la biblioteca Material-UI para crear una barra de navegación con un ícono de menú, un campo de búsqueda y el título "Tareas.UI". La barra de búsqueda tiene funcionalidad para buscar tareas.

TaskAlert.jsx
Este archivo define un componente de alerta de tarea. Muestra una alerta si hay tareas incompletas. El componente utiliza el estado y el efecto para controlar cuándo mostrar u ocultar la alerta.

TaskForm.jsx
Este archivo define un formulario de tarea. El componente utiliza el estado para controlar el título de la tarea ingresado por el usuario. Cuando se envía el formulario, se llama a la función "addTask" para agregar una nueva tarea a la lista de tareas.

TaskItem.jsx
Este archivo define un elemento de tarea individual. El componente muestra el título de la tarea y un checkbox para marcar la tarea como completada. También muestra una alerta si la tarea no está completada. Además, proporciona botones para editar y borrar la tarea.

TaskList.jsx
Este archivo define una lista de tareas. El componente recibe una matriz de tareas y renderiza elementos de tarea individuales utilizando el componente TaskItem.

TaskManager.jsx
Este archivo define el administrador de tareas principal. El componente mantiene el estado de la lista de tareas y proporciona funciones para agregar, editar y borrar tareas. Utiliza los componentes TaskForm y TaskList para mostrar y manipular las tareas.

themeContext.jsx
Este archivo define un contexto de tema utilizando el contexto de React. El contexto almacena el estado del tema actual y proporciona una función para cambiar entre el tema claro y oscuro. El contexto se utiliza para cambiar el tema en la página de configuración.

HomePage.jsx
Este archivo define la página de inicio de la aplicación. Muestra un mensaje de bienvenida y el componente TaskManager.

SettingsPage.jsx
Este archivo define la página de configuración de la aplicación. Utiliza el contexto del tema para mostrar un selector de tema (claro u oscuro) y cambiar el tema de la aplicación.

app.css
Este archivo contiene estilos globales para la aplicación, como estilos de cuerpo, encabezados y estilos específicos de componentes.

app.jsx
Este archivo es el punto de entrada de la aplicación. Utiliza el enrutamiento de React para definir las rutas de la aplicación y renderizar los componentes correspondientes. También incluye la barra de búsqueda global y la envoltura de navegación.

index.css
Este archivo contiene estilos globales para la página index.html donde se monta la aplicación.

main.jsx
Este archivo es el punto de entrada principal de la aplicación. Utiliza el método ReactDOM.createRoot para renderizar el componente App en el elemento con el id "root". También se importa el archivo de estilos globales index.css.

igual agrege algunos comentarios en el codigo para indicar algunas cosas y no perderme 
