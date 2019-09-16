// Copyright (c) 2017-present, Salesforce.com, Inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

'use strict'

const express = require('express')
const app = express()
const auth = require('http-auth')

// const port = process.env.PORT || 8080

// Basic auth
// Set USERNAME and PASSWORD environment variables
const basic = auth.basic({
  realm: 'Salesforce Lightning Design System Prototype'
}, (username, password, next) => {
  next(username === process.env.USERNAME && password === process.env.PASSWORD)
})

if (process.env.USERNAME && process.env.PASSWORD) {
  app.use(auth.connect(basic))
}

app.use('/', express.static('./dist'))

app.listen(process.env.PORT || 3002, function () {
  console.log('up and running on port ' + process.env.PORT)
})
