package controllers

import (
	"gaswait/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func resp(c *gin.Context, code uint, message string, data interface{}) {
	c.JSON(http.StatusOK, models.Response{
		Code:    code,
		Message: message,
		Data:    data,
	})
}
