document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');

  // Hàm kiểm tra email có '@'
  function validateEmail(email) {
    return email.includes('@');
  }

  // Hàm kiểm tra số điện thoại 10 số bắt đầu bằng 0
  function validatePhone(phone) {
    return /^0\d{9}$/.test(phone);
  }

  // Kiểm tra realtime cho email
  emailInput.addEventListener('input', function () {
    if (!validateEmail(emailInput.value.trim())) {
      emailInput.classList.add('is-invalid');
      emailInput.classList.remove('is-valid');
      emailInput.nextElementSibling.style.display = 'block';
    } else {
      emailInput.classList.remove('is-invalid');
      emailInput.classList.add('is-valid');
      emailInput.nextElementSibling.style.display = 'none';
    }
  });

  // Kiểm tra realtime cho phone
  phoneInput.addEventListener('input', function () {
    if (!validatePhone(phoneInput.value.trim())) {
      phoneInput.classList.add('is-invalid');
      phoneInput.classList.remove('is-valid');
      phoneInput.nextElementSibling.style.display = 'block';
    } else {
      phoneInput.classList.remove('is-invalid');
      phoneInput.classList.add('is-valid');
      phoneInput.nextElementSibling.style.display = 'none';
    }
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !phone || !message) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }

    if (!validateEmail(email)) {
      alert('Email không hợp lệ. Email phải chứa ký tự "@"');
      emailInput.focus();
      return;
    }

    if (!validatePhone(phone)) {
      alert('Số điện thoại không hợp lệ. Phải đủ 10 số và bắt đầu bằng số 0.');
      phoneInput.focus();
      return;
    }

    alert('Cảm ơn bạn đã gửi liên hệ!');
    form.reset();

    // Reset trạng thái form
    emailInput.classList.remove('is-valid', 'is-invalid');
    phoneInput.classList.remove('is-valid', 'is-invalid');
  });
});
