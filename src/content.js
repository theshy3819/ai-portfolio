// AI 서비스·사업화 지원용 포트폴리오 내용. 이 파일만 고치면 사이트·인쇄물이 함께 바뀝니다.
// 프로젝트 내용은 각 저장소(주만추 · S15P11C201 · S15P21C205)의 본인 커밋·코드와 팀 발표 자료에서 확인한 사실만 담았습니다.
// 화면 이미지: src/assets/shots/ 에 파일을 넣고 hero.file 또는 ux[].file 에 파일 이름을 적습니다.

export const meta = {
  "name": "송호영",
  "nameEn": "Song Hoyoung",
  "role": "AI Service Developer",
  "date": "2026.10"
}

export const contact = {
  "phone": "010-8209-1619",
  "email": "shy3819@naver.com",
  "github": "github.com/theshy3819",
  // 마지막 쪽 큰 문장 — 한 줄씩
  "closing": ["끝까지 봐 주셔서", "감사합니다."]
}

export const profile = {
  "role": "AI Service Developer",
  "catchphrase": "기술을 구현하고, 사업으로 연결합니다",
  "intro_headline": "광고 현장을 아는 AI 서비스 개발자",
  "intro": ""
}

export const history = {
  "awards": [
    {
      "when": "2026",
      "title": "2학기 공통 프로젝트 우수상",
      "org": "광주 2반 1등 · SSAFY · 프로젝트 Lumi"
    }
  ],
  "certificates": [
    {
      "kind": "국가기술자격",
      "name": "웹디자인기능사"
    },
    {
      "kind": "국가기술자격",
      "name": "컴퓨터그래픽스운용기능사"
    }
  ],
  "education": [
    {
      "when": "2026 ~ 현재",
      "title": "삼성 청년 SW·AI 아카데미(SSAFY) 15기",
      "sub": "이수 중"
    },
    {
      "when": "1년 3개월",
      "title": "YN컴퍼니 · 콘텐츠 마케팅 · 웹디자인",
      "sub": "광고대행사 경력"
    },
    {
      "when": "졸업",
      "title": "전남대학교 경제학과",
      "sub": ""
    }
  ]
}

// 개발자가 된 이유 (프로필 다음 쪽) — 3단계 흐름 + 웹디자인 작업 4건 (이미지: src/assets/shots/design-*.jpg)
export const story = {
  "headline": "광고 현장의 고객 이해를, 기술로 구현합니다",
  "steps": [
    {
      "tag": "광고대행사 · 1년 3개월",
      "title": "콘텐츠 마케팅 · 웹디자인",
      "text": "음식점·카페·펜션·웨딩홀 등 고객사의 블로그·SNS·배너·숏폼 콘텐츠를 기획하고 웹사이트를 디자인했습니다."
    },
    {
      "tag": "2026 · SSAFY 15기",
      "title": "AI · 웹 · 로봇 프로젝트",
      "text": "로봇 관제 웹(우수상), 빅데이터 기반 3D 시각화, AI 주식 추천 서비스를 팀으로 개발했습니다."
    },
    {
      "tag": "Now · AX 창업트랙",
      "title": "AI 서비스 사업화",
      "text": "SSAFY 창업트랙 팀 프로젝트(진행 중)에서 프론트엔드 개발과 추천 레이아웃 제작을 맡고 있습니다."
    }
  ],
  "works": [
    { "name": "모리프", "kind": "대표작 · 한의원", "file": "design-morif.jpg", "device": "web", "tint": "#c4122e" },
    { "name": "쏠테로", "kind": "모빌리티 · 모바일", "file": "design-soltero-phone.webp", "device": "mobile", "tint": "#5b7aa6" },
    { "name": "금다연", "kind": "한정식 레스토랑", "file": "design-geumdayeon.jpg", "device": "web", "tint": "#c8913a" },
    { "name": "메종드엘", "kind": "웨딩홀", "file": "design-maisondel.jpg", "device": "web", "tint": "#6fc24a" }
  ],
  "worksStat": "4 / 4",
  "worksNote": "디자인한 사이트 모두 업체 제작 수주"
}

