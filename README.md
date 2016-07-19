# wait-for-mongoose

## Introduction

This module waits for a Mongoose connection to MongoDB to succeed.
The idea is the same as [wait-for-mongo](https://github.com/arunoda/wait-for-mongo)
but with the difference that it's based on the Mongoose driver.

### Example

If you are looking for a simple way to wait until MongoDB is ready to
connect, you can try:

```
var waitForMongoose = require('wait-for-mongoose');
waitForMongoose('mongodb://myuser:mypass@myhost/mydb', function (err) {
  if (err) {
    console.error('Timeout connecting to MongoDB server!');
    process.exit(1);
  }
  // Here you would create your connection
});
```

If you want to customize the timeout value and the time between each
connect requests, you can make use of the `options` parameter:

```
var waitForMongoose = require('wait-for-mongoose');
waitForMongoose('mongodb://myuser:mypass@myhost/mydb', {
  timeout: 1000 * 60 * 5, // 5 minutes until timeout happens
  interval: 1000 * 1 // 1 second between each request
}, function (err) {
  if (err) {
    console.error('Timeout connecting to MongoDB server!');
    process.exit(1);
  }
  // Here you would create your connection
});
```

## License

Copyright 2016 Marcos Bjørkelund

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

