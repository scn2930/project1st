# 📖 보드게임 소개 및 추천 서비스
<a href="http://sikpark.dothome.co.kr/project1st/index.html"><img width="1444" alt="main" src="https://github.com/user-attachments/assets/1807d5b1-1bd9-4e22-acbe-85af2cb6cb0a"/></a>

<br>

- 배포 URL : http://sikpark.dothome.co.kr/project1st/index.html

<br>

## ❓ 프로젝트 소개

- 보드게임이 처음이거나 새로운 게임을 하고 싶을 때, 게임을 검색하거나 추천해주는 서비스입니다.
- 보드게임 카페에서 사용하는 키오스크용 태블릿을 생각해 만들었습니다.
- 보드게임 제목을 검색하거나, 선택한 인원 수와 난이도에 해당하는 보드게임을 알려줍니다.

<br>

## 💻 개발 환경

- 기술 스택 : HTML, CSS, JavaScript
- 버전 관리 : GitHub
- 툴 : Slack, Figma
- 배포 : dotHome

<br>

## 🪧 브랜치 전략

- 자신의 branch를 생성 후 main에 PR
- PR 후에는 기존 branch 삭제 후 새로운 branch에서 작업

<br>

## 👤 팀원 구성 및 역할

### 🦖 최재혁(PL)

- **UI**
    - 헤더, 검색 페이지 필터

- **기능**
    - 보드게임 검색 및 필터 기능

- **기타**
   - GitHub Repository 생성
   - Git Branch 전략
   
<br>
    
### 🐬 김문정

- **UI**
    - 로고 제작
    - 검색 페이지 게임 리스트 
   
- **기능**
    - 보드게임 검색 및 필터링된 리스트 보여주기

<br>

### 🐥 조성재

- **UI**
    - 메인페이지

- **기능**
    - 애니메이션

- **기타**
   - 게임데이터 생성

<br>

## 📅 프로젝트 일정

- 전체 프로젝트 일정 : 2024-06-19 ~ 2024-06-27
- UI 설계 : 2024-06-19 ~ 2024-06-20
- 기능 구현 : 2024-06-20 ~ 2024-06-26
- 발표 및 시연 : 2024-06-27

<br>

## 💻 구현 사항

### 메인페이지(시작화면)
<img src="https://github.com/user-attachments/assets/1807d5b1-1bd9-4e22-acbe-85af2cb6cb0a" alt="main"/>

<br>

- 보드게임 검색을 할 수 있는 페이지입니다.
- '인원별/장르별보드게임 찾기'를 Click하면 검색 페이지로 이동합니다.

<br>

### 검색페이지
<img  src="https://github.com/user-attachments/assets/d0d74a43-f40c-4255-97c9-018c672592dc" alt="search"/>
<span><img width="45%" src="https://github.com/user-attachments/assets/0526618b-00f1-4269-a029-9aa2e1c0f85c" alt="search_person"/></span>
<span><img width="45%" src="https://github.com/user-attachments/assets/fea869c3-90b7-4212-b5f7-7493b761a3f0" alt="search_level"/></span>

<br>

- 인원 : 게임 인원수 데이터에 포함되는 게임들을 includes 메서드 사용해  filteredGames 배열에 저장
- 난이도 : filteredGames에 있는 게임중에서 filter 메서드를 사용

<br>

## 🧯 트러블 슈팅

- 메인 페이지에서 검색하는 값을 검색 페이지로 보내는 문제 -> URLPARAMS이용


<br>

## 🔧 개선 목표

- 필터 조건 중 '장르' 활성화
- 반응형 좀 더 완벽
- GitHub Branch 전략을 Main, Dev, Feat 등으로 구분해서 작업해보기
- 필터 조건을 해제하려면 새로고침 해야하는 문제



