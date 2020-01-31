function FindProxyForURL(url, host) {
if (dnsDomainIs(host, "mesu.apple.com")) {
return "PROXY 8.8.8.8:53";
}
else {
return "DIRECT";
}
}
