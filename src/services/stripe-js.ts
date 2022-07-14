import { loadStripe } from '@stripe/stripe-js';

export async function getStripeJs() {
  const stripeJs = await loadStripe(
    'pk_test_51LKom2HlnBfXe1UcunrdsZzbdYSpdgkyAh2Cn7kMO3tmrsJ2LvBLpYJ0SdalwHlOvPVO3Kn7ZT9Vyj5Jo6s0cdnJ003ChtGkQR'
  );

  return stripeJs;
}
