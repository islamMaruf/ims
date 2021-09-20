class Notification {
    // alert, success, error, warning, info
    success(message = 'Successfully Done') {
        this.handelNoty('success', message)
    }

    alert(message = 'Are you sure ?') {
        this.handelNoty('alert', message)
    }

    error(message = 'Something Went Wrong') {
        this.handelNoty('error', message)
    }

    warning(message = 'Opps Wrong') {
        this.handelNoty('warning', message)
    }

    info(message = 'Welcome') {
        this.handelNoty('info', message)
    }

    handelNoty(type, text) {
        new Noty({
            type: type,
            layout: 'topRight',
            text: text,
            timeout: '1000'
        }).show();

    }

}

export default new Notification();
