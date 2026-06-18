import { z } from 'zod';

/** Personal Details section schema. */
export const personalSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  gender: z.enum(['Male', 'Female', 'Other'], {
    errorMap: () => ({ message: 'Please select a gender' }),
  }),
  height: z.string().min(1, 'Height is required'),
  maritalStatus: z.string().min(1, 'Marital status is required'),
  motherTongue: z.string().min(1, 'Mother tongue is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  country: z.string().min(1, 'Country is required'),
  aboutMe: z
    .string()
    .max(500, 'About me must be under 500 characters')
    .optional(),
});

/** Education & Career section schema. */
export const educationSchema = z.object({
  highestQualification: z.string().min(1, 'Qualification is required'),
  university: z.string().min(1, 'University is required'),
  occupation: z.string().min(1, 'Occupation is required'),
  employer: z.string().optional(),
  annualIncome: z.string().optional(),
  workLocation: z.string().optional(),
});

/** Family Details section schema. */
export const familySchema = z.object({
  fatherName: z.string().min(1, "Father's name is required"),
  fatherOccupation: z.string().optional(),
  motherName: z.string().min(1, "Mother's name is required"),
  motherOccupation: z.string().optional(),
  siblings: z.string().optional(),
  familyType: z.string().min(1, 'Family type is required'),
  familyStatus: z.string().optional(),
  gotra: z.string().optional(),
});

/** Partner Preferences section schema. */
export const partnerSchema = z.object({
  preferredAge: z.string().min(1, 'Preferred age range is required'),
  preferredHeight: z.string().optional(),
  preferredMaritalStatus: z.string().optional(),
  preferredEducation: z.string().optional(),
  preferredOccupation: z.string().optional(),
  preferredLocation: z.string().optional(),
  partnerExpectations: z
    .string()
    .max(500, 'Expectations must be under 500 characters')
    .optional(),
});

/** Privacy & Security section schema. */
export const privacySchema = z.object({
  showPhone: z.boolean(),
  showEmail: z.boolean(),
  showLastSeen: z.boolean(),
  profileVisibility: z.boolean(),
});

/**
 * Map of sectionId → Zod schema for easy runtime lookup.
 */
export const profileSchemas = {
  personal: personalSchema,
  education: educationSchema,
  family: familySchema,
  partner: partnerSchema,
  privacy: privacySchema,
};
