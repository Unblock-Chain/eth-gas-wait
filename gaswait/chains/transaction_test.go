package chains

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestSendSignedTransaction(t *testing.T) {
	// 测试数据
	signedTxHex := ""

	err := SendSignedTransaction(signedTxHex)
	assert.NoError(t, err, "expected no error when sending signed transaction")

}
