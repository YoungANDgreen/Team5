const newResFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#review-title').value.trim();
  const description = document
    .querySelector('#review-description')
    .value.trim();
  const service = document.querySelector('#review-service').value.trim();
  const taste = document.querySelector('#review-taste').value.trim();
  const quality = document.querySelector('#review-quality').value.trim();
  const restaurant = document.querySelector('#restaurantFilter').value.trim();

  if (title && description && service && taste && quality && restaurant) {
    const response = await fetch('/api/reviews', {
      method: 'POST',
      body: JSON.stringify({
        title,
        description,
        service,
        taste,
        quality,
        restaurant_id: restaurant,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.new-review-form')
  .addEventListener('submit', newResFormHandler);
