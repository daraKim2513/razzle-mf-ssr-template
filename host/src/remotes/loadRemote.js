export async function loadRemoteComponent(remoteName, exposedModule) {
  // 1) 공유 스코프 초기화
  await __webpack_init_sharing__('default');
  // 2) Remote 컨테이너 참조
  const container = window[remoteName];
  // 3) 공유 모듈 스코프 연결
  await container.init(__webpack_share_scopes__.default);
  // 4) 실제 팩토리 함수 가져오기
  const factory = await container.get(exposedModule);
  // 5) 컴포넌트 반환
  return factory();
}