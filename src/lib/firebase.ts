import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_PROJECT_ID,
  FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID,
  FIREBASE_VAPID_KEY,
} from "@/config/env";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID,
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);

// Messaging 서비스 가져오기 (클라이언트 환경에서만)
const messaging = typeof window !== "undefined" ? getMessaging(app) : null;

export const requestForToken = async () => {
  if (!messaging) return;
  try {
    const token = await getToken(messaging, {
      vapidKey: FIREBASE_VAPID_KEY,
    });
    if (token) {
      // 토큰을 서버(DB)에 저장
      console.log("FCM Token:", token);
    }
  } catch (error) {
    console.error("토큰을 가져오는 중 오류 발생:", error);
  }
};

export { app, messaging, getToken, onMessage };
