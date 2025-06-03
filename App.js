import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Auth Screens
import Login from './src/screens/auth/Login';
import Register from './src/screens/auth/Register';

// User Screens
import Home from './src/screens/user/Home';
import ProductDetails from './src/screens/user/ProductDetails';
import Cart from './src/screens/user/Cart';
import Orders from './src/screens/user/Orders';

// Admin Screens
import AdminDashboard from './src/screens/admin/Dashboard';
import ProductManagement from './src/screens/admin/ProductManagement';
import UserManagement from './src/screens/admin/UserManagement';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
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
          name="Home"
          component={Home}
          options={{ title: 'AgroMart' }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{ title: 'Product Details' }}
        />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Orders" component={Orders} />

        {/* Admin Stack */}
        <Stack.Screen
          name="AdminDashboard"
          component={AdminDashboard}
          options={{ title: 'Admin Dashboard' }}
        />
        <Stack.Screen
          name="ProductManagement"
          component={ProductManagement}
          options={{ title: 'Manage Products' }}
        />
        <Stack.Screen
          name="UserManagement"
          component={UserManagement}
          options={{ title: 'Manage Users' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App; 