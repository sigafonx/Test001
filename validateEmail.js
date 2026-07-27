// Validates an email address format using a practical regular expression.
// This covers the vast majority of real-world addresses without trying to
// fully implement the RFC 5322 spec (which is impractical for a regex).
function validateEmail(email) {
  if (typeof email !== 'string') {
    return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email.trim());
}

// Example usage:
console.log(validateEmail('user@example.com'));   // true
console.log(validateEmail('invalid-email'));       // false
console.log(validateEmail('user@sub.domain.com')); // true

module.exports = { validateEmail };
