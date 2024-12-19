var km = {};

km.el = {};
km.el.options = null;
km.el.columnCountMenu = null;
km.el.inputs = null;
km.el.plusses = null;
km.el.results = null;
km.el.response = null;
km.el.responseCount = null;

km.isLocked = false;

jQuery(document).ready(function() {
    jQuery('#km_action').click(km.action);
    km.el.columnCountMenu = jQuery('#km_columnCountMenu a').click(km.columnCountSelected);
    jQuery('#km_lock').click(km.lockSelected).mouseout(km.lockOut).mouseover(km.lockOver);
    km.el.inputs = jQuery('#km_inputs textarea').keyup(km.calculateCount);
    km.el.options = jQuery('#km_options li').click(km.optionSelected).mouseout(km.optionOut).mouseover(km.optionOver);
    km.el.plusses = jQuery('#km_plusses li').click(km.plusSelected).mouseout(km.plusOut).mouseover(km.plusOver);
    km.el.response = jQuery('#km_response');
    km.el.responseCount = jQuery('#km_responseCount');
    km.el.results = jQuery('#km_results').click(function() {
        jQuery(this).select();
    });
});

km.action = function() {
    jQuery(this).blur();
    km.el.response.fadeOut();
    var inputs = [];
    var plusses = [];
    km.el.inputs.filter(':visible').each(function(index) {
        var value = jQuery.trim(jQuery(this).val());
        plusses.push(km.el.plusses.filter(':eq(' + index + ')').attr('data-selected') ? 1 : 0);
        if (value != '') {
            inputs.push(value);
        }
    });

    if (inputs.length > 0) {
        jQuery('#km_actionContainer').hide();
        jQuery('#km_loadr').fadeIn();

        var options = [];
        km.el.options.filter('[data-selected]').each(function() {
            options.push(jQuery(this).attr('data-value'));
        });

        var data = {
            inputs: inputs,
            options: options,
            plusses: plusses,
            action: 'mix_keywords_now',
        };

        jQuery.ajax({
            data: data,
            dataType: 'json',
            success: km.actionResponse,
            type: 'post',
            url: keywordmixer.ajaxurl
        });
    }
};

km.actionResponse = function(response) {
    var count = 0;
    var value = '';
    if (km.isLocked) {
        count = km.el.responseCount.text() * 1;
        value = km.el.results.val() + '\n';
    }
    km.el.responseCount.text(count + response.count);
    km.el.results.val(value + response.data);
    km.el.response.fadeIn(function() {
        jQuery('#km_actionContainer').fadeIn();
        jQuery('#km_loadr').hide();
        km.el.results.css('height', km.el.results[0].scrollHeight + 20 + 'px');
        km.el.results.select();
    });
};

km.calculateCount = function() {
    var inputsLength = 0;
    var totalCount = 1;
    km.el.inputs.each(function() {
        var val = jQuery(this).val();
        var arr = val.split('\n');
        arr = km.isOption('uniq') ? km.uniqueArray(arr) : arr;

        var length = km.cleanArray(arr).length;
        totalCount *= length ? length : 1;
        inputsLength += val.length;
    });
    totalCount = inputsLength ? totalCount : 0;
    var count = 0;

    if (totalCount) {
        count = (km.isOption('nqot') || !(km.isOption('quot') || km.isOption('brkt'))) ? totalCount : 0;
        count = km.isOption('quot') ? count + totalCount : count;
        count = km.isOption('brkt') ? count + totalCount : count;
    }

    jQuery('#km_count').text(count);
};

km.cleanArray = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (jQuery.trim(arr[i]) == '') {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
};

km.columnCountSelected = function() {
    km.el.columnCountMenu.removeClass('km_columnCountSelected');
    var selectedCount = jQuery(this).addClass('km_columnCountSelected').text();
    km.el.inputs.filter(':lt(' + selectedCount + ')').fadeIn();
    km.el.plusses.filter(':lt(' + selectedCount + ')').fadeIn();
    km.el.inputs.filter(':gt(' + (selectedCount - 1) + ')').fadeOut();
    km.el.plusses.filter(':gt(' + (selectedCount - 1) + ')').fadeOut();
    return false;
};

km.lockSelected = function() {
    if (jQuery(this).attr('data-selected')) {
        jQuery(this).removeAttr('data-selected').addClass('km_transparent');
        km.isLocked = false;
    } else {
        jQuery(this).removeClass('km_transparent').attr('data-selected', 'true');
        km.isLocked = true;
    }
};

km.lockOut = function() {
    if (!jQuery(this).attr('data-selected')) jQuery(this).addClass('km_transparent');
};

km.lockOver = function() {
    if (!jQuery(this).attr('data-selected')) jQuery(this).removeClass('km_transparent');
};

km.isOption = function(name) {
    return (km.el.options.filter('[data-value=' + name + '][data-selected]').length == 1);
};

km.optionSelected = function() {
    if (jQuery(this).attr('data-selected')) jQuery(this).addClass('km_optionUnselected').removeAttr('data-selected').removeClass('km_optionSelected');
    else jQuery(this).addClass('km_optionSelected').attr('data-selected', 'true').removeClass('km_optionUnselected');
    if (jQuery(this).attr('data-value')) km.calculateCount();
};

km.optionOut = function() {
    if (!jQuery(this).attr('data-selected')) jQuery(this).addClass('km_optionUnselected').removeClass('km_optionSelected');
};

km.optionOver = function() {
    if (!jQuery(this).attr('data-selected')) jQuery(this).addClass('km_optionSelected').removeClass('km_optionUnselected');
};

km.plusSelected = function() {
    if (jQuery(this).attr('data-selected')) jQuery(this).addClass('km_plusUnselected').removeAttr('data-selected').removeClass('km_plusSelected');
    else jQuery(this).addClass('km_plusSelected').attr('data-selected', 'true').removeClass('km_plusUnselected');
};

km.plusOut = function() {
    if (!jQuery(this).attr('data-selected')) jQuery(this).addClass('km_plusUnselected').removeClass('km_plusSelected');
};

km.plusOver = function() {
    if (!jQuery(this).attr('data-selected')) jQuery(this).addClass('km_plusSelected').removeClass('km_plusUnselected');
};

km.uniqueArray = function(arr) {
    var a = [];
    var l = arr.length;
    for (var i = 0; i < l; i++) {
        for (var j = i + 1; j < l; j++) {
            if (arr[i] === arr[j]) {
                j = ++i;
            }
        }
        a.push(arr[i]);
    }
    return a;
};