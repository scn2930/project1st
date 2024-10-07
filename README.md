# 📖 보드게임 소개 및 추천 서비스
<a href="http://sikpark.dothome.co.kr/project1st/index.html"><img width="1444" alt="main" src="https://github.com/user-attachments/assets/1807d5b1-1bd9-4e22-acbe-85af2cb6cb0a"/></a>


<br><br>

- 배포 URL : http://sikpark.dothome.co.kr/project1st/index.html

<br>

## ❓ 프로젝트 소개

- 보드게임이 처음이거나 새로운 게임을 하고 싶을 때 게임을 검색하거나 추천해주는 서비스입니다.
- 보드게임 카페에서 사용하는 키오스크용 태블릿을 생각해 만들었습니다.
- 보드게임을 검색하거나, 선택한 인원 수, 난이도에 맞는 보드게임을 알려줍니다.
- 조건 중 '장르'는 추후 개발 예정입니다.

<br>

## 💻 개발 환경

- 기술 스택 : HTML, CSS, JavaScript
- 버전 관리 : GitHub
- 툴 : Slack, Figma
- 배포 : dotHome

<br>

## 🪧 브랜치 전략

- Git-flow 전략을 기반으로 main, develop 브랜치와 feature 보조 브랜치를 운용했습니다.
- main, develop, Feat 브랜치로 나누어 개발을 하였습니다.
    - **main** 브랜치는 배포 단계에서만 사용하는 브랜치입니다.
    - **develop** 브랜치는 개발 단계에서 git-flow의 master 역할을 하는 브랜치입니다.
    - **Feat** 브랜치는 기능 단위로 독립적인 개발 환경을 위하여 사용하고 merge 후 각 브랜치를 삭제해주었습니다.

<br>

## 3. 프로젝트 구조

```
├── README.md
├── .eslintrc.js
├── .gitignore
├── .prettierrc.json
├── package-lock.json
├── package.json
│
├── public
│    └── index.html
└── src
     ├── App.jsx
     ├── index.jsx
     ├── api
     │     └── mandarinAPI.js
     ├── asset
     │     ├── fonts
     │     ├── css_sprites.png
     │     ├── logo-404.svg
     │     └── logo-home.svg
     │          .
     │          .
     │          .
     ├── atoms
     │     ├── LoginData.js
     │     └── LoginState.js
     ├── common
     │     ├── alert
     │     │     ├── Alert.jsx
     │     │     └── Alert.Style.jsx
     │     ├── button
     │     ├── comment
     │     ├── inputBox
     │     ├── post
     │     ├── postModal
     │     ├── product
     │     ├── tabMenu
     │     ├── topBanner
     │     └── userBanner
     ├── pages
     │     ├── addProduct
     │     │     ├── AddProduct.jsx
     │     │     └── AddProduct.Style.jsx
     │     ├── chatList
     │     ├── chatRoom
     │     ├── emailLogin
     │     ├── followerList
     │     ├── followingList
     │     ├── home
     │     ├── join
     │     ├── page404
     │     ├── postDetail
     │     ├── postEdit
     │     ├── postUpload
     │     ├── productEdit
     │     ├── profile
     │     ├── profileEdit
     │     ├── profileSetting
     │     ├── search
     │     ├── snsLogin
     │     └── splash
     ├── routes
     │     ├── privateRoutes.jsx
     │     └── privateRoutesRev.jsx  
     └── styles
           └── Globalstyled.jsx
```

<br>

## 👤 팀원 구성

### 🍊최재혁(PL)

- **UI**
    - 페이지 : 홈, 검색, 게시글 작성, 게시글 수정, 게시글 상세, 채팅방
    - 공통 컴포넌트 : 게시글 템플릿, 버튼
- **기능**
    - 유저 검색, 게시글 등록 및 수정, 게시글 상세 확인, 댓글 등록, 팔로워 게시글 불러오기, 좋아요 기능

<br>
    
### 👻김문정

- **UI**
    - 페이지 : 프로필 설정, 프로필 수정, 팔로잉&팔로워 리스트, 상품 등록, 상품 수정, 채팅 목록, 404 페이지
    - 공통 컴포넌트 : 탭메뉴, InputBox, Alert 모달, 댓글
- **기능**
    - 프로필 설정 및 수정 페이지 유저 아이디 유효성 및 중복 검사, 상품 등록 및 수정

<br>

### 😎조성재

- **UI**
    - 페이지 : splash 페이지, sns 로그인 페이지, 로그인, 회원가입
    - 공통 컴포넌트 : 상품 카드, 사용자 배너
- **기능**
    - 애니메이션

<br>


## 📅 프로젝트 일정

- 전체 프로젝트 일정 : 2024-06-19 ~ 2024-06-27
- UI 설계 : 2024-06-19 ~ 2024-06-20
- 기능 구현 : 2024-06-20 ~ 2024-06-26
- 발표 및 시연 : 2024-06-27

<br>

## 7. 페이지별 기능

### [초기화면]
- 서비스 접속 초기화면으로 splash 화면이 잠시 나온 뒤 다음 페이지가 나타납니다.
    - 로그인이 되어 있지 않은 경우 : SNS 로그인 페이지
    - 로그인이 되어 있는 경우 : README 홈 화면
- SNS(카카오톡, 구글, 페이스북) 로그인 기능은 구현되어 있지 않습니다.



<br>

## 🧯 트러블 슈팅

- [탭메뉴 프로필 버튼 이슈](https://github.com/likelion-project-README/README/wiki/README-8.%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85_%ED%83%AD%EB%A9%94%EB%89%B4-%ED%94%84%EB%A1%9C%ED%95%84-%EB%B2%84%ED%8A%BC-%EC%9D%B4%EC%8A%88)


<br>

## 🔧 개선 목표

- API 모듈화 : API를 불러오는 코드의 반복이 많아 모듈화할 예정

