# vue-project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


git checkout -b localbranchname
git push origin localbranchname

git branch // 로컬 브랜치 내역
git branch -r 

// 로컬 브랜치 삭제 방법
git checkout master
git branch -d localbranchname
git branch -D localbranchname -> 삭제됨
git branch -> 확인

// 다시 로컬에 브랜치복구하고 싶다면 원격에서 가져오면된다
git checkout localbranchname
git branch


// 원격의 브랜치 내역보기
git remote show origin

// 원격 브랜치 삭제
git push origin :branchname
