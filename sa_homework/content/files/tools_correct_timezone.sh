#!/bin/bash
sudo_switch="sudo "
YUM="$sudo_switch /usr/bin/yum"
LN="$sudo_switch /bin/ln"
LS="$sudo_switch /bin/ls"
CP="$sudo_switch /bin/cp"
CHOWN="$sudo_switch /bin/chown"
SED="$sudo_switch /bin/sed"
SERVICE="$sudo_switch /sbin/service"
CHKCONFIG="$sudo_switch /sbin/chkconfig" 
RM="$sudo_switch /bin/rm"
TEE="$sudo_switch /usr/bin/tee"


rc_file=/etc/rc.local

$CP /etc/localtime /etc/localtime.bak
$RM -f /etc/localtime
$CP /usr/share/zoneinfo/Asia/Hong_Kong /etc/localtime
$YUM install -y ntp ntpdate
$SERVICE ntpd status
$SERVICE ntpd stop
sudo /sbin/ntpdate 0.centos.pool.ntp.org
$SERVICE ntpd start
$CHKCONFIG ntpd on
$SERVICE ntpd status
date
