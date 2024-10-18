package chains

import (
	"context"

	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/core/types"
)

// TODO: add SignedTxHex Field to models.Transaction
// func SendSignedTransaction(trans *models.Transaction) error {
func SendSignedTransaction(signedTxHex string) error {
	signedTxBytes := common.FromHex(signedTxHex)

	// check tx data
	tx := new(types.Transaction)
	err := tx.UnmarshalBinary(signedTxBytes)
	if err != nil {
		// log.Fatalf("Failed to unmarshal signed transaction: %v", err)
		return err
	}

	// 使用 ethclient 发送已签名的交易
	err = client.SendTransaction(context.Background(), tx)
	if err != nil {
		// log.Fatalf("Failed to send transaction: %v", err)
		return err
	}

	// fmt.Printf("Transaction sent: %s\n", tx.Hash().Hex())
	return nil
}
