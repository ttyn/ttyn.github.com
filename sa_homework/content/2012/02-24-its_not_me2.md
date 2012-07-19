---
tags:
- doc
- draft
permalink: 2012-02-24-notitl
title: 常规安全审计
toc: true
kind: article
created_at: Fri Feb 24 16:45:48 CST 2012
excerpt: auditing
author_name: andy
status: publish
---

## 逐步整理系统权限
* sudo
  * M0: 用户user
      - 系统用户(backup, crontab user)
      - dev 个人用户
      * 尽量直接使用个人帐号
      * 有权限问题时候可以用sudo，但是禁止切换为root
      * 减少输入密码需要，逐步以长密码和key代替。
  * M1: sudoer/visudo
    * 只用来界定执行的命令组权限
    * 禁用sudo su 切换root
    * cleanup sudoers 让它实际可用
    * 定义一些系统命令，谨慎关闭sudo权限
  * M2: disable root
* sshd_config
  * M1: 根据用户客户端系统尽量普及key验证登录
  * M2: 所有的系统用户和脚本强制使用key验证登录 
  * M3: disable password login
* mysqld
  * M1: 使用${HOME}/.my.cnf, mysql帐号不要直接写入到脚本中
  * M2: clean up grant table
* DNS/Host/Monitor
  * M1: 在/etc/hosts中使用内网ip/hostname对照
  * M2: 公网ip解析和连接作为特殊需求单独考虑