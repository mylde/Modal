import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, Pressable } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setModalVisible(true)}>
        <Text style={styles.text}>Show modal message</Text>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} 
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>This is modal...</Text>
            <Pressable
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    color: 'blue',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 15,
    fontSize: 18,
  },
  closeButton: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
