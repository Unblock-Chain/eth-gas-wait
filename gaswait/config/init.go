package config

func init() {
	LoadEnv()
	ConnectDB()
}
