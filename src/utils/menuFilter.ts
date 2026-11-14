import type { MenuCategory, MenuItem } from '../data/menu';

export function filterMenuItems(
  items: MenuItem[],
  selectedCategory: MenuCategory | 'All',
  searchQuery: string
): MenuItem[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  return items.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    if (!matchesCategory) return false;
    if (!normalizedQuery) return true;

    return (
      item.name.toLowerCase().includes(normalizedQuery) ||
      item.description.toLowerCase().includes(normalizedQuery) ||
      item.category.toLowerCase().includes(normalizedQuery)
    );
  });
}

export function getFeaturedDishes(items: MenuItem[]): MenuItem[] {
  return items.filter((item) => item.featured);
}
