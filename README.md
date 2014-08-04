# dirt

[![Build Status](https://travis-ci.org/jpstevens/dirt.svg?branch=master)](https://travis-ci.org/jpstevens/jq-html-parser)

Directory traversal made easy

## Installation

In your project directory, run the command:

```
npm install dirt --save
```

Then, include the module in your javascript file:

```
var dirt = require('dirt');
```

## Usage

### #require

When editing the file:

```sh
#$ /Users/example/Documents/my-project/tests/server/unit/controllers/example-spec.js
```

We can add a ```dirt.require``` method to our file to require files higher up in the directory tree:

```javascript
var example = dirt.require(4, 'server/controllers/example.js'));
```

The about command will require the path:

```sh
#$ /Users/example/Documents/my-project/tests/server/unit/controllers/example-spec.js
```

### #up

Many, many dots:

```javascript
dirt.up(4);
// returns '../../../..'
```

So many dots, attached to a file path:

```javascript
dirt.up(4, 'server/controllers/example.js');
// returns '../../../../server/controllers/example.js'
```
