#!/bin/bash
sudo_switch="sudo "
LS="$sudo_switch /bin/ls"
ECHO="$sudo_switch /bin/echo"
TEE="$sudo_switch /usr/bin/tee"
TOUCH="$sudo_switch /usr/bin/touch"


test_file=./touchme
$TOUCH $test_file
$ECHO "route add -net 192.168.0.0 netmask 255.255.0.0 gw 172.16.0.254" | $TEE -a $test_file
$ECHO `whoami`  | $TEE -a $test_file
$ECHO `date`  | $TEE -a $test_file
ls -l $test_file
cat $test_file
