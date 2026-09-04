// Jericho Civil Engineering — shared interactivity

(function () {
  var toggle = document.querySelector('.drawer-toggle');
  var rail = document.querySelector('.rail');
  if (toggle && rail) {
    toggle.addEventListener('click', function () {
      var open = rail.classList.toggle('drawer-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    rail.querySelectorAll('.sheet-index a').forEach(function (link) {
      link.addEventListener('click', function () {
        rail.classList.remove('drawer-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var form = document.getElementById('contact-form');
  var success = document.getElementById('form-success');
  if (form && success) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      success.classList.add('show');
      success.setAttribute('tabindex', '-1');
      success.focus();
      form.reset();
    });
  }
})();
