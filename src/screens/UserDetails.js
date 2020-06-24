import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { View, Text, StyleSheet } from 'react-native';

import { getUserDetails } from '../store/user/user.selectors';
import { setUserDetails } from '../store/user/user.actions';
import { getSpacing } from '../styles/spacing';
import { primary } from '../styles/palette';

const UserDetails = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector(getUserDetails);

  useEffect(() => {
    return () => {
      dispatch(setUserDetails({ userDetails: [] }));
    };
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {userDetails.map(({ label, value }) => {
        return (
          <View style={styles.field} key={label}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: getSpacing(2),
  },
  field: {
    marginVertical: getSpacing(1),
    paddingVertical: getSpacing(1),
    borderBottomColor: primary,
    borderBottomWidth: 1,
  },
  label: {
    marginBottom: getSpacing(),
    fontSize: getSpacing(2),
    color: primary,
    fontWeight: 'bold',
  },
  value: {
    fontSize: getSpacing(2),
  },
});

export default UserDetails;
