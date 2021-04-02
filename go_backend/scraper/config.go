package main

import (
	"bytes"
	"flag"
	"github.com/spf13/viper"
	"io/ioutil"
)

var (
	configFile = flag.String("configFile", "devConfig.yaml", "config file")
)

func configSetup() {
	flag.Parse()
	viper.SetConfigType("yaml")

	file, err := ioutil.ReadFile(*configFile)
	panicIfError(err)
	viper.ReadConfig(bytes.NewBuffer(file))
}
