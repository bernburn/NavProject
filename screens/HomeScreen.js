import { View, Text, Button, Image, ScrollView, StyleSheet } from 'react-native';

export default function App({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('../assets/samplelogo.jpg')}
          style={styles.logo}
        />
        <Text style={styles.welcomeMessage}>
          Welcome to the Home Screen! 👋
        </Text>
        <Button
          title="Go back to Login"
          onPress={() => navigation.navigate('Login')}
        />
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginVertical: 40,
  },
  welcomeMessage: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});