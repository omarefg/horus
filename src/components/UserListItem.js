import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { setUserDetails } from '../store/user/user.actions';
import { userDetails } from '../config/paths';
import { getSpacing } from '../styles/spacing';
import { text, background } from '../styles/palette';

const UserListItem = ({ item }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(setUserDetails({ userDetails: item }));
    navigation.navigate(userDetails);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.item}>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.text}>Ver más</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    marginVertical: getSpacing(0.5),
    paddingVertical: getSpacing(1.5),
    paddingHorizontal: getSpacing(),
    borderRadius: getSpacing(0.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: text,
  },
  text: {
    color: background,
    shadowColor: background,
  },
});

UserListItem.propTypes = {
  item: PropTypes.shape({}).isRequired,
};

export default UserListItem;
