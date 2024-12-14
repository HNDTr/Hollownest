document.querySelectorAll('.region').forEach(region => {
    region.addEventListener('mouseover', function() {
        const regionName = this.getAttribute('data-name');
        const regionInfo = document.querySelector('#region-info');
        const regionNameElement = document.querySelector('#region-name');
        
        regionNameElement.textContent = regionName;
        regionInfo.style.display = 'block';
    });

    region.addEventListener('mouseout', function() {
        const regionInfo = document.querySelector('#region-info');
        regionInfo.style.display = 'none';
    });
});