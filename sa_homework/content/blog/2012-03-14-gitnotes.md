---
tags:
- blog
- nanoc
- writing
- opensource
- tools
- git
permalink: 2012-03-14-gitnotes
title: git notes
toc: true
kind: article
created_at: Wed Mar 14 16:00:27 CST 2012
author_name: andy
status: publish
---

## git notes | git 笔记
 
****

###     @git readinglist | git读不完 

* all documentations
  * [强烈推荐] [英文] 20个每天够用的git命令(git官方文档) http://schacon.github.com/git/everyday.html
  * [强烈推荐] [英文] git community book(分各种级别) http://book.git-scm.com/ by Scott Chacon@github
  * [强烈推荐] [中文] git全面介紹(Pro git) http://progit.org/book/zh/
  * [强烈推荐] [英文] 原版Pro Git http://progit.org/book/ by Scott Chacon@github
  * [中文] 快速入門 http://www.ibm.com/developerworks/cn/linux/l-git/
  * [英文] 快速入門 http://linux.yyz.us/git-howto.html
  * [中文] git命令細述 http://blog.enjoyrails.com/2008/12/30/git%E8%AF%A6%E8%A7%A3%EF%BC%88%E4%BA%8C%EF%BC%89/
  * [中文] git於svn詳細比較 http://hi.baidu.com/leolance/blog/item/c7887912b2e9fb5921a4e933.html
    * (太詳細了，沒看完，不一定都考譜)
  * [中文] 群英彙的git admin文擋 http://www.ossxp.com/doc/git/gitolite.html
  * [中文] 基於git的cheatsheets http://www.robinlu.com/blog/archives/199
  * [code] 生成svn patch https://gist.github.com/559473
  * [英文] 使用git deploy 網站 http://philsturgeon.co.uk/news/2010/02/Deploying-websites-with-Git
  * [討論] 將已有的svn repo轉換為git repo 
    * http://stackoverflow.com/questions/79165/how-to-migrate-svn-with-history-to-a-new-git-repository
    * http://www.jonmaddox.com/2008/03/05/cleanly-migrate-your-subversion-repository-to-a-git-repository/
  * [中文] Windows下使用Git http://www.worldhello.net/2010/12/31/2282.html
  * [英文] 從svn轉到git工作 http://git.or.cz/course/svn.html
  * [英文] git的工作原理圖解 (很簡單) http://eagain.net/articles/git-for-computer-scientists/
  * [app] 傳說中不錯得windows git客戶端軟件 http://www.syntevo.com/smartgit/download.html

****

### git @ref and @tutorials | 补充git 的参考资料和教程

* git reference
  * http://gitref.org/index.html
  * @github
  * 比较精简的快速查询

* git questions
  * http://stackoverflow.com/questions/tagged/git
  * @stackoverflow
  * 平时实际使用会遇到的问题与解答

* git for computer scientiests
  * http://eagain.net/articles/git-for-computer-scientists/
  * Tommi Virtanen@eagain (Gitosis作者)

* git magic
  * http://www-cs-students.stanford.edu/~blynn/gitmagic/
  * Ben Lynn@stanford
  * 一共十页的文档，比较适合阅读的排版

* git windows 使用图解
  * http://nathanj.github.com/gitguide/index.html
  * nathanj@github
  * 带有截图的专门叙述如何用windows+git

* 给designer用的git教程
  * http://hoth.entp.com/output/git_for_designers.html
  * 也有截图，并且比较短。

* git 分支图解
  * http://marklodato.github.com/visual-git-guide/index-en.html
  * Mark Lodato@github
  * 一页包括非常清晰的图解。

* git和svn对比 [kernel.org官方文档]
  * http://git.or.cz/course/svn.html
  * Petr Baudis@suse
  * 每个svn命令和git命令对照和解说

* 理解git概念
  * http://www.eecs.harvard.edu/~cduan/technical/git/
  * Charles Duan@harvard
  * 讲得非常清晰得git概念

* git官方帮助手册
  * http://schacon.github.com/git/git.html
  * Junio C Hamano
  * 如果不习惯查看linux man手册就不用看了。

****

### git @questions | git 的一些问题


* 这里面存在很多问题，需要解决，现在先列出暂时想到的
  * 建議至少讀完Pro Git再做決策
* redmine对git支持是否全面？现在了解的是，redmine貌似还不支持git branch
  * yes，目前的svn版本已經支持
  * 可以考慮http://codeslife.com/2011/01/27/alm-redmine-integration-with-git-well-done/
* 是否能方便的从外网访问到内网的git？最好能做到和svn一样，通过改hosts就能从外网访问
  * could do - checkout github, github能做的事情原則上我們都可以實現
* 从svn迁移到git的成本多高？
  * depends on dev team，建議大家至少讀一遍Pro Git
  * 開發team的工作流程需要明確的定義: 
  * : 任何人都可以push到master
  * : 直接發佈master
  * 這兩條工作協議不能同時存在。一開始還是鼓勵大家多checkout和多進行
            push練習，等我們熟練以後可以調整到比較靈活使用git merge, git rebate
            等特性。
* git如何能做到自动将branch代码直接同步到252这样的测试服务器上？git有比svn更强大的hook，理论上肯定没问题
  * could do，事實上應該用tag 發佈
* git如何生成“干净”的diff，即只显示branch中为这个issue所开发的内容？
  * could almost do
  * ref: http://blog.enjoyrails.com/2008/12/30/git%E8%AF%A6%E8%A7%A3%EF%BC%88%E4%BA%8C%EF%BC%89/
  *  branch的使用實際上只包括它從哪個點checkout和我們計劃將
        它的哪些改動集合merge回master (假設我們始終要用master tag發佈)
  *  git fetch之後進行code review再做git merge最保險，可以參考android的開發
        流程，ref:gerrit
* 自动将branch同步到master或上线用的分支有哪些风险？
  * 同上，取決於開發流程 http://progit.org/book/zh/ch3-4.html
  * 根據我的理解，git的使用協議更focus在merge上，開設branch是一個類似於
        subversion中checkout一樣的常規開發行為。也可以理解為git的工作粒度可以很
        細，為每個milestone/issue開一個branch都可以
        但是大家需要有足夠的共識－比如哪個branch的內容需要所有其它branch主動去merge。

* 是否有什么功能git弱于svn？
  * 權限控制－需要獨立的repo 給不同的權限組織
  * : 可以用git fetch來包含不同版本庫repo的內容作為本地lib使用
  * 沒有全局的version number - 只有修訂記錄，沒有順序的版本號碼。
  * : 原則上都用tag 來手工標示發佈版本
  * 工作協議
  * : 大的項目需要預先定義好工作協議並且確定發佈方式，當然也可以
              從新開個remote master進行發佈。。不過那就浪費了git的快速和
              靈活了。所以也不建議使用gitsvn等中和方式，因為切換到git的
              主要目標之一就是為了讓source control可以和實際的work flow
              比較切合，而不是生成更多的工作。
        * ref: http://stackoverflow.com/questions/540784/how-much-of-the-power-of-git-is-lost-by-using-git-svn-and-a-shared-subversion-mai
  * 不能加入empty folder
  * : https://git.wiki.kernel.org/index.php/GitFaq#Can_I_add_empty_directories.3F
  * : http://stackoverflow.com/questions/115983/how-do-i-add-an-empty-directory-to-a-git-repository

* 擴展
  * 適合做code review的gerrit
  * : http://blog.ossxp.com/2010/11/2059/
  * : http://code.google.com/p/gerrit/

****
