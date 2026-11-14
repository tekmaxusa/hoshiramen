import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateContactForm,
  validateOrderCustomerForm,
  validateReservationForm,
} from './validation';
import { filterMenuItems } from './menuFilter';

test('validateReservationForm catches missing or past fields and accepts valid input', () => {
  const invalid = validateReservationForm(
    {
      name: '',
      email: 'bad-email',
      phone: '123',
      date: '2020-01-01',
      time: '',
      guests: '0',
      specialRequests: '',
    },
    '2026-11-13'
  );
  assert.ok(invalid.name);
  assert.ok(invalid.email);
  assert.ok(invalid.phone);
  assert.ok(invalid.date);
  assert.ok(invalid.time);
  assert.ok(invalid.guests);

  const valid = validateReservationForm(
    {
      name: 'Kenji Sato',
      email: 'kenji@example.com',
      phone: '(682) 555-0192',
      date: '2026-11-20',
      time: '6:30 PM',
      guests: '4',
      specialRequests: 'Booth near window if available',
    },
    '2026-11-13'
  );
  assert.deepEqual(valid, {});
});

test('validateContactForm enforces message length and valid email', () => {
  const errs = validateContactForm({
    name: 'A',
    email: 'invalid',
    subject: 'Hi',
    message: 'Too short',
  });
  assert.ok(errs.name);
  assert.ok(errs.email);
  assert.ok(errs.subject);
  assert.ok(errs.message);

  const ok = validateContactForm({
    name: 'Elena Martinez',
    email: 'elena@example.com',
    subject: 'Large group inquiry',
    message: 'Do you accommodate a party of 10 on Saturday evening?',
  });
  assert.deepEqual(ok, {});
});

test('validateOrderCustomerForm requires street address only for delivery', () => {
  const pickupOk = validateOrderCustomerForm({
    serviceType: 'pickup',
    name: 'Jordan Lee',
    email: 'jordan@example.com',
    phone: '6825930743',
    address: '',
    notes: '',
  });
  assert.deepEqual(pickupOk, {});

  const deliveryMissingAddr = validateOrderCustomerForm({
    serviceType: 'delivery',
    name: 'Jordan Lee',
    email: 'jordan@example.com',
    phone: '6825930743',
    address: '',
    notes: '',
  });
  assert.ok(deliveryMissingAddr.address);
});

test('filterMenuItems filters accurately by category and search query', () => {
  const sample = [
    {
      id: '1',
      name: 'Hoshi Ramen',
      category: 'Ramen' as const,
      price: 15,
      description: 'Pork chashu and egg',
      image: '',
    },
    {
      id: '2',
      name: 'Tonkatsu',
      category: 'Rice Bowl' as const,
      price: 18,
      description: 'Crispy panko pork cutlet',
      image: '',
    },
    {
      id: '3',
      name: 'Cheese Tonkatsu',
      category: 'Rice Bowl' as const,
      price: 19,
      description: 'Melted cheese cutlet',
      image: '',
    },
  ];
  assert.equal(filterMenuItems(sample, 'Ramen', '').length, 1);
  assert.equal(filterMenuItems(sample, 'All', 'tonkatsu').length, 2);
});
