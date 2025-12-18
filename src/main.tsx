
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";
  import { getFcmToken, onForegroundMessage } from "./firebase";
  
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").then((reg) => {
      console.log("Service worker registered:", reg);
    });
  }
  
  // Request FCM token and register for push notifications
  getFcmToken().then((token) => {
    if (token) {
      console.log("FCM token:", token);
    } else {
      console.warn("Failed to get FCM token");
    }
  });
  
  // Handle foreground messages (when app is focused)
  onForegroundMessage((payload) => {
    console.log("Foreground message received:", payload);
    // Add your custom handling logic here
  });

  createRoot(document.getElementById("root")!).render(<App />);
  