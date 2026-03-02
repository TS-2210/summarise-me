from transformers import pipeline

summariser = pipeline(
    "summary",
    model="facebook/bart-large-cnn"
)

def generate_summary(text):
    summary = summariser(text, max_length=150)
    in_depth = summariser(text, min_length=100)
    return {"summary":summary, "in_depth":in_depth}