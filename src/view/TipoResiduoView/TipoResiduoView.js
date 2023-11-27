import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const TipoResiduoView = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const openModal = (category) => {
    setSelectedCategory(category);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedCategory(null);
    setModalVisible(false);
  };

  const getModalContent = () => {
    switch (selectedCategory) {
      case 'eletronicos':
        return (
          <View>
            <Text style={styles.modalHeaderText}>Equipamentos de informática e telefonia: </Text>
            <Text style={styles.modalContentText}>
              Computadores, tablets, notebooks, celulares, impressoras, monitores e outros.
              98 % dos componentes de um eletrônico podem ser reciclados.
            </Text>
            <Text style={styles.modalBoldRedText}>Resíduos altamente contaminantes</Text>
          </View>
        );
      case 'baterias':
        return (
          <View>
            <Text style={styles.modalHeaderText}>Pilhas, baterias e portáteis:</Text>
            <Text style={styles.modalContentText}>
              Pilhas modelos AA, AAA, recarregáveis, baterias portáteis de 9 V e outros.
            </Text>
            <Text style={styles.modalBoldRedText}>Resíduos altamente contaminantes</Text>
          </View>
        );
      case 'eletrodomesticos':
        return (
          <View>
            <Text style={styles.modalHeaderText}>Eletrodomésticos e eletroportáteis:</Text>
            <Text style={styles.modalContentText}>
              Geladeiras, freezers, máquinas de lavar, fogões, ar condicionados, microondas, grandes TVs, torradeiras, batedeiras, aspiradores de pó, ventiladores, mixers, secadores de cabelo, ferramentas elétricas, calculadoras, câmeras digitais, rádios e outros.
            </Text>
            <Text style={styles.modalBoldRedText}>Resíduos altamente contaminantes</Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>&#8592;</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.centerContainer}>
        <Image
          source={require('../../../assets/new_logo_lixo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={[styles.text, styles.centerText]}>
          Conheça mais sobre os principais tipos de resíduos que coletamos:
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.circleContainer}>
          <View style={styles.circleItem}>
            <TouchableOpacity
              style={styles.circle}
              onPress={() => openModal('eletronicos')}>
              <Image
               source={require('../../../assets/movel.png')}
                style={styles.circleImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text style={styles.circleText}>Eletrônicos</Text>
          </View>
          <View style={styles.circleItem}>
            <TouchableOpacity
              style={styles.circle}
              onPress={() => openModal('baterias')}>
              <Image
               source={require('../../../assets/bateria.png')}
                style={styles.circleImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text style={styles.circleText}>Baterias</Text>
          </View>
          <View style={styles.circleItem}>
            <TouchableOpacity
              style={styles.circle}
              onPress={() => openModal('eletrodomesticos')}>
              <Image
                source={require('../../../assets/eletrodomestico.png')}
                style={styles.circleImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text style={styles.circleText}>Eletrodomésticos</Text>
          </View>
        </View>
      </View>
      <Modal transparent={true} visible={modalVisible} onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {getModalContent()}
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styles.footer}>
        <Text style={styles.footerText}>E-Coletas</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    height: 50,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
  },
  bottomContainer: {
    flex: 2,
    backgroundColor: '#D9FCA6',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  backButton: {
    paddingHorizontal: 8,
  },
  backButtonText: {
    marginTop: 20,
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  logo: {
    width: 160,
    height: 130,
    marginBottom: 10,
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  centerText: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  circleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 150,
  },
  circleItem: {
    alignItems: 'center',
  },
  circle: {
    marginHorizontal: 15,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ffffff',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleImage: {
    width: '60%',
    height: '60%',
    alignSelf: 'center',
  },
  circleText: {
    marginTop: 10,
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: 300,
  },
  closeButton: {
    backgroundColor: 'red',
    borderRadius: 15,
    width: 30,
    height: 30,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 8,
  },
  modalHeaderText: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
  },
  modalContentText: {
    marginTop: 20,
    fontSize: 15,
    textAlign: 'center',
  },
  modalBoldRedText: {
    fontWeight: 'bold',
    color: 'red',
    marginTop: 10,
    fontSize: 15,
    textAlign: 'center',

  },
  footer: {
    backgroundColor: '#D9FCA6',
    alignItems: 'center',
    padding: 10,
  },
  footerText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TipoResiduoView;
