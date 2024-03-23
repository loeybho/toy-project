# TodoList 만들기

배열 형태를 다루는 서비스 개발

# 구현 기능

1. new Date() 활용하여 오늘의 날짜 자동 출력

2. Todo 추가, 토글 완료, 삭제할 수 있는 상태 데이터 관리

- TodoData가 객체로써는 어떻게 있어야 하는 지

3. useRef를 활용하여 todo 객체의 id값 지정하기

# CRUD

1. Create: 투두 추가하기
2. Read: 투두리스트 렌더링 하기
3. Update: 투두 수정하기
4. Delete: 투두 삭제하기

---

## CRUD란 무엇인가?

CRUD는 'Create, Read, Update, Delete'의 약어로 정보의 기본 처리 과정을 의미한다.

1. Create : 생성
   데이터 베이스에 새로운 데이터를 생성할 때 사용한다. 리소스에 접근할 때 사용할 수 있는 고유 Id가 할당된다.
2. Read : 조회
   데이터를 조회한다. 리소스를 검색하고 결과를 표시한다.
3. Update : 수정
   기존 데이터를 수정한다.
4. Delete : 삭제
   데이터를 삭제한다.

- REST API에서의 CRUD
  REST 환경에서 CRUD는 HTTP 메서드인 POST, GET, PUT, DELETE에 각각 해당한다. 클라이언트와 서버간의 HTTP 프로토콜을 이용해 REST API를 설계하고 작성할 때에도 CRUD 개념이 사용된다. 클라이언트는 적절한 HTTP 메서드와 URL을 사용해서 서버에 요청을 보내어 데이터를 생성, 조회, 수정, 삭제할 수 있다.
