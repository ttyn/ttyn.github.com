---
created_at: 2012-07-09
excerpt: my own documentation of lots of tips
kind: article
publish: true
tags: [doc, tip, updating]
title: "lots of tips"
---

### cmd | 命令行
* repeat last command argument
        !$ last argument
        !* all argument
* readline
        Ctrl-a, Ctrl-e, Ctrl-u, Ctrl-k
        Ctrl-w  delete a word backwards
        Ctrl-x Ctrl-e actually editing the command line
        Esc-f/Esc-b
* get public ip
        curl http://ip4.me 2>/dev/null | sed -e 's#<[^>]*>##g' | grep '^[0-9]'
 

### text process | 文本處理
* print a line in file
        $ sed -n 4p $file_name 
        -n switch turns off default output
        $ sed -n 3,60p $file_name
        $ sed -n -e 3,60p -e 1p $file_name


### vim | basic vim
* directory and files      
        - open directory listing in vim
        :e.
  
        - open file in this directory listing
        o


### app | 應用
* chrome
        - keybinding to next tab in chrome: Ctrl-Tab
        - keybinding to next window in chrome: Cmd-`
        
        

### git | 
* git remove deleted files 
        git status |grep deleted |awk '{print $3}' | xargs git rm

### tools | 工具箱
* centos/yum
* brew
* python
        fabric
        ipython
[link_pipbasic][requirements.txt]
        
        


### life hacks (which i dont want to forget) 
* mental
        mental dicipline
        modest and sincere
        dont judge 不下結論
* physical
        ab breathe 腹式呼吸
        cadence
        @smoke backkick
        @before sleep crunch and lay-biking
        @sleep belly round
        @eat water and vegie
        
        


---

### links | 總是有用的連接
* [unix toolbox][link_toolbox]


--- 

go [home][link_home] lets go back back to [home][link_home]
[link_home]: http://ttyn.me "Title: HOME"
[link_toolbox]: http://ttyn.github.com/ref/unixtoolbox.html "Title: unixtoolbox"
[link_pipbasic]: http://ttyn.github.com/txt/pip_sabasic_requirements.txt "Title: pip basic requirements"


