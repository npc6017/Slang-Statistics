from curse_detector import CurseDetector
import time

# 아래와같이 weights_paths에 여러 모델을 적으면 앙상블 기법으로 예측할 수 있습니다.
weights_paths = ['models/weights.h5', 'models/weights2.h5', 'models/weights3.h5']

curse = CurseDetector(weights_paths)

start_time = time.time()

problems = ["시발 존나 오래 걸리네", "안녕하세요", "병신", "얼마나 걸릴까", "차은우 잘생겼다", "노지환 못 생겼다", "차은우 존나 잘생겼다"]

for problem in problems :
  print(problem + " : " + str(curse.ensemble(problem)))

print(time.time() - start_time)
