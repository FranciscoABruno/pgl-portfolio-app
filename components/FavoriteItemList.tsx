import { ScrollView, Text, StyleSheet } from "react-native";

const FavoriteItemList = () => (
  <ScrollView style={{ padding: 10 }}>
    <Text style={styles.cosasQmeGustanMuxoEstails}>Jugar a juegos</Text>
    <Text style={styles.cosasQmeGustanMuxoEstails}>Salir a pasear</Text>
    <Text style={styles.cosasQmeGustanMuxoEstails}>Ir a la playa</Text>
    <Text style={styles.cosasQmeGustanMuxoEstails}>Estar con mi familia</Text>
    <Text style={styles.cosasQmeGustanMuxoEstails}>Escuchar música</Text>
    <Text style={styles.cosasQmeGustanMuxoEstails}>La lluvia</Text>
    <Text style={styles.cosasQmeGustanMuxoEstails}>Viajar</Text>
    <Text style={styles.cosasQmeGustanMuxoEstails}>Leer libros</Text>
    <Text style={styles.cosasQmeGustanMuxoEstails}>Ir de cena romántica</Text>
    <Text style={styles.cosasQmeGustanMuxoEstails}>Peliculas</Text>
    <Text style={styles.cosasQmeGustanMuxoEstails}>La comida</Text>
    <Text style={styles.cosasQmeGustanMuxoEstails}>Series</Text>
  </ScrollView>
);

const styles = StyleSheet.create({
  cosasQmeGustanMuxoEstails: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 20,
    color: "darkred",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: "silver",
  },
});

export default FavoriteItemList;
