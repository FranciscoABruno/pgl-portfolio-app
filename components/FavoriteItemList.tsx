import { ScrollView, Text, StyleSheet } from "react-native";

const FavoriteItemList = ({ darkMode }: { darkMode: boolean }) => (
  <ScrollView style={{ padding: 10 }}>
    <Text style={[styles.cosasQmeGustanMuxoEstails, darkMode && styles.cosasQmeGustanMuxoEstailsDark,]}>Jugar a juegos</Text>
    <Text style={[styles.cosasQmeGustanMuxoEstails, darkMode && styles.cosasQmeGustanMuxoEstailsDark,]}>Salir a pasear</Text>
    <Text style={[styles.cosasQmeGustanMuxoEstails, darkMode && styles.cosasQmeGustanMuxoEstailsDark,]}>Ir a la playa</Text>
    <Text style={[styles.cosasQmeGustanMuxoEstails, darkMode && styles.cosasQmeGustanMuxoEstailsDark,]}>Estar con mi familia</Text>
    <Text style={[styles.cosasQmeGustanMuxoEstails, darkMode && styles.cosasQmeGustanMuxoEstailsDark,]}>Escuchar música</Text>
    <Text style={[styles.cosasQmeGustanMuxoEstails, darkMode && styles.cosasQmeGustanMuxoEstailsDark,]}>La lluvia</Text>
    <Text style={[styles.cosasQmeGustanMuxoEstails, darkMode && styles.cosasQmeGustanMuxoEstailsDark,]}>Viajar</Text>
    <Text style={[styles.cosasQmeGustanMuxoEstails, darkMode && styles.cosasQmeGustanMuxoEstailsDark,]}>Leer libros</Text>
    <Text style={[styles.cosasQmeGustanMuxoEstails, darkMode && styles.cosasQmeGustanMuxoEstailsDark,]}>Ir de cena romántica</Text>
    <Text style={[styles.cosasQmeGustanMuxoEstails, darkMode && styles.cosasQmeGustanMuxoEstailsDark,]}>Peliculas</Text>
    <Text style={[styles.cosasQmeGustanMuxoEstails, darkMode && styles.cosasQmeGustanMuxoEstailsDark,]}>La comida</Text>
    <Text style={[styles.cosasQmeGustanMuxoEstails, darkMode && styles.cosasQmeGustanMuxoEstailsDark,]}>Series</Text>
  </ScrollView>
);

const styles = StyleSheet.create({
  cosasQmeGustanMuxoEstails: {
    width: 330,
    borderColor: "#14875e",
    borderWidth: 1.5,
    borderStyle: "solid",
    padding: 20,
    color: "#14875e",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: "#fff",
  },
  cosasQmeGustanMuxoEstailsDark: {
    backgroundColor: "#181C14",
    color: "#fff",
  },
});

export default FavoriteItemList;
