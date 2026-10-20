const search = document.querySelector(".search");
const searchInput = document.querySelector(".search input");
const searchToggle = document.querySelector(".search-toggle");

searchToggle.addEventListener("click", () => {
    if (!search.classList.contains("open")) {
        search.classList.add("open");
        searchInput.focus();
    } else {
        const termo = searchInput.value.trim();

        if (termo !== "") {
            pesquisarSite(termo);
        }
    }
});

function pesquisarSite(termo) {
    console.log("Pesquisar por:", termo);
}