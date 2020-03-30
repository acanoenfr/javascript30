function onClicked(color) {
    navigator.permissions
        .query({ name: "clipboard-write" })
        .then(result => { 
            if (result.state == "granted" || result.state == "prompt") {
                navigator.clipboard
                    .writeText(color)
                    .then(() => {
                        let cbCopy = document.getElementById('cbCopy');
                        cbCopy.style = 'background-color: ' + color + '; display: initial;'
                        setTimeout(function() {
                            cbCopy.style = '';
                        }, 1000);
                    });
            }
        });
}
