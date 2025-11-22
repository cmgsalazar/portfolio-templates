let activeFilters = new Set();

function toggleTag(tagElement, tag) {
    tagElement.classList.toggle("active");
    if (activeFilters.has(tag)) {
        activeFilters.delete(tag);
    } else {
        activeFilters.add(tag);
    }
    filterItems();
}

function filterItems() {
    const items = document.querySelectorAll(".item");
    items.forEach(item => {
        const tags = item.querySelectorAll(".tag");
        const itemTags = Array.from(tags).map(tag => tag.textContent.toLowerCase());
        const shouldShow = activeFilters.size === 0 || itemTags.some(tag => activeFilters.has(tag));
        item.style.display = shouldShow ? "block" : "none";
    });
}

// mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("show");
});

// close menu when clicking outside
document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
        nav.classList.remove("show");
    }
});