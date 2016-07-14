"use strict";
var Beer = (function () {
    function Beer() {
        this.brand = '';
        this.name = '';
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvYmVlcnMvYmVlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7SUFBQTtRQUlDLFVBQUssR0FBVSxFQUFFLENBQUM7UUFDbEIsU0FBSSxHQUFVLEVBQUUsQ0FBQztRQUNqQixnQkFBVyxHQUFVLEVBQUUsQ0FBQztRQUN4QixlQUFVLEdBQVEsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUM3Qix1QkFBa0IsR0FBVSxDQUFDLENBQUM7UUFDOUIscUJBQWdCLEdBQVMsQ0FBQyxDQUFDO0lBSzVCLENBQUM7SUFIQSwyQkFBWSxHQUFaLFVBQWEsVUFBa0I7UUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDOUIsQ0FBQztJQUNGLFdBQUM7QUFBRCxDQWRBLEFBY0MsSUFBQTtBQWRZLFlBQUksT0FjaEIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL2JlZXJzL2JlZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQmVlciB7XG5cdGlkOiBudW1iZXI7XG5cdHVzZXJfaWQ6IG51bWJlcjtcblx0c2Vzc2lvbl9pZDogbnVtYmVyO1xuXHRicmFuZDogc3RyaW5nPSAnJztcblx0bmFtZTogc3RyaW5nPSAnJztcblx0dW5pcXVlX2NvZGU6IHN0cmluZz0gJyc7XG5cdGNyZWF0ZWRfYXQ6IERhdGU9IG5ldyBEYXRlKCk7XG5cdHRhc3RpbmdfaW5fcHJvY2VzczogbnVtYmVyPSAwO1xuXHR0YXN0aW5nX2NvbXBsZXRlOiBudW1iZXI9MDtcblx0ZXJyb3I6IFN0cmluZztcblx0c2V0U2Vzc2lvbklkKHNlc3Npb25faWQ6IG51bWJlcikge1xuXHRcdHRoaXMuc2Vzc2lvbl9pZCA9IHNlc3Npb25faWQ7XG5cdH1cbn1cbiJdfQ==
