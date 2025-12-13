# Technical Specification: Virtual Restaurant Management System (Mobile App)

## 1. Overview
This document outlines the technical specifications for rebuilding the Virtual Restaurant Management System as a native mobile application (Android/iOS) using React Native. The system is a role-based restaurant management platform that handles orders, inventory, staff, and kitchen workflows.

## 2. Architecture & Tech Stack

### Core Technology
- **Framework**: React Native (Expo recommended for ease of development)
- **Language**: TypeScript
- **State Management**: React Context API + Hooks
- **Navigation**: React Navigation (Stack + Bottom Tabs)
- **UI Library**: React Native Paper or NativeBase (to match shadcn/ui aesthetic)

### Backend Services (Firebase)
- **Authentication**: Firebase Auth (Email/Password)
- **Database**: Cloud Firestore (Real-time updates)
- **Storage**: Firebase Storage (Payment proofs, menu images)

## 3. User Roles & Permissions

The app must support 6 distinct roles, determined by the `role` field in the `staff` collection.

| Role | Key Responsibilities | Primary Screens |
|------|----------------------|-----------------|
| **Manager** | Oversight, Admin | Dashboard, Menu Mgmt, Inventory, Staff Mgmt, History |
| **Waiter** | Orders, Tables | Table Map, New Order, My Orders, Ready Orders |
| **Cashier** | Payments | Pending Confirmations, Transaction History |
| **Kitchen** | Cooking | Order Queue, Production Summary |
| **Butcher** | Meat Prep | Meat Queue, Production Summary |
| **Bar** | Drinks | Drink Queue, Production Summary |

## 4. Data Models (Firestore Schema)

### `staff` Collection
- `email` (ID): string
- `name`: string
- `role`: "manager" | "waiter" | "cashier" | "kitchen" | "butcher" | "bar"
- `status`: "pending" | "approved"

### `menu` Collection
- `name`: string
- `price`: number
- `category`: "Food-Butcher" | "Food-Kitchen-Only" | "Drinks" | "Dessert"
- `inventoryRequirements`: Array<{ inventoryId, quantity }>

### `inventory` Collection
- `name`: string
- `quantity`: number
- `unit`: string
- `threshold`: number (Low stock alert level)

### `orders` Collection
- `orderNumber`: number (Daily sequential)
- `tableNumber`: number
- `status`: "pending" | "in-kitchen" | "at-bar" | "ready" | "picked" | "paid" | "confirmed"
- `items`: Array<{ name, quantity, price, status }>
- `createdAt`: Timestamp
- `waiterId`: string
- `paymentMethod`: "cash" | "mobile" (optional)
- `paymentImageUrl`: string (optional)

### `tables` Collection
- `number`: number
- `status`: "available" | "occupied"

## 5. Key Workflows

### A. Order Lifecycle
1. **Creation**: Waiter selects Table -> Adds Items -> Submits.
   - *System Action*: Creates `orders` doc, updates `tables` status to "occupied".
   - *Routing*: Items routed to Kitchen/Bar/Butcher based on category.
2. **Preparation**:
   - **Butcher**: Sees "Food-Butcher" items. Marks as "Prepped".
   - **Bar**: Sees "Drinks". Marks as "Ready".
   - **Kitchen**: Sees all food. Waits for Butcher if needed. Marks order as "Ready for Pickup".
3. **Pickup**: Waiter gets notification. Marks as "Picked".
4. **Payment**: Waiter marks as "Paid" (Cash/Mobile).
   - If Mobile: Uploads screenshot to Firebase Storage.
5. **Confirmation**: Cashier verifies payment. Marks as "Confirmed".
   - *System Action*: Table status updates to "available".

### B. Inventory Management
- **Deduction**: When order is submitted, inventory is deducted based on `inventoryRequirements`.
- **Restock**: Manager manually updates quantity in Inventory screen.
- **Alerts**: Low stock alerts shown on Manager Dashboard.

## 6. Mobile-Specific Requirements

### Navigation Structure
- **Auth Stack**: Login Screen
- **Main Stack**:
  - **Manager Tabs**: Dashboard, Menu, Inventory, Staff
  - **Waiter Tabs**: Tables, Ready, My Orders
  - **Cashier Tabs**: Pending, History
  - **Kitchen/Bar/Butcher**: Single Workstation View

### UI/UX Adaptations
- **Touch Interactions**: Large buttons for kitchen staff.
- **Pull-to-Refresh**: For manual data sync (though real-time listeners are preferred).
- **Camera Integration**: For Waiters to take photos of mobile payment receipts.
- **Push Notifications**: (Optional) For "Order Ready" alerts.

## 7. Implementation Guidelines for AI

1. **Reuse Logic**: The business logic in `App.tsx` (web) regarding order status transitions and inventory checks should be preserved.
2. **Component Adaptation**:
   - Convert `div` -> `View`
   - Convert `span`/`p` -> `Text`
   - Convert `button` -> `TouchableOpacity` or `Pressable`
   - Use `FlatList` for long lists (Orders, Inventory).
3. **Styling**: Use `StyleSheet.create` or a utility-first library like `NativeWind` (Tailwind for RN).

## 8. Assets & Resources
- **Icons**: Use `lucide-react-native` or `@expo/vector-icons`.
- **Images**: Use standard React Native `Image` component.