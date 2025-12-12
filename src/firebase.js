// firebase.js - HEXLink Firebase 초기화 (compat SDK)
// 중복 초기화 방지
(function () {
  if (window._FirebaseInitDone) return;
  window._FirebaseInitDone = true;

  const firebaseConfig = {
    apiKey: "AIzaSyA4GOMbPawrjHCzm8Ux9-rNLwx5m26Y138",
    authDomain: "hextoken-27851.firebaseapp.com",
    projectId: "hextoken-27851",
    storageBucket: "hextoken-27851.appspot.com",
    messagingSenderId: "718442694433",
    appId: "1:718442694433:web:50e01b244f838e8e3b2060",
    measurementId: "G-JYZ6QMDPSP",

    // 여기 반드시 “Realtime Database 콘솔에 표시된 URL 그대로” 넣어야 합니다.
    // 지금 firebaseio.com이 맞을 수도 있지만, 요즘은 firebasedatabase.app (region 포함)인 경우가 많습니다.
    // 예: https://hextoken-27851-default-rtdb.asia-southeast1.firebasedatabase.app
    databaseURL: "https://hextoken-27851-default-rtdb.firebaseio.com"
  };

  try {
    if (!window.firebase) {
      console.error("firebase SDK가 로드되지 않았습니다. firebase-app-compat.js 스크립트 순서를 확인하세요.");
      return;
    }

    const app = firebase.initializeApp(firebaseConfig);

    window.firebaseApp = app;
    window.auth = firebase.auth();
    window.db = firebase.database();

    console.log("Firebase compat init OK", firebase.apps.length, firebaseConfig.databaseURL);
  } catch (e) {
    console.error("Firebase init 실패:", e);
  }
})();
