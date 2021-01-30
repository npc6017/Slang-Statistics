import sys
import json

result = json.loads(sys.argv[1])

print(json.dumps(result))