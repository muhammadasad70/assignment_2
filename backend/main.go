package main

import (
	"MyNewApp/backend/database"
	"MyNewApp/backend/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	// ✅ Add CORS middleware FIRST
	r.Use(corsMiddleware())

	// ✅ Connect to DB and set up routes
	database.ConnectDB()
	routes.TaskRoutes(r)

	// ✅ Run server
	r.Run(":8080")
}

func corsMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "http://localhost:8081")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Origin, Content-Type, Accept, Authorization")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}
		c.Next()
	}
}
