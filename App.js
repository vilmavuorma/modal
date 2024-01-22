import React, {useState} from 'react';
import { Modal, StyleSheet, Text, Pressable, View } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.message}>
      <Modal
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.message}>
          <View style={styles.modal}>
            <Text style={styles.text}>This is modal...</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.close}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.text}>Show modal message</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  message: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modal: {
    backgroundColor: 'white',
    padding: 100,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    shadowOpacity: 0.20,
    shadowRadius: 9,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  close: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
