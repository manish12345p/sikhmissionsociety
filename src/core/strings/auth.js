export const AUTH_STRINGS = {
  header: {
    support: 'Support',
    safety: 'Safety Tips',
    signIn: 'Sign In',
  },
  footer: {
    quote: '"Where hearts find their eternal harmony."',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    safetyGuide: 'Safety Guide',
    cookie: 'Cookie Policy',
    copyright: '© 2024 Sikh Mission Society. All rights reserved.',
  },
  navigation: {
    back: 'Back',
    skip: 'Skip',
    skipForNow: 'Skip for now',
    saveAndContinue: 'Save & Continue',
    continue: 'Continue',
    completeProfile: 'Complete Profile'
  },
  trustBadges: {
    privacy: '100% Privacy',
    verified: 'Verified Families',
    secure: 'Secure Platform'
  },
  signup: {
    step1: {
      title: 'Basic Sign Up Form',
      subtitle: 'Please provide your fundamental information to begin your registration process.',
      fields: {
        name: { label: 'NAME *', placeholder: 'Enter your full name' },
        address: { label: 'ADDRESS / LOCATION *', placeholder: 'Enter your complete address or location' },
        phone: { label: 'PHONE NUMBER *', placeholder: '+1(555) 000-0000', note: 'For verification purposes' },
        email: { label: 'EMAIL ADDRESS *', placeholder: 'name@example.com', note: 'For verification purposes' },
        password: { label: 'PASSWORD *', placeholder: 'Min 8 characters' },
        confirmPassword: { label: 'CONFIRM PASSWORD *', placeholder: 'Confirm password' },
        dob: { label: 'DATE OF BIRTH *', placeholder: 'mm/dd/yyyy' },
        gender: { label: 'GENDER' }
      }
    },
    step2: {
      title: 'Build Your Identity',
      subtitle: 'Provide your personal details to help us find the most compatible matches for you.',
      clickToUpload: 'Click to upload or drag and drop',
      fields: {
        height: { label: 'HEIGHT (CM)', placeholder: 'e.g. 175' },
        weight: { label: 'WEIGHT (KG)', placeholder: 'e.g. 70' },
        bodyType: { label: 'BODY TYPE' },
        complexion: { label: 'COMPLEXION' },
        physicalStatus: { label: 'PHYSICAL STATUS' },
        bloodGroup: { label: 'BLOOD GROUP' },
        maritalStatus: { label: 'MARITAL STATUS' },
        zodiac: { label: 'ZODIAC (OPTIONAL)' },
        profileImage: { label: 'PROFILE IMAGE' },
        aboutMe: { label: 'ABOUT ME', placeholder: 'Describe yourself, your interests and values...' }
      }
    },
    step3: {
      title: 'Education & Career',
      academic: 'ACADEMIC BACKGROUND',
      professional: 'PROFESSIONAL DETAILS',
      fields: {
        qualification: { label: 'HIGHEST QUALIFICATION' },
        college: { label: 'COLLEGE/UNIVERSITY', placeholder: 'e.g. University of British Columbia' },
        profession: { label: 'PROFESSION', placeholder: 'e.g. Software Architect' },
        employer: { label: 'EMPLOYER NAME', placeholder: 'e.g. Google, NHS, Self-employed' },
        income: { label: 'ANNUAL INCOME RANGE' },
        location: { label: 'WORK LOCATION', placeholder: 'e.g. Toronto, Canada' },
        aspirations: { label: 'CAREER ASPIRATIONS', placeholder: 'Briefly describe your goals...' }
      }
    },
    step4: {
      title: 'Family Details',
      subtitle: 'Information about your family background and status.',
      fields: {
        familyValue: { label: 'FAMILY VALUE' },
        familyType: { label: 'FAMILY TYPE' },
        fatherOcc: { label: 'FATHER\'S OCCUPATION (OPTIONAL)', placeholder: 'e.g. Retired Army Officer' },
        motherOcc: { label: 'MOTHER\'S OCCUPATION (OPTIONAL)', placeholder: 'e.g. Home Maker' },
        familyStatus: { label: 'FAMILY STATUS' },
        siblings: { label: 'NUMBER OF SIBLINGS', placeholder: 'e.g. 2 brothers, 1 sister' },
        siblingOcc: { label: 'SIBLING\'S OCCUPATION', placeholder: 'Details about your siblings\' professional status...' }
      }
    },
    step5: {
      title: 'Lifestyle & Interests',
      subtitle: 'Help us understand the real you. Your interests and values are the foundation of a lasting bond.',
      basics: 'Lifestyle Basics',
      heritage: 'Heritage & Others',
      hobbies: 'Hobbies & Interests',
      selectThings: 'Select things you love',
      selected: 'Selected',
      fields: {
        religion: { label: 'Religion' },
        diet: { label: 'Dietary Preferences' },
        smoking: { label: 'Smoking habits' },
        drinking: { label: 'Drinking habits' },
        pets: { label: 'Pets' },
        language: { label: 'Language' },
        zodiac: { label: 'Zodiac (optional)' },
        gotra: { label: 'Gotra (optional)', placeholder: 'Enter Gotra' }
      }
    },
    step6: {
      title: 'Partner Preferences',
      subtitle: 'Finalize your profile by defining your ideal partner. This is crucial for high-quality matchmaking.',
      verificationReq: 'Verification Requirement: You must fill at least 80-90% of the form to receive a verified badge and increase match visibility.',
      previewTitle: 'Live Match Preview',
      matchQuality: '82% MATCH QUALITY',
      emptyPreview: 'Adjust preferences to see more potential partners in your circle.',
      quote: '"Choosing the right partner is a sacred decision. We ensure your privacy and cultural values are upheld throughout."',
      updateNotice: 'Preferences update your preview in real-time.',
      profileCompletion: 'PROFILE COMPLETION',
      fields: {
        ageRange: { label: 'AGE RANGE' },
        height: { label: 'HEIGHT PREFERENCE' },
        religion: { label: 'RELIGION / COMMUNITY' },
        education: { label: 'MINIMUM EDUCATION LEVEL' },
        language: { label: 'LANGUAGE PREFERENCE' },
        income: { label: 'ANNUAL INCOME PREFERENCE' },
        zodiac: { label: 'ZODIAC (OPTIONAL)', placeholder: 'e.g. Leo' },
        gotra: { label: 'GOTRA (OPTIONAL)', placeholder: 'e.g. Gill' }
      }
    }
  },
  success: {
    title: 'Welcome!',
    message: 'Your profile has been created successfully. \n Waheguru ji ka Khalsa, Waheguru ji ki Fateh!',
    button: 'Browse Matches'
  }
};
