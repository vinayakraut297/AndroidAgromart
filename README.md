# AgroMart - Farming Medicine E-commerce App

AgroMart is a React Native e-commerce application designed for buying and selling farming medicines and agricultural products. The app features separate interfaces for users and administrators, making it easy to manage products, users, and orders.

## Features

### User Features
- User authentication (Login/Register)
- Browse farming medicines and products
- Search products by name
- View product details
- Add products to cart
- Place orders
- View order history

### Admin Features
- Admin dashboard with statistics
- Product management (Add, Edit, Delete)
- User management
- View and manage orders
- Toggle user roles (Admin/User)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or later)
- npm or yarn
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)
- Firebase account

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd agromart
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up Firebase:
   - Create a new Firebase project
   - Enable Authentication (Email/Password)
   - Create Cloud Firestore database
   - Download and add your Firebase configuration

4. Run the application:

For Android:
```bash
npx react-native run-android
```

For iOS:
```bash
cd ios && pod install
cd ..
npx react-native run-ios
```

## Project Structure

```
src/
├── screens/
│   ├── auth/
│   │   ├── Login.js
│   │   └── Register.js
│   ├── user/
│   │   ├── Home.js
│   │   ├── ProductDetails.js
│   │   ├── Cart.js
│   │   └── Orders.js
│   └── admin/
│       ├── Dashboard.js
│       ├── ProductManagement.js
│       └── UserManagement.js
├── navigation/
│   └── AppNavigator.js
└── components/
    └── (shared components)
```

## Technologies Used

- React Native
- Firebase (Authentication, Firestore)
- React Navigation
- React Native Vector Icons

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@agromart.com or create an issue in the repository. # AndroidAgromart
