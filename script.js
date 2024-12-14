document.querySelectorAll('.country').forEach(country => {
    country.addEventListener('mouseover', function() {
        const countryName = this.getAttribute('data-name');
        // const countryInfo = document.getElementById('country-info');
        // const countryNameElement = document.getElementById('country-name');
        
        countryNameElement.textContent = countryName;
        countryInfo.style.display = 'block';
    });

    country.addEventListener('mouseout', function() {
        const countryInfo = document.getElementById('country-info');
        countryInfo.style.display = 'none';
    });
});