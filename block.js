function FindProxyForURL(url, host) {
if (dnsDomainIs(host, "mesu.apple.com") || (host == "xp.apple.com") || (host == "gdmf.apple.com") || (host == "appldnld.apple.com")) {
return "PROXY 8.8.8.8:53";
}
else {
return "DIRECT";
}
}
