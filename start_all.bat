@echo off

echo Iniciando microservicios AUTH...
start cmd /k "cd /d C:\Users\Nicole\Desktop\Programacion Distribuida\UNIBRIDGE\backend\domains\auth\login-service && node server.js"
start cmd /k "cd /d C:\Users\Nicole\Desktop\Programacion Distribuida\UNIBRIDGE\backend\domains\auth\logout-service && node server.js"
start cmd /k "cd /d C:\Users\Nicole\Desktop\Programacion Distribuida\UNIBRIDGE\backend\domains\auth\password-request-reset-service && node server.js"
start cmd /k "cd /d C:\Users\Nicole\Desktop\Programacion Distribuida\UNIBRIDGE\backend\domains\auth\password-reset-service && node server.js"
start cmd /k "cd /d C:\Users\Nicole\Desktop\Programacion Distribuida\UNIBRIDGE\backend\domains\auth\register-service && node server.js"
start cmd /k "cd /d C:\Users\Nicole\Desktop\Programacion Distribuida\UNIBRIDGE\backend\domains\auth\send-verification-code-service && node server.js"
start cmd /k "cd /d C:\Users\Nicole\Desktop\Programacion Distribuida\UNIBRIDGE\backend\domains\auth\validate-token-service && node server.js"
start cmd /k "cd /d C:\Users\Nicole\Desktop\Programacion Distribuida\UNIBRIDGE\backend\domains\auth\verify-code-service && node server.js"

echo Iniciando microservicios USERS...
start cmd /k "cd /d C:\Users\Nicole\Desktop\Programacion Distribuida\UNIBRIDGE\backend\domains\users\access-control-service && node server.js"
start cmd /k "cd /d C:\Users\Nicole\Desktop\Programacion Distribuida\UNIBRIDGE\backend\domains\users\assign-role-service && node server.js"
start cmd /k "cd /d C:\Users\Nicole\Desktop\Programacion Distribuida\UNIBRIDGE\backend\domains\users\create-service && node server.js"
start cmd /k "cd /d C:\Users\Nicole\Desktop\Programacion Distribuida\UNIBRIDGE\backend\domains\users\delete-service && node server.js"
start cmd /k "cd /d C:\Users\Nicole\Desktop\Programacion Distribuida\UNIBRIDGE\backend\domains\users\disable-service && node server.js"
start cmd /k "cd /d C:\Users\Nicole\Desktop\Programacion Distribuida\UNIBRIDGE\backend\domains\users\enable-service && node server.js"
start cmd /k "cd /d C:\Users\Nicole\Desktop\Programacion Distribuida\UNIBRIDGE\backend\domains\users\get-service && node server.js"
start cmd /k "cd /d C:\Users\Nicole\Desktop\Programacion Distribuida\UNIBRIDGE\backend\domains\users\update-service && node server.js"

echo Iniciando microservicios VACANCY...
start cmd /k "cd /d C:\Users\Nicole\Desktop\Programacion Distribuida\UNIBRIDGE\backend\domains\vacancy\vacancy-create-service && ruby app.rb -p 5005"
start cmd /k "cd /d C:\Users\Nicole\Desktop\Programacion Distribuida\UNIBRIDGE\backend\domains\vacancy\vacancy-get-all-service && uvicorn app.main:app --reload --port 8000"

echo Iniciando microservicios STUDENT_MANAGEMENT...
start cmd /k "cd /d C:\Users\Nicole\Desktop\Programacion Distribuida\UNIBRIDGE\backend\domains\student_management\student-apply-vacancy-service && go run ./cmd/main.go"
start cmd /k "cd /d C:\Users\Nicole\Desktop\Programacion Distribuida\UNIBRIDGE\backend\domains\student_management\student-view-vacancies-service && uvicorn app.main:app --reload --port 5004"
start cmd /k "cd /d C:\Users\Nicole\Desktop\Programacion Distribuida\UNIBRIDGE\backend\domains\student_management\user-get-profile-service && uvicorn main:app --reload --port 3021"

echo Iniciando FRONTEND...
start cmd /k "cd /d C:\Users\Nicole\Desktop\Programacion Distribuida\UNIBRIDGE\frontend && npm run dev"

echo Todo está lanzado

