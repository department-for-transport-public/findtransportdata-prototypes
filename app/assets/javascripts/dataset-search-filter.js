    const debounce = (cb) => {
        if (timeOutId) clearTimeout(timeOutId)
        timeOutId = setTimeout(() => cb(), 500);
    }

    var searchFilterElements = document.getElementsByClassName("filter-input")
    let timeOutId = null;

    for (let searchFilterElement of searchFilterElements) {
        searchFilterElement.addEventListener("input", function(event) {
            var searchInputValue = event.target.value.toUpperCase();
            var parentDiv = event.target.parentElement.parentElement;
            var checkboxElements = parentDiv.nextElementSibling.getElementsByClassName("govuk-checkboxes__item");

            if (searchFilterElement.hasAttribute('aria-describedby')) searchFilterElement.removeAttribute('aria-describedby')
            debounce(() => {
                let ids = []

                for (checkBoxs of checkboxElements) {
                    ids.push(checkBoxs.firstElementChild.id)
                }
                searchFilterElement.setAttribute('aria-describedby', ids.join(' '))
            })

            for (checkBox of checkboxElements) {
                var checkBoxText = checkBox.textContent || checkBox.innerText;

                if (checkBoxText.toUpperCase().indexOf(searchInputValue) > -1) {
                    checkBox.style.display = "";
                } else {
                    checkBox.style.display = "none";
                }
            }

        });
    }