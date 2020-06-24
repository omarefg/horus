import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  PermissionsAndroid,
  Dimensions,
} from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import { location } from '../config/permissions';
import { getActualTime } from '../utils/time';

const { width, height } = Dimensions.get('window');

import { text } from '../styles/palette';
import { getSpacing } from '../styles/spacing';

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Home = () => {
  const [userLocation, setUserLocation] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  const [time, setTime] = useState(getActualTime());

  const handleSetLocation = () => {
    Geolocation.watchPosition(
      ({ coords: { latitude, longitude } }) => {
        setUserLocation(prevState => ({ ...prevState, latitude, longitude }));
      },
      error => console.log(error),
    );
  };

  useEffect(() => {
    const interval = setInterval(() => setTime(getActualTime(), 1000));
    handleSetLocation();
    return () => {
      clearInterval(interval);
    };
  }, []);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        location,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        handleSetLocation();
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Hola! Llegas a tiempo, son las {time}</Text>
      <MapView
        initialRegion={userLocation}
        style={styles.map}
        showsUserLocation
      />
      <Button
        color={text}
        onPress={requestCameraPermission}
        title="Mostrar mi ubicación"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: getSpacing(2),
    marginBottom: getSpacing(2),
  },
  title: {
    fontSize: getSpacing(4),
    color: text,
  },
  map: {
    width: '100%',
    height: 400,
  },
});

export default Home;
