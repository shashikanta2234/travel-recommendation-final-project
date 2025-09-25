const recommendations = [
    {
        type: 'Beach',
        name: 'Bali, Indonesia',
        images: ['images/beach1.jpg', 'images/beach2.jpg'],
        description: 'Relax on the serene beaches of Bali and enjoy tropical sunsets.'
    },
    {
        type: 'Temple',
        name: 'Angkor Wat, Cambodia',
        images: ['images/temple1.jpg', 'images/temple2.jpg'],
        description: 'Explore the magnificent ancient temples of Angkor Wat.'
    },
    {
        type: 'Country',
        name: 'Italy',
        images: ['images/country1.jpg', 'images/country2.jpg'],
        description: 'Experience the rich culture, cuisine, and landscapes of Italy.'
    }
];

const recommendationsSection = document.getElementById('recommendations');

recommendations.forEach(dest => {
    const card = document.createElement('div');
    card.classList.add('destination-card');
    
    card.innerHTML = `
        <h3>${dest.type}: ${dest.name}</h3>
        <p>${dest.description}</p>
        <img src="${dest.images[0]}" alt="${dest.name} image 1">
        <img src="${dest.images[1]}" alt="${dest.name} image 2">
    `;

    recommendationsSection.appendChild(card);
});
