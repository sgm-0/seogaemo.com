# 서울개발자모임 - Seoul Developer Group

웹과 모바일 솔루션을 개발하는 개발자들의 모임입니다. 최신 기술 트렌드를 공유하고 함께 성장하는 개발자 커뮤니티입니다.

## 🚀 시작하기

### 개발 환경 설정

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev

# 프로덕션 빌드
pnpm build

# 프로덕션 서버 실행
pnpm start
```

## 🔧 SEO 설정

### 환경 변수 설정

`.env.local` 파일을 생성하고 다음 변수들을 설정하세요:

```env
# 기본 URL 설정
NEXT_PUBLIC_BASE_URL=https://yourdomain.com

# SEO 검증 코드들
GOOGLE_SITE_VERIFICATION=your-google-verification-code
NAVER_SITE_VERIFICATION=your-naver-verification-code

# 분석 도구
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_GTM_ID=your-google-tag-manager-id
```

### SEO 기능들

- ✅ **메타데이터 최적화**: Open Graph, Twitter Card, 키워드 등
- ✅ **구조화된 데이터**: JSON-LD를 활용한 Organization 스키마
- ✅ **Sitemap**: 자동 생성되는 동적 sitemap.xml
- ✅ **Robots.txt**: 검색 엔진 크롤링 최적화
- ✅ **PWA 지원**: 웹 앱 매니페스트 포함
- ✅ **분석 도구**: Google Analytics 4, Google Tag Manager 지원
- ✅ **성능 최적화**: 이미지 최적화, 압축, 캐싱 설정

### 검색 엔진 등록

1. **Google Search Console**

   - [Google Search Console](https://search.google.com/search-console)에서 사이트 등록
   - `GOOGLE_SITE_VERIFICATION` 환경 변수 설정

2. **네이버 서치어드바이저**

   - [네이버 서치어드바이저](https://searchadvisor.naver.com)에서 사이트 등록
   - `NAVER_SITE_VERIFICATION` 환경 변수 설정

3. **Bing Webmaster Tools**
   - [Bing Webmaster Tools](https://www.bing.com/webmasters)에서 사이트 등록

## 📊 분석 도구 설정

### Google Analytics 4

1. [Google Analytics](https://analytics.google.com)에서 계정 생성
2. 측정 ID를 `NEXT_PUBLIC_GA_ID` 환경 변수에 설정

### Google Tag Manager

1. [Google Tag Manager](https://tagmanager.google.com)에서 컨테이너 생성
2. 컨테이너 ID를 `NEXT_PUBLIC_GTM_ID` 환경 변수에 설정

## 🛠 기술 스택

- **Next.js 15** - React 프레임워크
- **TypeScript** - 타입 안전성
- **Tailwind CSS** - 스타일링
- **Framer Motion** - 애니메이션
- **Radix UI** - 접근 가능한 UI 컴포넌트

## 📁 프로젝트 구조

```
seogaemo.com/
├── app/
│   ├── layout.tsx          # 루트 레이아웃 (SEO 메타데이터)
│   ├── page.tsx           # 메인 페이지 (구조화된 데이터)
│   └── sitemap.ts         # 동적 사이트맵 생성
├── components/
│   ├── analytics.tsx      # Google Analytics & GTM
│   └── ui/               # UI 컴포넌트들
├── public/
│   ├── robots.txt        # 검색 엔진 크롤링 설정
│   └── site.webmanifest  # PWA 매니페스트
└── next.config.mjs       # Next.js 설정 (성능 최적화)
```

## 🌐 배포

### Vercel (권장)

1. GitHub 저장소를 Vercel에 연결
2. 환경 변수들을 Vercel 대시보드에서 설정
3. 자동 배포 설정

### 다른 플랫폼들

- Netlify
- AWS Amplify
- CloudFlare Pages

## 📝 라이선스

© 2024 서울개발자모임. All rights reserved.
