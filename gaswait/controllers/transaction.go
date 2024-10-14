package controllers

import (
	"gaswait/models"
	"strconv"

	"github.com/gin-gonic/gin"
)

// Create
func CreateTransaction(c *gin.Context) {
	var req models.ReqCreateTrans
	if err := c.ShouldBindJSON(&req); err != nil {
		resp(c, 5001, "invalid args", "")
		return
	}

	if err := req.Check(); err != nil {
		resp(c, 5001, "invalid args", "")
		return
	}

	var tran models.Transaction
	tran.From = req.From
	tran.To = req.To
	tran.Value = req.Value
	// TODO: check call data
	tran.InputData = req.CallData
	tran.GasPrice = req.GasPrice
	tran.GasLimit = req.GasLimit

	if err := tran.Create(); err != nil {
		resp(c, 5002, err.Error(), "")
		return
	}

	resp(c, 200, "create success", tran)
}

func QueryTransaction(c *gin.Context) {
	var req models.ReqQueryTransa
	if err := c.ShouldBindQuery(&req); err != nil {
		resp(c, 5001, "invalid args", "")
		return
	}

	var wheres = make(models.Wheres)
	wheres["from"] = req.From
	wheres["to"] = req.To
	wheres["tx_hash"] = req.TxHash

	transactions, err := models.QuesyTransactions(wheres)
	if err != nil {
		resp(c, 50013, err.Error(), "")
		return
	}

	resp(c, 200, "success", transactions)
}

func DelteteTransaction(c *gin.Context) {
	id := c.Param("id")
	uid, err := strconv.ParseUint(id, 10, 0) // 基数为 10，位数为 0
	if err != nil {
		resp(c, 5001, "invalid args", "")
		return
	}

	var tran models.Transaction
	tran.ID = uint(uid) // todo: fix type
	if err := tran.Get(); err != nil {
		resp(c, 5002, err.Error(), "")
		return
	}

	if err := tran.Delete(); err != nil {
		resp(c, 5003, err.Error(), "")
		return
	}

	resp(c, 200, "success", "")
}
