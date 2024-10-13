package config

func init() {
	LoadEnv()
	ConnectDB()
	// TODO: log
}