export const strengths = {
  "id": "strengths",
  "label": "Strengths",
  "title": "핵심 역량",
  "lead": "현장의 요구를 이해하고, 직접 만들고, 설득력 있게 전달합니다",
  "items": [
    {
      "tag": "기술 구현",
      "title": "기획한 서비스를 직접 만듭니다",
      "lines": [
        "로봇 관제 웹을 혼자 개발 — Vue 대시보드부터 FastAPI 서버까지 (우수상)",
        "React·Three.js로 기업 관계 데이터를 3D로 시각화"
      ],
      "chips": [
        "Vue",
        "FastAPI",
        "React",
        "Docker"
      ]
    },
    {
      "tag": "AI 활용",
      "title": "AI 결과를 쓰기 쉬운 화면으로",
      "lines": [
        "AI가 분석한 기업 관계·근거 문장을 탐색 화면으로 (COSMOS)",
        "YOLO 인식 영상과 로봇 상태를 실시간 관제 화면으로 (Lumi)"
      ],
      "chips": [
        "AI 관계 분석",
        "YOLO",
        "LLM 리포트"
      ]
    },
    {
      "tag": "사업 이해",
      "title": "광고 실무로 고객과 시장을 압니다",
      "lines": [
        "광고대행사 1년 3개월 — 다양한 업종의 콘텐츠 기획·제작",
        "고객사 요구사항 분석과 제작물 기획, 광고 업무 흐름 이해"
      ],
      "chips": [
        "콘텐츠 마케팅",
        "SNS",
        "숏폼"
      ]
    },
    {
      "tag": "기획 · 발표",
      "title": "기술을 보이게 설명합니다",
      "lines": [
        "Figma로 UI/UX 설계 — 디자인한 웹사이트 4건 모두 제작 수주",
        "프로젝트 발표자료 기획·시각화, 영상 제작"
      ],
      "chips": [
        "Figma",
        "Photoshop",
        "Premiere Pro"
      ]
    }
  ]
}

export const vision = {
  "id": "vision",
  "label": "Vision",
  "title": "AI 사업에 기여할 방향",
  "lead": "광고 실무와 AI·웹·로봇 개발 경험을 연결한 제안입니다",
  "items": [
    {
      "tag": "제안 A",
      "title": "AI 광고 운영 자동화",
      "lines": [
        "콘텐츠 기획·제작·집행 지원·성과 보고를 잇는 업무 자동화",
        "반복 작업을 줄여 고객사에 빠르고 일관된 광고 운영 제공"
      ],
      "chips": [
        "광고 실무 경험",
        "웹 서비스 개발"
      ]
    },
    {
      "tag": "제안 B",
      "title": "사용자 중심 AI 영상 제작 서비스",
      "lines": [
        "목적·대상·스타일을 입력하면 제작 과정을 단계별로 지원",
        "요청 표준화 → AI 생성 → 검수·수정 요청까지 하나의 흐름으로"
      ],
      "chips": [
        "UI/UX 설계",
        "영상 제작"
      ]
    },
    {
      "tag": "제안 C",
      "title": "광주·전남 산업 특화 AI 콘텐츠",
      "lines": [
        "농산물·축산·수산·관광·소상공인 홍보 영상과 SNS 콘텐츠",
        "지역 기업의 디지털 홍보와 판로 확대 지원"
      ],
      "chips": [
        "지역 업종 콘텐츠 경험"
      ]
    },
    {
      "tag": "제안 D",
      "title": "산업용 AI·로봇 운영 소프트웨어",
      "lines": [
        "태양광·스마트팜 현장 장비의 상태 모니터링·관제 화면",
        "로봇과 웹을 잇는 서버·대시보드 경험을 현장 자동화로 확장"
      ],
      "chips": [
        "ROS2 연동 관제 웹",
        "WebSocket 실시간"
      ]
    }
  ],
  "note": "아이디어 단계의 제안이며, 실제 사업 범위는 함께 검토해 정합니다."
}

