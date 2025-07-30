import { StatusBar } from 'expo-status-bar';
import { UserProvider } from './src/context/userContext'
import Navigation from './src/navigation/Navigation';

export default function App() {
  return (
    <UserProvider>
    <Navigation />
  </UserProvider>  );
}
