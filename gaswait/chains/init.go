package chains

import (
	"log"
	"os"

	"github.com/ethereum/go-ethereum/ethclient"
)

var client *ethclient.Client

func init() {
	rpc := os.Getenv("RPC_URL")
	// TODO: log

	rpc = "https://linea-mainnet.infura.io/v3/"

	var err error
	client, err = ethclient.Dial(rpc)
	if err != nil {
		log.Fatalln(err)
	}
}
