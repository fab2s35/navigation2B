import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const CardUser = ({ user, onEdit, onDelete }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{user.nombre}</Text>
      <Text style={styles.cardText}>Edad: {user.edad}</Text>
      <Text style={styles.cardText}>Correo: {user.correo}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.editButton} onPress={() => onEdit(user)}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(user.id)}>
          <Text style={styles.buttonText}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAD8C0',
    paddingHorizontal: 20,
    paddingTop: 40
  },
  listContainer: {
    paddingBottom: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#732255',
    textAlign: 'center',
    marginBottom: 5
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#5C3D2E',
    textAlign: 'center',
    marginBottom: 10
  },
  counterText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3B2C24',
    textAlign: 'center',
    marginBottom: 10
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    marginVertical: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 4
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#732255',
    marginBottom: 5
  },
  cardText: {
    fontSize: 16,
    color: '#3B2C24'
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
  },
  editButton: {
    backgroundColor: "#a5b5a1",
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginRight: 5,
  },
  deleteButton: {
    backgroundColor: "#E55050",
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginLeft: 5,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CardUser;
