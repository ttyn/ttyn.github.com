#!/bin/bash
sudo_switch="sudo "
YUM="$sudo_switch /usr/bin/yum"
USERMOD="$sudo_switch /usr/sbin/usermod"
ADDUSER="$sudo_switch /usr/sbin/adduser"
MKDIR="$sudo_switch /bin/mkdir"
CHMOD="$sudo_switch /bin/chmod"
LN="$sudo_switch /bin/ln"
LS="$sudo_switch /bin/ls"
CP="$sudo_switch /bin/cp"
CHOWN="$sudo_switch /bin/chown"
SED="$sudo_switch /bin/sed"
ID="$sudo_switch /usr/bin/id"
ECHO="$sudo_switch /bin/echo"
WGET="$sudo_switch /usr/bin/wget"
SERVICE="$sudo_switch /sbin/service"
CHKCONFIG="$sudo_switch /sbin/chkconfig" 
RM="$sudo_switch /bin/rm"
TEE="$sudo_switch /usr/bin/tee"
ROUTE="$sudo_switch /sbin/route"
IPTABLES="$sudo_switch /sbin/iptables"

yum_working_pack="openssh.x86_64 openssh-server.x86_64 openssh-clients.x86_64 pam_ssh_agent_auth.x86_64 jwhois.x86_64"
yum_dev_pack=" w3m rsync nginx python26 python26-setuptools subversion wget curl git nmap.x86_64 keyutils.x86_64 fcgi.x86_64 spawn_fcgi.x86_64 mytop patch strace bzip2 curl-devel.x86_64"
yum_remove_pack="sendmail"

resolve_file=/etc/resolv.conf
rc_file=/etc/rc.local
limit_file=/etc/security/limits.conf
crontab_file=/etc/crontab
selinux_file=/etc/selinux/config
$ECHO "
* soft nofile 65535
* hard nofile 65535
" | $TEE -a $limit_file
$SED -i "s/\(MAILTO=.*$\)/MAILTO=/" $crontab_file
$YUM erase -y $yum_remove_pack
$YUM install -y $yum_working_pack
!( test -f "$selinux_file" ) && echo "no selinux" || $SED -i "s/SELINUX=enforcing/SELINUX=disabled/ $selinux_file
$YUM install -y $yum_dev_pack
#$YUM upgrade -y
