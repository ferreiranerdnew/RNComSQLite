import React, { useState } from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar, TextInput, Button } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const App = () => {
  const [category_, setCategory_] = useState("");
const addCategory_ = () => {
  
};

  return (
    <View >
      <StatusBar backgroundColor="orange" />
      <TextInput
        placeholder="Enter category"
        value={category_}
        onChangeText={setCategory_}
        style={{ marginHorizontal: 8}}
      />
      <Button title="Submit" onPress={addCategory_}
    </View>
  );
}

export default App;