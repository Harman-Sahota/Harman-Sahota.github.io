const container = document.querySelector('.container');

function generateMasonryGrid(columns, posts){

    container.innerHTML = '';
    
    let columnWrappers = {};

    for(let i = 0; i < columns; i++){
        columnWrappers[`column${i}`] = [];
    }

    for(let i = 0; i < posts.length; i++){
        const column = i % columns;
        columnWrappers[`column${column}`].push(posts[i]);
    }

    for(let i = 0; i < columns; i++){
        let columnPosts = columnWrappers[`column${i}`];
        let div = document.createElement('div');
        div.classList.add('column');

        columnPosts.forEach(post => {
            let postDiv = document.createElement('div');
            postDiv.classList.add('post');
            postDiv.classList.add('fade');
            postDiv.style.borderRadius = '16px';
            let image = document.createElement('img');
            image.src = post.image;
            image.style.borderRadius = '16px';
            image.classList.add('animations');
           
    
            
            postDiv.append(image)
            div.appendChild(postDiv) 
        });
        container.appendChild(div);
    }
}

let previousScreenSize = window.innerWidth;

window.addEventListener('resize', () => {
    imageIndex = 0;
    if(window.innerWidth < 600 && previousScreenSize >= 600){
        generateMasonryGrid(1, posts);
    }else if(window.innerWidth >= 600 && window.innerWidth < 1000 && (previousScreenSize < 600 || previousScreenSize >= 1000)){
        generateMasonryGrid(2, posts);

    }else if(window.innerWidth >= 1000 && previousScreenSize < 1000){
        generateMasonryGrid(4, posts)
    }
    previousScreenSize = window.innerWidth;

})

if(previousScreenSize < 600){
    generateMasonryGrid(1, posts)
}else if(previousScreenSize >= 600 && previousScreenSize < 1000){
    generateMasonryGrid(2, posts)
}else{
    generateMasonryGrid(4, posts)
}

const cards = document.querySelectorAll('.post');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      entry.target.classList.remove('fade-out');
    } else {
      entry.target.classList.add('fade-out');
      entry.target.classList.remove('fade-in');
    }
  });
});

cards.forEach((card) => {
  observer.observe(card);
});