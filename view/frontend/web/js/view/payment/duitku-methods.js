/*browser:true*/
/*global define*/
define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (Component, rendererList) {
        'use strict';
        rendererList.push(
              {
                 type: 'duitku_linkajafixedepay',
                 component: 'Duitku_Linkajafixed/js/view/payment/method-renderer/duitku-epay-method'
             }
        );
        /** Add view logic here if needed */
        return Component.extend({});
    }
);