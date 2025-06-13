// package database

// import (
// 	"MyNewApp/backend/models"
// 	"fmt"
// 	"log"
// 	"os"

// 	"gorm.io/driver/postgres"
// 	"gorm.io/gorm"
// )

// var DB *gorm.DB

// func ConnectDB() {
// 	dsn := "host=localhost user=postgres password=yourpassword dbname=yourdb port=5432 sslmode=disable"

// 		os.Getenv("DB_HOST"),
// 		os.Getenv("DB_USER"),
// 		os.Getenv("DB_PASSWORD"),
// 		os.Getenv("DB_NAME"),
// 		os.Getenv("DB_PORT"),

// 	database, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
// 	if err != nil {
// 		log.Fatal("❌ Failed to connect to database:", err)
// 	}

// 	database.AutoMigrate(&models.Task{})

//		DB = database
//		log.Println("✅ Connected to DB and migrated Task model")
//	}
package database

import (
	"MyNewApp/backend/models"
	"fmt"
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDB() {
	// Fetch environment variables
	host := "localhost"
	user := "postgres"
	password := "nm00"
	dbName := "postgres"
	port := "5432"

	// Format the DSN string
	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable",
		host, user, password, dbName, port)

	// Open the database connection
	database, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("❌ Failed to connect to database:", err)
	}

	// Auto-migrate your models
	err = database.AutoMigrate(&models.Task{})
	if err != nil {
		log.Fatal("❌ Failed to migrate Task model:", err)
	}

	DB = database
	log.Println("✅ Connected to DB and migrated Task model")
}
