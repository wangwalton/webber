import json

import requests

with open("go_backend/pages/index.html", 'r') as f:
     html_string = ''.join(f.readlines()).encode('utf-8')

resp = requests.post('http://localhost:8080/toTable', html_string)

with open("chromeReact/src/resources/table.js", "w") as f:
     res = "export const exampleTables =" + json.dumps(resp.json(), indent=4)
     f.write(res)
