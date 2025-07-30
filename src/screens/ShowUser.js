import React, { useCallback, useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import CardUser from "../components/users/CardUser";
import { useUser } from "../context/userContext";
import EditUserModal from "../components/users/editUserModal";

const ShowUser = () => {
  const { usuarios, loading, fetchUsuarios, handleEliminar } = useUser();
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);

  const openEditModal = (user) => {
    setUserToEdit(user);
    setModalVisible(true);
  };

  const closeEditModal = () => {
    setUserToEdit(null);
    setModalVisible(false);
  };

  const handleAddUser = () => {
    navigation.navigate("AddUser"); 
  };

  useFocusEffect(
    useCallback(() => {
      fetchUsuarios(); 
    }, [])
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Lista de Usuarios</Text>
      {!loading && (
        <Text style={styles.counterText}>Total de usuarios: {usuarios.length}</Text>
      )}


      {loading ? (
        <ActivityIndicator size="large" color="#5C3D2E" style={{ marginTop: 20 }} />
      ) : (
        <FlatList
          data={usuarios}
          keyExtractor={(user) => user.id.toString()}
          renderItem={({ item }) => (
            <CardUser
              user={item}
              onEdit={() => openEditModal(item)}
              onDelete={() => handleEliminar(item.id)}
            />
          )}
          contentContainerStyle={styles.listContainer}
        />
      )}

      <EditUserModal visible={modalVisible} onClose={closeEditModal} userToEdit={userToEdit} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#edf3f7",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  listContainer: {
    paddingBottom: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#732255",
    textAlign: "center",
    marginBottom: 5,
  },
  counterText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111111",
    textAlign: "center",
    marginBottom: 10,
  }
});

export default ShowUser;
