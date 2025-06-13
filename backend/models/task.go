// package models

// import "gorm.io/gorm"

//	type Task struct {
//		gorm.Model
//		Title       string
//		Description string
//		Priority    string
//		DueDate     string
//		Completed   bool
//	}
package models

import (
	"time"

	"gorm.io/gorm"
)

type Task struct {
	ID          uint           `json:"id" gorm:"primaryKey"`
	Title       string         `json:"title"`
	Description string         `json:"description"`
	Priority    string         `json:"priority"`
	DueDate     string         `json:"due_date"`
	Completed   bool           `json:"completed"`
	CreatedAt   time.Time      `json:"created_at"`
	UpdatedAt   time.Time      `json:"updated_at"`
	DeletedAt   gorm.DeletedAt `json:"deleted_at"`
}
