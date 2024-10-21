import { Pressable, Text, StyleSheet } from "react-native";

const ButtonWithShadow = ({
  onPress,
  title,
}: {
  onPress: () => void;
  title: string;
}) => (
  <Pressable style={styles.buttonruta} onPress={onPress}>
    <Text style={[styles.buttonText, styles.shadoxboxing]}>{title}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  buttonruta: {
    width: "50%",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  shadoxboxing: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
});

export default ButtonWithShadow;
