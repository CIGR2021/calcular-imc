import { StyleSheet, View } from 'react-native';
import Form from './src/components/Form/';
import Title from './src/components/Title/';

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
    paddingTop: 60
  },
});
