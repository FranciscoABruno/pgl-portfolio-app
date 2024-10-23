import { View, Text, Image, StyleSheet } from "react-native";

const ProfileDescription = ({ darkMode }: { darkMode: boolean }) => (
  <View>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        style={styles.avatar}
        source={require("../assets/Photo.jpg")}
      ></Image>
      <View
        style={[
          styles.descriptionContainer,
          darkMode && styles.descriptionContainerDark,
        ]}
      >
        <Text style={styles.descriptionTitle}>Descripción sobre mí!</Text>
        <Text style={styles.descriptionText}>
          Soy estudiante de 2º Desarrollo de Aplicaciones Multiplataforma DAM.
          Me gusta jugar a videojuegos, leer libros y escuchar musica.
        </Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
    borderWidth: 1.5,
    borderColor: "#fff",
  },
  descriptionContainer: {
    margin: 10,
    backgroundColor: "#21a875",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#fff",
    width: "70%",
  },
  descriptionContainerDark: {
    backgroundColor: "#181C14",
  },
  descriptionTitle: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
    color: "#fff",
  },
  descriptionText: {
    color: "#fff",
  },
});

export default ProfileDescription;
