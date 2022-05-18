import React, { useState } from 'react'
import { 
  Text, 
  View, 
  StyleSheet, 
  TextInput, 
  Platform,
  TouchableOpacity
} from 'react-native'


export function Home() {
    const [newSkill, setNewSkill] = useState('')
    const [mySkills, setMySkills] = useState([])

    function handleAddNewSkill() {
        setMySkills(oldState => [...oldState, newSkill])
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Bem-vindo, Pedro
      </Text>
      <TextInput 
        style={styles.input}
        placeholder="Nova habilidade"
        placeholderTextColor="#C3C3C3"
        onChangeText={setNewSkill}
      />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={.7}
        onPress={handleAddNewSkill}
      >

        <Text style={styles.buttonText}>
          Adicionar
        </Text>

      </TouchableOpacity>

      <Text style={[styles.title, { marginTop: 25 }]}>
        Minhas Habilidades
      </Text>

      <TouchableOpacity style={[styles.buttonSkills, { marginVertical: 30 }]}>
        <Text style={styles.textSkill}>
            {mySkills}
        </Text>
    </TouchableOpacity>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 70,
    backgroundColor: '#121015'
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  },
  button: {
    backgroundColor: '#A370F7',
    padding: 20,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#ffffff'
  },
  buttonSkills: {
    backgroundColor: '#1F1E25',
    padding: 20,
    borderRadius: 50,
    alignItems: 'center'
  },
  textSkill: {
      color: '#FFF',
      fontSize: 22,
      fontWeight: 'bold',
  }
})