import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, ImageBackground } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';

type StudentsScreenNavigationProp = NativeStackNavigationProp<any, 'Students'>;
type StudentsScreenRouteProp = RouteProp<{ params: { house: string } }, 'params'>;

interface Student {
  name: string;
  image: string;
  house: string;
  // Otros campos según la API
}

const PAGE_SIZE = 6;

export default function StudentsScreen() {
  const [students, setStudents] = useState<Student[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigation = useNavigation<StudentsScreenNavigationProp>();
  const route = useRoute<StudentsScreenRouteProp>();
  const { house } = route.params;

  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters/house/' + house)
      .then((response) => response.json())
      .then((data: Student[]) => setStudents(data))
      .catch((error) => console.error(error));
  }, [house]);

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const paginatedStudents = students.slice(startIndex, endIndex);

  return (
    <ImageBackground source={{ uri: 'https://path-to-house-background.jpg' }} style={styles.background}>
      <View style={styles.container}>
        <FlatList
          data={paginatedStudents}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <Button
              title={item.name}
              onPress={() => navigation.navigate('StudentDetail', { student: item })}
              color="#6A5ACD"
            />
          )}
        />
        <View style={styles.pagination}>
          {currentPage > 1 && (
            <Button title="Anterior" onPress={() => setCurrentPage(currentPage - 1)} color="#FFD700" />
          )}
          {endIndex < students.length && (
            <Button title="Siguiente" onPress={() => setCurrentPage(currentPage + 1)} color="#FFD700" />
          )}
        </View>
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
    width: '90%',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
