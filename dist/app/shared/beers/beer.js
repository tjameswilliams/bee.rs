"use strict";
var Beer = (function () {
    function Beer() {
        this.brand = '';
        this.name = '';
        this.type = '';
        this.unique_code = '';
        this.created_at = new Date();
        this.tasting_in_process = 0;
        this.tasting_complete = 0;
    }
    Beer.prototype.setSessionId = function (session_id) {
        this.session_id = session_id;
    };
    return Beer;
}());
exports.Beer = Beer;
