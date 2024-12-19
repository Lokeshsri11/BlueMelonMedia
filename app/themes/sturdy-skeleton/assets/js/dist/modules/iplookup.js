jQuery(document).ready(function() {

    jQuery('#lookup-form').submit(function(e) {
        e.preventDefault();

        jQuery.ajax({
            url: '/wp-admin/admin-ajax.php',
            data: {
                action: 'ip_lookup',
                hostname: jQuery('#hostname').val(),
            },
            type: 'POST',
            success: function(a, b, c) {
                jQuery('#lookup-result').text(a);
            }
        });
    });
});