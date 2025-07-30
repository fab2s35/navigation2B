//using https://retool.com/api-generator#iframe-section 

//la siguiente direccion: https://retoolapi.dev/zZhXYF/movil

/*
información de la api
{
id: 1,
edad: 84,
correo: "-",
nombre: "Filippa Gwillim"
},
*/// AddUser.js
import React, { useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import useFetchUser from '../hooks/useFetchUser';

const AddUser = () => {
  const route = useRoute();
  const usuarioEditar = route.params?.user;

  const {
    nombre,
    setNombre,
    edad,
    setEdad,
    correo,
    setCorreo,
    handleGuardar,
    handleActualizar
  } = useFetchUser();

  useEffect(() => {
    if (usuarioEditar) {
      setNombre(usuarioEditar.nombre);
      setEdad(usuarioEditar.edad.toString());
      setCorreo(usuarioEditar.correo);
    }
  }, [usuarioEditar]);

  const handleSubmit = () => {
    if (usuarioEditar) {
      handleActualizar(usuarioEditar.id, nombre, edad, correo);
    } else {
      handleGuardar();
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{usuarioEditar ? "Editar Usuario" : "Agregar Usuario"}</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Edad"
        value={edad}
        onChangeText={setEdad}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Correo"
        value={correo}
        onChangeText={setCorreo}
        keyboardType="email-address"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>{usuarioEditar ? "Actualizar" : "Guardar"}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#edf3f7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#732255'
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#732255'
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#732255',
    borderRadius: 8,
    padding: 12,
    marginVertical: 10,
    backgroundColor: '#FFF',
    color: '#000'
  },
  button: {
    backgroundColor: '#732255',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    marginTop: 20
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default AddUser;