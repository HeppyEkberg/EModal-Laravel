app.addComponent('elicit-modal', function () {
    var $this = $(this);

    function init() {
        setupEvents();
    }

    function setupEvents() {
        $(document).on('LADDA_MODAL', visaModal);
        $(document).on('STANG_MODAL', stangModal);
    }

    function visaModal(event, data) {
        $this.html(data);
        $this.modal();
        $this.find('.close-modal').on('click', stangModal);
        $(document).trigger('MODAL_READY', $this);
        $(document).trigger('DOM_MODIFIED', $this);
    }

    function stangModal(event, data) {
        $this.modal('hide');
    }

    init();
});
