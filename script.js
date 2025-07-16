const sectors = [
  {
    name: 'Residential Buildings',
    icon: 'fa-house-chimney',
    img: 'images/img_1.webp',
  },
  {
    name: 'Commercial Complexes',
    icon: 'fa-building',
    img: 'images/img_2.jpg',
  },
  {
    name: 'Industrial Plants & Warehouses',
    icon: 'fa-industry',
    img: 'images/img_3.jpg',
  },
  {
    name: 'Transportation (Roads, Highways, Bridges)',
    icon: 'fa-road',
    img: 'images/img_4.webp',
  },
  {
    name: 'Railway Infrastructure',
    icon: 'fa-train',
    img: 'images/img_5.webp',
  },
  {
    name: 'Airports',
    icon: 'fa-plane-departure',
    img: 'images/img_14.jpg',
  },
  {
    name: 'Seaports & Harbors',
    icon: 'fa-anchor',
    img: 'images/img_6.jpg',
  },
  {
    name: 'Dams & Irrigation Systems',
    icon: 'fa-water',
    img: 'images/img_7.webp',
  },
  {
    name: 'Urban Development Projects',
    icon: 'fa-city',
    img: 'images/img_8.webp',
  },
  {
    name: 'Energy Infrastructure (Power Plants, Grids)',
    icon: 'fa-bolt',
    img: 'images/img_9.webp',
  },
  {
    name: 'Smart Cities',
    icon: 'fa-microchip',
    img: 'images/img_10.jpg',
  },
  {
    name: 'Educational Institutions',
    icon: 'fa-graduation-cap',
    img: 'images/img_11.webp',
  },
  {
    name: 'Healthcare Facilities',
    icon: 'fa-hospital',
    img: 'images/img_12.jpg',
  },
  {
    name: 'Recreational & Sports Complexes',
    icon: 'fa-futbol',
    img: 'images/img_13.webp',
  },
];

const container = document.querySelector('.sections-container');

sectors.forEach((sector, idx) => {
  const section = document.createElement('div');
  section.className = 'sector-section';

  section.innerHTML = `
    <h2><i class="fa-solid ${sector.icon}"></i> ${sector.name}</h2>
    <button class="sector-btn"><i class="fa-regular fa-image"></i> View Image</button>
    <div class="sector-image"><img src="${sector.img}" alt="${sector.name}"></div>
  `;

  const btn = section.querySelector('.sector-btn');
  const imgDiv = section.querySelector('.sector-image');

  btn.addEventListener('click', () => {
    // Toggle this section's image
    const isVisible = imgDiv.style.display === 'block';
    // Hide all other images
    document.querySelectorAll('.sector-image').forEach(div => div.style.display = 'none');
    if (!isVisible) {
      imgDiv.style.display = 'block';
    } else {
      imgDiv.style.display = 'none';
    }
  });

  container.appendChild(section);
}); 