# How to run
```
// before all yarn or npm install
node app.js
```

# How to deploy
```
docker build . -t <choose_your_build_name>
```
testing this build with
```
docker run -p 9999:9999 <choose_your_build_name>
```

## References:
https://expressjs.com/en/guide/behind-proxies.html