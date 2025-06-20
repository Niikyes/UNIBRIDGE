package neo4j

import (
	"github.com/neo4j/neo4j-go-driver/v5/neo4j"
)

func NewDriver() (neo4j.DriverWithContext, error) {
	uri := "bolt://127.0.0.1:7687" // 
	auth := neo4j.BasicAuth("neo4j", "12345678", "") // 
	return neo4j.NewDriverWithContext(uri, auth)
}


