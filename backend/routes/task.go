package routes

import (
	"MyNewApp/backend/controllers"

	"github.com/gin-gonic/gin"
)

func TaskRoutes(r *gin.Engine) {
	tasks := r.Group("/tasks") // Already good
	{
		tasks.POST("", controllers.CreateTask) // 🔥 REMOVE trailing slash
		tasks.GET("", controllers.GetTasks)    // 🔥
		tasks.PUT("/:id", controllers.UpdateTask)
		tasks.DELETE("/:id", controllers.DeleteTask)
	}

}
