var modalOpen = function () {
    var $this = $(this);

    function init() {
        setupEvents();
    }

    function setupEvents() {
        $this.on('click', visaModal);
    }

    function visaModal(element) {
        element.preventDefault();
        var $url = $(this).prop('href');
        $.get($url, function(resultat) {
            $(document).trigger('LADDA_MODAL', resultat);
        })
    }

    init();
};


app.addComponent('modal-open', modalOpen);

$(document).on('DOM_MODIFIED', function(event, container) {
    app.addComponent('modal-open', modalOpen, container);
});
