#!/bin/bash

ROOT_FOLDER="../"

usage () {
    cat <<EOM
Usage:
$(basename $0) [tag-name]
  - tag-name defaults to "latest"

EOM
#    exit 0
}

print_command_header () {
  printf "\n##\n# DEPLOY: $1\n##\n"
}

check_command_success () {
  if [ $? -ne 0 ]
  then
    print_command_header "$1 failed"
    exit 1
  fi
}

build () {
  print_command_header "clean dependencies"
  rm -rf node_modules/
  check_command_success "clean ui dependencies"

  print_command_header "install dependencies"
  npm install --prefer-offline
  check_command_success "install dependencies"

  print_command_header "run tests"
  npm test
  check_command_success "run tests"
}

usage

print_command_header "switch to root folder"
cd $ROOT_FOLDER
check_command_success "switch to root folder"

print_command_header "clean up modifications"
git checkout .
check_command_success "clean up modifications"

print_command_header "get new tags from remote"
git fetch --tags
check_command_success "get new tags from remote"

print_command_header "get latest tag name"
tag=$(git describe --tags `git rev-list --tags --max-count=1`)
check_command_success "get latest tag name"

tag_arg=$1

if [[ $tag_arg && "$tag_arg" != "latest" ]]
then
  print_command_header "use specified tag"
  tag=$tag_arg
else
  print_command_header "use latest tag"
fi

print_command_header "checkout tag"
git checkout $tag
check_command_success "checkout tag"

build

print_command_header "done"

