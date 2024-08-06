// screens/HousesScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type HousesScreenNavigationProp = NativeStackNavigationProp<any, 'Houses'>;

const houses = [
  { name: 'Gryffindor', color: '#7F0909', image: 'https://i.pinimg.com/originals/e4/02/fd/e402fd0912f00e4dddb0081d4a9a07c7.png' },
  { name: 'Hufflepuff', color: '#EEE117', image: 'https://w7.pngwing.com/pngs/537/516/png-transparent-huffle-puff-logo-illustration-helga-hufflepuff-hogwarts-harry-potter-and-the-deathly-hallows-gryffindor-harry-potter-helga-hufflepuff-hogwarts-harry-potter-and-the-deathly-hallows.png' },
  { name: 'Ravenclaw', color: '#000A90', image: 'https://w7.pngwing.com/pngs/61/949/png-transparent-ravenclaw-logo-ravenclaw-house-warner-bros-studio-tour-london-the-making-of-harry-potter-sorting-hat-hogwarts-harry-potter-and-the-deathly-hallows-harry-potter-logo-fictional-character-helga-thumbnail.png' },
  { name: 'Slytherin', color: '#0D6217', image: 'https://c0.klipartz.com/pngpicture/546/868/gratis-png-harry-potter-slytherin-logo-slytherin-casa-hogwarts-harry-potter-gryffindor-ravenclaw-casa-harry-potter-thumbnail.png' },
];

export default function HousesScreen() {
  const navigation = useNavigation<HousesScreenNavigationProp>();

  return (
    <ImageBackground source={{ uri: 'https://path-to-hogwarts-houses-background.jpg' }} style={styles.background}>
      <View style={styles.container}>
        {houses.map((house) => (
          <TouchableOpacity
            key={house.name}
            onPress={() => navigation.navigate('Students', { house: house.name })}
            style={[styles.houseButton, { backgroundColor: house.color }]}
          >
            <Image source={{ uri: house.image }} style={styles.houseImage} />
            <Text style={styles.houseText}>{house.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d8cccc',
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 20,
    borderRadius: 10,
  },
  houseButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  houseImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  houseText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});
