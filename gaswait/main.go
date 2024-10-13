package main

import (
	_ "gaswait/config"
	"gaswait/middlewares"

	// "gaswait/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.Use(middlewares.Cors())
	// routes.SetupRoutes(r)
	r.Run(":8080")
}
