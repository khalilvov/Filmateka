window.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("#film-js"),
        form = document.querySelector("#film-js"),
        message = document.querySelector("#message-js"),
        title = document.querySelector("#input-title-js"),
        genre = document.querySelector("#input-genre-js"),
        year = document.querySelector("#input-year-js"),
        addButton = document.querySelector("#add-js");

    const film = {
        title: null,
        genre: undefined,
        year: null
    }

    const CheckValue = () => {
        if (
            title?.value.trim() === "" ||
            genre?.value.trim() === "" ||
            year?.value.trim() === ""
        ) {
            addButton.disabled = true
            CheckFields([title, genre, year], message, true)
        } else {
            addButton.disabled = false
            CheckFields([title, genre, year], message, false)
        }
    }

    const CheckFields = (array = [], container, status = true) => {
        array.forEach(input => {
            if (input?.value.trim() === "" && status) {
                input.style.border = `1px solid red`
                container.classList.add("error")
                container.textContent = `Заполните поле`
            } else {
                input.style.border = ""
                container.classList.remove("error")
                container.textContent = ``
            }
        })
    }

    CheckValue();

    title.addEventListener("input", (e) => {
        const value = e.target.value;

        film.title = value;

        CheckValue()
    })

    genre.addEventListener("input", (e) => {
        const value = e.target.value;

        film.genre = value;

        CheckValue()
    })

    year.addEventListener("input", e => {
        const value = Number(e.target.value);

        film.year = isNaN(value) ? (e.target.value = "") : value;

        CheckValue()
    })

    addButton.addEventListener("click", () => {
        container.insertAdjacentHTML("beforeend", `
            <div class="card mb-20">
                <h4 class="title-4">${film.title}</h4>
                <div class="badge">${film.genre}</div>
                <div class="badge">${film.year}</div>
            </div>
        `)

        title.value = ""
        genre.value = ""
        year.value = ""
    });


});