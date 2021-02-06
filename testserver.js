const http = require('http');
const hostname = '192.168.219.2'; //클라우드 서버컴퓨터(원격 접속 후 웹서버 구축)라면 아래 (5)번 항목 참고
const port = 3000;
const server = http.createServer((req, res) => {
     res.statusCode = 200;
     res.setHeader('Content-Type', 'text/plain');
     res.end('Hello World\n'); });
});


server.listen(port, hostname, () => {
     console.log(`Server running at http://${hostname}:${port}/`);
});

