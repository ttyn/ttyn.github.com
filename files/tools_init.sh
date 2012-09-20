#!/bin/bash
YUM=/usr/bin/yum
USERMOD=/usr/sbin/usermod
ADDUSER=/usr/sbin/adduser
MKDIR=/bin/mkdir
CHMOD=/bin/chmod
LN=/bin/ln
LS=/bin/ls
CP=/bin/cp
CHOWN=/bin/chown
SED=/bin/sed
ID=/usr/bin/id
ECHO=/bin/echo


admin_user="andy.x"
ssh_path="/home/$admin_user/.ssh"
ssh_auth_file="http://ttyn.github.com/files/andy.x.pubkeys"
yum_basic_pack=" wget screen curl"
yum_essential_pack=" ntp ntpdate"
default_sudoers='Defaults    !requiretty,!fqdn,!visiblepw'
$YUM install -y $yum_basic_pack
$ADDUSER "$admin_user"
$MKDIR -p "$ssh_path"
$WGET -O "$ssh_path/auth_keys" "$ssh_auth_file"
$LN "$ssh_path/auth_keys" "$ssh_path/authorized_keys"
$CHMOD 700 "/home/$admin_user" "$ssh_path"
$CHMOD 400 "$ssh_path/auth_keys" "$ssh_path/authorized_keys" 
$CHOWN "$admin_user":"$admin_user" /home/"$admin_user" "$ssh_path" "$ssh_path/auth_keys" "$ssh_path/authorized_keys"
$LS -l "$ssh_path/auth_keys"
$USERMOD -G wheel "$admin_user" 
$CP /etc/sudoers /etc/sudoers.ori
$SED -ie 's/.*wheel.*NOPASSWD.*/%wheel ALL=(ALL) NOPASSWD: ALL/' /etc/sudoers
$ECHO "$default_sudoers" >> /etc/sudoers


$ID $admin_user
$YUM install -y $yum_essential_pack
