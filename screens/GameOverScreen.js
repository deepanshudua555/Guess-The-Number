import { Text, View, Image, StyleSheet } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>GMAE OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
        </View>
          <Text style={styles.summaryText}>
            Your phone needed <Text style={styles.highlight}>X</Text> rounds to guess the number{" "}
            <Text style={styles.highlight}>Y</Text>.
          </Text>
          <PrimaryButton>Start New Game</PrimaryButton>
        </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    
  },

  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    margin: 36,
  },

  image: {
    width: "100%",
    height: "100%",
  },
  summaryText:{
    fontFamily:'open-sans',
    fontSize:20,
    textAlign:'center',
    marginBottom:24,
},
  highlight:{
    fontFamily:'open-sans-bold',
    color: '#AA23AD',
  }
});
