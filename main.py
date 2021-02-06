import sys
import json
from curse_detector import CurseDetector

weights_paths = ['models/weights.h5', 'models/weights2.h5', 'models/weights3.h5']
curse = CurseDetector(weights_paths)

problems = json.loads(sys.argv[1])
results = list()

for problem in problems['crawling']:
  sentenceResult = dict()
  sentenceResult['string'] = problem
  sentenceResult['persent'] = str(curse.ensemble(problem))
  results.append(sentenceResult)

print(json.dumps(results))
