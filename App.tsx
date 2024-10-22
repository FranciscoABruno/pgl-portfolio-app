import React from "react";
import { useState } from "react";
import {
  Button,
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import QRCode from "react-native-qrcode-svg";
import ButtonWithShadow from "./components/ButtonWithShadow";
import ProfileDescription from "./components/ProfileDescription";
import FavoriteItemList from "./components/FavoriteItemList";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);
  const [displayProject, setDisplayProject] = useState(false);

  return (
    <ImageBackground
      source={require("./assets/IMG-20241021-WA0038.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.firsttoprowContainer}>MI PORFOLIO</Text>
          <View style={styles.rowTopSecondContainer}>
            <ButtonWithShadow
              onPress={() => {
                setDisplayMyQR(true);
                setDisplayProject(false);
              }}
              title="Mi info"
            />
            <Button
              onPress={() => {
                setDisplayMyQR(false);
                setDisplayProject(false);
              }}
              title="Mi Repo"
              color="light-gray"
            />
            <Ionicons name="chevron-forward-outline" size={20} color="white" />

            <Button
              onPress={() => {
                setDisplayProject(true);
                setDisplayMyQR(false);
              }}
              title="Proyectos"
              color="light-gray"
            />
          </View>
        </View>

        {displayProject ? (
          <View style={styles.bodystails}>
            <ImageProject />
          </View>
        ) : displayMyQR ? (
          <View style={styles.bodystails}>
            <ProfileDescription />
            <FavoriteItemList />
          </View>
        ) : (
          <View style={styles.bodystails}>
            <View style={styles.CentrarcodigoQR}>
              <QRCode value="https://github.com/FranciscoABruno" />
            </View>
          </View>
        )}
      </View>
    </ImageBackground>
  );
}

const ImageProject = () => {
  return (
    <ScrollView style={{ width: "100%" }}>
      <Image
        source={require("./assets/snow.jpg")}
        style={styles.ProjectImage}
      />
      <Image
        source={require("./assets/landscape.jpg")}
        style={styles.ProjectImage}
      />
      <Image
        source={require("./assets/building.jpg")}
        style={styles.ProjectImage}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  background: {
    flex: 1,
  },
  ProjectImage: {
    width: "100%",
    height: 300,
    marginVertical: 10,
  },
});
