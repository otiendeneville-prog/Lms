import { Stack } from 'expo-router';
import { Button, Text, Image, StyleSheet,Pressable } from 'react-native';
import { useState } from 'react';
import { Link } from 'expo-router';

function LogoTitle([...props]) {
  return (
    <Image style={styles.image} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
  );
}

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: props => <LogoTitle [...props ]/>,
          headerRight: () => <Button onPress={() => setCount(c => c + 1)} title="Update count" />,
        }}
      />
      <Text>Count: {count}</Text>
      <Link href="/explore" style={{marginHorizontal:"auto"}} asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Explore</Text>
        </Pressable>
      </Link>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
  link:{
    color: 'white',
    fontSize:42,
    fontWeight:'bold',
    textAlign:'center',
    textDecorationLine:'underline',
    backgroundColor:'rgba(0,0,0,0.5)',  
    padding:4,
  },
  button:{
    height:40,
    borderRadius:10,
    fontSize:42,
    fontWeight:'bold',
    textAlign:'center',
    alignContent:'center',
    justifyContent:'center',
    textDecorationLine:'underline',
    backgroundColor:'rgba(0,0,0,0.75)',  
    padding:10,
  },
  buttonText:{
    color:'white',
    fontSize: 16,
    fontWeight:'bold',
    textAlign:'center',
    padding:4,
  }
});
