syntax = "proto3";

package practice;

option go_package = "practice-finalize-service/protos";

// Request to finalize a practice
message FinalizePracticeRequest {
  int32 id = 1; // ID of the practice to finalize
  string fecha_fin = 2; // Optional: new end date in YYYY-MM-DD format
}

// Response after finalization
message FinalizePracticeResponse {
  string message = 1;
}
