import { useState } from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import QRCode from "react-native-qrcode-svg";
import ButtonWithShadow from "./ButtonWithShadow";
import ProfileDescription from "./ProfileDescription";
import FavoriteItemList from "./FavoriteItemList";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.firsttoprowContainer}>My Portfolio App</Text>
        <View style={styles.rowTopSecondContainer}>
          <ButtonWithShadow
            onPress={() => setDisplayMyQR(true)}
            title="Mi info"
          />
          <Button
            onPress={() => setDisplayMyQR(false)}
            title="Mi Repo"
            color="light-gray"
          />
        </View>
      </View>
      {displayMyQR ? (
        <View style={styles.bodystails}>
          <ProfileDescription />
          <FavoriteItemList />
        </View>
      ) : (
        <View style={styles.bodystails}>
          <View style={styles.CentrarcodigoQR}>
            <QRCode value="https://github.com/adhernea" />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  topContainer: {
    height: "15%",
    paddingTop: 50,
    width: "100%",
  },
  firsttoprowContainer: {
    backgroundColor: "gray",
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
  },
  rowTopSecondContainer: {
    flexDirection: "row",
    backgroundColor: "darkgray",
    justifyContent: "center",
    alignItems: "center",
  },
  bodystails: {
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
    height: "85%",
  },
  CentrarcodigoQR: {
    justifyContent: "center",
    borderWidth: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});
