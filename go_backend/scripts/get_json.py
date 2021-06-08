import requests

with open("pages/index.html", 'r') as f:
     html_string = ''.join(f.readlines()).encode('utf-8')

resp = requests.post('http://localhost:8080/toTable', html_string)
print(resp.text)
