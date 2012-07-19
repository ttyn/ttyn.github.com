---
tags:
- doc
permalink: ssh_key_setup.html
title: setup and use ssh key pairs auth
toc: true
kind: article
created_at: Wed Jun 6 2012
author_name: andy
excerpt: [zh_cn] ssh key setup 
status: publish
---

### 配置和使用ssh key auth驗證登陸

* 概念
    客戶機器為 client_server
    需要提供登陸的服務器為 host_server
    在client_server和 host_server 上都有 local_conn_bot 用戶，家目錄為${HOME}

* 第一步 @client_server

    local_conn_bot@client_server $ ssh-keygen -t rsa -C local_conn_bot@localbox.me -f ${HOME}/.ssh/2012-local_conn_bot -P 
    [如果為系統用戶，可以直接回車設置2012-local_conn_bot這個key的passphrase為空]

  * 生成的key文件包括 2012-local_conn_bot 和 2012-local_conn_bot.pub 

                2012-local_conn_bot 文件為私匙，必須安全保存，不要存放到任何公用服務器上
                2012-local_conn_bot.pub 為公匙，是提供給host_server或者其它需要登陸的server的驗證文件

  * 權限設置 

                local_conn_bot@client_server $ chmod 700 ${HOME}/.ssh
                local_conn_bot#client_server $ chmod 400 ${HOME}/.ssh/2012-local_conn_bot

* 第二步 @host_server

                local_conn_bot@host_server $ mkdir -p ${HOME}/.ssh && chmod 700 ${HOME}/.ssh

    * 粘貼, scp或者其它方式append(追加)剛才的私匙 2012-local_conn_bot 內容到 ${HOME}/.ssh/auth_keys
    * (如果沒有${HOME}/.ssh/auth_keys) 可以直接 @client_server 執行 

                local_conn_bot@client_server$ scp ${HOME}/.ssh/2012-local_conn_bot.pub host_server:${HOME}/.ssh/auth_keys
                local_conn_bot@host_server$ chmod 400 ${HOME}/.ssh/auth_keys

* 第三步測試和dbug

                local_conn_bot@client_server$ ssh host_server uptime ### 測試
                local_conn_bot@client_server$ ssh -vvv host_server uptime ### debug

* 第四步可選 設置 client_server用戶的 ssh_config以使用多套key and or 配置
  
        local_conn_bot@client_server$ cat ~/.ssh/config

                ## --- start of sample ssh config
                Host host_server_01
                        Hostname 192.168.2.1
                Host 30.20.10.0
                        Port 28
                        IdentityFile ~/.ssh/temp-local_conn_bot
                Host *
                        User local_conn_bot
                        ForwardAgent yes
                        Port 22
                        IdentityFile ~/.ssh/2012-local_conn_bot
                        UsePrivilegedPort no
                        ServerAliveInterval 240
                        ServerAliveCountMAx 9999
                ## --- end of sample ssh config

