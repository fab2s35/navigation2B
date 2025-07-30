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
*/
import React, { useCallback } from "react";
import { StyleSheet, Text, View, FlatList, ActivityIndicator, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CardUser from "../components/users/CardUser";
import useFetchUser from "../hooks/useFetchUser";

const ShowUser = () => {
  const { usuarios, loading, fetchUsuarios, handleEliminar } = useFetchUser();
  const navigation = useNavigation();

  const handleEdit = (user) => {
    navigation.navigate("AddUser", { user }); // Reutiliza AddUser como Editar
  };

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
            <CardUser user={item} onEdit={handleEdit} onDelete={handleEliminar} />
          )}
          contentContainerStyle={styles.listContainer}
        />
      )}
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
  subtitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#732255",
    textAlign: "center",
    marginBottom: 10,
  },
  counterText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111111",
    textAlign: "center",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 20,
    marginVertical: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#732255",
    marginBottom: 5,
  },
  cardText: {
    fontSize: 16,
    color: "#111111",
  },
});

export default ShowUser;