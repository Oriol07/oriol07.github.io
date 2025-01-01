// lyrics-selection.js

function attachTagFilterListeners() {
    const tagLinks = document.querySelectorAll('.vertical-menu-tags a');
    const gameBoxes = document.querySelectorAll('.tag-system');

    function filterSongs(selectedTag) {
       
        if (selectedTag === 'AllSongs') {
            gameBoxes.forEach(box => (box.style.display = 'grid'));
            return;
        }

        gameBoxes.forEach(box => {
            if (box.classList.contains(selectedTag)) {
                box.style.display = 'grid';
            } else {
                
                box.style.display = 'none';
            }
        });
    }

    tagLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            
            tagLinks.forEach(link => link.classList.remove('active'));
            link.classList.add('active');

            const selectedTag = link.getAttribute('href');
            filterSongs(selectedTag);
        });
    });
}

function toggleMenuLyrics() {
    const menu = document.querySelector('.vertical-menu-tags');
    menu.classList.toggle('active');
  }