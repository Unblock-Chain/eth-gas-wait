package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

func LoadEnv() {
	env := os.Getenv("GIN_ENV")

	var envFile string
	switch env {
	case "prod":
		envFile = ".env.prod.local"
	case "test":
		envFile = ".env.test.local"
	default:
		envFile = ".env.dev.local"
	}

	err := godotenv.Load(envFile)
	if err != nil {
		log.Fatalf("Error loading %s file", envFile)
	}
}
