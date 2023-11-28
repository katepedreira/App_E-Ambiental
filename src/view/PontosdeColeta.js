// import React, { useEffect, useState } from 'react';
// import { View, StyleSheet, Dimensions, Text, TouchableOpacity, Linking } from 'react-native'; 
// import MapView, { Marker, Callout } from 'react-native-maps';
// import axios from 'axios';
// import BannerPDC from './BannerPDC';

// const PontosDeColeta = () => {
//   const [coletaPoints, setColetaPoints] = useState([]);
//   const [selectedPoint, setSelectedPoint] = useState(null);

//   useEffect(() => {
//     const addresses = [
//       'Rua Mercedes Rodrigues Barreto, 155 - Granjas Betania, Juiz de Fora - MG',
//       'R. Jarbas de Lery Santos, 1655 - Centro, Juiz de Fora - MG',
//       'Av. Barão do Rio Branco, 1843 - Centro, Juiz de Fora - MG',
//       'R. Halfeld, 1179 - Centro, Juiz de Fora - MG',
//       'R. Sampaio, 300 - Granbery, Juiz de Fora - MG',
//       'Av. Barão do Rio Branco, 3760 - Passos, Juiz de Fora - MG',
//       'R. Morais e Castro, 300 - Passos, Juiz de Fora - MG',
//       'Av. Empresarial Park Sul, Matias Barbosa - MG',
//     ];

//     const fetchData = async () => {
//       const points = await Promise.all(
//         addresses.map(async (address) => {
//           try {
//             const response = await axios.get('https://api.opencagedata.com/geocode/v1/json', {
//               params: {
//                 q: address,
//                 key: '3b1a856fa9fe4c01a57c8168f28391c5',
//               },
//             });

//             if (response.data.results && response.data.results.length > 0) {
//               const { lat, lng } = response.data.results[0].geometry;

//               let local = '';
//               if (address.includes('R. Jarbas de Lery Santos, 1655')) {
//                 local = 'Santa Cruz Shopping';
//               } else if (address.includes('Av. Barão do Rio Branco, 1843')) {
//                 local = 'AMAC';
//               } else if (address.includes('R. Halfeld, 1179')) {
//                 local = 'Colégio Academia';
//               } else if (address.includes('R. Sampaio, 300')) {
//                 local = 'Faculdade Metodista Granbery';
//               } else if (address.includes('Av. Barão do Rio Branco, 3760')) {
//                 local = 'Soul Fitness Academia';
//               } else if (address.includes('R. Morais e Castro, 300')) {
//                 local = 'Alameda Shopping';
//               } else if (address.includes('Av. Empresarial Park Sul')) {
//                 local = 'Park Sul';
//               } else if (address.includes('Rua Mercedes Rodrigues Barreto, 155')) {
//                 local = 'Flaire Atacadista';
//               }

//               return {
//                 id: address,
//                 name: address,
//                 latitude: parseFloat(lat),
//                 longitude: parseFloat(lng),
//                 local: local,
//               };
//             } else {
//               throw new Error('Endereço não encontrado');
//             }
//           } catch (error) {
//             console.error('Erro na geocodificação do endereço:', address);
//             return null;
//           }
//         })
//       );

//       setColetaPoints(points.filter((point) => point !== null));
//     };

//     fetchData();
//   }, []);

//   const handleMarkerPress = (point) => {
//     setSelectedPoint(point);
//   };

//   const openMapsApp = () => {
//     if (selectedPoint) {
//       const { latitude, longitude, name } = selectedPoint;
//       const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}&query_place_id=${name}`;
      
//       Linking.openURL(url).catch((err) => console.error('Erro ao abrir o serviço de mapa:', err));
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Ecopontos de Lixo Eletrônico</Text>
//       <View style={styles.subtitleContainer}>
//         <Text style={styles.subtitle}>Clique nos pontos de coleta no mapa para obter mais informações</Text>
//       </View>
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: -21.7641,  
//           longitude: -43.3496,  
//           latitudeDelta: 0.03,  
//           longitudeDelta: 0.03,  
//         }}
//       >
//         {coletaPoints.map((point) => (
//           <Marker
//             key={point.id}
//             coordinate={{ latitude: point.latitude, longitude: point.longitude }}
//             title={point.name}
//             onPress={() => handleMarkerPress(point)}
//           >
//             <Callout>
//               <Text>{point.name}</Text>
//             </Callout>
//           </Marker>
//         ))}
//       </MapView>
//       {selectedPoint && (
//         <View style={styles.infoBox}>
//           <Text style={styles.infoTitle}>{selectedPoint.name}</Text>
//           <Text>{`Local: ${selectedPoint.local}`}</Text>
//           <TouchableOpacity style={styles.routesButton} onPress={openMapsApp}>
//             <Text style={styles.buttonText}>Rotas</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#7DC60F', 
//   },
//   title: {
//     fontSize: 27,
//     fontWeight: 'bold',
//     color: '#07790C',  
//     marginTop: '20%',
//     textAlign: 'center',  
//   },
//   subtitleContainer: {
//     marginBottom: 10,
//     marginTop: 15
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#07790C',
//     textAlign: 'center',
//   },
//   map: {
//     width: Dimensions.get('window').width - 20,
//     height: Dimensions.get('window').height / 1.8,
//     borderRadius: 10,
//     marginTop: '5%', 
//     marginLeft: 10,  
//   },
//   infoBox: {
//     padding: 10,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 10,
//     margin: 10,
//   },
//   infoTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   routesButton: {
//     marginTop: 10,
//     backgroundColor: '#07790C',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontWeight: 'bold',
//   },
// });

