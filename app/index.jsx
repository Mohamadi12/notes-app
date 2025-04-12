import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Logo from "../assets/images/post-it.png";
import { useRouter } from "expo-router";

const Home = () => {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.image} />
      <Text style={styles.title}>Welcome To Notes App</Text>
      <Text style={styles.subtitle}>
        Capture your thoughts anytime,anywhere
      </Text>

      <TouchableOpacity style={styles.button} onPress={() =>router.push('/note')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    borderRadius: 10,
    paddingHorizontal: 25,
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  }
});
