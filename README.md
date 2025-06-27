| 항목 | Razzle | Modern.js |
| --- | --- | --- |
| **Module Federation 지원** | • Webpack 4 기반으로 Module Federation 공식 지원 없음• 4.x 베타만 Webpack 5 지원 → 불안정 | • Webpack 5 기반 공식 플러그인 내장 (`moduleFederation` 옵션)• 설정 한 번으로 바로 사용 가능 |
| **MFE 오케스트레이션 도구** | • 배포·버전 관리·모니터링·로그 등 통합 기능 부재• 각 팀이 개별 CI 스크립트 수작업 필요 | • 플러그인 아키텍처로 multi-entry/remote 자동 관리• `modern start` 등 CLI로 손쉬운 통합 배포 |
| **SSR + MFE 통합 편의성** | • 기본 SSR 핸들러는 단일 앱 전용• `loadRemote` 등 커스텀 코드 작성·polyfill 필요 | • SSR/CSR/MFE가 하나의 런타임으로 결합• `modern.config.ts`에 `moduleFederation`만 선언하면 SSR에도 자동 적용 |
| **공유 의존성 관리** | • React·react-dom 싱글톤 공유 수동 설정• `requiredVersion`·`eager` 옵션 직접 튜닝 | • 자동 버전 검증·싱글톤/이거 옵션 제공• 충돌 예방 로직 내장 |
| **생태계·문서·사례** | • MFE 사례·공식 가이드·샘플 거의 전무• 개인 블로그 의존도가 높아 학습 곡선 가파름 | • 바이트댄스 주도로 MFE 튜토리얼·샘플 활성화• 글로벌 프로젝트 도입 사례 증가 |

| 이유 | 설명 | 결과/영향 |
| --- | --- | --- |
| Module Federation 공식 지원 부족 | Razzle 3.x는 Webpack 4 기반, 4.x는 베타 상태로만 MF 지원 → 매번 수동 설정 필요 | 설정 복잡↑, 안정성·호환성 리스크 |
| MFE 운영·배포 오케스트레이션 부재 | 배포 파이프라인·버전 관리·모니터링·로그 등 MFE 운영용 기능 내장 없음 | 운영비용·유지보수 부담↑ |
| SSR + MFE 통합 복잡도 | Razzle 기본 SSR 핸들러는 단일 앱용 → remote 컴포넌트 SSR 조립 로직 직접 구현해야 함 | 커스텀 코드·폴리필 필요, 오류 가능성↑ |
| 공유 의존성 관리 불완전 | React·react-dom 싱글톤 공유는 Webpack 5 전용 옵션 필요 → Razzle 3.x/4.x 둘 다 버전 호환 문제 발생 | 번들 중복·버전 충돌↑, 번들 크기 증가 |
| 생태계·문서화 부족 | MFE 예제·공식 가이드·플러그인·커뮤니티 사례 거의 전무 → 신규 팀원 학습 곡선 가파름, 자체 템플릿 제작 필요 | 도입 초기 리스크↑, 외부 지원·참고자료 부족 |
