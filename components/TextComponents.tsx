import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface AddressProps {
  end: {
    logradouro: string;
    complemento: string;
    unidade: string;
    bairro: string;
    localidade: string;
    uf: string;
    estado: string;
    regiao: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
  };
}

const TextComponent: React.FC<AddressProps> = ({ end }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Logradouro: {end.logradouro}</Text>
      <Text style={styles.text}>Complemento: {end.complemento}</Text>
      <Text style={styles.text}>Unidade: {end.unidade}</Text>
      <Text style={styles.text}>Bairro: {end.bairro}</Text>
      <Text style={styles.text}>Localidade: {end.localidade}</Text>
      <Text style={styles.text}>UF: {end.uf}</Text>
      <Text style={styles.text}>Estado: {end.estado}</Text>
      <Text style={styles.text}>Região: {end.regiao}</Text>
      <Text style={styles.text}>IBGE: {end.ibge}</Text>
      <Text style={styles.text}>Gia: {end.gia}</Text>
      <Text style={styles.text}>DDD: {end.ddd}</Text>
      <Text style={styles.text}>Siafi: {end.siafi}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
});

export default TextComponent; 