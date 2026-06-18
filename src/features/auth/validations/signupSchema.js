import * as z from 'zod';

export const signupSchema = z.object({
  // Step 1: Basic Details
  fullName: z.string().min(3, "Full name is required"),
  location: z.string().min(3, "Address/Location is required"),
  mobile: z.string().min(10, "Invalid phone number"),
  email: z.string().email("Invalid email address"),
  dob: z.string().min(1, "Date of birth is required"),
  gender: z.string().min(1, "Please select a gender"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),

  // Step 2: Personal Details (Skippable, so all optional)
  height: z.string().optional(),
  weight: z.string().optional(),
  bodyType: z.string().optional(),
  complexion: z.string().optional(),
  physicalStatus: z.string().optional(),
  bloodGroup: z.string().optional(),
  maritalStatus: z.string().optional(),
  zodiacPersonal: z.string().optional(),
  aboutMe: z.string().optional(),

  // Step 3: Education & Career
  highestQualification: z.string().optional(),
  college: z.string().optional(),
  profession: z.string().optional(),
  employer: z.string().optional(),
  incomeRange: z.string().optional(),
  workLocation: z.string().optional(),
  careerAspirations: z.string().optional(),

  // Step 4: Family Details
  familyValue: z.string().optional(),
  familyType: z.string().optional(),
  fatherOccupation: z.string().optional(),
  motherOccupation: z.string().optional(),
  familyStatus: z.string().optional(),
  siblings: z.string().optional(),
  siblingOccupation: z.string().optional(),

  // Step 5: Lifestyle & Interests
  religion: z.string().optional(),
  diet: z.string().optional(),
  smoking: z.string().optional(),
  drinking: z.string().optional(),
  pets: z.string().optional(),
  language: z.string().optional(),
  gotra: z.string().optional(),
  hobbies: z.array(z.string()).optional(),

  // Step 6: Partner Preferences (Mandatory)
  prefAgeMin: z.string().min(1, "Minimum age preference is required"),
  prefAgeMax: z.string().min(1, "Maximum age preference is required"),
  prefHeight: z.string().min(1, "Height preference is required"),
  prefReligion: z.string().min(1, "Religion preference is required"),
  prefEducation: z.string().min(1, "Education preference is required"),
  prefLanguage: z.string().min(1, "Language preference is required"),
  prefIncome: z.string().min(1, "Income preference is required"),
  prefZodiac: z.string().optional(),
  prefGotra: z.string().optional(),

}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

// Helper arrays to know which fields belong to which step for partial validation
export const STEP_FIELDS = {
  0: ['fullName', 'location', 'mobile', 'email', 'dob', 'gender', 'password', 'confirmPassword'],
  1: ['height', 'weight', 'bodyType', 'complexion', 'physicalStatus', 'bloodGroup', 'maritalStatus', 'zodiacPersonal', 'aboutMe'],
  2: ['highestQualification', 'college', 'profession', 'employer', 'incomeRange', 'workLocation', 'careerAspirations'],
  3: ['familyValue', 'familyType', 'fatherOccupation', 'motherOccupation', 'familyStatus', 'siblings', 'siblingOccupation'],
  4: ['religion', 'diet', 'smoking', 'drinking', 'pets', 'language', 'gotra', 'hobbies'],
  5: ['prefAgeMin', 'prefAgeMax', 'prefHeight', 'prefReligion', 'prefEducation', 'prefLanguage', 'prefIncome', 'prefZodiac', 'prefGotra']
};
