# 송호영 · AI Service Portfolio

사용자를 설득하는 수익의 흐름을 만드는 AI 서비스 개발자 송호영의 발표형 포트폴리오입니다.

- 사이트: https://theshy3819.github.io/ai-portfolio/
- 구성(16장): 프로필 · 숫자로 보는 이력 · 핵심 역량 · 광고 실무 · 프로젝트(Lumi · COSMOS · 주만추)와 구조도 · 기술 스택 · AI 사업 기여 방향
- 넘기기: `→` · 스페이스 · 클릭 = 다음 단계, `←` · 화면 왼쪽 클릭 = 이전, `T` = 다크 모드, `F` = 전체 화면
- 주소 끝에 `#7`을 붙이면 7장부터 열립니다. `?static`은 연출 없이 끝 상태로 보여 줍니다(인쇄·PDF용).

## 고치기

`index.html` 한 파일에 내용과 연출이 함께 있습니다. 빌드가 필요 없어 그대로 열거나 아래처럼 띄워 봅니다.

```bash
python -m http.server 5175
```

- 장마다 `data-step="n"`인 요소가 n번째 클릭에 나타나고, `data-fx`로 연출(rise · tilt · flip · pop · draw · rows …)을 고릅니다.
- `data-count`는 숫자가 0부터 올라가고, `data-grow="x"`는 막대가 왼쪽부터 자랍니다.
- 기술 로고는 `data-ic="vue"`처럼 이름만 적으면 `assets/icons.js`(simple-icons · lucide)에서 그려 넣습니다.
- `main`에 올리면 GitHub Actions가 Pages로 자동 배포합니다.

이전 A4 가로판(Vue 3 + Vite)은 `a4-vue` 브랜치와 `v1-a4` 태그에 남아 있습니다.
