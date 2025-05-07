import { Image } from 'expo-image';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const products = [
  {
    id: '1',
    name: 'Handmade Vase',
    description: 'A beautiful handmade vase for your home.',
    price: '$25',
     image: require('@/assets/images/partial-react-logo.png'),
  },
  {
    id: '2',
    name: 'Knitted Scarf',
    description: 'A warm and cozy knitted scarf.',
    price: '$15',
    image: require('@/assets/images/partial-react-logo.png'),
  },
];


export default function HomeScreen({ navigation }: any) {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to the Art Shop!</ThemedText>
      </ThemedView>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.productCard}
            onPress={() => navigation.navigate('ProductDetails', { product: item })}
          >
            <Image source={item.image} style={styles.productImage} />
            <ThemedView style={styles.productInfo}>
              <ThemedText type="subtitle">{item.name}</ThemedText>
              <ThemedText>{item.price}</ThemedText>
            </ThemedView>
          </TouchableOpacity>
        )}
      />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 16,
  },
  productCard: {
    flexDirection: 'row',
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 2,
  },
  productImage: {
    width: 100,
    height: 100,
  },
  productInfo: {
    flex: 1,
    padding: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
