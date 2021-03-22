var Cookielaw = {

    createCookie: function (name, value, days) {
        var date = new Date(),
            expires = '';
        if (days) {
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        } else {
            expires = "";
        }
        document.cookie = name + "=" + value + expires + "; path=/; Secure;"
    },

    createCookielawCookie: function () {
        this.createCookie('cookielaw_accepted', '1', 1 * 365);

        if (typeof (window.jQuery) === 'function') {
            jQuery('#CookielawBanner').hide();
            $('div.modal-backdrop.fade.in').remove()
        } else {
            document.getElementById('CookielawBanner').style.display = 'none';
        }
    }

};
