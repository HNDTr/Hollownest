document.querySelectorAll('.region').forEach(region => {
    region.addEventListener('mouseover', function() {
        const regionName = this.getAttribute('data-name');
        const regionInfo = document.querySelector('#region-info');
        const regionNameElement = document.querySelector('#region-name');
        const regionColor = this.getAttribute('color');
        
        // fill the region with it color
        this.style.fill = regionColor;

        // show the region name
        regionNameElement.textContent = regionName;
        regionInfo.style.display = 'block';
    });

    region.addEventListener('mouseout', function() {
        const regionInfo = document.querySelector('#region-info');
        regionInfo.style.display = 'none';
        this.style.fill = '';
    });

    region.addEventListener('click', function(){
        const regionSectionInfo = document.querySelector(`#${region.id}-Info`);
        hideSections(regionSectionInfo);
        if (regionSectionInfo) {
            // Check if the section is hidden or not, including unset styles
            const isHidden = !regionSectionInfo.style.display || regionSectionInfo.style.display === 'none';
            regionSectionInfo.style.display = isHidden ? 'block' : 'none';
        }
    }) 
});

function hideSections(currentSection){
    document.querySelectorAll('.info-section').forEach(section => {
        if (section.id !== currentSection.id){
            section.style.display = 'none';
        }
    })
}



