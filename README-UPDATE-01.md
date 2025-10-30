
# AURA — Update 01 (Catalog, Search, Cart, Brands, 404)

**Added**
- `components/common/breadcrumbs.twig`
- `components/common/pagination.twig`
- `components/home/brands.twig`
- `pages/catalog.twig`
- `pages/search.twig`
- `pages/cart.twig`
- `pages/404.twig`
- CSS patch: `assets/css/aura-update-01.css` (merge into your main CSS or include additionally)

**How to apply**
1. Upload these files to the same paths in your repo.
2. EITHER paste CSS into `assets/css/aura.css` OR include it in `layouts/master.twig`:
   ```twig
   <link rel="stylesheet" href="{ asset('assets/css/aura-update-01.css') }">
   ```
3. Refresh your Salla preview.

— Generated 2025-10-30T20:12:45.650279
