const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#review-title').value.trim();
  const description = document
    .querySelector('#review-description')
    .value.trim();
  const service = document.querySelector('#review-service').value.trim();
  const taste = document.querySelector('#review-taste').value.trim();
  const quality = document.querySelector('#review-quality').value.trim();
  const restaurant = document.querySelector('#restaurantFilter').value.trim();


};
