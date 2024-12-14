document.querySelectorAll('.region').forEach(region => {
    region.addEventListener('mouseover', function() {
        const regionName = this.getAttribute('data-name');
        const regionInfo = document.querySelector('#region-info');
        const regionNameElement = document.querySelector('#region-name');
        const regionColor = this.getAttribute('color');
        
        // // fill the region with it color
        this.style.fill = regionColor;
        // show the region name
        regionNameElement.textContent = regionName;
        regionInfo.style.display = 'block';
    });

    region.addEventListener('mouseout', function() {
        const regionInfo = document.querySelector('#region-info');
        regionInfo.style.display = 'none';
        if (!this.classList.contains('selected')) {  // Don't reset the color if selected
            this.style.fill = '';  // Reset the color
        }
    });

    
    region.addEventListener('click', function() {
        // Get the section info related to the clicked region
        const regionSectionInfo = document.querySelector(`#${region.id}-Info`);
        hideSections(regionSectionInfo);
        
        if (regionSectionInfo) {
            // Toggle visibility of the section info
            const isHidden = !regionSectionInfo.style.display || regionSectionInfo.style.display === 'none';
            regionSectionInfo.style.display = isHidden ? 'block' : 'none';
        }

        // Deselect all regions first
        document.querySelectorAll('.region').forEach(otherRegion => {
            if (otherRegion !== this) {
                otherRegion.classList.remove('selected');  // Remove 'selected' class
                otherRegion.style.fill = '';  // Reset color for unselected regions
            }
        });

        // Toggle selected state for the current region
        if (this.classList.contains('selected')) {
            this.classList.remove('selected');
            this.style.fill = '';  // Reset color if unselected
        } else {
            this.classList.add('selected');
            const regionColor = this.getAttribute('color');
            this.style.fill = regionColor;  // Set the color on click
        }
    });
});

function hideSections(currentSection){
    document.querySelectorAll('.info-section').forEach(section => {
        if (section.id !== currentSection.id){
            section.style.display = 'none';
        }
    })
}



