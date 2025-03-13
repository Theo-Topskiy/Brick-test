const http = require('http');
const fs = require('fs');

const PORT = 8000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.url === '/hostname' && req.method === 'GET') {
        // Читаем имя хоста из файла /etc/hostname
        fs.readFile('/etc/hostname', 'utf8', (err, hostname) => {
            if (err) {
                res.statusCode = 500;
                return res.end(JSON.stringify({ error: 'Failed to read hostname' }));
            }
            res.end(JSON.stringify({ hostname: hostname.trim() }));
        });
    } else if (req.url === '/author' && req.method === 'GET') {
        // Возвращаем значение переменной окружения $AUTHOR
        const author = process.env.AUTHOR || 'Unknown';
        res.end(JSON.stringify({ author }));
    } else if (req.url === '/id' && req.method === 'GET') {
        // Возвращаем значение переменной окружения $UUID
        const uuid = process.env.UUID || 'Unknown';
        res.end(JSON.stringify({ uuid }));
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});