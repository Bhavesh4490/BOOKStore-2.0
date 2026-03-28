importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCcpG-oEqkDprgTwWXKt5CFsttjAQAZFNg",
  authDomain: "bookstore-6ab08.firebaseapp.com",
  projectId: "bookstore-6ab08",
  messagingSenderId: "102226032749",
  appId: "1:102226032749:web:f7090175d2e53c2f522764"
});

const messaging = firebase.messaging();

/* 🔔 BACKGROUND NOTIFICATION */
messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/logo.png"
  });
});
