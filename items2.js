const posts = []

const images = [

    'https://open.spotify.com/embed/track/4VsP4Dm8gsibRxB5I2hEkw?utm_source=generator',
   'https://open.spotify.com/embed/track/3UhmuWcFaLS3AO3kI9ynQ2?utm_source=generator',
   'https://open.spotify.com/embed/track/36cqlmc53NqlEUqPJdgUOx?utm_source=generator' ,
   'https://open.spotify.com/embed/track/3D0pmiK3zyF9PudyJ8mkor?utm_source=generator" ',
   'https://open.spotify.com/embed/track/1qrAgbcxQpeaDv4ptgjl9e?utm_source=generator',
   'https://open.spotify.com/embed/track/7AsG1F1eMWd17RYan8M3Wm?utm_source=generator&theme=0' ,
   'https://open.spotify.com/embed/track/6TClJ8jXi3OBV7gcrU3jx5?utm_source=generator' ,
   'https://open.spotify.com/embed/track/1RT06dWvxSC13JY6WnQmb5?utm_source=generator',
  'https://open.spotify.com/embed/track/455OjhLhU9JCNYKKoUOFwr?utm_source=generator' ,
  'https://open.spotify.com/embed/track/60YICjIPdL7LDBcCMK0tAk?utm_source=generator',
  'https://open.spotify.com/embed/track/4faDlXyZMSxEuxBdd5gDIz?utm_source=generator&theme=0' ,
  'https://open.spotify.com/embed/track/5eGsHi6RcL33gb9k89UYaB?utm_source=generator'
    
]

let imageIndex = 0;

for(let i = 1; i <= 12; i++){
    let item = {
        id: i,
        title: `Image ${i}`,
        date: `${i < 10 ? 0 : ''}${i}/10/2021 `,
        image: images[imageIndex]
    }
    posts.push(item);
    imageIndex++;
    if (imageIndex > images.length - 1) imageIndex = 0;
}

console.log(posts)