/* ==========================================================================
   Aethelgard & Co. - Dedicated Viewing Appointment System
   Form Validation, Auto-population from catalog, Reference Generation, Modal
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('viewing-appointment-form');
  if (!form) return;

  // Pre-fill piece selection if present in URL query
  const urlParams = new URLSearchParams(window.location.search);
  const pieceParam = urlParams.get('piece');
  const pieceSelect = document.getElementById('appt-piece-select');

  if (pieceSelect) {
    // Populate piece options dynamically
    PRODUCTS_DATA.forEach(p => {
      const opt = document.createElement('option');
      opt.value = p.title;
      opt.textContent = `${p.title} (${p.era})`;
      if (pieceParam && pieceParam.toLowerCase() === p.title.toLowerCase()) {
        opt.selected = true;
      }
      pieceSelect.appendChild(opt);
    });
  }

  // Set min date to today
  const dateInput = document.getElementById('appt-date-input');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('appt-name-input').value.trim();
    const email = document.getElementById('appt-email-input').value.trim();
    const phone = document.getElementById('appt-phone-input').value.trim();
    const date = document.getElementById('appt-date-input').value;
    const time = document.getElementById('appt-time-select').value;
    const piece = pieceSelect ? pieceSelect.value : 'General Showroom Collection';
    const visitors = document.getElementById('appt-visitors-select').value;
    const notes = document.getElementById('appt-notes-input')?.value.trim() || '';

    if (!name || !email || !phone || !date || !time) {
      showToast('Please complete all required appointment fields.', 'warning');
      return;
    }

    // Generate Reference Number (e.g., VA-2026-8942)
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const refCode = `VA-${new Date().getFullYear()}-${randomNum}`;

    const appointmentRecord = {
      refCode,
      name,
      email,
      phone,
      date,
      time,
      piece,
      visitors,
      notes,
      createdAt: new Date().toISOString()
    };

    // Save to LocalStorage demo data
    const existing = JSON.parse(localStorage.getItem('aethelgard_appointments') || '[]');
    existing.push(appointmentRecord);
    localStorage.setItem('aethelgard_appointments', JSON.stringify(existing));

    // Show Confirmation Modal
    showAppointmentConfirmationModal(appointmentRecord);

    // Reset Form
    form.reset();
  });
});

function showAppointmentConfirmationModal(record) {
  const modal = document.getElementById('appointment-confirmation-modal');
  if (!modal) {
    showToast(`Appointment Confirmed! Reference #: ${record.refCode}`, 'success');
    return;
  }

  document.getElementById('conf-ref-code').textContent = record.refCode;
  document.getElementById('conf-name').textContent = record.name;
  document.getElementById('conf-datetime').textContent = `${record.date} at ${record.time}`;
  document.getElementById('conf-piece').textContent = record.piece || 'General Collection';
  document.getElementById('conf-email').textContent = record.email;

  modal.classList.add('active');
  showToast(`Private viewing appointment reserved! Ref: ${record.refCode}`, 'success');
}
