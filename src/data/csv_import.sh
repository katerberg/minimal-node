#!/bin/sh

mongoimport -d directory -c users --type csv --file ./directory.csv --headerline 
