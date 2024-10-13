package models

type ReqCreateTrans struct {
	From     string `json:"from"`
	To       string `json:"to"`
	CallData string `json:"call_data"`
	GasPrice string `json:"gas_price"`
	GasLimit uint64 `json:"gas_limit"`
}

type Response struct {
	Code    uint        `json:"code"`
	Message string      `json:"message"`
	Data    interface{} `json:"data"`
}
