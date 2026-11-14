import test from 'node:test';
import assert from 'node:assert/strict';
import {
  addItemToCart,
  calculateCartTotals,
  formatCurrency,
  formatOrderSummaryText,
  removeItemFromCart,
  updateItemQuantity,
} from './cartLogic';

test('addItemToCart adds new item and increments existing item quantity', () => {
  const initial = addItemToCart([], {
    id: 'ramen-hoshi',
    name: 'Hoshi Ramen',
    price: 15,
  });
  assert.equal(initial.length, 1);
  assert.equal(initial[0].quantity, 1);

  const incremented = addItemToCart(initial, {
    id: 'ramen-hoshi',
    name: 'Hoshi Ramen',
    price: 15,
  });
  assert.equal(incremented.length, 1);
  assert.equal(incremented[0].quantity, 2);
});

test('updateItemQuantity updates quantity and removes item when zero or negative', () => {
  const cart = [
    { id: 'app-gyoso', name: 'Gyoso (6pcs)', price: 7, quantity: 2 },
    { id: 'drink-ramune', name: 'Ramune', price: 4, quantity: 1 },
  ];

  const updated = updateItemQuantity(cart, 'app-gyoso', 4);
  assert.equal(updated.find((i) => i.id === 'app-gyoso')?.quantity, 4);

  const removed = updateItemQuantity(updated, 'drink-ramune', 0);
  assert.equal(removed.length, 1);
  assert.equal(removed[0].id, 'app-gyoso');
});

test('removeItemFromCart removes target item cleanly', () => {
  const cart = [
    { id: 'a', name: 'Item A', price: 10, quantity: 1 },
    { id: 'b', name: 'Item B', price: 5, quantity: 2 },
  ];
  const next = removeItemFromCart(cart, 'a');
  assert.equal(next.length, 1);
  assert.equal(next[0].id, 'b');
});

test('calculateCartTotals computes accurate subtotal, Texas tax, and total', () => {
  const cart = [
    { id: 'ramen-hoshi', name: 'Hoshi Ramen', price: 15, quantity: 2 },
    { id: 'drink-hawaiian', name: 'Hawaiian Sun', price: 3.5, quantity: 1 },
  ];
  const totals = calculateCartTotals(cart, 0.0825);
  assert.equal(totals.itemCount, 3);
  assert.equal(totals.subtotal, 33.5);
  assert.equal(totals.estimatedTax, 2.76);
  assert.equal(totals.total, 36.26);
});

test('formatCurrency and formatOrderSummaryText format cleanly', () => {
  assert.equal(formatCurrency(3.5), '$3.50');
  const summary = formatOrderSummaryText(
    [{ id: '1', name: 'Edamame', price: 5, quantity: 2 }],
    'pickup'
  );
  assert.ok(summary.includes('2x Edamame ($10.00)'));
  assert.ok(summary.includes('Service: Pickup'));
});
