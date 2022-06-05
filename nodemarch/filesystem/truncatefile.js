const fs = require('fs')
const buf = Buffer.alloc(1024)

fs.open('input.txt', 'r+', (err, fd) => {
    fs.ftruncate(fd, 15, (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file truncated successfully');
        fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
            if (err) {
                console.log(err);
            }
            console.log('bytes read: ' + bytes);

            if (bytes > 0) {
                console.log(buf.slice(0, bytes).toString());
            }
            fs.close(fd, (err) => {
                console.log('file closed success');
            })

        })
    })
})