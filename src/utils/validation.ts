export interface ReservationFormValues {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  specialRequests: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface OrderCustomerValues {
  serviceType: 'pickup' | 'delivery';
  name: string;
  email: string;
  phone: string;
  address: string;
  notes: string;
}

export type ValidationErrors<T> = Partial<Record<keyof T, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email.trim());
}

export function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 15;
}

export function validateReservationForm(
  values: ReservationFormValues,
  todayIso?: string
): ValidationErrors<ReservationFormValues> {
  const errors: ValidationErrors<ReservationFormValues> = {};
  const today = todayIso ?? new Date().toISOString().split('T')[0];

  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = 'Please enter your full name.';
  }

  if (!values.email.trim() || !isValidEmail(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.phone.trim() || !isValidPhone(values.phone)) {
    errors.phone = 'Please enter a valid 10-digit phone number.';
  }

  if (!values.date.trim()) {
    errors.date = 'Please select a reservation date.';
  } else if (values.date < today) {
    errors.date = 'Reservation date cannot be in the past.';
  }

  if (!values.time.trim()) {
    errors.time = 'Please select a dining time.';
  }

  const guestNum = Number(values.guests);
  if (!values.guests || Number.isNaN(guestNum) || guestNum < 1 || guestNum > 12) {
    errors.guests = 'Party size must be between 1 and 12 guests.';
  }

  return errors;
}

export function validateContactForm(
  values: ContactFormValues
): ValidationErrors<ContactFormValues> {
  const errors: ValidationErrors<ContactFormValues> = {};

  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = 'Please enter your name.';
  }

  if (!values.email.trim() || !isValidEmail(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.subject.trim() || values.subject.trim().length < 3) {
    errors.subject = 'Please enter a subject for your inquiry.';
  }

  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = 'Please enter a message (at least 10 characters).';
  }

  return errors;
}

export function validateOrderCustomerForm(
  values: OrderCustomerValues
): ValidationErrors<OrderCustomerValues> {
  const errors: ValidationErrors<OrderCustomerValues> = {};

  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = 'Please enter your full name.';
  }

  if (!values.email.trim() || !isValidEmail(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.phone.trim() || !isValidPhone(values.phone)) {
    errors.phone = 'Please enter a valid 10-digit phone number.';
  }

  if (values.serviceType === 'delivery' && values.address.trim().length < 6) {
    errors.address = 'Please enter a complete street delivery address.';
  }

  return errors;
}
