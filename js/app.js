// Common helper for modals
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('open');
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('open');
  }
}

// Close modal when clicking backdrop
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('modal-backdrop')) {
    e.target.classList.remove('open');
  }
});

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-backdrop.open').forEach(modal => {
      modal.classList.remove('open');
    });
  }
});

// Login handling
function handleLogin(event) {
  event.preventDefault();
  const usernameInput = document.getElementById('loginUsername');
  const passwordInput = document.getElementById('loginPassword');
  const errorElement = document.getElementById('loginError');

  const username = usernameInput ? usernameInput.value.trim() : '';
  const password = passwordInput ? passwordInput.value.trim() : '';

  if (username === 'teacher' && password === 'password') {
    if (errorElement) {
      errorElement.classList.remove('show');
    }
    // Close modal and redirect to teacher page
    closeModal('loginModal');
    window.location.href = 'teacher.html';
  } else {
    if (errorElement) {
      errorElement.textContent = 'Invalid username or password. Please try again.';
      errorElement.classList.add('show');
    }
  }
}

// Generic search table filter
function initTableSearch(inputId, tableBodyId, columnIndex = 0) {
  const searchInput = document.getElementById(inputId);
  const tableBody = document.getElementById(tableBodyId);

  if (!searchInput || !tableBody) return;

  searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase().trim();
    const rows = tableBody.getElementsByTagName('tr');
    let visibleCount = 0;

    for (let row of rows) {
      if (row.classList.contains('no-results-row')) continue;
      const cell = row.getElementsByTagName('td')[columnIndex];
      if (cell) {
        const textValue = cell.textContent || cell.innerText;
        if (textValue.toLowerCase().indexOf(query) > -1) {
          row.style.display = '';
          visibleCount++;
        } else {
          row.style.display = 'none';
        }
      }
    }

    // Handle no results message
    let noResultsRow = document.getElementById(tableBodyId + '-no-results');
    if (visibleCount === 0) {
      if (!noResultsRow) {
        noResultsRow = document.createElement('tr');
        noResultsRow.id = tableBodyId + '-no-results';
        noResultsRow.className = 'no-results-row';
        const colSpan = tableBody.closest('table').querySelectorAll('thead th').length;
        noResultsRow.innerHTML = `<td colspan="${colSpan}" class="empty-state">No matching results found.</td>`;
        tableBody.appendChild(noResultsRow);
      }
      noResultsRow.style.display = '';
    } else if (noResultsRow) {
      noResultsRow.style.display = 'none';
    }
  });
}
