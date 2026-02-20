  const hamburger = document.getElementById("hamburger");
  const navbar = document.getElementById("navbar");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
  });
const modeToggleBtn = document.querySelector(".mode-toggle-btn");
modeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode"); 
  const icon = modeToggleBtn.querySelector("i");
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
});

// Select input and search icon
const searchInput = document.querySelector(".search-box input");
const searchIcon = document.querySelector(".search-box .search-icon");

// Add click event on search icon
searchIcon.addEventListener("click", () => {
    const query = searchInput.value.toLowerCase().trim(); 
    const sections = document.querySelectorAll("section"); 
    let found = false;

    sections.forEach(section => {
        const sectionId = section.id.toLowerCase();
        if (sectionId.includes(query)) {
            // Scroll to section
            section.scrollIntoView({ behavior: "smooth" });

            // Highlight briefly
            section.style.border = "3px solid var(--secondary-color)";
            setTimeout(() => {
                section.style.border = "";
            }, 2000);

            found = true;
        }
    });

    if (!found) {
        alert("No matching section found!");
    }
});

// JS
document.getElementById("search-icon").addEventListener("click", function() {
    const query = document.getElementById("search-input").value.toLowerCase().trim();
    if (!query) return;

    // Select all sections
    const sections = document.querySelectorAll("section, #about, #projects, #skills-section, #education-section, #experience-section, #contact, #achievements");

    const navbarHeight = document.getElementById("header").offsetHeight;
    let found = false;

    sections.forEach(section => {
        const sectionName = section.id.toLowerCase();
        if (sectionName.includes(query)) {
            const top = section.getBoundingClientRect().top + window.scrollY - navbarHeight - 10;
            window.scrollTo({ top: top, behavior: "smooth" });

            
            section.style.outline = "3px solid var(--secondary-color)";
            setTimeout(() => section.style.outline = "", 2000);

            found = true;
        }
    });

    if (!found) {
        alert("Section not found!");
    }
});


