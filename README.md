# ml5.js 사용해본 소감 
저는 ml5.js의 기능 중에서 헨드포즈를 사용해 봤습니다.
헨드포즈를 p5.js에서 실행을 해봤는데요 
헨드포즈로 카메라에 인식된 손가락의 개수를 세는 코드를 짜보고 싶었는데요
아쉽게도 구현을 성공하지는 못했습니다.

인식된 손에서 손가락을 접어도 여전히 5개의 손가락이라고 인식했기 때문입니다
아무래도 헨드포즈 모델이 손가락을 접어도 여전히 손이라고 인식하도록 학습이 되었기 때문에
모델에 대해서 뭔가를 수정하거나 손가락을 접으면 손가락의 갯수가 줄어들었다고 인식할 
알고리즘을 만들어야 할거 같은데 이 부분이 쉽지가 않았습니다

그런 아쉬움이 있지만 그럼에도 집에서 헨드포즈 기능을 사용해서 손을 인식하는 것을 보고 여러 생각이 들었는데
그중에 하나는 AI로 사람 그림을 그리면 손의 형태가 이상한 경우가 종종 있습니다 헨드포즈로 손의 형태에 대한
학습을 시키면 손을 그리는게 좀더 사실적으로 나오지 않을까? 하는 공상을 해봤습니다

마지막으로 마크다운 언어도 살펴보면서 제목 부분의 크기도 바꿔보는 부차적인 실습도 할 수 있어서 좋았습니다.De

# Dev-cpp에서 OpenGL 사용하여 주전자를 만들기 소감 
개인적으로 Freeglut를 뭐 링크를 바꾸고 하는 이런 작업이 너무 힘들었습니다. 컴파일을하면 계속 오류가 나오고
관련해서 구글링을해도 다 너무 옛날 블로그 내용이고 원하는 답을 얻지를 못했기 때문에 너무나 많은 삽질을
했다고 느꼈습니다 챗gpt와 질의를 거치며 삽질을 하면서도 아 이거다 싶은 그런 느낌을 얻지 못하고 Freeglut를 몇번 설치했다 지웠다 했는지 모르겠습니다.

저녁 7시쯤 교수님이 카페에 올린글을 보고 따라해봤는데 컴파일에서 오류가 나거나 하지는 않았지만 또다른 문제로 실행화면이
나오지 않는 문제가 생겼습니다 그래서 혹시 Dec-cpp 문제인가 싶어서 수업시간에 했던 RGB색이 맵핑된 회전하는 삼각형 코드를 실행을 했을 때는
또 실행화면이 잘 나와서 뭐가 문제인지 알 수 없는 상황이 지속되었습니다.

확실한건 뭔가 freeglut 설정 관련해서 문제가 있는걸로 보이지만 컴파일하고 실행을 돌려도 오류가 뜨거나 하지는 않고 
freeglut, glut 관련된 뭔가를 쓰지 않아도 되는 코드는 잘 실행화면이 나오는 것을 보면은 컴파일해도 문제가 없다를
제외하면 여전히 해결이 되지 않는 문제인거 같습니다 ㅠㅠ 64비트로 돌려보고 안되서 32비트로 해봐도 안되는걸로 보아서는
과제의 제한시간 이내에 이걸 해결을 할 기미가 보이지 않아서 일단 회전하는 주전자 코드하고 소감이라도 남겨보았습니다.
