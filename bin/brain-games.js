#!/usr/bin/env node

console.log('Welcome to the Brain Games!')

import {name} from '../src/cli.js'

const knowname = name()

console.log(`Hello,${knowname}!`)




