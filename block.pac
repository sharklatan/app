function FindProxyForURL(url, host)
{

if (shExpMatch(host, "mesu.apple.com") ||
shExpMatch(host, "appldnld.apple.com") ||
shExpMatch(host, "swscan.apple.com") ||
shExpMatch(host, "xp.apple.com") ||
shExpMatch(host, "gdmf.apple.com"))

return "PROXY 127.0.0.1:8080";

else
    return "DIRECT";

}
