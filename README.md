# Virtual Restaurant Management System

A comprehensive React web application built with TypeScript, Tailwind CSS, and Firebase that simulates complete restaurant operations with role-based access for different staff members.

## 🍽️ Overview

This system provides a digital platform for managing restaurant workflows, including order processing, food preparation coordination, payment handling, inventory management, and staff oversight. It ensures efficient coordination between front-of-house and back-of-house teams, tracks performance metrics, and maintains transparency.

## ✨ Features

### 🏗️ **Complete Restaurant Management**
- **Real-time Order Processing**: Live order tracking with status updates
- **Role-based Access Control**: Six distinct user roles with specific permissions
- **Firebase Integration**: Real-time data synchronization and authentication
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

### 👥 **User Roles & Responsibilities**

#### **Manager**
- **Dashboard**: Key metrics, sales charts, and popular items analysis
- **Menu Management**: Add/edit menu items with categories (Food-Butcher, Food-Kitchen-Only, Drink, Dessert)
- **Inventory Management**: Track stock levels with low/medium/in-stock indicators
- **Staff Management**: Add/edit staff, assign roles, confirm user registrations
- **Analytics**: View activity history across all roles with search/filter capabilities

#### **Waiter**
- **Table Management**: View table availability and select tables for orders
- **Order Creation**: Browse menu, add items to cart, submit orders
- **Order Tracking**: View active orders, pick up ready orders, process payments
- **Customer Service**: Handle billing and payment processing (cash/mobile banking)

#### **Cashier**
- **Payment Confirmation**: Verify and confirm payments from waiters
- **Financial Tracking**: Monitor transaction history and payment methods
- **Mobile Payment Approval**: Review and approve mobile banking payment proofs

#### **Kitchen Staff**
- **Production Management**: View aggregated item counts and order queue
- **Order Coordination**: Mark orders as ready, coordinate with butcher/bar
- **Time Tracking**: Monitor preparation times with built-in timers
- **Dependency Management**: Handle butcher/bar completion dependencies

#### **Butcher**
- **Meat Preparation**: View meat-based items requiring preparation
- **Production Queue**: Accordion view grouped by item type
- **Quality Control**: Mark items as prepped when completed
- **Inventory Impact**: Automatic inventory deduction upon completion

#### **Bar**
- **Drink Preparation**: Manage beverage orders and preparation queue
- **Real-time Updates**: Instant notifications when orders are ready
- **Coordination**: Seamless integration with kitchen workflow
- **Efficiency Tracking**: Monitor preparation times and performance

## 🚀 **Technology Stack**

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Backend**: Firebase (Firestore + Authentication + Storage)
- **Build Tool**: Vite
- **State Management**: React hooks + Firebase real-time listeners
- **UI Components**: Custom component library with accessibility features

## 📋 **Prerequisites**

Before running this application, make sure you have:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Firebase account** with a new project set up

## 🛠️ **Installation & Setup**

### 1. **Clone the Repository**
```bash
git clone <repository-url>
cd virtual-restaurant-management
```

### 2. **Install Dependencies**
```bash
npm install
```

### 3. **Firebase Configuration**

#### Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable the following services:
   - **Authentication** (Email/Password)
   - **Firestore Database**
   - **Storage**

