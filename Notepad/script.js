document.addEventListener('DOMContentLoaded', function() {
    const noteTextarea = document.getElementById('note');
    const saveButton = document.getElementById('save');
    const clearButton = document.getElementById('clear');

    // Load text from localStorage if available
    const savedNote = localStorage.getItem('savedNote');
    if (savedNote) {
        noteTextarea.value = savedNote;
    }

    saveButton.addEventListener('click', function() {
        const noteText = noteTextarea.value;
        localStorage.setItem('savedNote', noteText);
    });

    clearButton.addEventListener('click', function() {
        noteTextarea.value = '';
        localStorage.removeItem('savedNote');
    });
});
