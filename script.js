const artists = [
  {
    name: "Leonardo da Vinci",
    image: "images/leonardo.jpeg",
    page: "artists/leonardo.html",
    role: "Italian Renaissance Polymath"
  },
  {
    name: "Vincent van Gogh",
    image: "images/vincentvangogh.jpg",
    page: "artists/vangogh.html",
    role: "Dutch Post-Impressionist"
  },
  {
    name: "Edvard Munch",
    image: "images/edwardmunch.png",
    page: "artists/munch.html",
    role: "Norwegian Expressionist"
  },
  {
    name: "Michelangelo",
    image: "images/michelangelo.jpg",
    page: "artists/michelangelo.html",
    role: "Italian Sculptor & Painter"
  },
  {
    name: "Pablo Picasso",
    image: "images/pablo.jpeg",
    page: "artists/picasso.html",
    role: "Spanish Cubist Master"
  },
  {
    name: "Andy Warhol",
    image: "images/andywarhol.jpeg",
    page: "artists/warhol.html",
    role: "American Pop Artist"
  },
  {
    name: "Claude Monet",
    image: "images/monet.jpeg",
    page: "artists/monet.html",
    role: "French Impressionist"
  },
  {
    name: "Rembrandt van Rijn",
    image: "images/rijn.jpeg",
    page: "artists/rijn.html",
    role: "Dutch Golden Age Painter"
  },
  {
    name: "Gustav Klimt",
    image: "images/gustav.jpeg",
    page: "artists/gustav.html",
    role: "Austrian Symbolist"
  },
  {
    name: "Frida Kahlo",
    image: "images/kahlo.jpeg",
    page: "artists/kahlo.html",
    role: "Mexican Painter"
  },
  {
    name: "Henri Matisse",
    image: "images/matisse.jpg",
    page: "artists/matisse.html",
    role: "French Visual Artist"
  }
];

const grid = document.getElementById("artistGrid");
const searchBar = document.getElementById("searchBar");
const toggleCheckbox = document.getElementById("toggleMode");

function renderArtists(filter = "") {
  grid.innerHTML = "";
  artists
    .filter(a => a.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach(artist => {
      const card = document.createElement("div");
      card.className = "artist-card";
      card.innerHTML = `
        <img src="${artist.image}" alt="${artist.name}">
        <h3>${artist.name}</h3>
        <p class="artist-role">${artist.role}</p>
      `;
      card.onclick = () => window.location.href = artist.page;
      grid.appendChild(card);
    });
}

// Load theme from localStorage
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggleCheckbox.checked = true;
}

// Toggle and save theme
toggleCheckbox.addEventListener("change", () => {
  if (toggleCheckbox.checked) {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
});

searchBar.addEventListener("input", e => renderArtists(e.target.value));

renderArtists();
