import { View, Text, Image, StyleSheet } from "react-native";

const ProfileDescription = () => (
  <View>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        style={styles.avatar}
        source={require("./assets/SofyanAmrabat.jpg")}
      ></Image>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>Descripción sobre mí!</Text>
        <Text>
          Soy profe y me gusta mi trabajo aunque a veces me de por enrevesar
          prácticas para mis queridos alumnos.
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
  },
  descriptionContainer: {
    margin: 10,
    backgroundColor: "lightgray",
    padding: 10,
    borderRadius: 10,
    width: "70%",
  },
  descriptionTitle: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
});

export default ProfileDescription;
