package routes

import (
	"gaswait/controllers"

	"github.com/gin-gonic/gin"
)

func Setup(r *gin.Engine) {
	r.POST("/transaction", controllers.CreateTransaction)
	r.GET("/transactions", controllers.QueryTransaction)
}
