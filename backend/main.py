from fastapi import FastAPI
from pydantic import BaseModel
from summarise import generate_summary

app = FastAPI()

class TextRequest(BaseModel):
    text: str

@app.post("/summarise")
def summarise_text(request: TextRequest):
    return generate_summary(request.text)