const posts = []

const images = [
    'https://i.pinimg.com/564x/6b/3a/28/6b3a28afe669d735c65a8ac3e2923a52.jpg',
    'https://i.pinimg.com/564x/00/84/c0/0084c06513a583f03fd289ef8ac02a74.jpg',
    'https://i.pinimg.com/564x/5c/f4/52/5cf452169460d7738c79c82e537b6655.jpg',
    'https://i.pinimg.com/originals/45/27/39/4527395c340797e6d5a9f4520daebadc.gif',
    'https://i.pinimg.com/564x/8f/ef/d4/8fefd40a6758ecc16eaf492df2c8cf32.jpg',
    'https://i.pinimg.com/564x/39/f4/5d/39f45d8196e61bd9becb12fa85374fcf.jpg',
    'https://i.pinimg.com/564x/21/20/70/2120705acb91d6ce25c3a4cc4b52f69a.jpg',
    'https://i.pinimg.com/564x/e7/2f/19/e72f19a5f673393918229180f4ed533c.jpg',
    'https://i.pinimg.com/564x/d3/22/cf/d322cfb920d4dbf9f168fc7ea3f9fb87.jpg',
    'https://i.pinimg.com/564x/c1/74/a1/c174a1844318ffc2b3c35fadd559425c.jpg',
    'https://i.pinimg.com/564x/5a/7b/53/5a7b5396dd5afc97419537e01092f076.jpg',
    'https://i.pinimg.com/originals/72/a0/08/72a008230dcb06101b20a56272b862fd.gif'
    
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