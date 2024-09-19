const urls = process.argv; //2-4
const http = require("http");

const concatStream = require("concat-stream");

const arrResult = new Array(3);

let counter = 0;

for (let i = 2; i < urls.length; i++) {
  http.get(urls[i], (response) => {
    response.pipe(
      concatStream((data) => {
        data = data.toString();
        arrResult[i - 2] = data;
        counter++;

        if (counter === 3) {
          for (const r of arrResult) {
            console.log(r);
          }
        }
      })
    );
  });
}
