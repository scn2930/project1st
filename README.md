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

## 👤 팀원 소개

| 🦖 최재혁(PL) | 🐬 김문정 | 🐥 조성재 |
| ------------ | ------ | ------ |
| <a href="https://github.com/scn2930" target="_blank"><img src="https://github.com/user-attachments/assets/611de94d-0c84-47b7-b396-1a8ad2793544" width="150" height="150"></a> | <a href="https://github.com/segretoo" target="_blank"><img src="https://avatars.githubusercontent.com/u/171138574?v=4" width="150" height="150"></a> | <a href="https://github.com/gogumastick" target="_blank"><img src="https://avatars.githubusercontent.com/u/171139430?v=4" width="150" height="150"></a> |
<br>

## 📅 프로젝트 일정

- 전체 프로젝트 일정 : 2024-06-19 ~ 2024-06-27
- UI 설계 : 2024-06-19 ~ 2024-06-20
- 기능 구현 : 2024-06-20 ~ 2024-06-26
- 발표 및 시연 : 2024-06-27

<br>

## 💻 구현 사항

### 메인 페이지(시작화면)
<a><img src="https://github.com/user-attachments/assets/1807d5b1-1bd9-4e22-acbe-85af2cb6cb0a" alt="main"/></a>

<br>

- 보드게임 검색을 할 수 있는 페이지입니다.
- '인원별/장르별보드게임 찾기'를 Click하면 검색 페이지로 이동합니다.

<br>

### 검색 페이지
<a><img src="https://github.com/user-attachments/assets/d0d74a43-f40c-4255-97c9-018c672592dc" alt="search"/></a>
<span><img width="45%" src="https://github.com/user-attachments/assets/0526618b-00f1-4269-a029-9aa2e1c0f85c" alt="search_person"/></span>
<span><img width="45%" src="https://github.com/user-attachments/assets/fea869c3-90b7-4212-b5f7-7493b761a3f0" alt="search_level"/></span>

<br>

- 인원 : 게임 인원수 데이터에 포함되는 게임들을 includes 메서드 사용해  filteredGames 배열에 저장
- 난이도 : filteredGames에 있는 게임중에서 filter 메서드를 사용

<br>

### 검색 기능
<a><img src="https://github.com/user-attachments/assets/f7f8823a-41ae-497e-b09b-75f0017a5682" alt="search_gif"/></a>


- 게임 데이터들 중에서 검색한 내용을 포함하고 있는 모든 게임 리스트를 보여주는 filterGames 함수 생성
- 메인 페이지에서 검색한 내용을 검색 페이지에서 URLSearchParams를 이용해 검색 키워드를 추출 후 filterGames 호출



