import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema, STEP_FIELDS } from '../validations/signupSchema';
import { registerUser } from '../services/authService';

export function useSignup() {
  const [step, setStep] = useState(1);
  const [serverError, setServerError] = useState('');
  const router = useRouter();

  const { register, handleSubmit, formState: { errors, isSubmitting }, trigger, watch, setValue } = useForm({
    resolver: zodResolver(signupSchema),
    mode: 'onChange',
    defaultValues: {
      hobbies: [],
    }
  });

  const onSubmit = async (data) => {
    setServerError('');
    try {
      console.log('Submitting data:', data);
      await registerUser(data);
      console.log('Registered user successfully, navigating...');
      router.push('/dashboard');
    } catch (error) {
      console.error('Registration failed:', error);
      if (error.code === 'auth/email-already-in-use') {
        setServerError('This email address is already registered.');
      } else {
        setServerError(error.message || 'Registration failed. Please try again.');
      }
    }
  };

  const onError = (errors) => {
    console.error('Validation errors preventing submission:', errors);
  };

  const nextStep = async () => {
    // Validate current step fields before proceeding
    const fieldsToValidate = STEP_FIELDS[step - 1];
    const isValid = await trigger(fieldsToValidate);
    
    if (isValid) {
      setStep(s => Math.min(s + 1, 6));
    }
  };

  const skipStep = () => {
    // Allows proceeding without validation (for skippable steps)
    setStep(s => Math.min(s + 1, 6));
  };

  const prevStep = () => {
    setStep(s => Math.max(s - 1, 1));
  };

  const getProgressPercentage = () => {
    const data = watch();
    const allFields = Object.values(STEP_FIELDS).flat();
    const totalFields = allFields.length;
    let filledFields = 0;
    
    allFields.forEach(field => {
      const val = data[field];
      if (Array.isArray(val) && val.length > 0) filledFields++;
      else if (val !== undefined && val !== null && val !== '') filledFields++;
    });
    
    return Math.round((filledFields / totalFields) * 100);
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit, onError),
    errors,
    isSubmitting,
    step,
    nextStep,
    skipStep,
    prevStep,
    watch,
    setValue,
    getProgressPercentage,
    serverError
  };
}
