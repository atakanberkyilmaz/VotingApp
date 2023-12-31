import Router from './src/Router';
import { NativeBaseProvider, Box } from "native-base";
import { ApolloProvider } from '@apollo/client';
import client from './src/Apollo'

export default function App() {
  return (
    <NativeBaseProvider>
    <ApolloProvider client={client}>
    <Router/>
    </ApolloProvider>
    </NativeBaseProvider>
   
  );
}