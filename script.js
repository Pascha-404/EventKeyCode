const insert = document.querySelector('#insert')

window.addEventListener('keydown', (event) => {
    insert.innerHTML = `
    <div class="key">
            ${event.key === ' ' ? 'Space' : event.key}
            <small>key</small>
        </div>

        <div class="key">
            ${event.code}
            <small>code</small>
        </div>
        <div class="key">
            ${event.keyCode}
            <small>keyCode</small>
        </div>`
})