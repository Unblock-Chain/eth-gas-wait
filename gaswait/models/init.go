package models

import "gaswait/config"

var db = config.DB

func init() {
	db.AutoMigrate(&Transaction{})
}
