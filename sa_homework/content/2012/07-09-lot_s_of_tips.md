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
* notify cmd line this is the end of options
        --
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
* fix sudo
        :w !sudo tee %


### app | 應用
* chrome
        - keybinding to next tab in chrome: Ctrl-Tab
        - keybinding to next window in chrome: Cmd-`
* curl
        - debug it: curl -vv https://s3.amazonaws.com/

* mac osx
        - screenshot screen capture ⌘ ⇧ 3

* combine two images (merge)
        $> convert +append a.png b.png c.png
        $> montage -geometry 100% left.jpg right.jpg merged.jpg
        
        

### git | just git
* git remove deleted files 
        git status |grep deleted |awk '{print $3}' | xargs git rm

### tools | 工具箱
* centos/yum
* brew
* python
        fabric
        ipython
        gunicorn
[requirements.txt][link_pipbasic]
        
        
### ideas | 思路
* http stack
        http request > web server > router > data handling > response
* python webapp stack
        django + flask + nginx +uWSGI
       

### spartan life hacks (which i dont want to forget) 
* mental
        mental dicipline
        modest and sincere
        dont judge 不下結論
* physical
        balance/cadence/flex
        @sleeping crunch/lay-biking/ab round/ab breathe
        @standing backkick/ab breathe 腹式呼吸
        @running correct overstriding
        @eating water/vegie
        
        



### links | 總是有用的連接
* [unix toolbox][link_toolbox]


--- 

go [home][link_home] lets go back back to [home][link_home]
[link_home]: http://ttyn.me "Title: HOME"
[link_toolbox]: http://ttyn.github.com/ref/unixtoolbox.html "Title: unixtoolbox"
[link_pipbasic]: http://ttyn.github.com/txt/pip_sabasic_requirements.txt "Title: pip basic requirements"