// export default PontosDeColeta;


import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity, Linking } from 'react-native'; 
import MapView, { Marker, Callout } from 'react-native-maps';
import axios from 'axios';
import BannerPDC from './BannerPDC';

const PontosDeColeta = () => {
  const [coletaPoints, setColetaPoints] = useState([]);
  const [selectedPoint, setSelectedPoint] = useState(null);

  useEffect(() => {
    const addresses = [
      'Rua Mercedes Rodrigues Barreto, 155 - Granjas Betania, Juiz de Fora - MG',
      'R. Jarbas de Lery Santos, 1655 - Centro, Juiz de Fora - MG',
      'Av. Barão do Rio Branco, 1843 - Centro, Juiz de Fora - MG',
      'R. Halfeld, 1179 - Centro, Juiz de Fora - MG',
      'R. Sampaio, 300 - Granbery, Juiz de Fora - MG',
      'Av. Barão do Rio Branco, 3760 - Passos, Juiz de Fora - MG',
      'R. Morais e Castro, 300 - Passos, Juiz de Fora - MG',
      'Av. Empresarial Park Sul, Matias Barbosa - MG',
    ];

    const fetchData = async () => {
      const points = await Promise.all(
        addresses.map(async (address) => {
          try {
            const response = await axios.get('https://api.opencagedata.com/geocode/v1/json', {
              params: {
                q: address,
                key: '3b1a856fa9fe4c01a57c8168f28391c5',
              },
            });

            if (response.data.results && response.data.results.length > 0) {
              const { lat, lng } = response.data.results[0].geometry;

              let local = '';
              if (address.includes('R. Jarbas de Lery Santos, 1655')) {
                local = 'Santa Cruz Shopping';
              } else if (address.includes('Av. Barão do Rio Branco, 1843')) {
                local = 'AMAC';
              } else if (address.includes('R. Halfeld, 1179')) {
                local = 'Colégio Academia';
              } else if (address.includes('R. Sampaio, 300')) {
                local = 'Faculdade Metodista Granbery';
              } else if (address.includes('Av. Barão do Rio Branco, 3760')) {
                local = 'Soul Fitness Academia';
              } else if (address.includes('R. Morais e Castro, 300')) {
                local = 'Alameda Shopping';
              } else if (address.includes('Av. Empresarial Park Sul')) {
                local = 'Park Sul';
              } else if (address.includes('Rua Mercedes Rodrigues Barreto, 155')) {
                local = 'Flaire Atacadista';
              }

              return {
                id: address,
                name: address,
                latitude: parseFloat(lat),
                longitude: parseFloat(lng),
                local: local,
              };
            } else {
              throw new Error('Endereço não encontrado');
            }
          } catch (error) {
            console.error('Erro na geocodificação do endereço:', address);
            return null;
          }
        })
      );

      setColetaPoints(points.filter((point) => point !== null));
    };

    fetchData();
  }, []);

  const handleMarkerPress = (point) => {
    setSelectedPoint(point);
  };

  const openMapsApp = () => {
    if (selectedPoint) {
      const { latitude, longitude, name } = selectedPoint;
      const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}&query_place_id=${name}`;
      
      Linking.openURL(url).catch((err) => console.error('Erro ao abrir o serviço de mapa:', err));
    }
  };

  return (
    <View style={styles.container}>
      <BannerPDC title="Ecopontos" subtitle="Clique nos pontos de coleta no mapa para obter mais informações e rotas" />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -21.7641,  
          longitude: -43.3496,  
          latitudeDelta: 0.03,  
          longitudeDelta: 0.03,  
        }}
      >
        {coletaPoints.map((point) => (
          <Marker
            key={point.id}
            coordinate={{ latitude: point.latitude, longitude: point.longitude }}
            title={point.name}
            onPress={() => handleMarkerPress(point)}
          >
            <Callout>
              <Text>{point.name}</Text>
            </Callout>
          </Marker>
        ))}
      </MapView>
      {selectedPoint && (
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>{selectedPoint.name}</Text>
          <Text style={styles.infoSubTitle}>{`Local: ${selectedPoint.local}`}</Text>
          <TouchableOpacity style={styles.routesButton} onPress={openMapsApp}>
            <Text style={styles.buttonText}>Rotas</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7DC60F', 
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#07790C',  
    marginTop: '20%',
    textAlign: 'center',  
  },
  subtitleContainer: {
    marginBottom: 10,
    marginTop: 15
  },
  subtitle: {
    fontSize: 16,
    color: '#07790C',
    textAlign: 'center',
  },
  map: {
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').height / 1.95,
    borderRadius: 10,
    marginTop: '3%', 
    marginLeft: 10,  
  },
  infoBox: {
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    margin: 10,
    marginTop: '3%', 
  },
  infoTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5,
    color: "#333333"
  },
  infoSubTitle: {
    fontSize: 15,
    fontWeight: 'medium',
    color: "#333333"
  },
  routesButton: {
    marginTop: 10,
    backgroundColor: '#07790C',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default PontosDeColeta;