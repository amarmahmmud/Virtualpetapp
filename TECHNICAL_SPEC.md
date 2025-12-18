# Tech Spec: Virtual Restaurant App (React Native)

## 1. Overview
Rebuild the Virtual Restaurant Management System as a native mobile app (Android/iOS) using React Native (Expo). It's a role-based platform for restaurant workflows.

## 2. Tech Stack
- **Framework**: React Native (Expo)
- **Language**: TypeScript
- **State**: React Context + Hooks
- **Nav**: React Navigation (Stack + Bottom Tabs)
- **UI**: React Native Paper/NativeBase
- **Backend**: Firebase (Auth, Firestore, Storage)

## 3. Roles & Screens
- **Manager**: Dashboard, Menu, Inventory, Staff, History
- **Waiter**: Tables, New Order, My Orders, Ready Orders
- **Cashier**: Pending Confirmations, History
- **Kitchen**: Order Queue, Production Summary
- **Butcher**: Meat Queue, Production Summary
- **Bar**: Drink Queue, Production Summary

## 4. Data Models (Firestore)
- **`staff`**: `email` (ID), `name`, `role` ("manager"|"waiter"|"cashier"|"kitchen"|"butcher"|"bar"), `status`
- **`menu`**: `name`, `price`, `category` ("Food-Butcher"|"Food-Kitchen-Only"|"Drinks"|"Dessert"), `inventoryRequirements` [{inventoryId, quantity}]
- **`inventory`**: `name`, `quantity`, `unit`, `threshold`
- **`orders`**: `orderNumber`, `tableNumber`, `status` ("pending"|"in-kitchen"|"at-bar"|"ready"|"picked"|"paid"|"confirmed"), `items` [{name, quantity, price, status}], `createdAt`, `waiterId`, `paymentMethod`, `paymentImageUrl`
- **`tables`**: `number`, `status` ("available"|"occupied")

## 5. Workflows
### Order Lifecycle
1. **Creation**: Waiter selects Table -> Adds Items -> Submits. Creates `orders` doc, updates `tables` to "occupied".
2. **Prep**:
   - **Butcher**: "Food-Butcher" items. Marks "Prepped".
   - **Bar**: "Drinks". Marks "Ready".
   - **Kitchen**: All food. Waits for Butcher. Marks "Ready for Pickup".
3. **Pickup**: Waiter gets alert. Marks "Picked".
4. **Payment**: Waiter marks "Paid" (Cash/Mobile). Mobile uploads screenshot to Storage.
5. **Confirm**: Cashier verifies. Marks "Confirmed". Table becomes "available".

### Inventory
- **Deduction**: On order submit, deduct based on `inventoryRequirements`.
- **Restock**: Manager updates quantity.
- **Alerts**: Low stock alerts on Dashboard.

## 6. Mobile Requirements
- **Nav**: Auth Stack (Login) -> Main Stack (Role-based Tabs).
- **UI**: Touch-friendly, Pull-to-Refresh, Camera for receipts.
- **Logic**: Reuse business logic from web app (order transitions, inventory checks).
- **Components**: Use `View`, `Text`, `TouchableOpacity`, `FlatList`.
- **Styles**: `StyleSheet` or NativeWind.