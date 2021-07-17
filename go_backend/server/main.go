package main

import (
	"encoding/json"
	"github.com/rs/zerolog/log"
	"github.com/wangwalton/webber/go_backend/html_parser"
	"github.com/wangwalton/webber/go_backend/util"
	"net/http"
)

func toTable(w http.ResponseWriter, r *http.Request) {
	log.Info().Msg("Received request")

	if r.Method != "POST" {
		http.Error(w, "We only support POST", http.StatusInternalServerError)
		return
	}

	diff := html_parser.TopDownExtract(r.Body, nil)
	res, err := json.Marshal(diff)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}

	enableCors(&w)
	w.Write(res)
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
	(*w).Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	(*w).Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
}
func main() {
	util.LogSetup()

	log.Info().Msg("Setting up server on localhost:8080")

	http.HandleFunc("/toTable", toTable)
	http.ListenAndServe(":8080", nil)
}
