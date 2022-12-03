from flask import Flask, request, jsonify
import os
from utils import *

app = Flask(__name__)
model = Model()


@app.route("/", methods=["GET", "POST"])
def root():
    return jsonify({"success": True}), 200


@app.route("/scan", methods=["POST"])
def scan_doct():
    data = request.get_json()
    if not data or not "content" in data:
        return jsonify({"success": False, "reason": "missing content"}), 400
    try:
        Class = classify(data["content"])
        return jsonify({"success": True, "Class": Class})
    except Exception as e:
        print(e)
        return jsonify({"success": False, "reason": "Not base64 image"}), 400


@app.route("/extract", methods=["POST"])
def extract_info():
    data = request.get_json()
    if not data or not "content" in data:
        return jsonify({"success": False, "reason": "missing content"}), 400
    try:
        annotations = model.get_annotations(data["content"])
        return jsonify({"success": True, "Annotations": annotations})
    except Exception as e:
        print(e)
        return jsonify({"success": False, "reason": "Error from the server"}), 500


@app.route("/extract_disease", methods=["POST"])
def extract_disease():
    data = request.get_json()
    if not data or not "content" in data:
        return jsonify({"success": False, "reason": "missing content"}), 400
    try:
        annotations = get_disease(model, data)
        return jsonify({"success": True, "Diseases": annotations})
    except Exception as e:
        print(e)
        return jsonify({"success": False, "reason": "Error from the server"}), 500
