function FindProxyForURL(url, host) {
        var lhost = host.toLowerCase();
        host = lhost; 
        if ((host == "localhost") ||
            (shExpMatch(host, "localhost.*")) ||
            (host == "127.0.0.1")) {
               return "DIRECT";
        }
        if (shExpMatch(host, ".twitter.com")) {
                return "SOCKS5 127.0.0.1:8989";
        } else if (dnsDomainIs(host, ".blogspot.com")) {
                return "SOCKS5 127.0.0.1:8989";
        } else if (shExpMatch(host, ".google.com")) {
                return "SOCKS5 127.0.0.1:8989";
        } else if (shExpMatch(host, ".googleusercontent.com")) {
                return "SOCKS5 127.0.0.1:8989";
        } else if (shExpMatch(host, ".gstatic.com")) {
                return "SOCKS5 127.0.0.1:8989";
        } else if (shExpMatch(host, ".googleapis.com")) {
                return "SOCKS5 127.0.0.1:8989";
        } else if (shExpMatch(host, ".googlelabs.com")) {
                return "SOCKS5 127.0.0.1:8989";
        } else if (shExpMatch(host, ".google.com.hk")) {
                return "SOCKS5 127.0.0.1:8989";
        } else if (shExpMatch(host, ".google.cn")) {
                return "SOCKS5 127.0.0.1:8989";
        } else if (shExpMatch(host, "google.com")) {
                return "SOCKS5 127.0.0.1:8989";
        } else if (shExpMatch(host, "whatismyip.org")) {
                return "SOCKS5 127.0.0.1:8989";
        } else if (shExpMatch(host, "feedburner.com")) {
                return "SOCKS5 127.0.0.1:8989";
        } else if (shExpMatch(host, "feedproxy.google.com")) {
                return "SOCKS5 127.0.0.1:8989";
        } else if (shExpMatch(host, "bit.ly")) {
                return "SOCKS5 127.0.0.1:8989";
        } else if (shExpMatch(host, "posterous.com")) {
                return "SOCKS5 127.0.0.1:8989";
        } else if (shExpMatch(host, "youtube.com")) {
                return "SOCKS5 127.0.0.1:8989";
        } else if (shExpMatch(host, "ytimg.com")) {
                return "SOCKS5 127.0.0.1:8989";
        } else if (shExpMatch(host, "dropbox")) {
                return "SOCKS5 127.0.0.1:8989";
        } else if (shExpMatch(host, "ef.com")) {
                return "SOCKS5 127.0.0.1:8989";
        }
        return "DIRECT";
}
