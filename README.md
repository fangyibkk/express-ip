# How to run
After clone, setup by `yarn` or `npm install` then start the project by
```
node app.js
```

# How to deploy
First build your image with `docker`
```
docker build . -t <choose_your_build_name>
```
testing this build with
```
docker run -p 9999:9999 <choose_your_build_name>
```

## References:
https://expressjs.com/en/guide/behind-proxies.html
