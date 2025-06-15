# app.py
from flask import Flask, request, jsonify, render_template
from flask_mail import Mail, Message
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)

# Configure Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv('EMAIL_USER')
app.config['MAIL_PASSWORD'] = os.getenv('EMAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('EMAIL_USER')

mail = Mail(app)

@app.route('/')
def home():
    return render_template('contact.html')  # You'll need to create this template

@app.route('/send_email', methods=['POST'])
def send_email():
    try:
        data = request.json
        
        # Validate required fields
        if not all(key in data for key in ['name', 'email', 'message']):
            return jsonify({'success': False, 'message': 'Missing required fields'}), 400
        
        # Create and send the email
        msg = Message(
            subject=f"New Contact Form Submission from {data['name']}",
            recipients=[os.getenv('YOUR_BUSINESS_EMAIL')],  # Your business email
            sender=("Website Contact Form", os.getenv('EMAIL_USER')),  # From your server
            reply_to=data['email']  # So you can reply directly to the visitor
        )
        
        msg.body = f"""
        You have received a new contact form submission:
        
        Name: {data['name']}
        Email: {data['email']}
        Message: 
        {data['message']}
        """
        
        mail.send(msg)
        
        return jsonify({'success': True, 'message': 'Message sent successfully'}), 200
    
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)