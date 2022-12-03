import PIL
import pytesseract
import os
from io import BytesIO
from base64 import b64decode
from config import *
from transformers import pipeline
from transformers import AutoTokenizer, AutoModelForTokenClassification


class Model:
    def __init__(self) -> None:
        self.tokenizer = AutoTokenizer.from_pretrained("d4data/biomedical-ner-all")
        self.model = AutoModelForTokenClassification.from_pretrained(
            "d4data/biomedical-ner-all"
        )
        self.pipe = pipeline(
            "ner",
            model=self.model,
            tokenizer=self.tokenizer,
            aggregation_strategy="simple",
        )

    def get_annotations(self, text):
        out = self.pipe(text)

        res_dict = {k: [] for k in TARGETS}

        for v in out:
            entity_group = v["entity_group"]
            score = v["score"]
            word = v["word"]

            if entity_group in TARGETS:
                res_dict[entity_group].append(word)

        return dict(res_dict)


def recognize(b64_img):
    image = PIL.Image.open(BytesIO(b64decode(b64_img)))
    text = pytesseract.image_to_string(image)
    return text


def classify(b64_img):
    data = recognize(b64_img).lower()
    for DocClass in CLASESS:
        if PATTERNS[DocClass](data):
            Class = DocClass
            break
    return Class


get_disease = lambda model, data: model.get_annotations(data["content"])[
    "Disease_disorder"
]
