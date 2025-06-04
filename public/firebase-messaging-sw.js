importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js");

const firebaseConfig = {
  apiKey: "NEXT_PUBLIC_FIREBASE_API_KEY",
  authDomain: "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN",
  projectId: "NEXT_PUBLIC_FIREBASE_PROJECT_ID",
  messagingSenderId: "NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID",
  appId: "NEXT_PUBLIC_FIREBASE_APP_ID",
  measurementId: "NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID",
};

// 모든 설정이 제대로 로드되었는지 확인
if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
  console.error("Firebase configuration is incomplete in firebase-messaging-sw.js");
  // 필요한 경우 서비스 워커 등록을 중단하거나 오류 처리
} else {
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

  messaging.onBackgroundMessage((payload) => {
    console.log("[firebase-messaging-sw.js] 백그라운드 메시지 수신:", payload);

    const notificationTitle = payload.notification.title || "알림";
    const notificationOptions = {
      body: payload.notification.body || "새로운 메시지가 도착했습니다.",
      // icon: "/firebase-logo.png", // public 폴더에 적절한 아이콘 이미지 준비
      data: payload.data, // 추가 데이터
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
  });
}
