# Minimal Project Start

[![Build Status](https://travis-ci.com/katerberg/minimal-node.svg?branch=master)](https://travis-ci.com/katerberg/minimal-node)

## Fast Start

```
npm install
npm run build-ts
npm start
```


## Setup
Make sure MongoDB process is running
```
brew services list | grep mongod
```
If our database isn't running
```
brew services start mongodb
```

To install dos2unix
```
brew install dos2unix
```

```
cd data
dos2unix csv_import.sh
./csv_import.sh
```

This project was set up with some tutorials:

 - https://github.com/Microsoft/TypeScript-Node-Starter
 - https://github.com/jsynowiec/node-typescript-boilerplate
 - https://docs.travis-ci.com/user/getting-started/
