import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

interface Student {
  name: string;
  image: string;
  house: string;
  // SI LA API TIENES MAS CAMPOS PODEMOS AGREGAR MAS CAMPOS PARA MOSTRAR :))
}

type StudentDetailScreenRouteProp = RouteProp<{ params: { student: Student } }, 'params'>;

export default function StudentDetailScreen() {
  const route = useRoute<StudentDetailScreenRouteProp>();
  const { student } = route.params;

  return (
    <ImageBackground source={{ uri: 'https://path-to-student-background.jpg' }} style={styles.background}>
      <View style={styles.container}>
        <Image source={{ uri: student.image }} style={styles.image} />
        <Text style={styles.name}>{student.name}</Text>
        <Text style={styles.house}>{student.house}</Text>
        {/* Muestra otros detalles del estudiante según la API */}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 20,
    borderRadius: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  house: {
    fontSize: 18,
    color: '#EEE',
  },
});
