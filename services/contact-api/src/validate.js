const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactPayload(body) {
  const { firstName, lastName, email, company, message } = body ?? {};

  if (![firstName, lastName, email, company, message].every((field) => typeof field === "string")) {
    return "All fields are required.";
  }
  if (
    !firstName.trim() ||
    !lastName.trim() ||
    !company.trim() ||
    !message.trim()
  ) {
    return "All fields are required.";
  }
  if (!EMAIL_RE.test(email.trim())) {
    return "Please provide a valid email address.";
  }
  if (message.length > 5000) {
    return "Message is too long.";
  }
  return null;
}
