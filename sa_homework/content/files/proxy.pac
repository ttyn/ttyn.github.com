function FindProxyForURL(url, host) {
        var lhost = host.toLowerCase();
        var proxy_yes = "SOCKS5 127.0.0.1:18989";
        var proxy_no = "DIRECT";
        var blackhole = "PROXY 127.0.0.1:80";
        host = lhost; 
        if ((host == "locahost") ||
            (shExpMatch(host, "locahost.*")) ||
            (host == "127.0.0.1")) {
               return proxy_no;
        }
        if (dnsDomainIs(host, "twitter.com") || dnsDomainIs(host, ".twitter.com") || shExpMatch(url, "twitter.com")) {
                return proxy_yes;
        } else if (dnsDomainIs(host, ".apigee.com") || shExpMatch(host, "apigee.com")) {
                return proxy_yes;
        } else if (dnsDomainIs(host, ".appspot.com") || shExpMatch(host, "appspot.com")) {
                return proxy_yes;
        } else if (dnsDomainIs(host, ".sstatic.net") || shExpMatch(host, "sstatic.net")) {
                return proxy_yes;
        } else if (dnsDomainIs(host, ".amazon.com") || shExpMatch(host, ".amazon.com")) {
                return proxy_yes;
        } else if (dnsDomainIs(host, ".facebook.com") || shExpMatch(host, ".facebook.com")) {
                return proxy_yes;
        } else if (dnsDomainIs(host, ".cloudfront.net") || shExpMatch(host, ".cloudfront.net")) {
                return proxy_yes;
        } else if (dnsDomainIs(host, ".wikipedia.org") || shExpMatch(host, "wikipedia.org")) {
                return proxy_yes;
        } else if (dnsDomainIs(host, "aws.amazon.com") || shExpMatch(host, "aws.amazon.com")) {
                return proxy_yes;
        } else if (dnsDomainIs(host, "aws-portal.amazon.com") || shExpMatch(host, "aws-portal.amazon.com")) {
                return proxy_yes; 
        } else if (dnsDomainIs(host, ".mitbbs.com") || shExpMatch(host, "mitbbs.com")) {
                return proxy_yes;
        } else if (dnsDomainIs(host, "osdir.com") || shExpMatch(host, "osdir.com")) {
                return proxy_yes;
        } else if (dnsDomainIs(host, "washingtonpost.com") || shExpMatch(host, "washingtonpost.com")) {
                return proxy_yes;
        } else if (dnsDomainIs(host, ".runningahead.com") || shExpMatch(host, "runningahead.com")) {
                return proxy_yes;
        } else if (dnsDomainIs(host, ".git-scm.com") || shExpMatch(host, "git-scm.com")) {
                return proxy_yes;
        } else if (dnsDomainIs(host, ".t.co") || shExpMatch(host, "t.co")) {
                return proxy_yes;
        } else if (dnsDomainIs(host, ".youtube.com") || shExpMatch(host, "youtube.com")) {
                return proxy_yes;
        } else if (dnsDomainIs(host, ".ytimg.com") || shExpMatch(host, "ytimg.com")) {
                return proxy_yes;
        } else if (dnsDomainIs(host, ".vimeo.com") || shExpMatch(host, "vimeo.com")) {
                return proxy_yes;
        } else if (dnsDomainIs(host, "video.pbs.org") || shExpMatch(host, "video.pbs.org")) {
                return proxy_yes;
        } else if (dnsDomainIs(host, "linux.die.net") || shExpMatch(host, "linux.die.net")) {
                return proxy_yes;
        } else if (dnsDomainIs(host, ".tumblr.com") || shExpMatch(host, "tumblr.com")) {
                return proxy_yes;
        } else if (dnsDomainIs(host, ".wordpress.com") || shExpMatch(host, "wordpress.com")) {
                return proxy_yes;
        } else if (dnsDomainIs(host, ".readthedocs.org") || shExpMatch(host, "readthedocs.org")) {
                return proxy_yes;
        } else if (dnsDomainIs(host, ".rtfd.org") || shExpMatch(host, "rtfd.org")) {
                return proxy_yes;
        } else if (shExpMatch(host, "focus.de") || dnsDomainIs(host, ".focus.de")) {
                return proxy_yes;
        } else if (shExpMatch(host, "tunein.com") || dnsDomainIs(host, ".tunein.com")) {
                return proxy_yes;
        } else if (shExpMatch(host, "radio.com") || dnsDomainIs(host, ".radio.com")) {
                return proxy_yes;
        } else if (shExpMatch(host, "last.fm") || dnsDomainIs(host, ".last.fm")) {
                return proxy_yes;
        } else if (dnsDomainIs(host, ".blogspot.com")) {
                return proxy_yes;
        } else if (dnsDomainIs(host, ".google.com") || shExpMatch(host, "google.com")) {
                return proxy_yes;
        } else if (dnsDomainIs(host, ".googleusercontent.com") || shExpMatch(host, ".googleusercontent.com")) {
                return proxy_yes;
        } else if (shExpMatch(host, ".gstatic.com")) {
                return proxy_yes;
        } else if (shExpMatch(host, ".googleapis.com")) {
                return proxy_yes;
        } else if (shExpMatch(host, ".googlelabs.com")) {
                return proxy_yes;
        } else if (shExpMatch(host, ".google.com.hk")) {
                return proxy_yes;
        } else if (shExpMatch(host, ".google.cn")) {
                return proxy_yes;
        } else if (shExpMatch(host, "wordpress.com")) {
                return proxy_yes;
        } else if (shExpMatch(host, "whatismyip.org")) {
                return proxy_yes;
        } else if (shExpMatch(host, "feedburner.com")) {
                return proxy_yes;
        } else if (shExpMatch(host, "feedproxy.google.com")) {
                return proxy_yes;
        } else if (shExpMatch(host, "bit.ly")) {
                return proxy_yes;
        } else if (shExpMatch(host, "j.mp")) {
                return proxy_yes;
        } else if (shExpMatch(host, "dropbox")) {
                return proxy_yes;
        } else if (shExpMatch(host, "pastebin.com")) {
                return proxy_yes;
        } else if (dnsDomainIs(host, "thepiratebay.se")) {
                return proxy_yes;
        }
        return proxy_no;
}
