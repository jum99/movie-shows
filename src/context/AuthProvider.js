import { createContext } from "react";
import useMovieShows from "../hooks/useMovieShows";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { shows } = useMovieShows();

  const data = {
    shows,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
