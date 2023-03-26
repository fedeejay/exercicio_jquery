$(document).ready(function() {
    const form = $('#task-form');
    const list = $('#task-list');

    form.submit(function(event) {
        event.preventDefault();
        const taskName = $('#task-name').val().trim();
        if (taskName !== '') {
            const taskItem = $('<li>').text(taskName);
            list.append(taskItem);
            $('#task-name').val('');
        }
    });

    list.on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
