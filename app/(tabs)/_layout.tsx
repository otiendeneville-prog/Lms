import { Stack } from 'expo-router';

export default function Layout() {
  return (                                                 
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FFD700',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
  );
}
