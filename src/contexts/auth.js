import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [groupName, setGroupName] = useState("");
  const [data, setData] = useState("");
  const [local, setLocal] = useState("");
  const [desvio, setDesvio] = useState("");
  const [peso, setPeso] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [categoria, setCategoria] = useState("");
  const [subCategoria, setSubCategoria] = useState("");
  const [subCatSelector, setSubCatSelector] = useState("");
  const [listaDeDesvios, setListaDeDesvios] = useState([]);

  return (
    <AuthContext.Provider
      value={{
        groupName,
        setGroupName,
        data,
        setData,
        local,
        setLocal,
        desvio,
        setDesvio,
        peso,
        setPeso,
        quantidade,
        setQuantidade,
        categoria,
        setCategoria,
        subCategoria,
        setSubCategoria,
        subCatSelector,
        setSubCatSelector,
        listaDeDesvios,
        setListaDeDesvios,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
