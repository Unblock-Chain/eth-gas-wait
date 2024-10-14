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

	var err error
	client, err = ethclient.Dial(rpc)
	log.Fatalln(err)
}
