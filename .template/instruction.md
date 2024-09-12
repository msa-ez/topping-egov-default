# 표준프레임워크 심플홈페이지 FrontEnd

![react](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![javascript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![nodejs](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![cra](https://img.shields.io/badge/createreactapp-09D3AC?style=for-the-badge&logo=createreactapp&logoColor=black)  
![workflow](https://github.com/eGovFramework/egovframe-template-simple-react/actions/workflows/node.js.yml/badge.svg)

## 프로젝트 소개

### 프로젝트 개요

단순 홈페이지 기능 구현 시 필수적인 부분만 사용 가능하도록 경량화 된 실행환경 제공  
메인 페이지, 사용자 관리, 공지사항 관리, 게시판 관리, 안내 관리 기능을 제공

### 메뉴 구성

![menu_sht_v4_2](https://github.com/eGovFramework/egovframe-template-simple-react/assets/3771788/59d067c6-ce3f-4bb8-ad46-e06a8dc93a0b)

## 참고 화면 및 메뉴 설명

### 메인 화면

![sh1](https://user-images.githubusercontent.com/3771788/229040074-cd1015a6-f2f4-482e-a056-974785b47d36.jpg)

1. 홈페이지 템플릿은 관리자만 로그인 가능하다는 전제로 구성되었으며 최초 관리자 계정 설정은 **[ 로그인계정 : admin , 로그인암호 : 1 ]** 로 설정되어 있다.
2. 관리자 추가 및 변경 기능은 추가 구성되어 있지 않으므로 필요 시 DB를 통해 직접 변경한다. (암호 셋팅 값은 공통컴포넌트의 암호화 로직에 따라 생성해야 함)
3. 기본 기능이나 예시 메뉴를 실무적으로 추가 커스터마이징하여 활용할 수 있다.

### 사이트 소개 화면

![sh2](https://user-images.githubusercontent.com/3771788/229040098-8d60145b-7e0c-42dc-9a36-10a0f75bf8f9.jpg)

- **해당 화면 및 세부 메뉴 화면은 구성을 위한 샘플페이지가 제공되며 기능은 구현되지 않은 상태입니다.**

1. 세부메뉴 : 사이트소개, 연혁, 조직소개, 찾아오시는 길
2. 기능설명 : 예시 메뉴에 해당하는 항목으로 샘플 페이지 형태로 링크와 JSP파일이 존재한다.
3. 활용방법 : 각 샘플 페이지에 대한 콘텐츠를 새로 구성하여 활용할 수 있다.

### 정보마당 화면

![sh3](https://user-images.githubusercontent.com/3771788/229040131-3daac4c9-82f8-40e9-98bc-e0b5da29a584.jpg)

- **해당 화면 및 세부 메뉴 화면은 구성을 위한 샘플페이지가 제공되며 기능은 구현되지 않은 상태입니다.**

1. 세부메뉴 : 주요사업 소개, 대표서비스 소개
2. 기능설명 : 예시 메뉴에 해당하는 항목으로 샘플 페이지 형태로 존재한다.
3. 활용방법 : 각 샘플 페이지에 대한 콘텐츠를 새로 구성하여 활용할 수 있다.

### 고객지원 화면

![sh4](https://user-images.githubusercontent.com/3771788/229040162-fc8c1a05-4ead-4cd1-ade6-008cb8f51970.jpg)

- **해당 화면 및 세부 메뉴 화면은 구성을 위한 샘플페이지가 제공되며 기능은 구현되지 않은 상태입니다.**

1. 세부메뉴 : 자료실, 묻고답하기, 서비스신청
2. 기능설명 : 예시 메뉴에 해당하는 항목으로 샘플 페이지 형태로 존재한다.
3. 활용방법 : 각 샘플 페이지에 기능을 추가 개발 후 구성하여 활용할 수 있다.

### 알림마당 화면

![sh5](https://user-images.githubusercontent.com/3771788/229040200-1065ee47-1ac2-4308-84d0-4203d9e72b21.jpg)

1. 세부메뉴 : 오늘의행사, 금주의행사, 공지사항, 사이트갤러리
2. 기능설명 : 공통컴포넌트 일정관리(부서일정)와 게시판 기능을 커스터마이징하여 사용한다.
3. 활용방법 : 관리자가 등록한 일정정보를 조회하거나 게시물을 조회할 수 있다.

### 사이트관리 화면

![sh6_4_2](https://github.com/eGovFramework/egovframe-template-simple-react/assets/3771788/d2c9a5d9-394f-49ee-98fb-de9048de636d)

1. 세부메뉴 : 일정관리, 게시판생성관리, 게시판사용관리, 공지사항관리, 사이트갤러리관리, 사이트관리자 암호변경
2. 기능설명 : 공통컴포넌트 일정관리(부서일정)과 게시판 기능을 커스터마이징하여 사용한다.
3. 활용방법 : 관리자로 로그인 한 후 일정정보를 등록하거나 게시물을 등록할 수 있다. (게시판 설정 가능)

## BackEnd 구동

Fontend에 대한 기본 CRUD기능을 동작하도록 지원하는 eGov Framework Topping을 선택한다.

## FrontEnd 구동

아래 1 ~ 3의 과정을 따라서 진행한다.

### 1. 프로젝트의 생성

Git에서 복제하여 설치 시 1-1. 을 참고한다.

#### 1-1. Git에서 프로젝트 복제

Git에서 clone 한다.

```bash
# 프로젝트 저장소를 로컬로 복제
git clone https://github.com/[계정명]/egovframe-template-simple-react.git

### 2. 백엔드 프로젝트 설정

구동된 BackEnd 서버의 URL을 본 어플리케이션의 .env.development 파일의 REACT_APP_EGOV_CONTEXT_URL에 설정해 준다.
(단, 개발환경에서는 사용하는 환경변수 정보는 .env.development, build 시 사용하는 환경변수는 .env.production 에 기입해 준다.)

```bash
# .env.development 예시
REACT_APP_EGOV_CONTEXT_URL=localhost:8080
```

### 3. 프로젝트 실행 및 기타 명령어

#### 3-1. 모듈 설치
```bash
# 테스트용 리액트 서버를 실행할 때 아래 명령어를 사용한다.
cd egov-default-frontend
npm install
```
#### 3.2 보안 설정

node_modules/react-scripts/config/webpackDevServer.config.js

```
const disableFirewall =!proxy || process.env.DANGEROUSLY_DISABLE_HOST_CHECK === 'true'; // 해당 코드를 아래와 같이 수정
```
```
const disableFirewall = true; 
```

#### 3.3 프로젝트 실행
```
npm run start
```

---

### 참조

보다 상세한 설명은 아래의 문서를 확인한다.

1. [Available scripts in CRA](./Docs/create-react-app-script.md)
2. [개발환경 초기 설정](./Docs/development-env-setting.md)
