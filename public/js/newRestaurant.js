const newResFormHandler = async (event) => {
  event.preventDefault();

  const resName = document.querySelector('#restaurant-name').value.trim();
  const resAddress = document.querySelector('#restaurant-address').value.trim();

  if (resName && resAddress) {
    const response = await fetch('/api/restaurant/test', {
      method: 'POST',
      body: JSON.stringify({ resName, resAddress }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
      console.log("okay");
    } else {
        console.log("nokay");
      alert(response.statusText);
    }
  }
};


document
  .querySelector('.new-project-form')
  .addEventListener('submit', newResFormHandler);
