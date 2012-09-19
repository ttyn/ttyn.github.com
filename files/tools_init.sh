#!/bin/bash
YUM=/usr/bin/yum
USERMOD=/usr/sbin/usrmod
ADDUSER=/usr/sbin/adduser
MKDIR=/bin/mkdir
CHMOD=/bin/chmod
CHOWN=/bin/chown
SED=/bin/sed
ID=/usr/bin/id


admin_user="andy.x"
ssh_path="/home/$admin_user/.ssh"
yum_basic_pack=" wget screen curl"
yum_essential_pack=" ntp ntpdate"
"$YUM install -y $yum_basic_pack"
$ADDUSER "$admin_user"
$MKDIR -p "$ssh_path"
$CHMOD 700 "/home/$admin_user" "$ssh_path"
$CHOWN "$admin_user":"$admin_user" /home/"$admin_user" "$ssh_path"
$ID $admin_user
"$YUM install -y $yum_essential_pack"
