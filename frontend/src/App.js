// import axios from "axios";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import "./App.css";
import Home from "./components/Home"
import Landing from "./components/Landing"

function App() {


  // http://localhost:3001  , Just incase I needed this for the URI
  const link = createHttpLink({
    uri: "/graphql",
    // credentials: "same-origin",
  });

  // const authLink = setContext(() => {
  //   const token = localStorage.getItem("id_token");

  // })

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
  });


  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Landing></Landing>
      </div>
    </ApolloProvider>
  );
}

export default App;
