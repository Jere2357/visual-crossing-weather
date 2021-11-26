import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("screen");

const ContainerStyle = StyleSheet.create({
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  city: {
    fontSize: 24,
  },
  temp: {
    fontSize: 35,
    fontWeight: "bold",
  },
  duration: {
    fontSize: 18,
  },
  feels: {
    fontSize: 16,
  },
  cloudIcon: {
    height: width * 0.4,
    width: width * 0.4,
    marginVertical: 35,
  },
  cloudIconLabel: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    width: '70%',
  },
});

export default ContainerStyle;