export const skills = [
  {
    "group": "Frontend",
    "items": [
      {
        "name": "TypeScript",
        "level": 3,
        "evidence": "COSMOS",
        "icon": "typescript"
      },
      {
        "name": "JavaScript",
        "level": 4,
        "evidence": "주만추 · Lumi",
        "icon": "javascript"
      },
      {
        "name": "React",
        "level": 3,
        "evidence": "COSMOS",
        "icon": "react"
      },
      {
        "name": "Vue.js · Pinia",
        "level": 4,
        "evidence": "Lumi · 주만추",
        "icon": "vue"
      },
      {
        "name": "Three.js",
        "level": 2,
        "evidence": "COSMOS (AI와 함께 구현)",
        "icon": "three"
      },
      {
        "name": "HTML · CSS",
        "level": 4,
        "evidence": "웹디자인기능사 · 전 프로젝트",
        "icon": "html"
      }
    ]
  },
  {
    "group": "Backend",
    "items": [
      {
        "name": "Python",
        "level": 3,
        "evidence": "Lumi 서버",
        "icon": "python"
      },
      {
        "name": "FastAPI",
        "level": 3,
        "evidence": "Lumi 서버",
        "icon": "fastapi"
      },
      {
        "name": "WebSocket",
        "level": 3,
        "evidence": "Lumi 실시간 화면",
        "icon": "websocket"
      },
      {
        "name": "SQLite",
        "level": 3,
        "evidence": "Lumi 서버",
        "icon": "sqlite"
      },
      {
        "name": "pytest",
        "level": 3,
        "evidence": "Lumi 서버 테스트",
        "icon": "pytest"
      },
      {
        "name": "Django",
        "level": 3,
        "evidence": "주만추 API 연동 · 학습",
        "icon": "django"
      }
    ]
  },
  {
    "group": "Data·Infra",
    "items": [
      {
        "name": "Git",
        "level": 3,
        "evidence": "모든 팀 프로젝트",
        "icon": "git"
      },
      {
        "name": "Vite",
        "level": 3,
        "evidence": "COSMOS · Lumi · 주만추",
        "icon": "vite"
      },
      {
        "name": "Docker",
        "level": 3,
        "evidence": "Lumi 웹 컨테이너",
        "icon": "docker"
      },
      {
        "name": "nginx",
        "level": 3,
        "evidence": "COSMOS · Lumi 배포",
        "icon": "nginx"
      },
      {
        "name": "AWS",
        "level": 2,
        "evidence": "EC2 배포 문서화",
        "icon": "cloud"
      },
      {
        "name": "PyTorch",
        "level": 1,
        "evidence": "학습 경험",
        "icon": "pytorch"
      }
    ]
  },
  {
    "group": "Design · Tools",
    "items": [
      {
        "name": "Figma",
        "level": 4,
        "evidence": "웹사이트 4건 · 모두 제작 수주",
        "icon": "figma"
      },
      {
        "name": "Photoshop",
        "level": 3,
        "evidence": "광고대행사 실무",
        "icon": "photoshop"
      },
      {
        "name": "Illustrator",
        "level": 3,
        "evidence": "광고대행사 실무",
        "icon": "illustrator"
      },
      {
        "name": "Premiere Pro",
        "level": 3,
        "evidence": "프로젝트 영상 제작 담당",
        "icon": "premiere"
      },
      {
        "name": "Jira",
        "level": 3,
        "evidence": "팀 프로젝트 이슈·일정 관리",
        "icon": "jira"
      }
    ]
  }
]

