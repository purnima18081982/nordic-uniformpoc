import { create } from 'zustand';

interface SignUpFormState {
  email: string;
  password: string;
}

interface SignUpFormActions {
  formStepNumber: number;
  formData: SignUpFormState;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  reset: () => void;
  setFormStepNumberIncrement: () => void;
  setFormStepNumberDecrement: () => void;
  showPassword: boolean;
  setShowPassword: (showPassword: boolean) => void;
}

export const useSignUpFormStore = create<SignUpFormActions>(set => ({
  formStepNumber: 0,
  formData: {
    email: '',
    password: '',
  },
  showPassword: false,
  setEmail: email => set(state => ({ formData: { ...state.formData, email } })),
  setPassword: password => set(state => ({ formData: { ...state.formData, password } })),
  reset: () => set(() => ({ formData: { email: '', password: '' } })),
  setFormStepNumberIncrement: () =>
    set(state => ({ formStepNumber: state.formStepNumber < 4 ? state.formStepNumber + 1 : state.formStepNumber })),
  setFormStepNumberDecrement: () =>
    set(state => ({ formStepNumber: state.formStepNumber > 1 ? state.formStepNumber - 1 : state.formStepNumber })),
  setShowPassword: showPasswordState => set(() => ({ showPassword: showPasswordState })),
}));
