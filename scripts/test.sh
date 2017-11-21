#!/usr/bin/env bash
# Because npm scripts run in sh, not bash
shopt -s globstar
# And because bash
mocha $TEST_FOLDER/**{/spec/*,/*.spec,/test/*,*.test}.js "$@"
# You can now follow any convention you like. 
