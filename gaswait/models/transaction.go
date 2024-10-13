package models

import (
	"math/big"
	"time"

	"gorm.io/gorm"
)

// Transaction represents an EVM-compatible transaction
type Transaction struct {
	gorm.Model // Gorm provides fields like ID, CreatedAt, UpdatedAt, DeletedAt

	TxHash      string     `gorm:"type:varchar(66);uniqueIndex"` // Transaction hash
	From        string     `gorm:"type:varchar(42);not null"`    // Sender address
	To          string     `gorm:"type:varchar(42)"`             // Recipient address (could be null for contract creation)
	Value       string     `gorm:"type:numeric;default:0"`       // Transaction value in wei (big integer as string)
	GasPrice    string     `gorm:"type:numeric"`                 // Gas price in wei
	GasLimit    uint64     `gorm:"not null"`                     // Gas limit provided by the sender
	GasUsed     uint64     `gorm:"default:0"`                    // Actual gas used (after execution)
	Nonce       uint64     `gorm:"not null"`                     // Nonce of the sender account
	InputData   []byte     `gorm:"type:bytea"`                   // Data sent with the transaction (for contract calls)
	BlockHash   string     `gorm:"type:varchar(66)"`             // Hash of the block containing this transaction
	BlockNumber uint64     `gorm:"default:0"`                    // Block number (inclusion block number)
	Status      uint8      `gorm:"default:0"`                    // Transaction status (1 for success, 0 for failure, 2 for pending)
	ToChainTime *time.Time `gorm:"type:timestamp"`
}

// BeforeCreate callback for converting big.Int values to string for database storage
func (t *Transaction) BeforeCreate() (err error) {
	// Example: custom logic before creating a transaction
	return nil
}

// Helper function to convert big.Int values to string
func BigIntToString(b *big.Int) string {
	return b.String()
}

func (t *Transaction) Create() error {
	result := db.Create(t)
	return result.Error
}

func GetTransactionByTxHash(txHash string) (*Transaction, error) {
	var tx Transaction
	result := db.Where("tx_hash = ?", txHash).First(&tx)
	return &tx, result.Error
}

func QuesyTransactions() ([]Transaction, error) {
	var transactions []Transaction
	result := db.Find(&transactions)
	return transactions, result.Error
}

func UpdateTransaction(tx *Transaction) error {
	result := db.Save(tx)
	return result.Error
}

func DelTransactionByTxHash(txHash string) error {
	result := db.Where("tx_hash = ?", txHash).Delete(&Transaction{})
	return result.Error
}
