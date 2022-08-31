import { test, expect } from '@playwright/test';

import { HomePage } from '../pages/home-page';

test('User can login and logout', async ({ page }) => {
    const homepage = new HomePage(page);
    

  });