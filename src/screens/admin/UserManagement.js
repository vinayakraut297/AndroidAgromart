import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import firestore from '@react-native-firebase/firestore';

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('users')
      .onSnapshot(querySnapshot => {
        const usersList = [];
        querySnapshot.forEach(doc => {
          usersList.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setUsers(usersList);
      });

    return () => subscriber();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      await firestore().collection('users').doc(userId).delete();
      Alert.alert('Success', 'User deleted successfully');
    } catch (error) {
      Alert.alert('Error', 'Failed to delete user');
    }
  };

  const handleToggleAdmin = async (user) => {
    try {
      await firestore()
        .collection('users')
        .doc(user.id)
        .update({
          isAdmin: !user.isAdmin,
        });
      Alert.alert('Success', `User is now ${!user.isAdmin ? 'an admin' : 'a regular user'}`);
    } catch (error) {
      Alert.alert('Error', 'Failed to update user role');
    }
  };

  const renderUser = ({ item }) => (
    <View style={styles.userCard}>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.userEmail}>{item.email}</Text>
        <Text style={styles.userPhone}>{item.phone}</Text>
        <View style={styles.roleContainer}>
          <Text style={[styles.userRole, item.isAdmin && styles.adminRole]}>
            {item.isAdmin ? 'Admin' : 'User'}
          </Text>
        </View>
      </View>
      <View style={styles.actionButtons}>
        <TouchableOpacity
          onPress={() => {
            Alert.alert(
              'Change Role',
              `Are you sure you want to make this user ${
                item.isAdmin ? 'a regular user' : 'an admin'
              }?`,
              [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Confirm', onPress: () => handleToggleAdmin(item) },
              ],
            );
          }}
          style={[styles.actionButton, styles.roleButton]}>
          <Icon
            name={item.isAdmin ? 'person' : 'admin-panel-settings'}
            size={20}
            color="#2E7D32"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Alert.alert(
              'Delete User',
              'Are you sure you want to delete this user?',
              [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Delete', onPress: () => handleDeleteUser(item.id) },
              ],
            );
          }}
          style={[styles.actionButton, styles.deleteButton]}>
          <Icon name="delete" size={20} color="#D32F2F" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>User Management</Text>
        <Text style={styles.userCount}>{users.length} Users</Text>
      </View>

      <FlatList
        data={users}
        renderItem={renderUser}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.userList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  userCount: {
    fontSize: 16,
    color: '#666',
  },
  userList: {
    padding: 15,
  },
  userCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    padding: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  userEmail: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  userPhone: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  roleContainer: {
    marginTop: 8,
  },
  userRole: {
    fontSize: 14,
    color: '#666',
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  adminRole: {
    backgroundColor: '#E8F5E9',
    color: '#2E7D32',
  },
  actionButtons: {
    justifyContent: 'space-around',
  },
  actionButton: {
    padding: 8,
    borderRadius: 5,
    marginVertical: 5,
  },
  roleButton: {
    backgroundColor: '#E8F5E9',
  },
  deleteButton: {
    backgroundColor: '#FFEBEE',
  },
});

export default UserManagement; 