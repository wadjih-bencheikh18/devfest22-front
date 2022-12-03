# Nabda Back-End
This contains the code for some of the functions shown in the **Nabda** app, along with a description of the technologies used in process with the models.   

## What is Nabda?
Nabda is a paperless health-care system online solution. A centralized system in which each patient's account is displayed with all of his medical information automatically sorted into different categories and medical fields.  
Medecins, on the other hand, will have a dashboard for all of their patients and information, allowing them to make faster and more precise judgments. It also provides a new approach to submit descriptions, which can extract all relevant medical information. 

## Technologies Used 
- **Flask**: An open source to easily and rapidly build web app for python. It was our choice for the proposed API.
- **Tesseract-OCR**: Tesseract is a Google tool for optical character recognition with very high precision that we utilized in our instance to scan documents, categorize them, and extract relevant information. 
- **PIL**: It's the standard Python image library, used as a preprocesing phase before passing the scan the the OCR program.
- **Transformers**: Transformers provides cutting-edge general-purpose architectures for natural language purpose and text generation. 
- **Docker**: A technology used to create containers for easy and quick deployment and to eliminate dependencies while increasing security. 
- **Docker-Copmose**: A tool for dealing with multiple containers that can greatly assist in automating health checks and memory allocations, processors allowed, and many other metrics.


## Endpoints 
- **/** 
    - *Methods*: GET, POST
    - *Parameters*: /
    - *Description*:  Only used as a healthechk for Docker-compose

- **/scan** 
    - *Methods*: POST
    - *Parameters*: Content --> Base64 of image
    - *Description*: This function is in charge of scanning documents and classifying them depending on their content.
The document might be an analysis result, ECG, radio, prescription, or a paper written by a doctor.   

- **/extract** 
    - *Methods*: POST
    - *Parameters*: Content --> Text
    - *Description*:  This method will extract all relevant medical information from a doctor's written text. To do this, a model for entity recognition based on distilbert-base-uncased and trained on extracted medical tokens was utilized.    

- **/extract_disease** 
    - *Methods*: POST
    - *Parameters*: Content --> Text
    - *Description*: A subfunction of the extract function, this one will focus on classifying text into a field that must be determined first in order to determine that a sickness exists, and this may also be done by the extract function, which will expose this information.  

## Future of Nabda
- Develop a model that takes in account all the presented data from document, scans and other to predecit the potential of future diseases  

