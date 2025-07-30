import React, { useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  Modal,
} from "react-native";
import { useUser } from "../../context/userContext";

const EditUserModal = ({ visible, onClose, userToEdit }) => {
  const {
    nombre,
    setNombre,
    edad,
    setEdad,
    correo,
    setCorreo,
    handleActualizar,
  } = useUser();

  useEffect(() => {
    if (userToEdit) {
      setNombre(userToEdit.nombre);
      setEdad(userToEdit.edad.toString());
      setCorreo(userToEdit.correo);
    }
  }, [userToEdit]);

  const handleSubmit = () => {
    if (!nombre || !edad || !correo) {
      Alert.alert("Error", "Por favor, completa todos los campos");
      return;
    }
    handleActualizar(userToEdit.id, nombre, edad, correo);
    onClose();
  };

  if (!userToEdit) return null;

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.modalBackground}>
        <View style={styles.container}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Text style={styles.title}>Editar Usuario</Text>

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
              <Text style={styles.buttonText}>Actualizar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    padding: 20,
  },
  container: {
    backgroundColor: "#edf3f7",
    borderRadius: 12,
    padding: 20,
    maxHeight: "80%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    color: "#732255",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#732255",
    borderRadius: 8,
    padding: 12,
    marginVertical: 10,
    backgroundColor: "#FFF",
    color: "#000",
  },
  button: {
    backgroundColor: "#732255",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
  },
  cancelButton: {
    marginTop: 10,
    padding: 10,
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#732255",
    fontWeight: "bold",
  },
});

export default EditUserModal;
