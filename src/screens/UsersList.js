import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { View, FlatList, StyleSheet } from 'react-native';
import UserListItem from '../components/UserListItem';

import { getAll } from '../store/user/user.selectors';
import { getAllUsers } from '../store/user/user.actions';
import { getSpacing } from '../styles/spacing';

const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector(getAll);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserListItem item={item} />}
        keyExtractor={item => String(item.id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: getSpacing(2),
  },
});

export default UsersList;
