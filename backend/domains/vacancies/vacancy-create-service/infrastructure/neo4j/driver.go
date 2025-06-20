package neo4j

import (
		"github.com/neo4j/neo4j-go-driver/v5/neo4j"
)

func NewDriver() (neo4j.DriverWithContext, error) {
	uri := "bolt://localhost:7687"
	auth := neo4j.BasicAuth("neo4j", "password", "")
	return neo4j.NewDriverWithContext(uri, auth)
}