export const projects = [
  {
    "id": "lumi",
    "name": "Lumi",
    "icon": "lumi.png",
    "title": "저시력자 동행 로봇의 실시간 관제 웹",
    "period": "2026.07 ~ 2026.08 (4주)",
    "team": "6인 · ROS 2 · Embedded 2 · AI 1 · Web 1(본인)",
    "award": "SSAFY 2학기 공통 프로젝트 우수상 (광주 2반 1등)",
    "hero": {
      "layout": "web-art",
      "web": "lumi-hero.jpg",
      "art": "lumi-robot-flip.webp",
      "artAlt": "Lumi 보행 보조 로봇 일러스트",
      "glow": [
        "#ffb547",
        "#ff8a3d"
      ],
      "caption": "관제 대시보드 · Lumi 로봇 일러스트"
    },
    "role": "Web 풀스택",
    "summary": "저시력자 동행 로봇을 지켜보는 관제 웹",
    "background": {
      "headline": "저시력자를 위한 AI 기반 실내 안전 동행 로봇",
      "points": [
        "ROS2 SLAM과 라이다로 실내 지도를 만들고 자율주행",
        "Jetson 보드에서 YOLO로 장애물 인식⁠·⁠회피",
        "관제 웹으로 로봇 위치⁠·⁠영상⁠·⁠개입 요청을 한눈에 관리"
      ]
    },
    "arch": {
      "lead": "로봇 데이터가 관제 화면까지 오는 흐름",
      "notes": [
        "서버가 로봇 내부망에 접근할 수 없어 로봇이 EC2로 먼저 전송",
        "FastAPI가 최신 값만 보관, WebSocket으로 대시보드에 실시간 전송",
        "이벤트·개입 요청은 SQLite에 기록, 관제 화면에서 바로 처리"
      ]
    },
    "architecture": {
      "nodes": [
        {
          "id": "bridge",
          "icon": "ros",
          "label": "ROS2 브리지",
          "sub": "SLAM·라이다",
          "owner": "team",
          "col": 0,
          "row": 0
        },
        {
          "id": "beacon",
          "icon": "bluetooth",
          "label": "비콘 노드",
          "sub": "BLE 스캔",
          "owner": "team",
          "col": 0,
          "row": 1
        },
        {
          "id": "jetson",
          "icon": "nvidia",
          "label": "Jetson Edge AI",
          "sub": "YOLO 장애물 인식",
          "owner": "team",
          "col": 0,
          "row": 2
        },
        {
          "id": "gate",
          "icon": "nginx",
          "label": "EC2 nginx",
          "sub": "HTTPS 관문",
          "owner": "external",
          "col": 1,
          "row": 1
        },
        {
          "id": "web",
          "icon": "docker",
          "label": "웹 컨테이너",
          "sub": "Vue 빌드 서빙",
          "owner": "mine",
          "col": 2,
          "row": 0
        },
        {
          "id": "api",
          "icon": "fastapi",
          "label": "FastAPI",
          "sub": "수신·실시간 중계",
          "owner": "mine",
          "col": 2,
          "row": 1
        },
        {
          "id": "db",
          "icon": "sqlite",
          "label": "SQLite",
          "sub": "이벤트·개입 기록",
          "owner": "mine",
          "col": 2,
          "row": 2
        },
        {
          "id": "dash",
          "icon": "vue",
          "label": "관제 대시보드",
          "sub": "Vue 3 · 지도·영상",
          "owner": "mine",
          "col": 3,
          "row": 1
        }
      ],
      "edges": [
        {
          "from": "bridge",
          "to": "gate",
          "label": "위치·라이다"
        },
        {
          "from": "beacon",
          "to": "gate",
          "label": "비콘 스캔"
        },
        {
          "from": "jetson",
          "to": "gate",
          "label": "카메라 영상"
        },
        {
          "from": "gate",
          "to": "web",
          "label": "화면 요청"
        },
        {
          "from": "gate",
          "to": "api",
          "label": "데이터 전달"
        },
        {
          "from": "api",
          "to": "db",
          "label": "기록 저장"
        },
        {
          "from": "web",
          "to": "dash",
          "label": "Vue 앱"
        },
        {
          "from": "api",
          "to": "dash",
          "label": "실시간 방송"
        },
        {
          "from": "dash",
          "to": "api",
          "label": "개입 처리"
        }
      ]
    }
  },
  {
    "id": "cosmos",
    "name": "COSMOS",
    "icon": "cosmos.png",
    "title": "빅데이터 기반 AI 활용 기업 관계 시각화 서비스",
    "award": "2026 뉴스빅데이터 해커톤 본선 진출 (한국언론진흥재단)",
    "period": "2026.08 ~ 2026.09 (5주)",
    "team": "6인 · FE 2 · BE 2 · Data 1 · AI 1",
    "hero": {
      "layout": "web-phones",
      "web": "cosmos-hero.jpg",
      "phones": [
        "cosmos-phone-galaxy.webp",
        "cosmos-phone-panel.webp"
      ],
      "glow": [
        "#3b2fff",
        "#8f5bff"
      ],
      "caption": "PC 전체 은하 · 모바일 은하와 기업 패널"
    },
    "role": "FE",
    "summary": "빅데이터 기반 AI 활용 기업 관계 시각화 서비스",
    "background": {
      "headline": "수많은 뉴스⁠·⁠공시로 기업 관계를 산출할 수 없을까?",
      "points": [
        "뉴스⁠·⁠공시⁠·⁠주가 빅데이터를 Hadoop(HDFS)에 분산 저장",
        "AI로 기업 간 관계를 찾고 Spark로 기간별 점수 집계",
        "산출한 관계망을 3D 은하로 시각화해 한눈에 탐색"
      ]
    },
    "arch": {
      "lead": "분석된 관계 데이터가 3D 은하까지 오는 흐름",
      "notes": [
        "뉴스·공시·주가 원본을 Hadoop HDFS에 분산 보관",
        "AI 관계 분석 → Spark 기간 집계 → PostgreSQL에 결과만 게시",
        "Spring Boot API → TanStack Query로 3D 은하·탐색 UI가 데이터 공유"
      ]
    },
    "architecture": {
      "nodes": [
        {
          "id": "pipe",
          "icon": "hadoop",
          "label": "뉴스·공시·주가",
          "sub": "Hadoop HDFS 저장",
          "owner": "team",
          "col": 0,
          "row": 0
        },
        {
          "id": "ai",
          "icon": "spark",
          "label": "AI 관계 분석",
          "sub": "Spark로 기간 집계",
          "owner": "team",
          "col": 0,
          "row": 1
        },
        {
          "id": "pg",
          "icon": "postgresql",
          "label": "PostgreSQL",
          "sub": "게시된 관계 스냅샷",
          "owner": "team",
          "col": 1,
          "row": 1
        },
        {
          "id": "api",
          "icon": "springboot",
          "label": "Spring Boot",
          "sub": "REST·인증 API",
          "owner": "team",
          "col": 1,
          "row": 0
        },
        {
          "id": "client",
          "icon": "typescript",
          "label": "API 클라이언트",
          "sub": "인증·응답 정리",
          "owner": "mine",
          "col": 2,
          "row": 0
        },
        {
          "id": "query",
          "icon": "reactquery",
          "label": "TanStack Query",
          "sub": "화면 공용 데이터",
          "owner": "mine",
          "col": 2,
          "row": 1
        },
        {
          "id": "scene",
          "icon": "three",
          "label": "3D 은하 화면",
          "sub": "R3F·Three.js",
          "owner": "mine",
          "col": 3,
          "row": 0
        },
        {
          "id": "hud",
          "icon": "react",
          "label": "탐색 UI",
          "sub": "도크·툴팁·경로",
          "owner": "mine",
          "col": 3,
          "row": 1
        },
        {
          "id": "pages",
          "icon": "newspaper",
          "label": "뉴스·커뮤니티",
          "sub": "FE 팀원 주도",
          "owner": "team",
          "col": 3,
          "row": 2
        }
      ],
      "edges": [
        {
          "from": "pipe",
          "to": "ai",
          "label": "원본 전달"
        },
        {
          "from": "ai",
          "to": "pg",
          "label": "집계 적재"
        },
        {
          "from": "pg",
          "to": "api",
          "label": "스냅샷 조회"
        },
        {
          "from": "api",
          "to": "client",
          "label": "JSON 응답"
        },
        {
          "from": "client",
          "to": "query",
          "label": "정리된 데이터"
        },
        {
          "from": "query",
          "to": "scene",
          "label": "은하 데이터"
        },
        {
          "from": "query",
          "to": "hud",
          "label": "관계 상세"
        },
        {
          "from": "query",
          "to": "pages",
          "label": "같은 데이터"
        },
        {
          "from": "hud",
          "to": "scene",
          "label": "조작 상태"
        }
      ]
    }
  },
  {
    "id": "jumanchu",
    "name": "주만추",
    "title": "스와이프로 만나는 장기투자 종목 추천 서비스",
    "period": "2026.05 ~ 2026.06 (약 7주)",
    "team": "3인 · BE 1 · 추천 알고리즘 1 · FE 1",
    "award": "",
    "hero": {
      "layout": "web-phone",
      "web": "jumanchu-hero.jpg",
      "phones": [
        "jumanchu-phone-home.webp"
      ],
      "glow": [
        "#ff4fa3",
        "#ff3d5a"
      ],
      "caption": "메인 화면 다크 모드(시세는 예시) · 모바일 홈"
    },
    "role": "FE",
    "summary": "성향에 맞는 종목을 스와이프로 고르는 서비스",
    "background": {
      "headline": "장기 투자를 돕는 주식 서비스는 없을까?",
      "points": [
        "차트 등락에 따른 충동 매수⁠·⁠매도를 막는 '장투 케어' AI",
        "한국투자증권 실시간 시세를 연동하고 PostgreSQL로 종목 관리",
        "투자 성향에 맞는 종목을 스와이프로 추천"
      ]
    },
    "arch": {
      "lead": "시세와 추천 점수가 스와이프 카드까지 오는 흐름",
      "notes": [
        "한국투자증권 시세는 Redis에 잠시 보관, 종목·재무·점수는 PostgreSQL",
        "추천·장투 케어 로직이 궁합 점수와 AI 리포트 생성",
        "Axios 클라이언트 한 곳에서 API 호출, Pinia로 화면 간 상태 공유"
      ]
    },
    "architecture": {
      "nodes": [
        {
          "id": "ext",
          "icon": "landmark",
          "label": "외부 API",
          "sub": "한국투자증권·DART",
          "owner": "external",
          "col": 0,
          "row": 0
        },
        {
          "id": "db",
          "icon": "postgresql",
          "label": "PostgreSQL",
          "sub": "종목·재무·점수",
          "owner": "team",
          "col": 0,
          "row": 1
        },
        {
          "id": "algo",
          "icon": "sparkles",
          "label": "추천·장투 케어",
          "sub": "궁합 점수·AI 리포트",
          "owner": "team",
          "col": 0,
          "row": 2
        },
        {
          "id": "redis",
          "icon": "redis",
          "label": "Redis",
          "sub": "시세 임시 보관",
          "owner": "team",
          "col": 1,
          "row": 0
        },
        {
          "id": "api",
          "icon": "django",
          "label": "Django REST",
          "sub": "도메인 API·인증",
          "owner": "team",
          "col": 1,
          "row": 1
        },
        {
          "id": "client",
          "icon": "axios",
          "label": "API 클라이언트",
          "sub": "도메인 함수·토큰",
          "owner": "mine",
          "col": 2,
          "row": 1
        },
        {
          "id": "store",
          "icon": "pinia",
          "label": "Pinia 스토어",
          "sub": "로그인·테마·관심",
          "owner": "mine",
          "col": 2,
          "row": 2
        },
        {
          "id": "views",
          "icon": "vue",
          "label": "Vue 화면",
          "sub": "홈·종목·포트폴리오",
          "owner": "mine",
          "col": 3,
          "row": 1
        },
        {
          "id": "swipe",
          "icon": "layers",
          "label": "스와이프 덱",
          "sub": "추천 카드 넘기기",
          "owner": "mine",
          "col": 3,
          "row": 2
        }
      ],
      "edges": [
        {
          "from": "ext",
          "to": "db",
          "label": "배치 적재"
        },
        {
          "from": "algo",
          "to": "db",
          "label": "DNA·점수"
        },
        {
          "from": "ext",
          "to": "redis",
          "label": "실시간 시세"
        },
        {
          "from": "db",
          "to": "api",
          "label": "종목·점수"
        },
        {
          "from": "redis",
          "to": "api",
          "label": "현재가"
        },
        {
          "from": "api",
          "to": "client",
          "label": "JSON 응답"
        },
        {
          "from": "client",
          "to": "store",
          "label": "로그인 상태"
        },
        {
          "from": "client",
          "to": "views",
          "label": "화면 데이터"
        },
        {
          "from": "store",
          "to": "views",
          "label": "테마·관심"
        },
        {
          "from": "views",
          "to": "swipe",
          "label": "추천 카드"
        }
      ]
    }
  }
]
