import { useState, useEffect } from "react";
import { Alert } from "react-native";

const useFetchUser = () => {
  // Estados del formulario
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [correo, setCorreo] = useState("");

  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsuarios = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://retoolapi.dev/zZhXYF/movil");
  
      const data = await response.json();
  
      setUsuarios(data);  
    } catch (error) {
      console.error("Error al cargar usuarios:", error);
      Alert.alert("Error", "No se pudieron cargar los usuarios");
    } finally {
      setLoading(false);
    }
  };
  
  

  // Guardar nuevo usuario
  const handleGuardar = async () => {
    if (!nombre || !edad || !correo) {
      Alert.alert("Error", "Por favor, completa todos los campos");
      return;
    }

    try {
      const response = await fetch("https://retoolapi.dev/zZhXYF/movil", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          edad: parseInt(edad),
          correo,
        }),
      });

      if (response.ok) {
        Alert.alert("Éxito", "Usuario guardado correctamente");
        setNombre("");
        setEdad("");
        setCorreo("");
        fetchUsuarios(); 
      } else {
        const errorText = await response.text(); 
        console.error(" Error al guardar usuario:", errorText); 
        Alert.alert("Error", "No se pudo guardar el usuario");
      }
      
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Ocurrió un error al enviar los datos");
    }
  };

  // Eliminar usuario
  const handleEliminar = async (id) => {
    try {
      const response = await fetch(`https://retoolapi.dev/zZhXYF/movil/${id}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        Alert.alert("Éxito", "Usuario eliminado");
        fetchUsuarios();
      } else {
        const errorText = await response.text();
        console.error("Error al eliminar:", errorText);
        Alert.alert("Error", "No se pudo eliminar el usuario");
      }
    } catch (error) {
      console.error("Error al eliminar:", error);
      Alert.alert("Error", "No se pudo eliminar el usuario");
    }
  };
  

  // Actualizar usuario
  const handleActualizar = async (id, nombre, edad, correo) => {
    try {
      const response = await fetch(`https://retoolapi.dev/zZhXYF/movil/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          edad: parseInt(edad),
          correo,
        }),
      });
  
      if (response.ok) {
        setUsuarios((prev) =>
          prev.map((user) =>
            user.id === id
              ? { ...user, nombre, edad: parseInt(edad), correo }
              : user
          )
        );
  
        Alert.alert("Éxito", "Usuario actualizado");
      } else {
        const errorText = await response.text();
        console.error("Error al actualizar:", errorText);
        Alert.alert("Error", "No se pudo actualizar el usuario");
      }
    } catch (error) {
      console.error("Error al actualizar:", error);
      Alert.alert("Error", "No se pudo actualizar el usuario");
    }
  };
  
  

  useEffect(() => {
    fetchUsuarios();
  }, []);

  return {
    nombre,
    setNombre,
    edad,
    setEdad,
    correo,
    setCorreo,
    handleGuardar,
    usuarios,
    loading,
    fetchUsuarios,
    handleEliminar,      
    handleActualizar     
  };
};

export default useFetchUser;
