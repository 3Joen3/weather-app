import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {API_KEY} from "@env";

export default function App() {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=${API_KEY}`;
  console.log(url);
  return (
    <View style={styles.container}>
      <Text>{url}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
