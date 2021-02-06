# Analysis Rest API
* 크롤링 데이터(문장 배열)를 받아 각 문장별로 비속어 유무를 판단
* 비속어가 탐색된 문장 배열 및 퍼센트를 결과로 응답한다.
## 사용법  
#### 필요한 모듈을 모두 다운받는다. / package.json에 모두 작성되어있다.
> npm i  
#### 서버를 연다
> npm run start
#### main.py 과정
> * result = json.loads(sys.argv[1]) -> 서버로부터 크롤링 데이터(문장 배열)을 2번째 인자로 받아온다.  
> * 분석 과정을 진행한다.  
> * print(json.dumps(result)) -> 결과를 result에 저장하여 다시 서버로 전달한다.  
> * 여기서의 서버는 서버 통신을 의미하는 것이 아님.  


문장 구조를 분석하는 임베딩 모델 추가 방법 (사용하기 위해선 무조건 해야함.)

1. 구글 드라이브에서 fasttext.bin을 [다운로드](https://drive.google.com/file/d/1pSJeoFHFlxuuU9BMBWLw6NAl9q21P05J/view?usp=sharing) 받는다.
2. 다운로드 받은 파일을 Slang-Statistics / embedding_models 폴더에 넣는다.
3. 실행
