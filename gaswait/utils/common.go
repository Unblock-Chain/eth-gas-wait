package utils

import (
	"fmt"
	"math/big"
)

func StringToBigInt(s string) (*big.Int, error) {
	i := new(big.Int)
	_, success := i.SetString(s, 10)
	if !success {
		return nil, fmt.Errorf("failed to convert string to *big.Int")
	}
	return i, nil
}
