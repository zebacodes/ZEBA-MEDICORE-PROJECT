// Renders the role nav and the dashboard content, and wires up switching between them.

let activeRole = 'patient';

function renderNav() {
  const nav = document.getElementById('roleNav');
  nav.innerHTML = '';

  ROLES.forEach(role => {
    const button = document.createElement('button');
    button.type = 'button';
    button.role = 'tab';
    button.setAttribute('aria-selected', role.key === activeRole);
    button.setAttribute('aria-label', role.label);
    button.className = role.key === activeRole ? 'active' : '';
    button.innerHTML = `<i class="ti ${role.icon}" aria-hidden="true"></i>${role.label}`;
    button.addEventListener('click', () => {
      activeRole = role.key;
      renderNav();
      renderContent();
    });
    nav.appendChild(button);
  });
}

function renderContent() {
  const roleData = DASHBOARD_DATA[activeRole];
  const content = document.getElementById('content');

  const metricsHtml = roleData.metrics
    .map(([label, value]) => `
      <div class="metric">
        <p>${label}</p>
        <p>${value}</p>
      </div>
    `)
    .join('');

  const itemsHtml = roleData.list.items
    .map(([icon, title, detail]) => `
      <div class="item">
        <i class="ti ${icon}" aria-hidden="true"></i>
        <div>
          <p>${title}</p>
          <p>${detail}</p>
        </div>
      </div>
    `)
    .join('');

  content.innerHTML = `
    <h2>${roleData.title}</h2>
    <p class="role-sub">${roleData.sub}</p>
    <div class="metrics">${metricsHtml}</div>
    <p class="list-label">${roleData.list.label}</p>
    <div>${itemsHtml}</div>
  `;
}

renderNav();
renderContent();
