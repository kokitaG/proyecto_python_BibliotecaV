from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="Backend Biblioteca")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

USUARIOS_DB = [
    {"usuario": "admin", "password": "123"},
    {"usuario": "jersson", "password": "umg2026"}
]

class LoginRequest(BaseModel):
    usuario: str
    password: str

@app.post("/api/login")
def login(credenciales: LoginRequest):
    # Buscar si el usuario existe en el arreglo
    usuario_encontrado = None
    for u in USUARIOS_DB:
        if u["usuario"] == credenciales.usuario:
            usuario_encontrado = u
            break

    # Caso 1: El usuario no existe
    if not usuario_encontrado:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="El usuario ingresado no existe"
        )

    # Caso 2: El usuario existe, pero la contraseña no coincide
    if usuario_encontrado["password"] != credenciales.password:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Contraseña incorrecta. Por favor verifíquela."
        )

    # Caso 3: Credenciales válidas
    return {
        "status": "success",
        "mensaje": "Inicio de sesión correcto",
        "usuario": usuario_encontrado["usuario"]
    }