// Role definitions for the sidebar navigation
const ROLES = [
  { key: 'patient', label: 'Patient portal', icon: 'ti-user-heart' },
  { key: 'clinician', label: 'Clinician', icon: 'ti-medical-cross' },
  { key: 'staff', label: 'Front desk', icon: 'ti-clipboard-list' },
  { key: 'admin', label: 'Admin', icon: 'ti-chart-bar' }
];

// Mock dashboard content per role, standing in for real API/EHR data
const DASHBOARD_DATA = {
  patient: {
    title: 'Patient portal',
    sub: 'Signed in as Maria Chen',
    metrics: [
      ['Upcoming visits', '2'],
      ['Unread messages', '3'],
      ['Balance due', '$120']
    ],
    list: {
      label: 'Recent activity',
      items: [
        ['ti-calendar-check', 'Appointment confirmed', 'Dr. Patel — Jul 22, 10:30am'],
        ['ti-flask', 'Lab results ready', 'Basic metabolic panel'],
        ['ti-message', 'New message from care team', 'Refill reminder for lisinopril'],
        ['ti-receipt', 'Statement issued', 'Balance of $120 due Aug 1']
      ]
    }
  },
  clinician: {
    title: "Dr. Patel — today's schedule",
    sub: 'Internal medicine',
    metrics: [
      ['Patients today', '14'],
      ['Pending orders', '5'],
      ['Messages', '2']
    ],
    list: {
      label: 'Schedule',
      items: [
        ['ti-clock', '9:00am — Maria Chen', 'Follow-up, hypertension'],
        ['ti-clock', '9:30am — James Ortiz', 'New patient intake'],
        ['ti-clock', '10:15am — Wei Zhang', 'Lab review'],
        ['ti-clock', '11:00am — Alicia Gomez', 'e-Prescribe renewal']
      ]
    }
  },
  staff: {
    title: 'Front desk console',
    sub: 'Registration and check-in',
    metrics: [
      ['Checked in', '9'],
      ['Beds available', '6 / 20'],
      ['Waiting', '3']
    ],
    list: {
      label: 'Check-in queue',
      items: [
        ['ti-user-plus', 'James Ortiz', 'New patient — intake forms pending'],
        ['ti-bed', 'Room 214 assigned', 'Wei Zhang — cardiology consult'],
        ['ti-pill', 'Pharmacy order routed', 'Alicia Gomez — refill'],
        ['ti-user-check', 'Maria Chen checked in', 'Appointment 10:30am']
      ]
    }
  },
  admin: {
    title: 'Administrator dashboard',
    sub: 'Revenue cycle and compliance',
    metrics: [
      ['Claims this week', '182'],
      ['Denial rate', '4.2%'],
      ['Audit flags', '0']
    ],
    list: {
      label: 'Recent events',
      items: [
        ['ti-report-money', 'Batch billing submitted', '214 charges captured'],
        ['ti-shield-check', 'Compliance audit passed', 'Role-based access review'],
        ['ti-chart-line', 'Monthly analytics ready', 'Occupancy up 6%'],
        ['ti-alert-circle', 'Denial flagged', 'Claim #48213 — resubmitted']
      ]
    }
  }
};
