package models

import (
	"gaswait/utils"
	"math/big"
)

type ReqCreateTrans struct {
	From     string `json:"from"`
	To       string `json:"to"`
	Value    string `json:"value"`
	CallData string `json:"call_data"`
	GasPrice string `json:"gas_price"`
	GasLimit string `json:"gas_limit"`
	SValue   *big.Int
	SPrice   *big.Int
	SLimit   *big.Int
}

func (r *ReqCreateTrans) GetValue() (*big.Int, error) {
	var err error
	r.SValue, err = utils.StringToBigInt(r.Value)
	return r.SValue, err
}

func (r *ReqCreateTrans) GetGasPrice() (*big.Int, error) {
	var err error
	r.SPrice, err = utils.StringToBigInt(r.GasPrice)
	return r.SPrice, err
}

func (r *ReqCreateTrans) GetGasLimit() (*big.Int, error) {
	var err error
	r.SLimit, err = utils.StringToBigInt(r.GasLimit)
	return r.SLimit, err
}

// TODO: require
func (r *ReqCreateTrans) Check() error {
	if _, err := r.GetValue(); err != nil {
		return err
	}

	if _, err := r.GetGasPrice(); err != nil {
		return err
	}

	if _, err := r.GetGasLimit(); err != nil {
		return err
	}
	return nil
}

type ReqQueryTransa struct {
	From   string `form:"from"`
	To     string `form:"to"`
	TxHash string `form:"tx_hash"`
}

type Response struct {
	Code    uint        `json:"code"`
	Message string      `json:"message"`
	Data    interface{} `json:"data"`
}
