import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Auth Screens
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';

// User Screens
import Home from '../screens/user/Home';
import ProductDetails from '../screens/user/ProductDetails';
import Cart from '../screens/user/Cart';
import Orders from '../screens/user/Orders';

// Admin Screens
import Dashboard from '../screens/admin/Dashboard';
import ProductManagement from '../screens/admin/ProductManagement';
import UserManagement from '../screens/admin/UserManagement';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const UserTabs = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#2E7D32',
      tabBarInactiveTintColor: '#666',
      tabBarStyle: {
        borderTopWidth: 1,
        borderTopColor: '#eee',
      },
    }}>
    <Tab.Screen
      name="HomeTab"
      component={Home}
      options={{
        title: 'Home',
        tabBarIcon: ({ color }) => (
          <Icon name="home" size={24} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="CartTab"
      component={Cart}
      options={{
        title: 'Cart',
        tabBarIcon: ({ color }) => (
          <Icon name="shopping-cart" size={24} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="OrdersTab"
      component={Orders}
      options={{
        title: 'Orders',
        tabBarIcon: ({ color }) => (
          <Icon name="receipt" size={24} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

const AdminTabs = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#2E7D32',
      tabBarInactiveTintColor: '#666',
      tabBarStyle: {
        borderTopWidth: 1,
        borderTopColor: '#eee',
      },
    }}>
    <Tab.Screen
      name="DashboardTab"
      component={Dashboard}
      options={{
        title: 'Dashboard',
        tabBarIcon: ({ color }) => (
          <Icon name="dashboard" size={24} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="ProductsTab"
      component={ProductManagement}
      options={{
        title: 'Products',
        tabBarIcon: ({ color }) => (
          <Icon name="inventory" size={24} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="UsersTab"
      component={UserManagement}
      options={{
        title: 'Users',
        tabBarIcon: ({ color }) => (
          <Icon name="people" size={24} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2E7D32',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        {/* Auth Stack */}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />

        {/* User Stack */}
        <Stack.Screen
          name="UserHome"
          component={UserTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{ title: 'Product Details' }}
        />

        {/* Admin Stack */}
        <Stack.Screen
          name="AdminDashboard"
          component={AdminTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator; 