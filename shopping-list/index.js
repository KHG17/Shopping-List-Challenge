const list = $('ul');

function addListItem() {
    $('#submitButton').on('click', event => {
        event.preventDefault();
        let listItemName = $('#shopping-list-entry').val();
        if (listItemName) {
            let newListItem = `
            <li>
            <span class="shopping-item">${listItemName}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
            </li>`;
            $('.shopping-list').prepend(newListItem);
            $('#shopping-list-entry').val('');
        }
    });
}

function deleteListItem() {
    list.on('click', event => {
        event.preventDefault();
        if (event.target.closest('button').className === 'shopping-item-delete') {
            //console.log(event.target);
            event.target.closest('li').remove();
        }
    });
}

function checkListItem() {
    list.on('click', event => {
        event.preventDefault();
        let clickTarget = event.target.closest('li');
        if (event.target.closest('button').className === 'shopping-item-toggle') {
            $(clickTarget.firstChild.nextSibling).toggleClass('shopping-item__checked');
        }
    });
}

$(addListItem);
$(deleteListItem);
$(checkListItem);