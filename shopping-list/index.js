const list = $('ul');

function addListItem() {
   $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    const listItem = $('#shopping-list-entry').val();
    $('#shopping-list-entry').val('');
    $('.shopping-list').append(
      `<li>
        <span class="shopping-item">${listItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
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
