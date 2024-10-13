package models

type ReqCreateTrans struct {
	From     string `json:"from"`
	To       string `json:"to"`
	Value    uint64 `json:"value"`
	CallData string `json:"call_data"`
	GasPrice uint64 `json:"gas_price"`
	GasLimit uint64 `json:"gas_limit"`
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
