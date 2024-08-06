import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type HomeScreenNavigationProp = NativeStackNavigationProp<any, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <ImageBackground source={{ uri: 'https://www.minhavidaliteraria.com.br/wp-content/uploads/2011/07/harry_potter-logo_90894o.jpg' }} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenido a Hogwarts</Text>
        <Button title="Continuar" onPress={() => navigation.navigate('Houses')} color="#6A5ACD" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '30%',
    backgroundColor : 'white',
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    color: '#FFF',
    fontFamily: 'serif',
    textAlign: 'center',
  },
});
