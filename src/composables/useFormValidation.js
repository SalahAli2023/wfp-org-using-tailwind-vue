import { ref } from 'vue';

export function useFormValidation() {
  const errors = ref({});
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[a-zA-Z\s]{3,60}$/;
  const subjectRegex = /^[a-zA-Z\s]{5,350}$/;
  const messageRegex = /^[a-zA-Z\s]{10,350}$/;

  const validateField = (fieldName, value, regex, requiredMessage, invalidMessage) => {
    if (!value.trim()) {
      errors.value[fieldName] = requiredMessage;
      return false;
    }
    
    if (regex && !regex.test(value.trim())) {
      errors.value[fieldName] = invalidMessage;
      return false;
    }
    
    delete errors.value[fieldName];
    return true;
  };

  const validateName = (name) => {
    return validateField(
      'name', 
      name, 
      nameRegex, 
      'Name is required', 
      'Please enter a valid name (3-60 characters)'
    );
  };

  const validateEmail = (email) => {
    return validateField(
      'email', 
      email, 
      emailRegex, 
      'Email is required', 
      'Please enter a valid email address'
    );
  };

  const validateSubject = (subject) => {
    return validateField(
      'subject', 
      subject, 
      subjectRegex, 
      'Subject is required', 
      'Subject must be 5-350 characters'
    );
  };

  const validateMessage = (message) => {
    return validateField(
      'message', 
      message, 
      messageRegex, 
      'Message is required', 
      'Message must be 10-350 characters'
    );
  };

  const resetErrors = () => {
    errors.value = {};
  };

  return {
    errors,
    validateName,
    validateEmail,
    validateSubject,
    validateMessage,
    resetErrors
  };
}