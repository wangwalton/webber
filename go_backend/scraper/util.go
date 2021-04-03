package main

import (
	"encoding/json"
	"net"
)

func prettify(input interface{}) string {
	b, err := json.MarshalIndent(input, "", "  ")
	panicIfError(err)
	return string(b)
}

func getIP() string{
	ifaces, err := net.Interfaces()
	panicIfError(err)

	var ip net.IP
	for _, i := range ifaces {
		addrs, err := i.Addrs()
		panicIfError(err)

		for _, addr := range addrs {
			switch v := addr.(type) {
			case *net.IPNet:
				ip = v.IP
			case *net.IPAddr:
				ip = v.IP
			}
		}
	}
	return ip.String()
}