#### Configure Firestore Security Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Staff collection - readable by authenticated users, writable by managers
    match /staff/{email} {
      allow read: if request.auth != null;
      allow write: if request.auth.token.role == 'manager';
    }
    
    // Orders collection - based on user role
    match /orders/{orderId} {
      allow read, write: if request.auth != null;
    }
    
    // Menu collection - readable by all, writable by managers
    match /menu/{itemId} {
      allow read: if true;
      allow write: if request.auth.token.role == 'manager';
    }
    
    // Inventory collection - readable by staff, writable by managers
    match /inventory/{itemId} {
      allow read: if request.auth != null;
      allow write: if request.auth.token.role == 'manager';
    }
    
    // Activity log - readable by managers
    match /activity/{activityId} {
      allow read: if request.auth.token.role == 'manager';
      allow write: if request.auth != null;
    }
  }
}
```

#### Configure Authentication
1. Go to Authentication > Sign-in method
2. Enable **Email/Password** provider
3. Optionally enable **Google** provider

#### Configure Storage Rules
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /payment-proofs/{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### 4. **Environment Variables**

Create a `.env.local` file in the root directory:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 5. **Firebase Project Setup**

#### Required Collections Structure:

**staff** collection:
```json
{
  "email": "manager@restaurant.com",
  "name": "Restaurant Manager",
  "role": "manager",
  "status": "approved"
}
```

**menu** collection:
```json
{
  "name": "Grilled Steak",
  "price": 25.99,
  "category": "Food-Butcher",
  "inventoryRequirements": []
}
```

**inventory** collection:
```json
{
  "name": "Beef Sirloin",
  "quantity": 50,
  "threshold": 10,
  "unit": "pieces"
}
```

## 🚀 **Running the Application**

### Development Mode
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build
```bash
npm run build
npm run preview
```

## 👤 **Default User Accounts**

Create these accounts in Firebase Authentication and corresponding staff records:

### Manager Account
- **Email**: `manager@restaurant.com`
- **Role**: manager
- **Status**: approved

### Waiter Account
- **Email**: `waiter@restaurant.com`
- **Role**: waiter
- **Status**: approved

### Kitchen Staff
- **Email**: `kitchen@restaurant.com`
- **Role**: kitchen
- **Status**: approved

### Additional roles available:
- `cashier@restaurant.com` (cashier)
- `butcher@restaurant.com` (butcher)
- `bar@restaurant.com` (bar)

## 📱 **Usage Workflow**

1. **Login**: Staff members log in with role-specific email addresses
2. **Table Selection**: Waiters select available tables to start new orders
3. **Order Creation**: Browse menu, add items to cart, submit orders
4. **Kitchen Processing**: Orders are automatically routed to appropriate workstations
5. **Preparation**: Butcher, Bar, and Kitchen staff prepare items concurrently
6. **Quality Check**: Kitchen marks orders as ready when all dependencies are met
7. **Pickup**: Waiters receive notifications and pick up ready orders
8. **Payment**: Process payments (cash or mobile banking) with cashier confirmation
9. **Completion**: Order status updates and table becomes available

## 🔧 **Development**

### Project Structure
```
src/
├── components/          # React components
│   ├── manager/        # Manager-specific components
│   ├── waiter/         # Waiter-specific components
│   ├── kitchen/        # Kitchen staff components
│   ├── cashier/        # Cashier components
│   ├── butcher/        # Butcher components
│   ├── bar/            # Bar staff components
│   └── ui/             # Reusable UI components
├── firebase.ts         # Firebase configuration
├── App.tsx             # Main application component
└── main.tsx            # Application entry point
```

### Key Features Implementation
- **Real-time Updates**: Firestore onSnapshot listeners for live data
- **Role-based Routing**: Dynamic component rendering based on user roles
- **State Management**: React hooks with Firebase integration
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Error Handling**: Comprehensive error boundaries and user feedback

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 **Support**

If you encounter any issues or have questions:

1. Check the [Issues](../../issues) section
2. Review the Firebase documentation
3. Ensure all environment variables are correctly configured
4. Verify Firebase security rules are properly set up

## 🎯 **Future Enhancements**

- **Mobile App**: React Native version for native iOS/Android
- **Advanced Analytics**: Sales forecasting and trend analysis
- **Integration**: POS system integration and payment gateways
- **Multi-location**: Support for multiple restaurant locations
- **Inventory Forecasting**: AI-powered inventory predictions
- **Customer App**: Customer-facing ordering interface

---

**Built with ❤️ for restaurant management efficiency**